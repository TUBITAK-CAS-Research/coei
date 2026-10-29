/* Edit workshop dates, agenda, organizers and confirmed speakers here.
   Plain JavaScript keeps this site build-free and directly usable on GitHub Pages.
   Unconfirmed speaker details should be explicitly marked “To be announced”. */
window.COEI_CONTENT = {
  organizers: [
    { name: 'Huseyin Arslan', affiliation: 'Istanbul Medipol University', role: 'General Chair' },
    { name: 'Shuai Wang', affiliation: 'SIAT, Chinese Academy of Sciences', role: 'Program Chair' },
    { name: 'Gürkan Orduluoglu', affiliation: 'Huawei Türkiye', role: 'Workshop Co-Chairs' },
    { name: 'He Li', affiliation: 'University of Macau', role: 'Workshop Co-Chairs' },
    { name: 'Ibrahim Hokelek', affiliation: 'Tubitak Bilgem', role: 'Workshop Co-Chairs' },
    { name: 'Mert İsmail', affiliation: 'Istanbul Medipol University', role: 'Workshop Co-Chairs' },
    { name: 'Xibin Jin', affiliation: 'South China University of Technology', role: 'Workshop Co-Chairs' },
    { name: 'Aaiza Hamid', affiliation: 'Istanbul Medipol University', role: 'Conference Secretary' },
    { name: 'Burak Gökay', affiliation: 'Istanbul Medipol University', role: 'Conference Secretary' },
    { name: 'Jawair Yaseen', affiliation: 'Istanbul Medipol University', role: 'Conference Secretary' },
    { name: 'Jiahui He', affiliation: 'SIAT, Chinese Academy of Sciences', role: 'Conference Secretary' }
  ],
  welcomeSpeakers: [
    {
      "name": "Prof. Miaowen Wen",
      "affiliation": "South China University of Technology",
      "photo": "assets/people/miaowen-wen.jpg"
    }
  ],
  keynoteSpeakers: [
    {
      "name": "Prof. Chengzhong Xu",
      "affiliation": "University of Macau",
      "photo": "assets/people/chengzhong-xu.jpg"
    },
    {
      "name": "Prof. Huseyin Arslan",
      "affiliation": "Istanbul Medipol University",
      "photo": "assets/people/huseyin-arslan.jpg"
    },
    {
      "name": "Prof. Kejiang Ye",
      "affiliation": "SIAT, Chinese Academy of Sciences",
      "photo": "assets/people/kejiang-ye.jpg"
    }
  ],
  invitedSpeakers: [
    {
      "name": "Prof. Shuai Wang",
      "affiliation": "SIAT, Chinese Academy of Sciences",
      "photo": "assets/people/shuai-wang.jpg"
    },
    {
      "name": "Prof. Xinliang Wei",
      "affiliation": "SIAT, Chinese Academy of Sciences",
      "photo": "assets/people/xinliang-wei.jpg"
    },
    {
      "name": "Dr. Doğan Dalva",
      "affiliation": "Huawei Türkiye",
      "photo": "assets/people/dogan-dalva-btu.jpg",
      "photoCrop": "poster-portrait",
      "photoSource": "https://mdbf.btu.edu.tr/tr/elektrik/duyuru/detay/33978/konuşma-ile-duygu-durum-analizi-yöntemleri"
    },
    {
      "name": "İbrahim Hökelek",
      "affiliation": "TÜBİTAK BİLGEM",
      "photo": "assets/people/ibrahim-hokelek.jpg",
      "note": "Research presentations · Monday, TÜBİTAK visit"
    }
  ],
  program: [
    { id: 'oct30', weekday: 'Friday', date: 'October 30', title: 'Arrival & Medipol visit', sessions: [
      ['Morning', 'Arrival and rest'],
      ['Afternoon', 'Visit to Medipol University — Campus and laboratory visit, with research project demos'],
      ['Evening', 'Welcome dinner']
    ] },
    { id: 'oct31', weekday: 'Saturday', date: 'October 31', title: 'Main program', sessions: [
      ['08:00–08:30', 'Coffee Break'],
      ['09:00–09:30', 'Welcome Remarks — Prof. Huseyin Arslan'],
      ['09:30–10:00', 'Keynote 1 (Online) — Prof. Chengzhong Xu'],
      ['10:00–10:15', 'Break'],
      ['10:15–11:00', 'Keynote 2 — Prof. Huseyin Arslan'],
      ['11:00–12:00', 'Invited Talk 1 — Prof. Shuai Wang'],
      ['12:00–12:30', 'Lunch'],
      ['13:00–14:00', 'Keynote 3 — Prof. Kejiang Ye'],
      ['14:00–15:00', 'Invited Talk 2 — Prof. Xinliang Wei'],
      ['15:00–15:15', 'Coffee Break'],
      ['15:15–16:00', 'Invited Talk 3 — Dr. Doğan Dalva']
    ] },
    { id: 'nov01', weekday: 'Sunday', date: 'November 1', title: 'City tour & lunch', sessions: [
      ['Morning', 'City Tour & Get-Together — IMU and SIAT'],
      ['Noon', 'Lunch together']
    ] },
    { id: 'nov02', weekday: 'Monday', date: 'November 2', title: 'Technical visits', sessions: [
      ['Morning', 'Visit to Huawei Türkiye'],
      ['Noon', 'Lunch'],
      ['Afternoon', 'Visit to TÜBİTAK — Research presentations with İbrahim Hökelek and tours of the ATAM and HISAR laboratories']
    ] }
  ]
};
