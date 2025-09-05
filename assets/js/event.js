(function(){
  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Same 12 events (ids must match app.js)
  const EVENTS = [
    { id:"techfest-2025", name:"TechFest 2025", datetime:"2025-09-15T10:00:00", venue:"San Francisco Convention Center", address:"747 Howard St, San Francisco, CA 94103, USA", city:"San Francisco", description:"Annual technology festival featuring startups, AI talks, and networking.", fullDescription:"TechFest 2025 brings together innovators across AI, robotics, and cloud. Expect hands-on demos, startup pitches, and expert panels.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"music-vibes-night", name:"Music Vibes Night", datetime:"2025-09-25T20:00:00", venue:"Madison Square Garden", address:"4 Pennsylvania Plaza, New York, NY 10001, USA", city:"New York", description:"A live concert night with global artists and DJs.", fullDescription:"A celebration of sound with headlining artists, immersive light shows, and a dance floor that never stops. Doors open at 7:00 PM.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"design-summit-lahore", name:"Design Summit Lahore", datetime:"2025-10-05T09:30:00", venue:"Expo Centre Lahore", address:"Abdul Haque Rd, Johar Town, Lahore, Pakistan", city:"Lahore", description:"Design systems, UX case studies, and networking.", fullDescription:"Hear from leading designers about real-world case studies in product design, accessibility, and design ops. Workshops and portfolio reviews included.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"startup-meetup-islamabad", name:"Startup Meetup Islamabad", datetime:"2025-10-12T17:30:00", venue:"National Incubation Center", address:"Nastp Campus, Islamabad, Pakistan", city:"Islamabad", description:"Founders & investors mingling with lightning talks.", fullDescription:"Connect with founders, mentors, and investors. 5-minute lightning talks followed by an open networking session and snacks.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"food-carnival-karachi", name:"Food Carnival Karachi", datetime:"2025-09-29T12:00:00", venue:"Beach View Park", address:"Clifton, Karachi, Pakistan", city:"Karachi", description:"Street food, live cooking stations, and family fun.", fullDescription:"Taste the city’s best in one place with a curated line-up of vendors, cooking contests, and kid-friendly zones.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"art-expo-dubai", name:"Art Expo Dubai", datetime:"2025-09-18T11:00:00", venue:"Dubai World Trade Centre", address:"Sheikh Zayed Rd, Dubai, UAE", city:"Dubai", description:"International art exhibition with galleries from 40+ countries.", fullDescription:"Discover modern and contemporary art, meet curators, and join artist talks. Guided tours every two hours.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"code-camp-berlin", name:"Code Camp Berlin", datetime:"2025-09-20T09:00:00", venue:"Station Berlin", address:"Luckenwalder Str. 4-6, 10963 Berlin, Germany", city:"Berlin", description:"Hands-on coding workshops and cloud-native talks.", fullDescription:"From containers to serverless, learn modern development with live labs and mentors on site.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"film-festival-toronto", name:"Film Festival Toronto", datetime:"2025-09-22T18:00:00", venue:"TIFF Bell Lightbox", address:"350 King St W, Toronto, ON, Canada", city:"Toronto", description:"Premieres, panels, and filmmaker Q&A sessions.", fullDescription:"A week-long showcase of international cinema with special screenings and director sessions.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"book-fair-london", name:"London Book Fair", datetime:"2025-10-02T10:00:00", venue:"Olympia London", address:"Hammersmith Rd, London W14 8UX, UK", city:"London", description:"Publishers, indie authors, and live readings.", fullDescription:"Discover new titles, meet publishers, and attend author interviews and workshops.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"gaming-con-tokyo", name:"Gaming Con Tokyo", datetime:"2025-10-08T11:00:00", venue:"Makuhari Messe", address:"2-1 Nakase, Mihama Ward, Chiba, Japan", city:"Tokyo", description:"Esports finals, indie showcases, and cosplay.", fullDescription:"The ultimate gaming weekend with tournaments, reveals, and a massive cosplay parade.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"wellness-retreat-bali", name:"Bali Wellness Retreat", datetime:"2025-09-27T07:30:00", venue:"Ubud Retreat Center", address:"Ubud, Gianyar Regency, Bali, Indonesia", city:"Bali", description:"Yoga, mindfulness, and nutrition workshops.", fullDescription:"Unplug and recharge with daily yoga, mindful hikes, and chef-led nutrition classes.", image:"assets/img/placeholder.svg", rsvp:"#"},
    { id:"green-tech-summit-sydney", name:"GreenTech Summit Sydney", datetime:"2025-10-15T09:30:00", venue:"ICC Sydney", address:"14 Darling Dr, Sydney NSW 2000, Australia", city:"Sydney", description:"Sustainability innovations and climate tech.", fullDescription:"Startups and enterprises showcase solutions for a cleaner future with keynotes and panels.", image:"assets/img/placeholder.svg", rsvp:"#"}
  ];

  // Get id from query string
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  if(!id){
    document.querySelector('.detail-grid').innerHTML = '<p style="color:#f99">Invalid event link.</p>';
    return;
  }

  const ev = EVENTS.find(e => e.id === id);
  if(!ev){
    document.querySelector('.detail-grid').innerHTML = '<p style="color:#f99">Event not found.</p>';
    return;
  }

  // Fill content
  document.getElementById('title').textContent = ev.name;
  document.getElementById('pageTitle').textContent = ev.name + ' — Event Details';
  document.getElementById('banner').style.backgroundImage = `url('${ev.image || 'assets/img/placeholder.svg'}')`;

  const dt = new Date(ev.datetime || ev.date);
  const meta = `${dt.toLocaleString(undefined, { dateStyle:'full', timeStyle:'short' })} · ${ev.venue}`;
  document.getElementById('meta').textContent = meta;

  document.getElementById('desc').textContent = ev.fullDescription || ev.description || '';

  const q = encodeURIComponent(ev.address || ev.venue || ev.city || ev.name);
  document.getElementById('map').src = `https://www.google.com/maps?q=${q}&output=embed`;

  document.getElementById('rsvp').href = ev.rsvp || '#';
})();
