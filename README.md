# 🎉 EventSphere

EventSphere is a modern, responsive **Event Management Web Application** built as part of the **Frontend Development Internship (Week 4)**.  
It allows users to browse upcoming events, view event details, RSVP/register for events via a modal form, and contact the organizers.

---

## 📌 Features

### ✅ Core Pages
- **Home Page** – Highlights featured events (6 shown).
- **Events Page** – Displays all 12 curated events in a searchable/filterable grid.
- **Event Detail Page** – Dedicated event pages with:
  - Event banner/cover image
  - Date, time, venue, and description
  - Embedded Google Map for location
  - RSVP / Register button (opens custom modal form)
  - Back-to-top button
  - Go Back button to return to the previous page
- **Contact Page** – Form with Name, Email, and Message fields (demo mode stores submissions locally).

### 🎨 Styling
- Fully responsive (mobile-first, grid-based layout).
- Sticky/fixed navigation header with blur and gradient background.
- Gradient-styled cards, buttons, and interactive hover effects.
- Back-to-top floating button with smooth scrolling.
- RSVP Modal with background blur effect.

### 🖼️ Event Data
- **12 events** (TechFest, Music Night, Design Summit, Startup Meetup, etc.)
- Each event has:
  - Title, description, tags
  - Date & time
  - Venue & city
  - Cover image (stored in `assets/img/events/`)

### ⚡ Interactivity
- **Search bar** filters events by name, venue, tags, or description.
- **RSVP Modal** with local storage (demo only).
- **Contact Form** with local storage (demo only).
- **Social Links** (Twitter, Instagram, LinkedIn) open external sites.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (no frameworks)
- **Responsive Design**: CSS Grid, Flexbox, Media Queries
- **Local Storage**: Demo handling for RSVP and Contact forms
- **Deployment**: Works on GitHub Pages or Netlify (static hosting)

---

## 📂 Project Structure

```
eventsphere/
│
├── index.html           # Home Page
├── events.html          # Upcoming Events
├── event.html           # Event Details
├── contact.html         # Contact Page
│
├── assets/
│   ├── css/
│   │   └── styles.css   # Main stylesheet
│   ├── js/
│   │   └── app.js       # Event logic, RSVP modal, search, etc.
│   └── img/
│       └── events/      # Event cover images
│
└── README.md
```

---



## 🚀 Demo Functionality

- **RSVP Form**
  - Opens as a modal on each Event page.
  - Collects Name, Email, and Message.
  - Stores submission in browser `localStorage` (`eventsphere_rsvps`).

- **Contact Form**
  - Collects Name, Email, and Message.
  - Stores submission in browser `localStorage` (`eventsphere_contacts`).

*(Both can be connected to a real backend or Google Form later.)*

---


## 👨‍💻 Author

Developed by **Abdullah Iftikhar**  
Frontend Development Internship – Week 4 Project  

- 🌐 [GitHub] https://github.com/A-iftikhar02
- 💼 [LinkedIn] https://www.linkedin.com/in/abdullah-iftikhar-a67986322/
---

## 📄 License

This project is licensed for educational/demo purposes only.  
You’re free to explore, learn, and extend it. 🚀
