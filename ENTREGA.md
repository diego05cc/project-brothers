:root {
  --ink: #421f2f;
  --ink-soft: #684453;
  --berry: #8b2852;
  --berry-dark: #691d3d;
  --rose: #f7d7e2;
  --rose-soft: #fff4f7;
  --blush: #fbe8ee;
  --cream: #fffaf5;
  --white: #ffffff;
  --gold: #b27638;
  --focus: #174f68;
  --line: #e7bfcd;
  --shadow: 0 18px 45px rgba(96, 36, 62, 0.13);
  --radius-small: 0.8rem;
  --radius-medium: 1.25rem;
  --radius-large: 2rem;
  --shell: 72rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--cream);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 4px;
}

.skip-link {
  position: fixed;
  z-index: 100;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.7rem 1rem;
  color: var(--white);
  background: var(--focus);
  border-radius: 0.65rem;
  font-weight: 800;
  transform: translateY(-160%);
  transition: transform 160ms ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.shell {
  width: min(100% - 2rem, var(--shell));
  margin-inline: auto;
}

.demo-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 2.35rem;
  padding: 0.45rem 1rem;
  color: var(--white);
  background: var(--berry-dark);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  line-height: 1.35;
  text-align: center;
  text-transform: uppercase;
}

.demo-banner span {
  color: #ffc9da;
  font-size: 0.55rem;
}

.site-header {
  position: relative;
  z-index: 10;
  background: rgba(255, 250, 245, 0.96);
  border-bottom: 1px solid rgba(139, 40, 82, 0.12);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.5rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 2.65rem;
  height: 2.65rem;
  place-items: center;
  background: var(--rose);
  border: 1px solid #dfa9bb;
  border-radius: 50% 50% 44% 56% / 48% 43% 57% 52%;
  box-shadow: inset 0 0 0 0.3rem rgba(255, 255, 255, 0.45);
  transform: rotate(-5deg);
}

.brand-heart {
  color: var(--berry);
  font-size: 1.15rem;
  transform: rotate(5deg);
}

.brand > span:last-child {
  display: flex;
  line-height: 1;
}

.brand strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.3rem;
}

.brand small {
  align-self: flex-end;
  margin: 0 0 0.08rem 0.22rem;
  color: var(--berry);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.primary-nav {
  display: none;
  align-items: center;
  gap: 0.35rem;
}

.primary-nav a {
  padding: 0.5rem 0.7rem;
  color: var(--ink-soft);
  border-radius: 0.6rem;
  font-size: 0.9rem;
  font-weight: 750;
  text-decoration: none;
}

.primary-nav a:hover {
  color: var(--berry);
  background: var(--blush);
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 3rem 0 3.5rem;
  background:
    radial-gradient(circle at 5% 12%, rgba(255, 255, 255, 0.95) 0 3.5rem, transparent 3.6rem),
    radial-gradient(circle at 97% 78%, rgba(139, 40, 82, 0.08) 0 7rem, transparent 7.1rem),
    linear-gradient(145deg, #fff9f7 0%, #fde8ef 64%, #f7d5e0 100%);
}

.hero::before,
.hero::after {
  position: absolute;
  content: "";
  border: 1px solid rgba(139, 40, 82, 0.13);
  border-radius: 50%;
  pointer-events: none;
}

.hero::before {
  top: 4%;
  right: -4rem;
  width: 9rem;
  height: 9rem;
}

.hero::after {
  bottom: -3rem;
  left: -2rem;
  width: 6rem;
  height: 6rem;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.25rem;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.65rem;
  color: var(--berry);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.eyebrow span {
  font-size: 0.75rem;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

h1 {
  max-width: 15ch;
  margin-bottom: 1.1rem;
  font-size: clamp(2.45rem, 11vw, 4.7rem);
}

h2 {
  margin-bottom: 0;
  font-size: clamp(2rem, 8vw, 3.2rem);
}

h3 {
  line-height: 1.25;
}

.hero-lede {
  max-width: 39rem;
  margin-bottom: 1.55rem;
  color: var(--ink-soft);
  font-size: 1.03rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.button,
.mini-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.72rem 1.1rem;
  border: 2px solid transparent;
  border-radius: 999px;
  font-weight: 850;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.button:hover,
.mini-button:hover {
  transform: translateY(-2px);
}

.button-primary {
  color: var(--white);
  background: var(--berry);
  border-color: var(--berry);
  box-shadow: 0 10px 24px rgba(105, 29, 61, 0.18);
}

.button-primary:hover {
  background: var(--berry-dark);
  border-color: var(--berry-dark);
}

.button-secondary {
  color: var(--berry-dark);
  background: rgba(255, 255, 255, 0.72);
  border-color: #b76785;
}

.button-secondary:hover {
  background: var(--white);
}

.pending-note {
  max-width: 38rem;
  margin: 1.1rem 0 0;
  padding-left: 0.85rem;
  color: #684453;
  border-left: 3px solid #be6e8d;
  font-size: 0.82rem;
}

.hero-card {
  position: relative;
  align-self: center;
  max-width: 28rem;
  width: 100%;
  margin-inline: auto;
  padding: 1.2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(139, 40, 82, 0.2);
  border-radius: var(--radius-large);
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
}

.hero-card::after {
  position: absolute;
  right: -2.2rem;
  bottom: -2.2rem;
  width: 5.8rem;
  height: 5.8rem;
  content: "";
  background: var(--rose);
  border-radius: 50%;
  opacity: 0.72;
}

.hero-card-top,
.hero-card-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.tiny-label,
.product-status {
  color: var(--berry);
  font-size: 0.68rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.heart-chip {
  display: grid;
  width: 2rem;
  height: 2rem;
  color: var(--berry);
  background: var(--rose);
  border-radius: 50%;
  place-items: center;
}

.plate {
  position: relative;
  display: grid;
  width: 11.5rem;
  height: 11.5rem;
  margin: 1.15rem auto;
  background:
    radial-gradient(circle at center, #f5b7c9 0 19%, transparent 20%),
    radial-gradient(circle at center, #fbe6ec 0 46%, #d990a8 47% 49%, #fffaf8 50% 66%, #edb7c8 67% 70%, #fff 71%);
  border-radius: 50%;
  box-shadow: 0 12px 30px rgba(96, 36, 62, 0.13);
  place-items: center;
}

.plate::before,
.plate::after {
  position: absolute;
  content: "";
  background: var(--berry);
  border-radius: 999px 999px 65% 65%;
  transform-origin: bottom center;
}

.plate::before {
  width: 2.65rem;
  height: 3.4rem;
  transform: rotate(-37deg) translate(0.35rem, -0.15rem);
}

.plate::after {
  width: 2.65rem;
  height: 3.4rem;
  transform: rotate(37deg) translate(-0.35rem, -0.15rem);
}

.plate-detail {
  position: absolute;
  z-index: 2;
  width: 0.48rem;
  height: 0.48rem;
  background: #ffd8e3;
  border-radius: 50%;
}

.plate-detail-one {
  transform: translate(-1.2rem, -0.25rem);
}

.plate-detail-two {
  transform: translate(1.2rem, -0.25rem);
}

.plate-detail-three {
  transform: translate(0, 1rem);
}

.hero-card-product {
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.hero-card-product div {
  min-width: 0;
}

.hero-card-product span,
.hero-card-product strong {
  display: block;
}

.hero-card-product span {
  color: var(--ink-soft);
  font-size: 0.76rem;
}

.hero-card-product strong {
  overflow-wrap: anywhere;
  font-size: 0.92rem;
}

.hero-card-product b {
  flex: 0 0 auto;
  color: var(--berry);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1rem;
}

.hero-card > p {
  position: relative;
  z-index: 1;
  margin: 0.75rem 0 0;
  color: var(--ink-soft);
  font-size: 0.72rem;
}

.trust-strip {
  color: var(--white);
  background: var(--berry-dark);
}

.trust-grid {
  display: grid;
}

.trust-grid > div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
}

.trust-grid > div + div {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.trust-icon {
  display: grid;
  flex: 0 0 auto;
  width: 2.2rem;
  height: 2.2rem;
  color: var(--berry-dark);
  background: #f8d2df;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 900;
  place-items: center;
}

.trust-grid p {
  margin: 0;
  line-height: 1.25;
}

.trust-grid strong,
.trust-grid small {
  display: block;
}

.trust-grid strong {
  font-size: 0.87rem;
}

.trust-grid small {
  margin-top: 0.18rem;
  color: #f4cfdb;
  font-size: 0.72rem;
}

.section {
  padding: 4.5rem 0;
}

.menu-section {
  background: var(--cream);
}

.section-heading {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-heading > p {
  max-width: 34rem;
  margin-bottom: 0;
  color: var(--ink-soft);
}

.product-grid {
  display: grid;
  gap: 1rem;
}

.product-card {
  overflow: hidden;
  background: var(--white);
  border: 1px solid #ead1da;
  border-radius: var(--radius-medium);
  box-shadow: 0 10px 28px rgba(96, 36, 62, 0.08);
}

.product-visual {
  position: relative;
  display: grid;
  min-height: 10rem;
  overflow: hidden;
  place-items: center;
}

.tone-strawberry {
  background: #f9d9e4;
}

.tone-vanilla {
  background: #f9edda;
}

.tone-cocoa {
  background: #ead8d4;
}

.visual-center {
  position: relative;
  z-index: 2;
  display: grid;
  width: 5.8rem;
  height: 5.8rem;
  color: var(--berry);
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(139, 40, 82, 0.25);
  border-radius: 50% 50% 43% 57% / 56% 44% 56% 44%;
  box-shadow: 0 12px 24px rgba(96, 36, 62, 0.12);
  font-size: 1.9rem;
  transform: rotate(-7deg);
  place-items: center;
}

.visual-dot {
  position: absolute;
  border: 1px solid rgba(139, 40, 82, 0.16);
  border-radius: 50%;
}

.visual-dot-one {
  top: -1.5rem;
  right: -0.7rem;
  width: 5rem;
  height: 5rem;
}

.visual-dot-two {
  bottom: -2rem;
  left: -1rem;
  width: 6rem;
  height: 6rem;
}

.product-copy {
  padding: 1.15rem;
}

.product-status {
  margin-bottom: 0.35rem;
}

.product-copy h3 {
  margin-bottom: 0.45rem;
  overflow-wrap: anywhere;
  font-size: 1.03rem;
}

.product-copy > p:not(.product-status) {
  margin-bottom: 1rem;
  color: var(--ink-soft);
  font-size: 0.86rem;
}

.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.9rem;
  border-top: 1px solid #eed9e0;
}

.product-bottom strong {
  min-width: 0;
  color: var(--berry-dark);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1rem;
  overflow-wrap: anywhere;
}

.mini-button {
  flex: 0 0 auto;
  min-height: 2.45rem;
  padding: 0.48rem 0.85rem;
  color: var(--berry-dark);
  background: var(--rose-soft);
  border-color: #c67b97;
  font-size: 0.76rem;
}

.mini-button:hover {
  color: var(--white);
  background: var(--berry-dark);
  border-color: var(--berry-dark);
}

.menu-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 1.25rem;
  padding: 1rem;
  background: #fff1f5;
  border: 1px solid #deb0c0;
  border-radius: var(--radius-small);
}

.menu-disclaimer > span {
  display: grid;
  flex: 0 0 auto;
  width: 1.65rem;
  height: 1.65rem;
  color: var(--white);
  background: var(--berry);
  border-radius: 50%;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.82rem;
  font-weight: 900;
  place-items: center;
}

.menu-disclaimer p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.82rem;
}

.menu-disclaimer strong {
  color: var(--ink);
}

.details-section {
  background:
    linear-gradient(rgba(255, 255, 255, 0.68), rgba(255, 255, 255, 0.68)),
    repeating-linear-gradient(
      90deg,
      transparent 0 2rem,
      rgba(139, 40, 82, 0.05) 2rem 2.08rem
    ),
    var(--blush);
  border-top: 1px solid #eed1db;
}

.detail-grid {
  display: grid;
  gap: 1rem;
}

.detail-card {
  position: relative;
  min-width: 0;
  padding: 1.25rem;
  overflow: hidden;
  background: var(--white);
  border: 1px solid #e6c3cf;
  border-radius: var(--radius-medium);
}

.detail-number {
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  color: #e9c0cf;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
}

.detail-card h3 {
  position: relative;
  margin-bottom: 1rem;
  padding-right: 2.6rem;
  font-size: 1.05rem;
}

.placeholder {
  color: var(--berry-dark);
  font-weight: 850;
  overflow-wrap: anywhere;
}

.detail-card .placeholder {
  min-height: 3.2rem;
  margin-bottom: 0.75rem;
}

.detail-card small,
.order-policy small {
  display: block;
  color: var(--ink-soft);
  font-size: 0.76rem;
}

.order-policy {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1.35rem;
  color: var(--white);
  background: var(--berry-dark);
  border-radius: var(--radius-medium);
  box-shadow: 0 14px 34px rgba(67, 19, 39, 0.14);
}

.policy-mark {
  display: grid;
  width: 3.25rem;
  height: 3.25rem;
  color: var(--berry-dark);
  background: #f6cedb;
  border-radius: 50%;
  place-items: center;
}

.order-policy .eyebrow {
  margin-bottom: 0.3rem;
  color: #f7cada;
}

.order-policy h3 {
  margin-bottom: 0.65rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
}

.order-policy .placeholder {
  margin-bottom: 0.45rem;
  color: var(--white);
}

.order-policy small {
  color: #f3ccd8;
}

.contact-section {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background:
    radial-gradient(circle at 90% 15%, rgba(255, 255, 255, 0.12) 0 7rem, transparent 7.1rem),
    var(--berry);
}

.contact-section::after {
  position: absolute;
  bottom: -6rem;
  left: -6rem;
  width: 14rem;
  height: 14rem;
  content: "";
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
}

.contact-shell {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
}

.contact-copy .eyebrow {
  color: #ffd6e4;
}

.contact-copy h2 {
  max-width: 13ch;
  margin-bottom: 1rem;
}

.contact-copy > p:not(.eyebrow) {
  max-width: 38rem;
  color: #ffe7ef;
}

.contact-value {
  margin: 1.3rem 0;
  padding: 0.9rem 0;
  border-block: 1px solid rgba(255, 255, 255, 0.27);
}

.contact-value span,
.contact-value strong {
  display: block;
}

.contact-value span {
  margin-bottom: 0.2rem;
  color: #ffd6e4;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-value strong {
  overflow-wrap: anywhere;
}

.button-light {
  width: 100%;
  color: var(--berry-dark);
  background: var(--white);
  border-color: var(--white);
}

.button-light:hover {
  color: var(--white);
  background: var(--berry-dark);
  border-color: var(--white);
}

.pending-panel {
  padding: 1.3rem;
  color: var(--ink);
  background: var(--rose-soft);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow);
}

.pending-panel h3 {
  margin-bottom: 1rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.45rem;
}

.pending-panel ul {
  display: grid;
  gap: 0.6rem;
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
}

.pending-panel li {
  position: relative;
  padding-left: 1.35rem;
  color: var(--ink-soft);
  font-size: 0.88rem;
}

.pending-panel li::before {
  position: absolute;
  top: 0.25rem;
  left: 0;
  color: var(--berry);
  content: "♥";
  font-size: 0.7rem;
}

.pending-panel p {
  margin: 0;
  padding-top: 0.85rem;
  color: var(--ink-soft);
  border-top: 1px solid var(--line);
  font-size: 0.78rem;
}

.pending-panel strong {
  color: var(--ink);
}

.site-footer {
  padding: 2rem 0;
  color: #f9dce6;
  background: #351522;
}

.footer-inner {
  display: grid;
  gap: 1.25rem;
}

.footer-inner strong {
  color: var(--white);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1rem;
}

.footer-inner p {
  margin: 0.2rem 0 0;
  font-size: 0.74rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
  min-height: 2.75rem;
  padding: 0.45rem 0;
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 800;
  text-underline-offset: 0.25rem;
}

.back-link:hover {
  color: #ffd1e0;
}

@media (min-width: 34rem) {
  .primary-nav {
    display: flex;
  }

  .hero-actions {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .button {
    width: auto;
  }

  .product-grid,
  .detail-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-card:last-child,
  .detail-card:last-child {
    grid-column: 1 / -1;
  }

  .order-policy {
    grid-template-columns: auto 1fr;
    align-items: start;
    padding: 1.6rem;
  }

  .button-light {
    width: fit-content;
  }
}

@media (min-width: 48rem) {
  .shell {
    width: min(100% - 3rem, var(--shell));
  }

  .site-header {
    position: sticky;
    top: 0;
    backdrop-filter: blur(12px);
  }

  .hero {
    padding: 5rem 0;
  }

  .hero-grid {
    grid-template-columns: minmax(0, 1.15fr) minmax(19rem, 0.85fr);
    align-items: center;
    gap: 3rem;
  }

  .hero-card {
    padding: 1.4rem;
  }

  .trust-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .trust-grid > div {
    justify-content: center;
    padding: 1.25rem 1rem;
  }

  .trust-grid > div + div {
    border-top: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.18);
  }

  .section {
    padding: 6rem 0;
  }

  .section-heading {
    grid-template-columns: minmax(0, 1fr) minmax(17rem, 0.7fr);
    align-items: end;
    margin-bottom: 2.75rem;
  }

  .contact-shell {
    grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.75fr);
    align-items: center;
    gap: 4rem;
  }

  .footer-inner {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
}

@media (min-width: 64rem) {
  .product-grid,
  .detail-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .product-card:last-child,
  .detail-card:last-child {
    grid-column: auto;
  }

  .product-visual {
    min-height: 12rem;
  }

  .order-policy {
    margin-top: 1.25rem;
    padding: 1.8rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
