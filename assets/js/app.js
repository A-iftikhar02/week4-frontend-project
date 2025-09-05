// detect page
const PAGE = document.body.dataset.page; // "home" | "events" | "event"

// 12 events (with images) — keep your existing EVENTS array
const EVENTS = [
  {
    id: "techfest-2025",
    name: "TechFest 2025",
    datetime: "2025-09-15T10:00:00",
    venue: "San Francisco Convention Center",
    city: "San Francisco",
    description: "Annual technology festival featuring startups, AI talks, and networking.",
    image: "assets/img/events/techfest.jpg",
    tags: ["tech","startups","ai"]
  },
  {
    id: "music-vibes-night",
    name: "Music Vibes Night",
    datetime: "2025-09-25T20:00:00",
    venue: "Madison Square Garden, New York",
    city: "New York",
    description: "A live concert night with global artists and DJs.",
    image: "assets/img/events/music-vibes.jpg",
    tags: ["music","concert","live"]
  },
  {
    id: "design-summit-lahore",
    name: "Design Summit Lahore",
    datetime: "2025-10-05T09:30:00",
    venue: "Expo Centre Lahore",
    city: "Lahore",
    description: "Design systems, UX case studies, and networking.",
    image: "assets/img/events/design-summit.jpg",
    tags: ["design","ux","workshop"]
  },
  {
    id: "startup-meetup-islamabad",
    name: "Startup Meetup Islamabad",
    datetime: "2025-10-12T17:30:00",
    venue: "National Incubation Center",
    city: "Islamabad",
    description: "Founders & investors mingling with lightning talks.",
    image: "assets/img/events/startup-meetup.jpg",
    tags: ["startups","networking"]
  },
  {
    id: "food-carnival-karachi",
    name: "Food Carnival Karachi",
    datetime: "2025-09-29T12:00:00",
    venue: "Beach View Park",
    city: "Karachi",
    description: "Street food, live cooking stations, and family fun.",
    image: "assets/img/events/food-carnival.jpg",
    tags: ["food","family","outdoor"]
  },
  {
    id: "art-expo-dubai",
    name: "Art Expo Dubai",
    datetime: "2025-09-18T11:00:00",
    venue: "Dubai World Trade Centre",
    city: "Dubai",
    description: "International art exhibition with galleries from 40+ countries.",
    image: "assets/img/events/art-expo.jpg",
    tags: ["art","exhibition","gallery"]
  },
  {
    id: "code-camp-berlin",
    name: "Code Camp Berlin",
    datetime: "2025-09-20T09:00:00",
    venue: "Station Berlin",
    city: "Berlin",
    description: "Hands-on coding workshops and cloud-native talks.",
    image: "assets/img/events/code-camp.jpg",
    tags: ["tech","workshop","cloud"]
  },
  {
    id: "film-festival-toronto",
    name: "Film Festival Toronto",
    datetime: "2025-09-22T18:00:00",
    venue: "TIFF Bell Lightbox",
    city: "Toronto",
    description: "Premieres, panels, and filmmaker Q&A sessions.",
    image: "assets/img/events/film-festival.jpg",
    tags: ["film","premiere","culture"]
  },
  {
    id: "book-fair-london",
    name: "London Book Fair",
    datetime: "2025-10-02T10:00:00",
    venue: "Olympia London",
    city: "London",
    description: "Publishers, indie authors, and live readings.",
    image: "assets/img/events/book-fair.jpg",
    tags: ["books","literature","expo"]
  },
  {
    id: "gaming-con-tokyo",
    name: "Gaming Con Tokyo",
    datetime: "2025-10-08T11:00:00",
    venue: "Makuhari Messe",
    city: "Tokyo",
    description: "Esports finals, indie showcases, and cosplay.",
    image: "assets/img/events/gaming-con.jpg",
    tags: ["gaming","esports","expo"]
  },
  {
    id: "wellness-retreat-bali",
    name: "Bali Wellness Retreat",
    datetime: "2025-09-27T07:30:00",
    venue: "Ubud Retreat Center",
    city: "Bali",
    description: "Yoga, mindfulness, and nutrition workshops.",
    image: "assets/img/events/wellness-retreat.jpg",
    tags: ["wellness","health","retreat"]
  },
  {
    id: "green-tech-summit-sydney",
    name: "GreenTech Summit Sydney",
    datetime: "2025-10-15T09:30:00",
    venue: "ICC Sydney",
    city: "Sydney",
    description: "Sustainability innovations and climate tech.",
    image: "assets/img/events/green-tech.jpg",
    tags: ["sustainability","tech","summit"]
  }
];

const grid = document.getElementById('eventsGrid');
const input = document.getElementById('searchInput');
const btn = document.getElementById('searchBtn');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// ---- Back-to-top button ----
const toTopBtn = document.getElementById('toTop');
if (toTopBtn){
  const toggleToTop = () => {
    toTopBtn.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', toggleToTop, { passive: true });
  toggleToTop();

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


function placeholder(){
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%237c5cff'/%3E%3Cstop offset='100%25' stop-color='%2300e0ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%230b1020'/%3E%3Crect x='30' y='30' width='1140' height='615' rx='28' fill='url(%23g)' opacity='0.25'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Segoe UI, Roboto, Arial' font-size='48' fill='%23ffffff' opacity='0.9'%3EEvent Image%3C/text%3E%3C/svg%3E";
}

function card(ev){
  const dt = new Date(ev.datetime || ev.date);
  const meta = dt.toLocaleString(undefined,{dateStyle:'medium', timeStyle:'short'}) + " · " + ev.venue;
  const bg = ev.image || placeholder();
  return `
    <article class="event-card" aria-label="${ev.name}">
      <div class="card-media" style="background-image:url('${bg}')"></div>
      <div class="card-body">
        <div class="card-title">${ev.name}</div>
        <div class="card-meta">${meta}</div>
        <p class="card-desc">${ev.description}</p>
        <div class="card-actions">
          <a class="link" href="event.html?id=${encodeURIComponent(ev.id)}">Learn More →</a>
        </div>
      </div>
    </article>`;
}

function render(list, limit){
  const items = (limit ? list.slice(0, limit) : list).map(card).join('');
  grid && (grid.innerHTML = items || '<p style="color:#c9d1d9">No events found.</p>');
}

function doSearch(){
  const q = (input?.value || '').trim().toLowerCase();
  const filtered = !q ? EVENTS : EVENTS.filter(ev =>
    [ev.name, ev.venue, ev.description, ev.city, (ev.tags||[]).join(' ')].filter(Boolean)
      .some(s => s.toLowerCase().includes(q))
  );
  render(filtered, PAGE === 'home' ? 6 : undefined);
}

// -------- Event Detail page support --------
function byId(...ids){
  for (const id of ids){
    const el = document.getElementById(id);
    if (el) return el;
  }
  return null;
}

function initEventDetail(){
  // Hide modal on load
  document.getElementById('rsvpOverlay')?.setAttribute('hidden','');
  document.documentElement.classList.remove('modal-open');

  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const ev = EVENTS.find(e => e.id === id);
  const container = byId('detailRoot') || document.body;

  if (!ev){
    const target = byId('banner') || byId('title') || byId('eventTitle') || container;
    if (target){
      target.innerHTML = '<p style="color:#f99">Event not found.</p>';
    }
    return;
  }

  // Fill page details
  document.title = `${ev.name} — EventSphere`;

  const banner = byId('banner');
  if (banner){
    banner.style.backgroundImage = `url('${ev.image || placeholder()}')`;
  }

  const titleEl = byId('eventTitle','title');
  const metaEl  = byId('eventMeta','meta');
  const descEl  = byId('eventDesc','desc');

  if (titleEl) titleEl.textContent = ev.name;
  if (metaEl){
    const dt = new Date(ev.datetime || ev.date);
    metaEl.textContent = dt.toLocaleString(undefined, { dateStyle:'full', timeStyle:'short' }) +
                         ` · ${ev.venue}`;
  }
  if (descEl) descEl.textContent = ev.description;

  const map = byId('map');
  if (map){
    const q = encodeURIComponent(`${ev.venue}, ${ev.city}`);
    map.src = `https://www.google.com/maps?q=${q}&output=embed`;
  }

  // RSVP modal
  const rsvpBtn = byId('rsvp');
  if (rsvpBtn){
    rsvpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openRSVP(ev);
    });
  }

  function openRSVP(ev){
    const overlay = byId('rsvpOverlay');
    const title   = byId('rsvpTitle');
    const name    = byId('rsvpName');
    const email   = byId('rsvpEmail');
    const msg     = byId('rsvpMsg');
    const form    = byId('rsvpForm');

    if (!overlay || !form) return;

    if (title) title.textContent = `RSVP — ${ev.name}`;
    if (name)  name.value = '';
    if (email) email.value = '';
    if (msg)   msg.value = '';

    overlay.removeAttribute('hidden');
    document.documentElement.classList.add('modal-open');

    const onClose = () => closeRSVP();
    byId('rsvpClose')?.addEventListener('click', onClose, { once:true });
    byId('rsvpCancel')?.addEventListener('click', onClose, { once:true });
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeRSVP(); }, { once:true });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const payload = {
        eventId: ev.id,
        eventName: ev.name,
        name: (name?.value || '').trim(),
        email: (email?.value || '').trim(),
        message: (msg?.value || '').trim(),
        ts: new Date().toISOString()
      };

      if (!payload.name || !payload.email){
        alert('Please enter your name and email.');
        return;
      }

      // Store locally (demo only)
      const KEY = 'eventsphere_rsvps';
      const existing = JSON.parse(localStorage.getItem(KEY) || '[]');
      existing.push(payload);
      localStorage.setItem(KEY, JSON.stringify(existing));

      alert('Thanks! Your RSVP has been recorded.');
      closeRSVP();
    }, { once:true });
  }

  function closeRSVP(){
    byId('rsvpOverlay')?.setAttribute('hidden', '');
    document.documentElement.classList.remove('modal-open');
  }
}

// -------- init per page --------
if (PAGE === 'home' || PAGE === 'events'){
  render(EVENTS, PAGE === 'home' ? 6 : undefined);
  input?.addEventListener('input', doSearch);
  btn?.addEventListener('click', doSearch);
} else if (PAGE === 'event'){
  initEventDetail();
}

// ---- Fake Social placeholders (footer) ----
(function initSocialPlaceholders(){
  const links = document.querySelectorAll('.social-link[data-social]');
  if (!links.length) return;

  const brand = 'EventSphere';
  const styles = `
    body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;background:#0b1020;color:#e6edf3}
    .bar{position:sticky;top:0;background:linear-gradient(180deg,rgba(16,18,30,.9),rgba(16,18,30,.7));padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.08)}
    .wrap{max-width:900px;margin:0 auto;padding:26px}
    .badge{display:inline-block;width:34px;height:34px;border-radius:10px;
           background:linear-gradient(135deg,#7c5cff,#00e0ff);margin-right:10px;vertical-align:middle}
    h1{margin:0;font-size:22px;display:inline-block;vertical-align:middle}
    .card{margin-top:22px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(255,255,255,.04);padding:18px}
    .muted{color:#a8b3bc}
    .btn{display:inline-block;margin-top:14px;padding:10px 14px;border-radius:10px;
         background:linear-gradient(135deg,#7c5cff,#00e0ff);color:#0a0d18;font-weight:700;text-decoration:none}
  `;

  function openDemo(app){
    const pretty = app[0].toUpperCase() + app.slice(1);
    const win = window.open('', '_blank', 'noopener');
    if (!win) return; // popup blocked

    win.document.title = `${pretty} — ${brand} (Demo)`;
    win.document.body.innerHTML = `
      <style>${styles}</style>
      <div class="bar"><span class="badge"></span><h1>${brand} on ${pretty}</h1></div>
      <div class="wrap">
        <div class="card">
          <p>This is a <strong>demo placeholder</strong> for the ${pretty} profile.</p>
          <p class="muted">In a production build, link this to your real ${pretty} page.</p>
          <a class="btn" href="https://${app}.com" target="_blank" rel="noopener">Open ${pretty} Website</a>
        </div>
      </div>
    `;
  }

  links.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const app = a.dataset.social; // "twitter" | "instagram" | "linkedin"
      openDemo(app);
    });
  });
})();

// --- Contact form (demo handler) ---
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const name = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const msg = document.getElementById('contactMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
      name: (name?.value || '').trim(),
      email: (email?.value || '').trim(),
      message: (msg?.value || '').trim(),
      ts: new Date().toISOString(),
    };

    if (!payload.name || !payload.email) {
      alert('Please enter your name and a valid email.');
      return;
    }

    // Demo: store locally (swap for a real endpoint later)
    const KEY = 'eventsphere_contacts';
    const existing = JSON.parse(localStorage.getItem(KEY) || '[]');
    existing.push(payload);
    localStorage.setItem(KEY, JSON.stringify(existing));

    alert('Thanks! Your message has been sent (demo).');
    form.reset();
  });
})();

