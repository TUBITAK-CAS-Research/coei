(() => {
  'use strict';
  const section = document.querySelector('#gallery');
  if (!section) return;
  const links = [...section.querySelectorAll('.gallery-photo')];
  const viewer = document.querySelector('#gallery-viewer');
  const image = viewer.querySelector('#gallery-viewer-image');
  const previous = viewer.querySelector('.gallery-prev');
  const next = viewer.querySelector('.gallery-next');
  const visible = links;
  let current = 0;
  let opener = null;

  function show(index) {
    current = (index + visible.length) % visible.length;
    const link = visible[current];
    image.alt = link.dataset.caption;
    image.src = link.href;
    viewer.querySelector('#gallery-viewer-title').textContent = link.dataset.caption;
    const description = viewer.querySelector('#gallery-viewer-description');
    description.textContent = link.dataset.description || '';
    description.hidden = !description.textContent;
    viewer.querySelector('#gallery-viewer-day').textContent = link.dataset.dayLabel;
    viewer.querySelector('#gallery-viewer-count').textContent = `${current + 1} / ${visible.length}`;
    viewer.querySelector('#gallery-original').href = link.href;
    previous.hidden = next.hidden = visible.length < 2;
  }
  links.forEach(link => link.addEventListener('click', event => {
    // Without native dialog support, the regular link opens the original photo.
    if (typeof viewer.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    show(visible.indexOf(link));
    viewer.showModal();
    document.body.classList.add('gallery-is-open');
  }));
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  viewer.querySelector('.gallery-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const box = viewer.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close();
  });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('gallery-is-open');
    image.removeAttribute('src');
    if (opener) opener.focus({ preventScroll: true });
  });
})();
