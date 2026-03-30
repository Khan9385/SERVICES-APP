const providers = [
  {
    id: 1,
    name: "Ali Raza Paint Works",
    category: "Painter",
    city: "Lahore",
    rating: 4.9,
    reviews: 128,
    price: 12000,
    experience: "9 years",
    response: "20 mins",
    availability: "Available today",
    specialties: ["Interior paint", "Texture walls", "Office repaint"],
    summary: "Detailed finishing for homes and offices with neat site cleanup and quick turnaround.",
    testimonials: [
      { author: "Ayesha, DHA", text: "Very clean paint job and the shade matching was exact." },
      { author: "Usman, Gulberg", text: "Finished a 5-marla house before deadline without extra charges." }
    ]
  },
  {
    id: 2,
    name: "Sajid Plumbing Solutions",
    category: "Plumber",
    city: "Karachi",
    rating: 4.8,
    reviews: 214,
    price: 2500,
    experience: "11 years",
    response: "15 mins",
    availability: "Available in 2 hours",
    specialties: ["Leak repair", "Bathroom fittings", "Water motor setup"],
    summary: "Reliable plumbing for urgent leaks, pipeline replacement, and full bathroom fitting jobs.",
    testimonials: [
      { author: "Mahnoor, Clifton", text: "Resolved a kitchen leakage issue on the same day." },
      { author: "Bilal, PECHS", text: "Explained the repair clearly and charged exactly what was quoted." }
    ]
  },
  {
    id: 3,
    name: "CurrentFix Electricians",
    category: "Electrician",
    city: "Islamabad",
    rating: 4.9,
    reviews: 176,
    price: 3000,
    experience: "8 years",
    response: "30 mins",
    availability: "Available today",
    specialties: ["Wiring faults", "UPS setup", "DB installation"],
    summary: "Safe diagnostics and professional electrical repair for homes, shops, and small offices.",
    testimonials: [
      { author: "Hina, G-11", text: "Fixed repeated tripping issue after two others failed." },
      { author: "Zain, F-10", text: "Professional wiring work with proper testing before leaving." }
    ]
  },
  {
    id: 4,
    name: "Rehman Wood Craft",
    category: "Carpenter",
    city: "Rawalpindi",
    rating: 4.7,
    reviews: 96,
    price: 7000,
    experience: "13 years",
    response: "45 mins",
    availability: "Available tomorrow",
    specialties: ["Wardrobes", "Door repair", "Custom shelving"],
    summary: "Custom woodwork and repairs with strong finishing quality for home furniture and fittings.",
    testimonials: [
      { author: "Sara, Bahria Town", text: "The wardrobe fit-out looked premium and used space well." },
      { author: "Kamran, Saddar", text: "Solid carpenter for repair work and custom cabinet adjustments." }
    ]
  },
  {
    id: 5,
    name: "CleanNest Home Services",
    category: "House Cleaner",
    city: "Lahore",
    rating: 4.8,
    reviews: 242,
    price: 4500,
    experience: "6 years",
    response: "25 mins",
    availability: "Available today",
    specialties: ["Deep cleaning", "Move-in cleaning", "Kitchen sanitizing"],
    summary: "Trained cleaning teams for apartments, houses, and post-renovation deep clean projects.",
    testimonials: [
      { author: "Nimra, Model Town", text: "Bathrooms and kitchen were spotless after renovation dust." },
      { author: "Faisal, Cantt", text: "Team arrived on time and completed deep clean exactly as promised." }
    ]
  },
  {
    id: 6,
    name: "ShineX Car Care",
    category: "Car Cleaner",
    city: "Karachi",
    rating: 4.6,
    reviews: 88,
    price: 1800,
    experience: "5 years",
    response: "40 mins",
    availability: "Available today",
    specialties: ["Interior detailing", "Exterior wash", "Seat shampoo"],
    summary: "Affordable on-site car cleaning and detailing for daily drivers and family vehicles.",
    testimonials: [
      { author: "Faraz, Gulshan", text: "Seats and dashboard looked refreshed without harsh chemical smell." },
      { author: "Areeba, DHA", text: "Convenient home service and fair pricing for detailing." }
    ]
  },
  {
    id: 7,
    name: "MotorMedics PK",
    category: "Mechanic",
    city: "Faisalabad",
    rating: 4.9,
    reviews: 154,
    price: 3500,
    experience: "10 years",
    response: "35 mins",
    availability: "Available in 3 hours",
    specialties: ["Engine tune-up", "Brake service", "Battery diagnostics"],
    summary: "Mobile mechanic service for maintenance, diagnostics, and urgent roadside assistance.",
    testimonials: [
      { author: "Irfan, Peoples Colony", text: "Diagnosed the battery issue fast and saved me towing costs." },
      { author: "Rabia, D Ground", text: "Clear advice, good workmanship, and no unnecessary upselling." }
    ]
  },
  {
    id: 8,
    name: "Ustad Aslam Electrical",
    category: "Electrician",
    city: "Peshawar",
    rating: 4.7,
    reviews: 121,
    price: 2200,
    experience: "12 years",
    response: "25 mins",
    availability: "Available today",
    specialties: ["Fan installation", "Short circuit repair", "Inverter wiring"],
    summary: "Fast local electrician support for homes dealing with outages, fixtures, and circuit issues.",
    testimonials: [
      { author: "Hamza, Hayatabad", text: "Solved inverter wiring fault in one visit." },
      { author: "Maria, University Town", text: "Quick and respectful service with proper safety checks." }
    ]
  }
];

const categoryInfo = [
  ["Painter", "Wall paint, textures, touch-ups"],
  ["Plumber", "Leak fixes, fittings, pipelines"],
  ["Electrician", "Wiring, fixtures, diagnostics"],
  ["Carpenter", "Furniture, repairs, woodwork"],
  ["House Cleaner", "Deep clean, sanitizing, move-in"],
  ["Car Cleaner", "Wash, detailing, shampoo"],
  ["Mechanic", "Diagnostics, service, repairs"]
];

const state = {
  search: "",
  category: "All",
  sort: "rating",
  hireTarget: null
};

const categoryWrap = document.getElementById("categories");
const providerGrid = document.getElementById("providerGrid");
const resultsSummary = document.getElementById("resultsSummary");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const searchInput = document.getElementById("searchInput");
const bestMatchName = document.getElementById("bestMatchName");
const bestMatchMeta = document.getElementById("bestMatchMeta");
const providerCount = document.getElementById("providerCount");
const profileModal = document.getElementById("profileModal");
const modalBody = document.getElementById("modalBody");
const hireModal = document.getElementById("hireModal");
const hireForm = document.getElementById("hireForm");
const hireTarget = document.getElementById("hireTarget");
const hireNote = document.getElementById("hireNote");
const featuredButton = document.getElementById("featuredButton");
const hireClose = document.getElementById("hireClose");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0
  }).format(value);
}

function getSortedProviders(list) {
  const sorted = [...list];

  sorted.sort((a, b) => {
    if (state.sort === "priceLow") return a.price - b.price;
    if (state.sort === "priceHigh") return b.price - a.price;
    if (state.sort === "reviews") return b.reviews - a.reviews;
    return b.rating - a.rating || b.reviews - a.reviews;
  });

  return sorted;
}

function getFilteredProviders() {
  const query = state.search.trim().toLowerCase();

  return getSortedProviders(
    providers.filter((provider) => {
      const matchesCategory = state.category === "All" || provider.category === state.category;
      const haystack = [
        provider.name,
        provider.city,
        provider.category,
        provider.specialties.join(" "),
        provider.summary
      ].join(" ").toLowerCase();

      const matchesSearch = !query || haystack.includes(query);
      return matchesCategory && matchesSearch;
    })
  );
}

function renderCategories() {
  categoryWrap.innerHTML = categoryInfo.map(([name, detail]) => `
    <article class="category-card">
      <strong>${name}</strong>
      <span>${detail}</span>
    </article>
  `).join("");

  categoryFilter.innerHTML = [
    `<option value="All">All categories</option>`,
    ...categoryInfo.map(([name]) => `<option value="${name}">${name}</option>`)
  ].join("");
}

function renderProfile(provider) {
  modalBody.innerHTML = `
    <section class="profile-head">
      <div>
        <div class="city-pill">${provider.category} | ${provider.city}</div>
        <h3>${provider.name}</h3>
        <p>${provider.summary}</p>
      </div>
      <div class="rating-pill">* ${provider.rating} (${provider.reviews} reviews)</div>
    </section>

    <div class="profile-stack">
      <div class="provider-meta">
        <div class="meta-box">
          <strong>${formatCurrency(provider.price)}</strong>
          <span>Starting price</span>
        </div>
        <div class="meta-box">
          <strong>${provider.response}</strong>
          <span>Response time</span>
        </div>
        <div class="meta-box">
          <strong>${provider.experience}</strong>
          <span>Experience</span>
        </div>
      </div>

      <div class="profile-highlights">
        ${provider.specialties.map((item) => `<span>${item}</span>`).join("")}
      </div>

      <div class="profile-reviews">
        ${provider.testimonials.map((review) => `
          <article class="review-item">
            <strong>${review.author}</strong>
            <p>${review.text}</p>
          </article>
        `).join("")}
      </div>

      <button class="button primary" type="button" onclick="openHire(${provider.id})">Hire ${provider.name}</button>
    </div>
  `;

  profileModal.showModal();
}

function renderProviders() {
  const filtered = getFilteredProviders();
  resultsSummary.textContent = `${filtered.length} provider${filtered.length === 1 ? "" : "s"} found`;

  if (!filtered.length) {
    providerGrid.innerHTML = `
      <article class="provider-card">
        <h3>No providers matched your search.</h3>
        <p>Try another category, city, or a shorter keyword.</p>
      </article>
    `;
    return;
  }

  providerGrid.innerHTML = filtered.map((provider) => `
    <article class="provider-card">
      <header>
        <div>
          <div class="city-pill">${provider.category}</div>
          <h3>${provider.name}</h3>
          <p>${provider.city}</p>
        </div>
        <div class="rating-pill">* ${provider.rating}</div>
      </header>

      <p>${provider.summary}</p>

      <section class="provider-meta">
        <div class="meta-box">
          <strong>${formatCurrency(provider.price)}</strong>
          <span>Starting price</span>
        </div>
        <div class="meta-box">
          <strong>${provider.reviews}</strong>
          <span>Reviews</span>
        </div>
        <div class="meta-box">
          <strong>${provider.response}</strong>
          <span>Reply time</span>
        </div>
      </section>

      <div class="provider-tags">
        ${provider.specialties.map((item) => `<span>${item}</span>`).join("")}
      </div>

      <div class="card-actions">
        <button class="button secondary" type="button" onclick="openProfile(${provider.id})">View profile</button>
        <button class="button primary" type="button" onclick="openHire(${provider.id})">Hire now</button>
      </div>
    </article>
  `).join("");
}

function syncHero() {
  const topProvider = getSortedProviders(providers)[0];
  bestMatchName.textContent = topProvider.name;
  bestMatchMeta.textContent = `${topProvider.category} in ${topProvider.city} | ${formatCurrency(topProvider.price)} starting | ${topProvider.rating} stars`;
  providerCount.textContent = String(providers.length);
}

function openProfile(id) {
  const provider = providers.find((item) => item.id === id);
  if (provider) renderProfile(provider);
}

function openHire(id) {
  const provider = providers.find((item) => item.id === id);
  if (!provider) return;

  state.hireTarget = provider;
  hireTarget.textContent = `Booking ${provider.name} for ${provider.category} service in ${provider.city}. Starting from ${formatCurrency(provider.price)}.`;
  hireNote.textContent = "";
  if (profileModal.open) profileModal.close();
  hireModal.showModal();
}

function closeHire() {
  hireModal.close();
  hireForm.reset();
  hireNote.textContent = "";
  state.hireTarget = null;
}

window.openProfile = openProfile;
window.openHire = openHire;

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProviders();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProviders();
});

sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProviders();
});

featuredButton.addEventListener("click", () => {
  state.sort = "rating";
  state.category = "All";
  state.search = "";
  searchInput.value = "";
  categoryFilter.value = "All";
  sortFilter.value = "rating";
  document.getElementById("providers").scrollIntoView({ behavior: "smooth" });
  renderProviders();
});

hireClose.addEventListener("click", closeHire);

hireForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.hireTarget) return;

  const name = document.getElementById("customerName").value.trim();
  hireNote.textContent = `Request sent for ${state.hireTarget.name}. ${name}, the provider can contact you shortly.`;
  hireForm.reset();
});

renderCategories();
syncHero();
renderProviders();
