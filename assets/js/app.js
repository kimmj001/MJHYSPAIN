const state = {
  dayId: Number(new URLSearchParams(location.search).get("day")) || 1,
  favorites: readStore("barcelona:favorites", []),
  filterFavorites: false
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const data = window.TRIP_DATA;
if (window.TRIP_PHOTOS) data.images = window.TRIP_PHOTOS;

document.addEventListener("DOMContentLoaded", () => {
  renderShell();
  renderDay(state.dayId);
  bindActions();
  registerServiceWorker();
});

function renderShell() {
  document.title = `Barcelona 2026 · ${data.travelers}`;
  $("#app").innerHTML = `
    <div class="app-shell">
      <nav class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="./index.html">BARCELONA <span>2026</span></a>
          <div class="nav-actions">
            <button class="pill-btn" data-action="sources">공식 출처</button>
            <button class="pill-btn" data-action="favorites" aria-pressed="false">즐겨찾기</button>
            <button class="pill-btn primary" data-action="today">오늘 일정</button>
          </div>
        </div>
      </nav>

      <header class="hero">
        <div>
          <div class="eyebrow">${data.travelers}</div>
          <h1>Barcelona<br>2026</h1>
          <p>오늘 갈 곳, 다음 이동, 예약 링크만 빠르게 확인합니다.</p>
        </div>
        <div class="hero-card">
          <img src="${data.heroImage}" alt="Barcelona skyline" loading="eager">
          <div class="poster">
            <div>${data.dates}</div>
            <strong>명명이와<br>하여니공주</strong>
            <div>${data.homeBase}</div>
          </div>
        </div>
      </header>

      <section class="quick-grid">
        <div class="stat"><small>여행 기간</small><strong>9박 10일</strong></div>
        <div class="stat"><small>하이라이트</small><strong>Sitges Fireworks</strong></div>
        <div class="stat"><small>숙소 기준</small><strong>Urgell</strong></div>
        <div class="stat"><small>핵심 버튼</small><strong>구간 경로</strong></div>
      </section>

      <main class="section" id="plan">
        <div class="section-head">
          <h2>일정</h2>
          <p>날짜를 누르면 해당 하루가 열립니다. 이동할 때는 일정 사이의 구간 경로 버튼만 누르면 됩니다.</p>
        </div>
        <div class="day-tabs" id="dayTabs"></div>
        <div class="day-layout">
          <aside class="day-aside" id="dayAside"></aside>
          <div class="schedule" id="schedule"></div>
        </div>
      </main>

      <section class="section" id="sources" hidden>
        <div class="section-head">
          <h2>공식 링크</h2>
          <p>예약, 운영, 교통, 축제 정보 확인용 공식 링크입니다.</p>
        </div>
        <div class="source-panel">
          <strong>사진 원칙</strong>
          <p>${data.photoCredit}</p>
          <div class="source-list">
            ${data.sources.map(source => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.name}</a>`).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>항공편</h2>
          <p>항공권 시간은 제공된 정보를 기준으로 보존했습니다. 출발 전 항공사 앱에서 재확인하세요.</p>
        </div>
        <div class="panel-grid">
          ${data.flight.map(item => `<div class="panel"><p>${item}</p></div>`).join("")}
        </div>
      </section>

      <div class="modal-backdrop" id="guideModal" hidden>
        <div class="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guideTitle">
          <button class="icon-btn modal-close" data-action="close-guide" aria-label="닫기">×</button>
          <div class="eyebrow" id="guideTime"></div>
          <h2 id="guideTitle"></h2>
          <p id="guideBody"></p>
          <div class="modal-actions" id="guideActions"></div>
        </div>
      </div>

      <footer class="footer">
        <strong>Barcelona 2026</strong><br>
        ${data.travelers}
      </footer>
    </div>
  `;

  $("#dayTabs").innerHTML = data.days.map(day => `
    <button class="day-tab" data-day="${day.id}" aria-pressed="${day.id === state.dayId}">
      ${day.date} ${day.weekday}
    </button>
  `).join("");
}

function renderDay(dayId) {
  const day = data.days.find(item => item.id === dayId) || data.days[0];
  state.dayId = day.id;
  history.replaceState(null, "", `?day=${day.id}`);

  $$(".day-tab").forEach(tab => {
    const active = Number(tab.dataset.day) === day.id;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });

  $("#dayAside").innerHTML = `
    <div class="panel">
      <div class="eyebrow">${day.date} ${day.weekday} · ${day.mood}</div>
      <h3>${day.title}</h3>
      <p>${day.summary}</p>
      <div class="metrics">
        <div class="metric"><small>스톱</small><b>${day.stops.length}개</b></div>
        <div class="metric"><small>첫 일정</small><b>${day.stops[0].time}</b></div>
        <div class="metric"><small>마지막</small><b>${day.stops.at(-1).time}</b></div>
        <div class="metric"><small>경로</small><b>실시간</b></div>
      </div>
    </div>
    <div class="warning">${day.warning}</div>
  `;

  const visibleStops = state.filterFavorites
    ? day.stops.filter(stop => state.favorites.includes(stopId(day, stop)))
    : day.stops;

  const usedPhotos = new Set();
  $("#schedule").innerHTML = visibleStops.length
    ? visibleStops.map((stop, index) => {
        const previous = visibleStops[index - 1];
        return `${previous ? renderLeg(previous, stop) : ""}${renderStop(day, stop, usedPhotos)}`;
      }).join("")
    : `<div class="stop empty">이 날짜에는 즐겨찾기한 일정이 없습니다.</div>`;

  observeLazyImages();
  markCurrentStop();
}

function renderLeg(previous, current) {
  const mode = current.travelMode || "transit";
  return `
    <div class="leg">
      <b>${modeLabel(mode)}</b>
      <div>
        <div class="route">${previous.title} → ${current.title}</div>
        <div class="route">${previous.place} → ${current.place}</div>
      </div>
      <a class="pill-btn" href="${directionsUrl(previous.place, current.place, mode)}" target="_blank" rel="noreferrer">구간 경로</a>
    </div>
  `;
}

function renderStop(day, item, usedPhotos) {
  const id = stopId(day, item);
  const images = (data.images[item.imageKey] || []).filter(([, src]) => {
    if (usedPhotos.has(src)) return false;
    usedPhotos.add(src);
    return true;
  });
  const favorite = state.favorites.includes(id);
  const festivalBadge = festivalBadgeFor(day, item);
  return `
    <article class="stop${item.mealLabel ? " meal-stop" : ""}" id="${id}" data-time="${item.time}">
      <div class="stop-head">
        <time>${item.time}</time>
        <div>
          ${item.mealLabel ? `<div class="meal-label">${item.mealLabel}</div>` : ""}
          <h3>${item.title}</h3>
          ${festivalBadge ? renderFestivalBadge(festivalBadge) : ""}
          <p>${item.place}</p>
          ${item.mealNote ? `<p class="meal-note">${item.mealNote}</p>` : ""}
        </div>
        <button class="icon-btn" data-action="favorite" data-id="${id}" aria-label="즐겨찾기" aria-pressed="${favorite}">${favorite ? "★" : "☆"}</button>
      </div>

      ${images.length ? `<div class="photo-strip" aria-label="${item.title} 대표 사진">
        ${images.map(([caption, src]) => `
          <figure class="photo-card">
            <img data-src="${src}" alt="${caption}" loading="lazy" decoding="async">
            <figcaption>${caption}</figcaption>
          </figure>
        `).join("")}
      </div>` : ""}

      ${item.mealLabel ? `<div class="stop-toolbar">
        <button class="pill-btn primary" data-action="open-meal-point" data-day="${day.id}" data-stop="${id}">식사 포인트</button>
      </div>` : `<div class="stop-toolbar">
        <button class="pill-btn primary" data-action="open-guide" data-day="${day.id}" data-stop="${id}">관람 가이드</button>
        ${item.official ? `<a class="pill-btn" href="${item.official}" target="_blank" rel="noreferrer">공식 링크</a>` : ""}
      </div>`}

    </article>
  `;
}

function festivalBadgeFor(day, item) {
  const key = `${day.id}-${item.time}-${item.title}`;
  const badges = {
    "1-18:30-Vila de Gracia": { label: "🎉 Festa Major de Gràcia" },
    "3-20:45-Festa Major de Sants": { label: "🎊 Festa Major de Sants" },
    "4-15:00-Sitges Old Town": { label: "🎆 Sitges Festa Major", tone: "sitges" },
    "4-23:00-Festa Major Fireworks": { label: "🎇 Sitges Fireworks", tone: "fireworks" },
    "5-20:45-Festa Major de Sants": { label: "🎊 Festa Major de Sants" },
    "9-21:30-Festa Major de Sants": { label: "🎊 Festa Major de Sants" }
  };
  return badges[key] || null;
}

function renderFestivalBadge(badge) {
  const tone = badge.tone ? ` ${badge.tone}` : "";
  const sparkles = badge.tone === "fireworks"
    ? `<span class="sparkle one"></span><span class="sparkle two"></span><span class="sparkle three"></span>`
    : "";
  return `<div class="festival-badge${tone}"><span>${badge.label}</span>${sparkles}</div>`;
}

function bindActions() {
  document.addEventListener("click", event => {
    const dayTab = event.target.closest(".day-tab");
    if (dayTab) {
      renderDay(Number(dayTab.dataset.day));
      $("#plan").scrollIntoView({ behavior: "smooth" });
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;

    if (action.dataset.action === "today") {
      renderDay(inferTripDay());
      $("#plan").scrollIntoView({ behavior: "smooth" });
    }

    if (action.dataset.action === "sources") {
      $("#sources").hidden = !$("#sources").hidden;
      $("#sources").scrollIntoView({ behavior: "smooth" });
    }

    if (action.dataset.action === "favorites") {
      state.filterFavorites = !state.filterFavorites;
      action.setAttribute("aria-pressed", String(state.filterFavorites));
      renderDay(state.dayId);
    }

    if (action.dataset.action === "favorite") {
      toggleInStore("barcelona:favorites", state.favorites, action.dataset.id);
      renderDay(state.dayId);
    }

    if (action.dataset.action === "open-guide") {
      openGuide(Number(action.dataset.day), action.dataset.stop);
    }

    if (action.dataset.action === "open-meal-point") {
      openMealPoint(Number(action.dataset.day), action.dataset.stop);
    }

    if (action.dataset.action === "close-guide") {
      closeGuide();
    }

    if (event.target.id === "guideModal") {
      closeGuide();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeGuide();
  });
}

function openGuide(dayId, id) {
  const day = data.days.find(item => item.id === dayId);
  const stop = day?.stops.find(item => stopId(day, item) === id);
  if (!stop) return;
  $("#guideTime").textContent = `${day.date} ${day.weekday} · ${stop.time}`;
  $("#guideTitle").textContent = stop.title;
  $("#guideBody").textContent = stop.guide;
  $("#guideActions").innerHTML = stop.official
    ? `<a class="pill-btn" href="${stop.official}" target="_blank" rel="noreferrer">공식 링크</a>`
    : "";
  $("#guideModal").hidden = false;
}

function openMealPoint(dayId, id) {
  const day = data.days.find(item => item.id === dayId);
  const stop = day?.stops.find(item => stopId(day, item) === id);
  if (!stop) return;
  $("#guideTime").textContent = `${day.date} ${day.weekday} · ${stop.time} · ${stop.mealLabel}`;
  $("#guideTitle").textContent = stop.title;
  $("#guideBody").textContent = stop.mealPoint || stop.mealNote || "";
  $("#guideActions").innerHTML = "";
  $("#guideModal").hidden = false;
}

function closeGuide() {
  const modal = $("#guideModal");
  if (modal) modal.hidden = true;
}

function observeLazyImages() {
  if (!("IntersectionObserver" in window)) {
    $$("img[data-src]").forEach(loadImage);
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$("img[data-src]", entry.target).forEach(loadImage);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "260px" });
  $$(".photo-strip").forEach(strip => observer.observe(strip));
}

function loadImage(img) {
  img.src = img.dataset.src;
  img.removeAttribute("data-src");
  img.onerror = () => img.closest("figure")?.remove();
}

function markCurrentStop() {
  const day = data.days.find(item => item.id === state.dayId);
  if (!day || inferTripDay() !== state.dayId) return;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  let current = null;
  $$(".stop[data-time]").forEach(stop => {
    const minutes = timeToMinutes(stop.dataset.time);
    if (minutes <= currentMinutes) current = stop;
  });
  if (current) current.classList.add("current");
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function inferTripDay() {
  const today = new Date();
  const start = new Date("2026-08-20T00:00:00");
  const diff = Math.floor((today - start) / 86400000) + 1;
  return Math.min(Math.max(diff, 1), data.days.length);
}

function stopId(day, stop) {
  return `day-${day.id}-${stop.time.replace(":", "")}-${slug(stop.title)}`;
}

function slug(text) {
  return text.toLowerCase().normalize("NFKD").replace(/[^\p{Letter}\p{Number}]+/gu, "-").replace(/^-|-$/g, "");
}

function directionsUrl(origin, destination, mode = "transit") {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${googleMode(mode)}`;
}

function googleMode(mode) {
  if (mode === "walking") return "walking";
  if (mode === "taxi") return "driving";
  if (mode === "driving") return "driving";
  return "transit";
}

function modeLabel(mode) {
  if (mode === "walking") return "도보";
  if (mode === "taxi") return "택시";
  if (mode === "driving") return "차량";
  return "대중교통";
}

function readStore(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

function toggleInStore(key, collection, id, force) {
  const exists = collection.includes(id);
  const shouldHave = typeof force === "boolean" ? force : !exists;
  if (shouldHave && !exists) collection.push(id);
  if (!shouldHave && exists) collection.splice(collection.indexOf(id), 1);
  localStorage.setItem(key, JSON.stringify(collection));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js", { updateViaCache: "none" }).catch(() => {});
  }
}
