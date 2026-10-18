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
      "name": "Prof. Chengzhong Xu",
      "affiliation": "University of Macau",
      "photo": "assets/people/chengzhong-xu.jpg",
      "note": "Online Sharing"
    }
  ],
  keynoteSpeakers: [
    {
      "name": "Prof. Huseyin Arslan",
      "affiliation": "Istanbul Medipol University",
      "photo": "assets/people/huseyin-arslan.jpg"
    },
    {
      "name": "Prof. Kejiang Ye",
      "affiliation": "SIAT, Chinese Academy of Sciences",
      "photo": "assets/people/kejiang-ye.jpg"
    },
    {
      "name": "Prof. Miaowen Wen",
      "affiliation": "South China University of Technology",
      "photo": "assets/people/miaowen-wen.jpg"
    }
  ],
  invitedSpeakers: [
    {
      "name": "Ibrahim Hokelek",
      "affiliation": "Tubitak Bilgem",
      "photo": "assets/people/ibrahim-hokelek.jpg"
    },
    {
      "name": "Prof. Shuai Wang",
      "affiliation": "SIAT, Chinese Academy of Sciences",
      "photo": "assets/people/shuai-wang.jpg"
    },
    {
      "name": "Prof. Xinliang Wei",
      "affiliation": "SIAT, Chinese Academy of Sciences",
      "photo": "assets/people/xinliang-wei.jpg"
    }
  ],
  program: [
    { id: 'oct30', weekday: 'Friday', date: 'October 30', title: 'Welcome dinner', sessions: [
      ['Evening', 'Welcome dinner']
    ] },
    { id: 'oct31', weekday: 'Saturday', date: 'October 31', title: 'Main program · Day 1', sessions: [
      ['Morning', 'Welcome Remark — Prof. Huseyin Arslan'],
      ['Morning', 'Online Sharing — Prof. Chengzhong Xu'],
      ['Morning', 'Keynote 1 — Prof. Huseyin Arslan · Approx. 1 hour'],
      ['Morning', 'Invited Talk 1 — Prof. Shuai Wang · Approx. 1 hour'],
      ['Noon', 'Lunch'],
      ['Afternoon', 'Keynote 2 — Prof. Kejiang Ye · Approx. 1 hour'],
      ['Afternoon', 'Invited Talk 2 — Prof. Xinliang Wei · Approx. 1 hour']
    ] },
    { id: 'nov01', weekday: 'Sunday', date: 'November 1', title: 'Main program · Day 2', sessions: [
      ['Morning', 'Keynote 3 — Prof. Miaowen Wen · Approx. 1 hour'],
      ['Morning', 'Invited Talk 3 — Ibrahim Hokelek · Approx. 1 hour'],
      ['Noon', 'Lunch'],
      ['Afternoon', 'Visit Istanbul Medipol University']
    ] },
    { id: 'nov02', weekday: 'Monday', date: 'November 2', title: 'Technical visits', sessions: [
      ['Morning', 'Visit to Huawei Türkiye'],
      ['Noon', 'Lunch'],
      ['Afternoon', 'Visit to TÜBİTAK']
    ] }
  ]
};
