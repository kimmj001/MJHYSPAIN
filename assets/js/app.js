const state = {
  dayId: Number(new URLSearchParams(location.search).get("day")) || 1,
  favorites: readStore("barcelona:favorites", []),
  checked: readStore("barcelona:checked", []),
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
  document.title = `Barcelona 2026 ${data.version} · ${data.travelers}`;
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
          <h1>Barcelona<br>Summer</h1>
          <p>2026년 바르셀로나 여행 중 실제로 켜두고 쓰는 일정 앱입니다. 시간표는 확정 일정 기준, 이동은 Google Maps 연동, 가이드는 필요한 순간 팝업으로 열리게 정리했습니다.</p>
        </div>
        <div class="hero-card">
          <img src="${data.heroImage}" alt="Barcelona skyline" loading="eager">
          <div class="poster">
            <div>${data.dates}<span style="float:right">${data.version}</span></div>
            <strong>No regrets<br>trip plan</strong>
            <div>${data.homeBase} · PWA</div>
          </div>
        </div>
      </header>

      <section class="quick-grid">
        <div class="stat"><small>여행 기간</small><strong>9박 10일</strong></div>
        <div class="stat"><small>하이라이트</small><strong>Sitges Fireworks</strong></div>
        <div class="stat"><small>이동 방식</small><strong>Google Maps 기반</strong></div>
        <div class="stat"><small>사진</small><strong>로컬 실제 사진</strong></div>
      </section>

      <main class="section" id="plan">
        <div class="section-head">
          <h2>Itinerary</h2>
          <p>날짜를 누르면 해당 하루가 전환됩니다. 각 이동 구간은 출발지와 도착지를 Google Maps에 넘겨 실시간 길찾기를 사용합니다.</p>
        </div>
        <div class="day-tabs" id="dayTabs"></div>
        <div class="day-layout">
          <aside class="day-aside" id="dayAside"></aside>
          <div class="schedule" id="schedule"></div>
        </div>
      </main>

      <section class="section" id="sources" hidden>
        <div class="section-head">
          <h2>Sources</h2>
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
          <h2>Flight</h2>
          <p>항공권 시간은 제공된 정보를 기준으로 보존했습니다. 출발 전 항공사 앱에서 재확인하세요.</p>
        </div>
        <div class="panel-grid">
          ${data.flight.map(item => `<div class="panel"><p>${item}</p></div>`).join("")}
        </div>
      </section>

      <div class="tool-dock">
        <a class="pill-btn" href="https://www.google.com/maps/search/?api=1&query=Barcelona" target="_blank" rel="noreferrer">지도</a>
        <a class="pill-btn" href="https://weather.com/weather/tenday/l/Barcelona+Catalonia+Spain" target="_blank" rel="noreferrer">날씨</a>
        <a class="pill-btn" href="https://www.timeanddate.com/sun/spain/barcelona" target="_blank" rel="noreferrer">일몰</a>
      </div>

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
        <strong>Barcelona 2026 ${data.version}</strong><br>
        ${data.travelers} · 마지막 업데이트 ${data.updatedAt}
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
        <div class="metric"><small>지도</small><b>실시간</b></div>
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
  const checked = state.checked.includes(id);
  return `
    <article class="stop" id="${id}" data-time="${item.time}">
      <div class="stop-head">
        <time>${item.time}</time>
        <div>
          <h3>${item.title}</h3>
          <p>${item.place}</p>
          <div class="badge-row">
            <span class="badge blue">${modeLabel(item.travelMode)}</span>
            ${item.official ? `<span class="badge">공식 확인</span>` : ""}
          </div>
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

      <div class="stop-toolbar">
        <button class="pill-btn primary" data-action="open-guide" data-day="${day.id}" data-stop="${id}">관람 가이드</button>
        ${item.official ? `<a class="pill-btn" href="${item.official}" target="_blank" rel="noreferrer">공식 링크</a>` : ""}
      </div>

      <div class="map-module">
        <div>
          <strong>Google Maps 연동</strong>
          <p>지도는 장소 확인용으로 앱 안에 띄우고, 실제 이동은 Google Maps 길찾기를 사용합니다.</p>
        </div>
        <div class="map-actions">
          <a class="pill-btn primary" href="${liveDirectionsUrl(item.place, item.travelMode)}" target="_blank" rel="noreferrer">현재 위치에서 길찾기</a>
          <a class="pill-btn" href="${searchUrl(item.place)}" target="_blank" rel="noreferrer">장소 크게 보기</a>
        </div>
        <iframe class="map-frame" loading="lazy" src="${embedUrl(item.place)}" title="${item.title} 지도"></iframe>
      </div>

      <label class="checkline">
        <input type="checkbox" data-action="check" data-id="${id}" ${checked ? "checked" : ""}>
        완료 / 방문함
      </label>
    </article>
  `;
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

    if (action.dataset.action === "close-guide") {
      closeGuide();
    }

    if (event.target.id === "guideModal") {
      closeGuide();
    }
  });

  document.addEventListener("change", event => {
    if (event.target.dataset.action !== "check") return;
    toggleInStore("barcelona:checked", state.checked, event.target.dataset.id, event.target.checked);
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
  $("#guideActions").innerHTML = `
    <a class="pill-btn primary" href="${liveDirectionsUrl(stop.place, stop.travelMode)}" target="_blank" rel="noreferrer">현재 위치에서 길찾기</a>
    <a class="pill-btn" href="${searchUrl(stop.place)}" target="_blank" rel="noreferrer">Google Maps</a>
    ${stop.official ? `<a class="pill-btn" href="${stop.official}" target="_blank" rel="noreferrer">공식 링크</a>` : ""}
  `;
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

function searchUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}

function embedUrl(place) {
  return `https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`;
}

function liveDirectionsUrl(destination, mode = "transit") {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=${googleMode(mode)}`;
}

function directionsUrl(origin, destination, mode = "transit") {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${googleMode(mode)}`;
}

function googleMode(mode) {
  if (mode === "walking") return "walking";
  if (mode === "driving") return "driving";
  return "transit";
}

function modeLabel(mode) {
  if (mode === "walking") return "도보";
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
