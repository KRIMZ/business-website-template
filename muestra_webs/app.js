/* ==========================================================================
   VANTA® STUDIO — Demo E-commerce de Moda · app.js (Vanilla ES6+)
   --------------------------------------------------------------------------
   ✏️ PERSONALIZACIÓN RÁPIDA
   1. CONFIG   → nombre de marca, WhatsApp, moneda, envío gratis, fecha del drop
   2. PRODUCTS → catálogo: nombre, categoría, precios, tallas, colores, imágenes
   ========================================================================== */
'use strict';

/* ✏️ 1. CONFIGURACIÓN GENERAL ------------------------------------------- */
const CONFIG = {
  brand: 'NAKAMA VTG',          // Se aplica a todos los elementos con [data-brand]
  whatsapp: '56966110161',      // Código de país + número, solo dígitos (ej: 56912345678)
  locale: 'es-CL',
  currency: 'CLP',
  freeShippingFrom: 60000,      // Monto mínimo para envío gratis
  shippingCost: 3990,           // Costo de envío bajo ese monto
  dropDate: '',                 // Fecha del próximo drop, ej: '2026-10-15T20:00:00'. Vacío = demo (≈3 días)
  newsletterCode: 'CLUB10',     // Código mostrado al suscribirse
  storageKey: 'nakama-demo-cart',
};

/* Helper de imágenes Unsplash. Para usar fotos propias reemplaza por 'img/mi-foto.jpg' */
const unsplash = (id, w = 720, h = 960, extra = '') =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80${extra}`;
/* Recorte con zoom sobre la misma foto (vista "detalle" para el hover) */
const detail = (id, x = 0.5, y = 0.45, z = 1.8) =>
  unsplash(id, 720, 960, `&crop=focalpoint&fp-x=${x}&fp-y=${y}&fp-z=${z}`);

const CATEGORIES = { polerones: 'Polerones', poleras: 'Poleras', chaquetas: 'Chaquetas', accesorios: 'Accesorios' };
const BADGES = { new: 'Nuevo', low: 'Agotándose', limited: 'Edición Limitada' };

/* ✏️ 2. CATÁLOGO ---------------------------------------------------------
   badge: 'new' | 'low' | 'limited' | null
   soldOut: tallas agotadas (se muestran tachadas)                          */
const PRODUCTS = [
  {
    id: 'nakama-hoodie-cream',
    name: 'Hoodie Vintage Washed Crema',
    category: 'polerones',
    price: 38990,
    compareAt: 46990,
    badge: 'new',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
    colors: ['#e4dfd3', '#2b2b2a'],
    image: 'img/1.png',
    hoverImage: 'img/1.png',
  },
  {
    id: 'nakama-hoodie-black',
    name: 'Hoodie Boxy Fit Black Vintage',
    category: 'polerones',
    price: 39990,
    compareAt: 48990,
    badge: 'low',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: ['S'],
    colors: ['#1c1c1e', '#e4dfd3'],
    image: 'img/2.png',
    hoverImage: 'img/2.png',
  },
  {
    id: 'nakama-tee-grey',
    name: 'Tee Heavyweight Washed Grey',
    category: 'poleras',
    price: 24990,
    compareAt: 29990,
    badge: 'new',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
    colors: ['#44474c', '#1c1c1e'],
    image: 'img/3.png',
    hoverImage: 'img/3.png',
  },
  {
    id: 'nakama-crewneck-anthracite',
    name: 'Crewneck Heavy Anthracite',
    category: 'polerones',
    price: 34990,
    compareAt: 42990,
    badge: 'limited',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: ['XL'],
    colors: ['#232528', '#8a8d94'],
    image: 'img/4.png',
    hoverImage: 'img/4.png',
  },
  {
    id: 'nakama-track-jacket',
    name: 'Vintage Track Jacket Contrast',
    category: 'chaquetas',
    price: 44990,
    compareAt: 54990,
    badge: 'limited',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
    colors: ['#1f2427', '#e8e5dc'],
    image: 'img/5.png',
    hoverImage: 'img/5.png',
  },
  {
    id: 'nakama-jersey-cyan',
    name: 'Retro Sport Jersey Cyan',
    category: 'poleras',
    price: 26990,
    compareAt: 32990,
    badge: 'new',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
    colors: ['#1aa3c8', '#ffffff'],
    image: 'img/6.png',
    hoverImage: 'img/6.png',
  },
  {
    id: 'nakama-tee-contrast',
    name: 'Oversized Tee Cyan Graphic',
    category: 'poleras',
    price: 25990,
    compareAt: 31990,
    badge: 'low',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: ['M'],
    colors: ['#282b30', '#1aa3c8'],
    image: 'img/7.png',
    hoverImage: 'img/7.png',
  },
  {
    id: 'nakama-tee-graphic-white',
    name: 'Vintage Graphic Tee Off-White',
    category: 'poleras',
    price: 24990,
    compareAt: 29990,
    badge: 'new',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
    colors: ['#f0eee6', '#1c1c1e'],
    image: 'img/8.png',
    hoverImage: 'img/8.png',
  },
  {
    id: 'nakama-tee-backprint',
    name: 'Statement Tee White Backprint',
    category: 'poleras',
    price: 24990,
    compareAt: 29990,
    badge: 'limited',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
    colors: ['#f0eee6', '#3e4147'],
    image: 'img/9.png',
    hoverImage: 'img/9.png',
  },
];

/* ==========================================================================
   A partir de aquí no es necesario editar nada para personalizar la tienda
   ========================================================================== */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const money = new Intl.NumberFormat(CONFIG.locale, { style: 'currency', currency: CONFIG.currency, maximumFractionDigits: 0 });
const fmt = (n) => money.format(n);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const PRODUCT_MAP = new Map(PRODUCTS.map((p) => [p.id, p]));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const fontsReady = Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), wait(1500)]);

const ICONS = {
  heart: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.3C1.6 7.8 3.9 4.5 7.3 4.5c2 0 3.5 1.1 4.7 2.8 1.2-1.7 2.7-2.8 4.7-2.8 3.4 0 5.7 3.3 4.5 6.7-1.7 4.7-9.2 9.3-9.2 9.3Z"/></svg>',
  bag: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.2 12H6.2L5 8Z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/></svg>',
  plus: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
};

/* ---------- DOM ---------- */
const header = $('#siteHeader');
const nav = $('.nav');
const burger = $('#burger');
const mobileMenu = $('#mobileMenu');
const grid = $('#productGrid');
const pill = $('.filters__pill');
const catalogCount = $('#catalogCount');
const cartEl = $('#cart');
const cartOverlay = $('#cartOverlay');
const cartItemsEl = $('#cartItems');
const cartCountEl = $('#cartCount');
const modalEl = $('#payModal');
const toastsEl = $('#toasts');

let menuOpen = false;
let cartOpen = false;
let modalOpen = false;
let modalBusy = false;
let lastFocus = null;

/* ==========================================================================
   MARCA + PRELOADER
   ========================================================================== */
function applyBrand() {
  $$('[data-brand]').forEach((el) => { el.textContent = CONFIG.brand; });
}

function initPreloader() {
  const start = performance.now();
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    const delay = Math.max(0, 900 - (performance.now() - start));
    setTimeout(() => {
      document.body.classList.add('is-loaded');
      setTimeout(animateCounters, 900);
    }, delay);
  };
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
  setTimeout(finish, 3200);
}

function animateCounters() {
  if (reduceMotion) return;
  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count) || 0;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / 1600);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ==========================================================================
   TICKER SUPERIOR (se auto-rellena para loop infinito sin cortes)
   ========================================================================== */
function initTicker() {
  const track = $('.ticker__track');
  const group = track && $('.ticker__group', track);
  if (!group) return;
  const originals = Array.from(group.children);
  const minWidth = Math.max(window.innerWidth, window.screen.width || 0) + 200;
  let guard = 0;
  while (group.scrollWidth < minWidth && guard++ < 12) {
    originals.forEach((li) => {
      const c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      group.appendChild(c);
    });
  }
  const clone = group.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.appendChild(clone);
  track.style.setProperty('--ticker-duration', `${Math.max(18, group.scrollWidth / 55)}s`);
}

/* ==========================================================================
   HEADER: glass al hacer scroll, se oculta al bajar y reaparece al subir
   ========================================================================== */
let lastScrollY = window.scrollY;
let headerTicking = false;
const railBar = $('.side-rail__bar span');

function updateHeader() {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 40);
  const delta = y - lastScrollY;
  if (Math.abs(delta) > 6) {
    header.classList.toggle('is-hidden', delta > 0 && y > 500 && !menuOpen && !cartOpen);
    lastScrollY = y;
  }
  if (railBar) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    railBar.style.transform = `scaleY(${max > 0 ? (y / max).toFixed(4) : 0})`;
  }
  headerTicking = false;
}

function initHeader() {
  updateHeader();
  window.addEventListener('scroll', () => {
    if (!headerTicking) { headerTicking = true; requestAnimationFrame(updateHeader); }
  }, { passive: true });

  const links = $$('.nav__link');
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((l) => l.classList.remove('is-active'));
      byId.get(en.target.id)?.classList.add('is-active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/* ---------- Bloqueo de scroll + menú móvil ---------- */
function syncScrollLock() {
  const lock = menuOpen || cartOpen || modalOpen;
  if (lock && !document.body.classList.contains('no-scroll')) {
    document.documentElement.style.setProperty('--sbw', `${window.innerWidth - document.documentElement.clientWidth}px`);
  }
  document.body.classList.toggle('no-scroll', lock);
  if (!lock) document.documentElement.style.setProperty('--sbw', '0px');
}

function setMenu(open) {
  menuOpen = open;
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.inert = !open;
  mobileMenu.setAttribute('aria-hidden', String(!open));
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  if (open) header.classList.remove('is-hidden');
  syncScrollLock();
}

function initMenu() {
  burger.addEventListener('click', () => setMenu(!menuOpen));
  $$('a', mobileMenu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
}

/* ==========================================================================
   CATÁLOGO + FILTROS
   ========================================================================== */
function productCard(p, i) {
  const off = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
  const oneSize = p.sizes.length === 1;
  const sizes = p.sizes.map((s) => {
    const soldOut = p.soldOut?.includes(s);
    const selected = oneSize && !soldOut;
    return `<button type="button" class="size${selected ? ' is-selected' : ''}" data-size="${esc(s)}" aria-pressed="${selected}"${soldOut ? ` disabled aria-label="Talla ${esc(s)} agotada"` : ''}>${esc(s)}</button>`;
  }).join('');

  return `
  <article class="product" data-id="${esc(p.id)}" data-category="${esc(p.category)}" style="--d:${(i % 4) * 0.08}s">
    <div class="product__visual">
      <div class="product__media">
        ${p.badge ? `<span class="badge badge--${esc(p.badge)}">${BADGES[p.badge] || ''}</span>` : ''}
        <img class="product__img product__img--main" src="${esc(p.image)}" alt="${esc(p.name)}" width="720" height="960" loading="lazy" decoding="async">
        <img class="product__img product__img--hover" src="${esc(p.hoverImage)}" alt="" width="720" height="960" loading="lazy" decoding="async" aria-hidden="true">
      </div>
      <button type="button" class="product__wish" aria-label="Guardar ${esc(p.name)} en favoritos" aria-pressed="false">${ICONS.heart}</button>
      <div class="product__quick">
        <div class="product__quick-top"><span>${oneSize ? 'Talla única' : 'Selecciona tu talla'}</span><span class="product__picked" aria-live="polite">${oneSize ? 'Única' : ''}</span></div>
        <div class="sizes" role="group" aria-label="Talla de ${esc(p.name)}">${sizes}</div>
        <button type="button" class="btn btn--add" data-add><span class="btn__inner"><span class="btn__label">Agregar al Carrito</span>${ICONS.bag}</span></button>
      </div>
    </div>
    <div class="product__info">
      <div>
        <p class="product__cat">${CATEGORIES[p.category] || ''}</p>
        <h3 class="product__name">${esc(p.name)}</h3>
        <div class="swatches" aria-hidden="true">${p.colors.map((c) => `<span class="swatch" style="--sw:${esc(c)}"></span>`).join('')}</div>
      </div>
      <p class="product__price">
        ${p.compareAt ? `<del><span class="sr-only">Precio original </span>${fmt(p.compareAt)}</del>` : ''}
        <strong><span class="sr-only">Precio oferta </span>${fmt(p.price)}</strong>
        ${off ? `<span class="product__off">-${off}%</span>` : ''}
      </p>
    </div>
  </article>`;
}

function renderProducts() {
  grid.innerHTML = PRODUCTS.map(productCard).join('');
  $$('.filter').forEach((btn) => {
    const f = btn.dataset.filter;
    const n = f === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === f).length;
    const sup = $('sup', btn);
    if (sup) sup.textContent = n;
  });
  updateCount('all', PRODUCTS.length);
}

function updateCount(filter, n) {
  const where = filter === 'all' ? '' : ` en ${CATEGORIES[filter]}`;
  catalogCount.textContent = `Mostrando ${n} ${n === 1 ? 'producto' : 'productos'}${where}`;
}

function movePill(btn, instant = false) {
  if (!pill || !btn) return;
  if (instant) pill.style.transition = 'none';
  pill.style.width = `${btn.offsetWidth}px`;
  pill.style.transform = `translateX(${btn.offsetLeft}px)`;
  if (instant) { void pill.offsetWidth; pill.style.transition = ''; }
}

let currentFilter = 'all';
let filterTimer = 0;

function setFilter(filter, { scroll = false } = {}) {
  if (filter !== 'all' && !CATEGORIES[filter]) return;
  const btn = $$('.filter').find((b) => b.dataset.filter === filter);
  $$('.filter').forEach((b) => {
    const on = b === btn;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });
  movePill(btn);
  btn?.parentElement.scrollTo({ left: btn.offsetLeft - 24, behavior: reduceMotion ? 'auto' : 'smooth' });
  if (scroll) document.getElementById('coleccion').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  if (filter === currentFilter) return;
  currentFilter = filter;

  const cards = $$('.product', grid);
  cards.forEach((c) => c.classList.add('is-leaving'));
  clearTimeout(filterTimer);
  filterTimer = setTimeout(() => {
    let shown = 0;
    cards.forEach((c) => {
      const show = filter === 'all' || c.dataset.category === filter;
      c.hidden = !show;
      if (show) {
        c.style.setProperty('--d', `${shown * 0.07}s`);
        c.classList.add('is-visible');
        shown++;
      }
    });
    updateCount(filter, shown);
    requestAnimationFrame(() => requestAnimationFrame(() => cards.forEach((c) => c.classList.remove('is-leaving'))));
  }, reduceMotion ? 0 : 300);
}

function initFilters() {
  $$('.filter').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  fontsReady.then(() => movePill($('.filter.is-active'), true));
}

function selectSize(card, btn) {
  $$('.size', card).forEach((b) => {
    const on = b === btn;
    b.classList.toggle('is-selected', on);
    b.setAttribute('aria-pressed', String(on));
  });
  $('.product__picked', card).textContent = btn.dataset.size;
}

function flashAdded(btn) {
  const label = $('.btn__label', btn);
  if (!label) return;
  label.dataset.label = label.dataset.label || label.textContent;
  btn.classList.add('is-added');
  label.textContent = '¡Agregado!';
  clearTimeout(btn._timer);
  btn._timer = setTimeout(() => {
    btn.classList.remove('is-added');
    label.textContent = label.dataset.label;
  }, 1600);
}

function initProductEvents() {
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.product');
    if (!card) return;

    const sizeBtn = e.target.closest('.size');
    if (sizeBtn) { if (!sizeBtn.disabled) selectSize(card, sizeBtn); return; }

    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      const selected = $('.size.is-selected', card);
      if (!selected) {
        const sizes = $('.sizes', card);
        sizes.classList.remove('is-shake');
        void sizes.offsetWidth;
        sizes.classList.add('is-shake');
        toast('Selecciona una talla antes de agregar');
        return;
      }
      flashAdded(addBtn);
      addToCart(card.dataset.id, selected.dataset.size, $('.product__img--main', card));
      return;
    }

    const wish = e.target.closest('.product__wish');
    if (wish) {
      const on = wish.getAttribute('aria-pressed') !== 'true';
      wish.setAttribute('aria-pressed', String(on));
      toast(on ? 'Guardado en favoritos' : 'Eliminado de favoritos');
      return;
    }

    if (!finePointer && e.target.closest('.product__media')) {
      $('.product__visual', card).classList.toggle('is-flipped');
    }
  });
}

/* ==========================================================================
   CARRITO (persistente en localStorage)
   ========================================================================== */
function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
    if (!Array.isArray(raw)) return [];
    // Solo se aceptan productos, tallas y cantidades válidas del catálogo
    return raw
      .filter((it) => {
        const p = PRODUCT_MAP.get(it?.id);
        return p && p.sizes.includes(it.size) && Number.isInteger(it.qty) && it.qty > 0 && it.qty <= 99;
      })
      .map(({ id, size, qty }) => ({ id, size, qty }));
  } catch {
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(cart)); } catch { /* modo privado */ }
}

function totals() {
  const subtotal = cart.reduce((sum, i) => sum + PRODUCT_MAP.get(i.id).price * i.qty, 0);
  const shipping = subtotal === 0 || subtotal >= CONFIG.freeShippingFrom ? 0 : CONFIG.shippingCost;
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  return { subtotal, shipping, total: subtotal + shipping, count };
}

function renderCart(newKey = '') {
  const t = totals();
  cartCountEl.textContent = t.count;
  cartCountEl.classList.toggle('is-zero', t.count === 0);
  $('#cartOpen').setAttribute('aria-label', `Abrir carrito (${t.count} productos)`);
  $('#cartHeadCount').textContent = t.count;
  cartEl.classList.toggle('is-empty', t.count === 0);

  cartItemsEl.innerHTML = cart.map((i) => {
    const p = PRODUCT_MAP.get(i.id);
    const key = `${i.id}|${i.size}`;
    return `
    <li class="cart-item${key === newKey ? ' is-new' : ''}" data-key="${esc(key)}">
      <img class="cart-item__img" src="${esc(p.image)}" alt="" width="84" height="112" loading="lazy">
      <div class="cart-item__info">
        <p class="cart-item__name">${esc(p.name)}</p>
        <p class="cart-item__meta">Talla ${esc(i.size)} · ${fmt(p.price)} c/u</p>
        <div class="qty" role="group" aria-label="Cantidad de ${esc(p.name)}">
          <button type="button" data-qty="-1" aria-label="Restar una unidad">${ICONS.minus}</button>
          <span>${i.qty}</span>
          <button type="button" data-qty="1" aria-label="Sumar una unidad"${i.qty >= 99 ? ' disabled' : ''}>${ICONS.plus}</button>
        </div>
      </div>
      <div class="cart-item__side">
        <p class="cart-item__price">${fmt(p.price * i.qty)}</p>
        <button type="button" class="cart-item__remove" data-remove>Eliminar</button>
      </div>
    </li>`;
  }).join('');

  $('#cartSubtotal').textContent = fmt(t.subtotal);
  $('#cartShipping').textContent = t.shipping === 0 ? 'Gratis' : fmt(t.shipping);
  $('#cartTotal').textContent = fmt(t.total);

  const missing = CONFIG.freeShippingFrom - t.subtotal;
  $('#shipMsg').innerHTML = missing > 0
    ? `Te faltan <strong>${fmt(missing)}</strong> para tener <strong>envío gratis</strong>`
    : '¡Genial! Tu pedido tiene <strong>envío gratis</strong>';
  $('#shipBar').style.width = `${Math.min(100, (t.subtotal / CONFIG.freeShippingFrom) * 100)}%`;
}

function bumpBadge() {
  cartCountEl.classList.remove('is-bump');
  void cartCountEl.offsetWidth;
  cartCountEl.classList.add('is-bump');
}

function flyToCart(img) {
  if (reduceMotion || !img || !img.complete || !img.naturalWidth) return Promise.resolve();
  const target = $('#cartOpen');
  const wasHidden = header.classList.contains('is-hidden');
  header.classList.remove('is-hidden');
  const src = img.getBoundingClientRect();
  const tr = target.getBoundingClientRect();
  const tx = tr.left + tr.width / 2;
  const ty = wasHidden ? nav.offsetHeight / 2 : tr.top + tr.height / 2;

  const ghost = document.createElement('img');
  ghost.src = img.currentSrc || img.src;
  ghost.alt = '';
  ghost.className = 'fly-ghost';
  Object.assign(ghost.style, { left: `${src.left}px`, top: `${src.top}px`, width: `${src.width}px`, height: `${src.height}px` });
  document.body.appendChild(ghost);

  const dx = tx - (src.left + src.width / 2);
  const dy = ty - (src.top + src.height / 2);
  const anim = ghost.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${dx * 0.55}px, ${dy * 0.55 - 90}px) scale(.42)`, opacity: 0.95, offset: 0.6 },
    { transform: `translate(${dx}px, ${dy}px) scale(.05)`, opacity: 0.3, borderRadius: '50%' },
  ], { duration: 850, easing: 'cubic-bezier(.6, 0, .2, 1)' });
  return anim.finished.catch(() => {}).then(() => ghost.remove());
}

async function addToCart(id, size, sourceImg) {
  const p = PRODUCT_MAP.get(id);
  if (!p || !p.sizes.includes(size) || p.soldOut?.includes(size)) return;
  const line = cart.find((i) => i.id === id && i.size === size);
  if (line) line.qty = Math.min(99, line.qty + 1);
  else cart.push({ id, size, qty: 1 });
  saveCart();

  await flyToCart(sourceImg);
  renderCart(`${id}|${size}`);
  bumpBadge();
  toast(`${p.name} · Talla ${size} agregado`);
  openCart();
}

function removeLine(li, id, size) {
  const done = () => {
    cart = cart.filter((i) => !(i.id === id && i.size === size));
    saveCart();
    renderCart();
    if (!cart.length) $('#cartClose').focus({ preventScroll: true });
  };
  if (reduceMotion) { done(); return; }
  li.classList.add('is-removing');
  li.addEventListener('animationend', done, { once: true });
}

function openCart() {
  if (cartOpen) return;
  cartOpen = true;
  lastFocus = document.activeElement;
  if (menuOpen) setMenu(false);
  cartEl.classList.add('is-open');
  cartOverlay.classList.add('is-open');
  cartEl.inert = false;
  cartEl.setAttribute('aria-hidden', 'false');
  syncScrollLock();
  setTimeout(() => $('#cartClose').focus({ preventScroll: true }), 60);
}

function closeCart() {
  if (!cartOpen) return;
  cartOpen = false;
  cartEl.classList.remove('is-open');
  cartOverlay.classList.remove('is-open');
  cartEl.inert = true;
  cartEl.setAttribute('aria-hidden', 'true');
  syncScrollLock();
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

function orderMessage() {
  const t = totals();
  const lines = cart.map((i) => {
    const p = PRODUCT_MAP.get(i.id);
    return `• ${i.qty} x ${p.name} (Talla ${i.size}) — ${fmt(p.price * i.qty)}`;
  });
  return [
    `¡Hola ${CONFIG.brand}! Quiero finalizar mi pedido:`,
    '',
    ...lines,
    '',
    `Subtotal: ${fmt(t.subtotal)}`,
    `Envío: ${t.shipping ? fmt(t.shipping) : 'Gratis'}`,
    `Total: ${fmt(t.total)}`,
  ].join('\n');
}

function setModal(open) {
  modalOpen = open;
  modalEl.classList.toggle('is-open', open);
  modalEl.inert = !open;
  modalEl.setAttribute('aria-hidden', String(!open));
  syncScrollLock();
}

function showStep(name) {
  $$('.modal__step', modalEl).forEach((s) => s.classList.toggle('is-active', s.dataset.step === name));
}

async function payWithWebpay() {
  if (!cart.length || modalBusy) return;
  modalBusy = true;
  const t = totals();
  const status = $('#payStatus');
  $('#payAmount').textContent = fmt(t.total);
  status.textContent = 'Conectando con Webpay…';
  showStep('loading');
  setModal(true);
  await wait(1300);
  status.textContent = 'Validando pago seguro…';
  await wait(1300);
  const prefix = CONFIG.brand.replace(/[^a-z]/gi, '').slice(0, 3).toUpperCase() || 'ORD';
  $('#orderId').textContent = `#${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
  $('#orderTotal').textContent = fmt(t.total);
  showStep('success');
  cart = [];
  saveCart();
  renderCart();
  modalBusy = false;
  $('#payDone').focus({ preventScroll: true });
}

function initCart() {
  renderCart();
  $('#cartOpen').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  $('#cartShop').addEventListener('click', () => { closeCart(); document.getElementById('coleccion').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); });

  cartItemsEl.addEventListener('click', (e) => {
    const li = e.target.closest('.cart-item');
    if (!li) return;
    const key = li.dataset.key;
    const [id, size] = key.split('|');
    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) {
      const line = cart.find((i) => i.id === id && i.size === size);
      if (!line) return;
      const next = line.qty + Number(qtyBtn.dataset.qty);
      if (next <= 0) { removeLine(li, id, size); return; }
      line.qty = Math.min(99, next);
      saveCart();
      renderCart();
      bumpBadge();
      $$('.cart-item', cartItemsEl).find((el) => el.dataset.key === key)?.querySelector(`[data-qty="${qtyBtn.dataset.qty}"]`)?.focus();
      return;
    }
    if (e.target.closest('[data-remove]')) removeLine(li, id, size);
  });

  $('#checkoutWa').addEventListener('click', () => {
    if (!cart.length) return;
    const phone = CONFIG.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(orderMessage())}`, '_blank', 'noopener,noreferrer');
    toast('Abriendo WhatsApp con el detalle de tu pedido…');
  });
  $('#checkoutWebpay').addEventListener('click', payWithWebpay);
  $('#payDone').addEventListener('click', () => { setModal(false); closeCart(); });
}

/* ==========================================================================
   TOASTS
   ========================================================================== */
function toast(message) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.setAttribute('role', 'status');
  const dot = document.createElement('span');
  dot.className = 'toast__dot';
  el.append(dot, document.createTextNode(message));
  toastsEl.appendChild(el);
  while (toastsEl.children.length > 3) toastsEl.firstElementChild.remove();
  setTimeout(() => {
    el.classList.add('is-out');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  }, 2600);
}

/* ==========================================================================
   FORMULARIOS (newsletter + alerta de drop)
   ========================================================================== */
function bindEmailForm(form, msgEl, onSuccess) {
  if (!form || !msgEl) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('input[type="email"]', form);
    const value = input.value.trim();
    const ok = value.length <= 254 && EMAIL_RE.test(value);
    input.setAttribute('aria-invalid', String(!ok));
    msgEl.classList.toggle('is-error', !ok);
    msgEl.classList.toggle('is-success', ok);
    if (!ok) {
      msgEl.textContent = 'Ingresa un correo válido, por ejemplo: nombre@correo.cl';
      input.focus();
      return;
    }
    msgEl.textContent = onSuccess();
    form.reset();
  });
}

function initForms() {
  bindEmailForm($('#newsForm'), $('#newsMsg'), () => {
    toast('¡Suscripción confirmada!');
    return `¡Bienvenido/a al club! Usa el código ${CONFIG.newsletterCode} en tu primera compra.`;
  });
  bindEmailForm($('#dropForm'), $('#dropMsg'), () => {
    toast('Alerta del drop activada');
    return 'Listo. Te avisaremos 1 hora antes del lanzamiento.';
  });
}

/* ==========================================================================
   COUNTDOWN DEL DROP
   ========================================================================== */
function initCountdown() {
  const box = $('#countdown');
  if (!box) return;
  const parsed = CONFIG.dropDate ? new Date(CONFIG.dropDate).getTime() : NaN;
  const target = Number.isFinite(parsed) ? parsed : Date.now() + ((3 * 24 + 7) * 3600 + 42 * 60 + 18) * 1000;
  const units = { d: $('[data-unit="d"]', box), h: $('[data-unit="h"]', box), m: $('[data-unit="m"]', box), s: $('[data-unit="s"]', box) };
  const pad = (n) => String(n).padStart(2, '0');
  let timer = 0;
  const tick = () => {
    const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const vals = { d: Math.floor(diff / 86400), h: Math.floor((diff % 86400) / 3600), m: Math.floor((diff % 3600) / 60), s: diff % 60 };
    Object.entries(vals).forEach(([k, v]) => {
      const el = units[k];
      const txt = pad(v);
      if (!el || el.textContent === txt) return;
      el.textContent = txt;
      if (!reduceMotion) { el.classList.remove('is-tick'); void el.offsetWidth; el.classList.add('is-tick'); }
    });
    if (diff === 0) clearInterval(timer);
  };
  tick();
  timer = setInterval(tick, 1000);
}

/* ==========================================================================
   REVEAL EN SCROLL (IntersectionObserver)
   ========================================================================== */
function initReveal() {
  const els = $$('.reveal, .product');
  if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-visible');
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
}

/* ==========================================================================
   MOTOR DE MOVIMIENTO: parallax, marquees por velocidad de scroll, cursor
   ========================================================================== */
const marquees = [];

function buildMarquees() {
  $$('[data-marquee]').forEach((track) => {
    const group = track.firstElementChild;
    if (!group) return;
    const width = group.getBoundingClientRect().width;
    if (!width) return;
    const needed = Math.ceil((window.innerWidth * 2.3) / width);
    for (let i = 0; i < needed; i++) {
      const c = group.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    }
    marquees.push({ track, group, width, x: 0, dir: Number(track.dataset.marquee) || -1 });
  });
}

function initMotion() {
  if (reduceMotion) return;

  const hero = $('#hero');
  const heroLayers = $$('[data-parallax]').map((el) => ({ el, speed: parseFloat(el.dataset.parallax) || 0, depth: parseFloat(el.dataset.depth) || 0 }));
  const imgLayers = $$('[data-parallax-img]').map((el) => ({ el, frame: el.parentElement, speed: parseFloat(el.dataset.parallaxImg) || 0.1 }));
  const colLayers = $$('[data-speed]').map((el) => ({ el, speed: parseFloat(el.dataset.speed) || 0 }));
  const colRef = colLayers[0]?.el.parentElement;
  const bands = $('.bands');
  const cursor = $('.cursor');

  let bandsVisible = true;
  if (bands && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => { bandsVisible = en.isIntersecting; }).observe(bands);
  }

  let tmx = 0, tmy = 0, mx = 0, my = 0;
  if (finePointer && hero) {
    hero.addEventListener('pointermove', (e) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    });
    hero.addEventListener('pointerleave', () => { tmx = 0; tmy = 0; });
  }

  let cx = -100, cy = -100, ctx = -100, cty = -100;
  if (finePointer && cursor) {
    window.addEventListener('pointermove', (e) => { ctx = e.clientX; cty = e.clientY; cursor.classList.add('is-active'); }, { passive: true });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-active'));
    document.addEventListener('pointerover', (e) => {
      cursor.classList.toggle('is-hover', !!e.target.closest('a, button, input, .product__media, .lb-item'));
    });
  }

  let prevY = window.scrollY;
  let velocity = 0;
  let scrollDir = 1;

  const frame = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const wide = window.innerWidth > 960;

    // Lecturas (antes de escribir estilos para evitar layout thrashing)
    const imgRects = imgLayers.map((l) => l.frame.getBoundingClientRect());
    const colRect = wide && colRef ? colRef.getBoundingClientRect() : null;

    const delta = y - prevY;
    prevY = y;
    velocity += (delta - velocity) * 0.12;
    if (Math.abs(delta) > 0.5) scrollDir = delta > 0 ? 1 : -1;

    mx += (tmx - mx) * 0.07;
    my += (tmy - my) * 0.07;

    if (y < vh * 1.3) {
      heroLayers.forEach((l) => {
        l.el.style.transform = `translate3d(${(mx * l.depth).toFixed(2)}px, ${(y * l.speed + my * l.depth).toFixed(2)}px, 0)`;
      });
    }

    imgLayers.forEach((l, i) => {
      const r = imgRects[i];
      if (r.bottom < -150 || r.top > vh + 150) return;
      const offset = (r.top + r.height / 2 - vh / 2) * -l.speed;
      l.el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    });

    if (colRect && colRect.bottom > 0 && colRect.top < vh) {
      const center = colRect.top + colRect.height / 2 - vh / 2;
      colLayers.forEach((l) => { l.el.style.transform = `translate3d(0, ${(center * l.speed).toFixed(2)}px, 0)`; });
    }

    if (bandsVisible) {
      const boost = Math.min(Math.abs(velocity) * 0.35, 14);
      marquees.forEach((m) => {
        m.x += m.dir * scrollDir * (0.7 + boost);
        if (m.x <= -m.width) m.x += m.width;
        else if (m.x > 0) m.x -= m.width;
        m.track.style.transform = `translate3d(${m.x.toFixed(2)}px, 0, 0)`;
      });
    }

    if (finePointer && cursor) {
      cx += (ctx - cx) * 0.2;
      cy += (cty - cy) * 0.2;
      cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
    }

    requestAnimationFrame(frame);
  };

  fontsReady.then(() => { buildMarquees(); requestAnimationFrame(frame); });
}

/* ---------- Botones magnéticos ---------- */
function initMagnetic() {
  if (!finePointer || reduceMotion) return;
  $$('.magnetic').forEach((el) => {
    const inner = el.firstElementChild;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
      if (inner) inner.style.transform = `translate(${x * 0.12}px, ${y * 0.15}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
      if (inner) inner.style.transform = '';
    });
  });
}

/* ---------- Wordmark gigante del footer (se ajusta al ancho) ---------- */
function fitMark() {
  const mark = $('.footer__mark');
  if (!mark) return;
  mark.style.fontSize = '100px';
  const w = mark.getBoundingClientRect().width;
  const target = mark.parentElement.clientWidth;
  if (w) mark.style.fontSize = `${Math.floor((100 * target * 0.96) / w)}px`;
}

/* ==========================================================================
   EVENTOS GLOBALES + ACCESIBILIDAD
   ========================================================================== */
function trapFocus(box, e, extra = []) {
  const focusables = [...extra, ...$$('a[href], button:not([disabled]), input:not([disabled])', box)]
    .filter((el) => el.getClientRects().length);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;
  if (!focusables.includes(active)) { e.preventDefault(); first.focus(); }
  else if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
}

function initGlobal() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOpen) { if (!modalBusy) setModal(false); }
      else if (cartOpen) closeCart();
      else if (menuOpen) { setMenu(false); burger.focus(); }
    }
    if (e.key === 'Tab') {
      if (modalOpen) trapFocus(modalEl, e);
      else if (cartOpen) trapFocus(cartEl, e);
      else if (menuOpen) trapFocus(mobileMenu, e, [burger]);
    }
  });

  document.addEventListener('click', (e) => {
    const quick = e.target.closest('[data-quick-add]');
    if (quick) {
      addToCart(quick.dataset.quickAdd, quick.dataset.size, quick.closest('[data-product-ref]')?.querySelector('img'));
      return;
    }
    const goto = e.target.closest('[data-goto-filter]');
    if (goto) { e.preventDefault(); setFilter(goto.dataset.gotoFilter, { scroll: true }); return; }
    const dead = e.target.closest('a[href="#"]');
    if (dead) { e.preventDefault(); toast('Enlace de demostración'); }
  });

  // Rellena nombre y precio de productos destacados fuera del catálogo
  $$('[data-product-ref]').forEach((el) => {
    const p = PRODUCT_MAP.get(el.dataset.productRef);
    if (!p) return;
    const name = $('[data-ref-name]', el);
    const price = $('[data-ref-price]', el);
    if (name) name.textContent = p.name;
    if (price) price.textContent = fmt(p.price);
  });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      movePill($('.filter.is-active'), true);
      fitMark();
      marquees.forEach((m) => { m.width = m.group.getBoundingClientRect().width || m.width; });
      if (menuOpen && window.innerWidth > 960) setMenu(false);
    }, 150);
  });

  document.addEventListener('error', (e) => {
    if (e.target instanceof HTMLImageElement) e.target.classList.add('is-broken');
  }, true);
}

/* ==========================================================================
   INIT
   ========================================================================== */
applyBrand();
renderProducts();
initPreloader();
initHeader();
initMenu();
initFilters();
initProductEvents();
initCart();
initForms();
initCountdown();
initReveal();
initMagnetic();
initGlobal();
initMotion();
fontsReady.then(() => { initTicker(); fitMark(); });
