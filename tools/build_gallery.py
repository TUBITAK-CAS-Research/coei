"""Rebuild static gallery HTML and small previews; original JPEGs stay unchanged.
Run from any directory: python3 tools/build_gallery.py [--photos SOURCE_DIRECTORY]
Requires Pillow. After the first build, omitted --photos reuses bundled originals.
"""
import argparse,html,json,shutil
from pathlib import Path
from PIL import Image,ImageOps
p=argparse.ArgumentParser();p.add_argument('--photos',type=Path);args=p.parse_args()
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'gallery-data.json').read_text())
originals=root/'assets/gallery/originals';thumbs=root/'assets/gallery/previews'
originals.mkdir(parents=True,exist_ok=True);thumbs.mkdir(parents=True,exist_ok=True)
esc=html.escape;days={d['id']:d for d in data['days']};cards={};ratios={}
for photo in data['photos']:
    name=photo['file'];dest=originals/name
    if args.photos and not photo.get("source"):shutil.copy2(args.photos/name,dest)
    with Image.open(dest) as opened:
        im=ImageOps.exif_transpose(opened).convert('RGB');w,h=im.size
        im.thumbnail((1920,1920) if photo['id'] in ('coei','president') else (960,960));im.save(thumbs/(photo['id']+'.webp'),'WEBP',quality=85)
    day=days.get(photo['day']);label=(day['date']+' · '+day['title']) if day else 'Workshop highlights'
    ratios[photo['id']]=w/h
    cards[photo['id']]=f'''          <figure class="gallery-card" style="--photo-ratio:{w}/{h}">
            <a class="gallery-photo" href="assets/gallery/originals/{esc(name)}" data-caption="{esc(photo['caption'])}" data-description="{esc(photo.get('description',''))}" data-day-label="{esc(label)}" aria-label="View photo: {esc(photo['caption'])}">
              <img src="assets/gallery/previews/{esc(photo['id'])}.webp" alt="{esc(photo['caption'])}" width="{w}" height="{h}" loading="lazy" decoding="async">
              <span class="gallery-zoom" aria-hidden="true">↗</span>
            </a>
            <figcaption><span class="gallery-photo-title">{esc(photo['caption'])}</span></figcaption>
          </figure>'''
groups=data['sections']
flat=[pid for group in groups for row in group['rows'] for pid in row]
if sorted(flat)!=sorted(cards):raise ValueError('Sections must contain every photo exactly once')
group_html=[]
for group in groups:
    row_html=[]
    for row in group['rows']:
        columns=' '.join(f'minmax(0,{ratios[pid]:.8f}fr)' for pid in row)
        row_html.append('<div class="gallery-row'+(' gallery-row-featured' if len(row)==1 else '')+'" style="grid-template-columns:'+columns+'">'+ '\n'.join(cards[pid] for pid in row)+'</div>')
    group_html.append('<section class="gallery-group" aria-labelledby="gallery-'+esc(group['id'])+'-title"><h3 id="gallery-'+esc(group['id'])+'-title" class="gallery-group-title">'+esc(group['title'])+'</h3><div class="gallery-group-rows">'+'\n'.join(row_html)+'</div></section>')
section='''    <!-- COEI GALLERY START -->
    <section id="gallery" class="section gallery-section" aria-labelledby="gallery-title">
      <div class="wrap">
        <div class="section-heading gallery-heading">
          <div><p class="eyebrow">CoEI 2026 in pictures</p><h2 id="gallery-title">Photo Gallery</h2></div>
        </div>
        <div id="gallery-grid" class="gallery-grid">
'''+ '\n'.join(group_html)+'''
        </div>
      </div>
    </section>
    <dialog id="gallery-viewer" class="gallery-viewer" aria-labelledby="gallery-viewer-title">
      <div class="gallery-viewer-top"><span id="gallery-viewer-count" aria-live="polite"></span><button type="button" class="gallery-close" aria-label="Close photo viewer" autofocus>✕</button></div>
      <div class="gallery-viewer-stage"><button type="button" class="gallery-prev" aria-label="Previous photo">‹</button><img id="gallery-viewer-image" alt=""><button type="button" class="gallery-next" aria-label="Next photo">›</button></div>
      <div class="gallery-viewer-bottom"><div><p id="gallery-viewer-day"></p><h3 id="gallery-viewer-title"></h3><p id="gallery-viewer-description" hidden></p></div><a id="gallery-original" target="_blank" rel="noopener">Open original ↗</a></div>
    </dialog>
    <!-- COEI GALLERY END -->'''
page=root/'index.html';text=page.read_text()
start='    <!-- COEI GALLERY START -->';end='    <!-- COEI GALLERY END -->'
if start in text:
    before,rest=text.split(start,1);_,after=rest.split(end,1);text=before+section+after
else:text=text.replace('    <section id="speakers"',section+'\n\n    <section id="speakers"',1)
page.write_text(text)
print(f'Built {len(cards)} gallery photos; originals preserved.')
