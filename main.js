:root {
  --cream: #fbf6ee;
  --cream-deep: #f2e8da;
  --paper: #fffdf9;
  --ink: #173029;
  --muted: #5b6762;
  --forest: #174d3e;
  --forest-deep: #10382e;
  --terracotta: #a6402c;
  --terracotta-dark: #843121;
  --peach: #efc7ad;
  --gold: #e8b94f;
  --rose: #f6dadd;
  --line: #d8d4ca;
  --white: #ffffff;
  --shadow-sm: 0 12px 32px rgba(23, 48, 41, 0.08);
  --shadow-lg: 0 28px 70px rgba(23, 48, 41, 0.16);
  --radius-sm: 0.75rem;
  --radius-md: 1.25rem;
  --radius-lg: 2rem;
  --container: 72rem;
  --font-body: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --font-display: Georgia, "Times New Roman", serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 9rem;
}

html[data-language="es"] [data-lang="en"],
html[data-language="en"] [data-lang="es"],
[data-lang][hidden] {
  display: none !important;
}

body {
  margin: 0;
  min-width: 20rem;
  overflow-x: hidden;
  color: var(--ink);
  background: var(--cream);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2 {
  font-family: var(--font-display);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.04;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: clamp(2.75rem, 12vw, 5.7rem);
}

h1 em {
  display: block;
  color: var(--terracotta);
  font-weight: 500;
}

h2 {
  margin-bottom: 1.25rem;
  font-size: clamp(2.15rem, 8.5vw, 4rem);
}

h3 {
  color: var(--ink);
  font-size: 1.18rem;
  line-height: 1.25;
}

p {
  color: var(--muted);
}

.container {
  width: min(100% - 2rem, var(--container));
  margin-inline: auto;
}

.section {
  padding-block: 5.5rem;
}

.skip-link {
  position: fixed;
  z-index: 1000;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: var(--white);
  background: var(--forest-deep);
  font-weight: 700;
  text-decoration: none;
  transform: translateY(-160%);
  transition: transform 160ms ease;
}

.skip-link:focus {
  transform: translateY(0);
}

:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 4px;
}

.site-header {
  position: sticky;
  z-index: 100;
  top: 0;
  border-bottom: 1px solid rgba(23, 48, 41, 0.12);
  background: rgba(251, 246, 238, 0.96);
  box-shadow: 0 6px 20px rgba(23, 48, 41, 0.04);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.75rem;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 0.7rem;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 2.7rem;
  height: 2.7rem;
  place-items: center;
  border-radius: 50% 50% 46% 54% / 45% 52% 48% 55%;
  color: var(--white);
  background: var(--forest);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  transform: rotate(-3deg);
}

.brand-name {
  display: flex;
  flex-direction: column;
  color: var(--ink);
  font-size: 0.71rem;
  line-height: 1.05;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.brand-name strong {
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: -0.02em;
  text-transform: none;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.language-switcher {
  display: inline-flex;
  padding: 0.2rem;
  border: 1px solid rgba(23, 48, 41, 0.18);
  border-radius: 999px;
  background: var(--paper);
}

.language-button {
  min-width: 2.5rem;
  min-height: 2.5rem;
  padding: 0.35rem 0.6rem;
  border: 0;
  border-radius: 999px;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.language-button.is-active,
.language-button[aria-pressed="true"] {
  color: var(--white);
  background: var(--forest);
}

.site-nav {
  display: flex;
  gap: 1.45rem;
  overflow-x: auto;
  padding-bottom: 0.85rem;
  scrollbar-width: none;
}

.site-nav::-webkit-scrollbar {
  display: none;
}

.site-nav a {
  flex: 0 0 auto;
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.site-nav a:hover {
  color: var(--terracotta);
}

.button {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.85rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  color: var(--white);
  background: var(--terracotta);
  box-shadow: 0 10px 24px rgba(166, 64, 44, 0.22);
}

.button-primary:hover {
  background: var(--terracotta-dark);
  box-shadow: 0 14px 28px rgba(166, 64, 44, 0.28);
}

.button-dark {
  color: var(--white);
  background: var(--ink);
}

.button-dark:hover {
  background: var(--forest-deep);
}

.button-outline {
  border-color: var(--forest);
  color: var(--forest);
  background: transparent;
}

.button-outline:hover {
  color: var(--white);
  background: var(--forest);
}

.button-small {
  min-height: 2.75rem;
  padding: 0.65rem 1rem;
  font-size: 0.82rem;
}

.button-full {
  width: 100%;
}

.button-arrow {
  font-size: 1.2em;
  transition: transform 180ms ease;
}

.button:hover .button-arrow {
  transform: translateX(0.2rem);
}

.header-cta {
  display: none;
}

.hero {
  position: relative;
  overflow: hidden;
  padding-block: 4.5rem 5.5rem;
  background:
    radial-gradient(circle at 8% 15%, rgba(239, 199, 173, 0.48) 0 9rem, transparent 9.1rem),
    linear-gradient(180deg, var(--cream) 0%, #f8f0e5 100%);
}

.hero::after {
  position: absolute;
  right: -5rem;
  bottom: -7rem;
  width: 18rem;
  height: 18rem;
  border: 1px solid rgba(23, 77, 62, 0.18);
  border-radius: 50%;
  content: "";
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 4rem;
}

.hero-copy {
  max-width: 45rem;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1rem;
  color: var(--terracotta-dark);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.3;
  text-transform: uppercase;
}

.eyebrow > span[aria-hidden="true"] {
  width: 1.5rem;
  height: 2px;
  flex: 0 0 auto;
  background: currentColor;
}

.eyebrow-light {
  color: var(--peach);
}

.hero-lede {
  max-width: 40rem;
  margin-bottom: 1.75rem;
  color: #45564f;
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.1rem;
}

.text-link {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.5rem;
  color: var(--forest);
  font-weight: 800;
  text-underline-offset: 0.25rem;
}

.hero-points {
  display: grid;
  margin: 2.25rem 0 0;
  padding: 0;
  gap: 0.65rem;
  list-style: none;
}

.hero-points li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 700;
}

.check {
  display: inline-grid;
  width: 1.55rem;
  height: 1.55rem;
  place-items: center;
  border-radius: 50%;
  color: var(--forest);
  background: rgba(23, 77, 62, 0.12);
  font-size: 0.78rem;
}

.hero-visual {
  position: relative;
  width: min(100%, 31rem);
  min-height: 25rem;
  margin-inline: auto;
}

.sun-shape {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: var(--gold);
  opacity: 0.78;
}

.storefront-card {
  position: absolute;
  z-index: 2;
  inset: 1rem 1rem 2rem 0;
  overflow: hidden;
  border: 1px solid rgba(23, 48, 41, 0.22);
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: var(--shadow-lg);
  transform: rotate(-1.5deg);
}

.preview-topbar {
  display: flex;
  height: 2.5rem;
  align-items: center;
  padding-inline: 1rem;
  gap: 0.4rem;
  border-bottom: 1px solid var(--line);
}

.preview-topbar span {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: var(--peach);
}

.preview-topbar span:nth-child(2) {
  background: var(--gold);
}

.preview-topbar span:nth-child(3) {
  background: #8db6a6;
}

.preview-window {
  padding: 2rem 1.3rem 1.5rem;
  background:
    linear-gradient(rgba(255, 253, 249, 0.7), rgba(255, 253, 249, 0.7)),
    repeating-linear-gradient(90deg, transparent 0 1.95rem, rgba(23, 48, 41, 0.04) 2rem);
}

.preview-sign {
  width: fit-content;
  margin: 0 auto 1.15rem;
  padding: 0.5rem 1.1rem;
  border-radius: 0.35rem;
  color: var(--white);
  background: var(--forest);
  font-family: var(--font-display);
  font-size: 1.1rem;
}

.awning {
  display: grid;
  height: 3rem;
  grid-template-columns: repeat(5, 1fr);
  overflow: hidden;
  border-radius: 0.65rem 0.65rem 1rem 1rem;
}

.awning span {
  background: var(--terracotta);
}

.awning span:nth-child(even) {
  background: var(--cream);
}

.storefront {
  display: grid;
  min-height: 11rem;
  grid-template-columns: 1fr 30%;
  gap: 0.65rem;
  padding: 0.65rem;
  border: 0.45rem solid var(--ink);
  border-top: 0;
  background: var(--cream-deep);
}

.store-window,
.store-door {
  border: 0.3rem solid var(--forest);
  background: rgba(141, 182, 166, 0.42);
}

.store-window {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}

.window-line {
  width: 58%;
  height: 0.4rem;
  margin-bottom: 0.55rem;
  border-radius: 999px;
  background: var(--forest);
  opacity: 0.5;
}

.window-line.wide {
  width: 82%;
}

.window-button {
  margin-top: 0.55rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  color: var(--white);
  background: var(--terracotta);
  font-size: 0.62rem;
  font-weight: 800;
}

.store-door {
  position: relative;
}

.store-door span {
  position: absolute;
  top: 50%;
  right: 0.35rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: var(--gold);
}

.preview-footer {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  gap: 0.45rem;
  color: var(--muted);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.preview-footer > span:not(.preview-url) {
  display: grid;
  width: 1.65rem;
  height: 1.65rem;
  place-items: center;
  border-radius: 50%;
  color: var(--forest);
  background: var(--cream-deep);
}

.preview-url {
  margin-left: auto;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  letter-spacing: 0;
}

.floating-note {
  position: absolute;
  z-index: 3;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(23, 48, 41, 0.12);
  border-radius: 0.75rem;
  color: var(--ink);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-display);
  font-size: 0.8rem;
}

.note-one {
  top: 0;
  left: 0;
  transform: rotate(-5deg);
}

.note-two {
  right: 0;
  bottom: 0;
  transform: rotate(4deg);
}

.trust-strip {
  border-block: 1px solid rgba(23, 48, 41, 0.16);
  background: var(--paper);
}

.trust-inner {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 1.25rem;
  gap: 1rem;
}

.trust-inner > p {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 1.08rem;
}

.trust-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.trust-tags span {
  padding: 0.35rem 0.7rem;
  border: 1px solid rgba(23, 77, 62, 0.2);
  border-radius: 999px;
  color: var(--forest);
  background: rgba(23, 77, 62, 0.06);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading {
  max-width: 48rem;
  margin-bottom: 3rem;
}

.section-heading > p:not(.eyebrow) {
  max-width: 40rem;
  margin-bottom: 0;
  font-size: 1.05rem;
}

.section-heading-centered {
  margin-inline: auto;
  text-align: center;
}

.section-heading-centered .eyebrow {
  justify-content: center;
}

.section-heading-centered > p:not(.eyebrow) {
  margin-inline: auto;
}

.services-section {
  background: var(--paper);
}

.services-grid {
  display: grid;
  gap: 1rem;
}

.service-card {
  position: relative;
  min-height: 17rem;
  overflow: hidden;
  padding: 1.6rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--cream);
  transition:
    border-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.service-card::after {
  position: absolute;
  right: -2.5rem;
  bottom: -2.5rem;
  width: 6rem;
  height: 6rem;
  border: 1px solid rgba(166, 64, 44, 0.18);
  border-radius: 50%;
  content: "";
}

.service-card:hover {
  border-color: rgba(23, 77, 62, 0.38);
  box-shadow: var(--shadow-sm);
  transform: translateY(-3px);
}

.service-number {
  display: inline-flex;
  margin-bottom: 2.4rem;
  color: var(--terracotta);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
}

.service-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.28rem;
}

.service-card p {
  margin-bottom: 0;
  font-size: 0.94rem;
}

.process-section {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background: var(--forest);
}

.process-section::before {
  position: absolute;
  top: -12rem;
  left: -8rem;
  width: 25rem;
  height: 25rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  content: "";
}

.process-layout {
  position: relative;
  display: grid;
  gap: 3.5rem;
}

.process-intro h2,
.process-intro p:not(.eyebrow) {
  color: var(--white);
}

.process-intro p:not(.eyebrow) {
  color: rgba(255, 255, 255, 0.76);
}

.process-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.process-list li {
  display: grid;
  grid-template-columns: 3.3rem 1fr;
  padding-block: 1.4rem;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.process-list li:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.step-number {
  display: grid;
  width: 2.9rem;
  height: 2.9rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 50%;
  color: var(--peach);
  font-family: var(--font-display);
  font-size: 0.8rem;
}

.process-list h3 {
  margin-bottom: 0.45rem;
  color: var(--white);
}

.process-list p {
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
}

.demo-section {
  background:
    radial-gradient(circle at 100% 0%, rgba(246, 218, 221, 0.8) 0 16rem, transparent 16.1rem),
    var(--cream);
}

.demo-card {
  display: grid;
  overflow: hidden;
  border: 1px solid rgba(94, 56, 61, 0.18);
  border-radius: var(--radius-lg);
  background: #fff8f8;
  box-shadow: var(--shadow-sm);
}

.demo-copy {
  padding: 2rem 1.5rem;
}

.demo-copy h2 {
  color: #5d343a;
}

.demo-copy > p:not(.eyebrow) {
  max-width: 39rem;
}

.demo-disclaimer {
  padding-left: 0.85rem;
  border-left: 3px solid #bc7180;
  font-size: 0.85rem;
}

.demo-preview {
  position: relative;
  display: grid;
  min-height: 28rem;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.9) 0 1.8rem, transparent 1.9rem),
    radial-gradient(circle at 80% 75%, rgba(255, 255, 255, 0.7) 0 3rem, transparent 3.1rem),
    var(--rose);
}

.demo-phone {
  position: relative;
  z-index: 2;
  width: 13.5rem;
  min-height: 25rem;
  padding: 2rem 1.15rem 1.3rem;
  border: 0.4rem solid #55383e;
  border-radius: 2.25rem;
  background: #fffafa;
  box-shadow: 0 24px 50px rgba(93, 52, 58, 0.22);
  transform: rotate(3deg);
}

.phone-speaker {
  position: absolute;
  top: 0.65rem;
  left: 50%;
  width: 3rem;
  height: 0.35rem;
  border-radius: 999px;
  background: #55383e;
  transform: translateX(-50%);
}

.demo-brand {
  color: #8b4856;
  font-family: var(--font-display);
  font-size: 1.6rem;
  text-align: center;
}

.demo-heart {
  display: grid;
  width: 4.3rem;
  height: 4.3rem;
  margin: 1rem auto;
  place-items: center;
  border-radius: 50%;
  color: #a95869;
  background: var(--rose);
  font-family: var(--font-display);
  font-size: 2.6rem;
}

.demo-lines {
  display: grid;
  justify-items: center;
  gap: 0.45rem;
}

.demo-lines span {
  width: 55%;
  height: 0.4rem;
  border-radius: 999px;
  background: #d9afb7;
}

.demo-lines .wide {
  width: 82%;
}

.demo-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-block: 1.3rem;
  gap: 0.5rem;
}

.demo-products span {
  aspect-ratio: 1;
  border-radius: 0.7rem;
  background: linear-gradient(145deg, #f2cfd4, #e8aeb8);
}

.demo-button {
  padding: 0.65rem;
  border-radius: 999px;
  color: var(--white);
  background: #8b4856;
  font-size: 0.7rem;
  font-weight: 800;
  text-align: center;
}

.demo-flower {
  position: absolute;
  color: #a95869;
  font-size: 2rem;
}

.flower-one {
  top: 2rem;
  left: 1.5rem;
}

.flower-two {
  right: 1.5rem;
  bottom: 2rem;
}

.pricing-section {
  background: var(--paper);
}

.pricing-grid {
  display: grid;
  align-items: stretch;
  gap: 1.25rem;
}

.price-card {
  position: relative;
  display: flex;
  min-height: 34rem;
  flex-direction: column;
  padding: 1.7rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--cream);
}

.price-card-featured {
  border: 2px solid var(--terracotta);
  background: #fff9f3;
  box-shadow: var(--shadow-lg);
}

.featured-label {
  position: absolute;
  top: -0.75rem;
  right: 1.2rem;
  margin: 0;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  color: var(--white);
  background: var(--terracotta);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.package-label {
  margin-bottom: 0.4rem;
  color: var(--forest);
  font-size: 0.77rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.price {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 3.8rem;
  line-height: 1;
}

.price span {
  margin-right: 0.1rem;
  font-size: 1.5rem;
  vertical-align: top;
}

.price-caption {
  margin: 0.55rem 0 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
}

.price-card ul {
  display: grid;
  margin: 0 0 1.75rem;
  padding: 0;
  gap: 0.75rem;
  list-style: none;
}

.price-card li {
  position: relative;
  padding-left: 1.55rem;
  color: #43534d;
  font-size: 0.92rem;
}

.price-card li::before {
  position: absolute;
  top: 0.05rem;
  left: 0;
  color: var(--forest);
  content: "✓";
  font-weight: 900;
}

.price-card .button {
  margin-top: auto;
}

.pricing-note {
  max-width: 48rem;
  margin: 1.5rem auto 0;
  font-size: 0.78rem;
  text-align: center;
}

.faq-section {
  border-top: 1px solid var(--line);
  background: var(--cream);
}

.faq-layout {
  display: grid;
  gap: 3rem;
}

.faq-intro {
  max-width: 31rem;
}

.faq-list details {
  border-top: 1px solid rgba(23, 48, 41, 0.22);
}

.faq-list details:last-child {
  border-bottom: 1px solid rgba(23, 48, 41, 0.22);
}

.faq-list summary {
  position: relative;
  padding: 1.35rem 3rem 1.35rem 0;
  color: var(--ink);
  cursor: pointer;
  font-weight: 800;
  list-style: none;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary::after {
  position: absolute;
  top: 50%;
  right: 0.2rem;
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 50%;
  color: var(--forest);
  background: rgba(23, 77, 62, 0.09);
  content: "+";
  font-size: 1.2rem;
  transform: translateY(-50%);
}

.faq-list details[open] summary::after {
  content: "−";
}

.faq-list details > p {
  max-width: 42rem;
  margin: -0.25rem 0 1.4rem;
  padding-right: 2rem;
}

.contact-section {
  padding-block: 1rem 5.5rem;
  background: var(--cream);
}

.contact-card {
  display: grid;
  overflow: hidden;
  padding: 2rem 1.5rem;
  gap: 2.5rem;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 100% 0%, rgba(232, 185, 79, 0.18) 0 12rem, transparent 12.1rem),
    var(--forest-deep);
  box-shadow: var(--shadow-lg);
}

.contact-copy h2,
.contact-copy p:not(.eyebrow) {
  color: var(--white);
}

.contact-copy p:not(.eyebrow) {
  color: rgba(255, 255, 255, 0.75);
}

.contact-options {
  display: grid;
  align-content: center;
  gap: 0.75rem;
}

.contact-option {
  display: grid;
  min-height: 4.75rem;
  align-items: center;
  grid-template-columns: 2.75rem minmax(0, 1fr) auto;
  padding: 0.75rem 1rem;
  gap: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  color: var(--white);
  background: rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition:
    background-color 180ms ease,
    transform 180ms ease;
}

.contact-option:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateX(0.2rem);
}

.contact-icon {
  display: grid;
  width: 2.7rem;
  height: 2.7rem;
  place-items: center;
  border-radius: 50%;
  color: var(--forest-deep);
  background: var(--peach);
  font-size: 0.78rem;
  font-weight: 900;
}

.contact-option strong,
.contact-option small {
  display: block;
}

.contact-option small {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.66);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.65rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pending-section {
  padding-top: 0;
  background: var(--cream);
}

.pending-card {
  padding: 1.75rem 1.25rem;
  border: 2px dashed rgba(166, 64, 44, 0.46);
  border-radius: var(--radius-md);
  background: #fffaf5;
}

.pending-heading {
  display: grid;
  grid-template-columns: 2.75rem 1fr;
  gap: 1rem;
}

.pending-heading h2 {
  max-width: 42rem;
  font-size: clamp(1.8rem, 6vw, 2.7rem);
}

.pending-heading p:not(.eyebrow) {
  max-width: 44rem;
}

.pending-icon {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border-radius: 50%;
  color: var(--white);
  background: var(--terracotta);
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
}

.placeholder-list {
  display: grid;
  margin: 1.5rem 0 0;
  padding: 0;
  gap: 0.75rem;
  list-style: none;
}

.placeholder-list li {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.9rem 1rem;
  gap: 0.3rem;
  border: 1px solid rgba(23, 48, 41, 0.14);
  border-radius: 0.75rem;
  background: var(--white);
  font-size: 0.88rem;
  font-weight: 700;
}

.placeholder-list code {
  max-width: 100%;
  overflow-wrap: anywhere;
  color: var(--terracotta-dark);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.76rem;
  font-weight: 700;
}

.site-footer {
  color: var(--white);
  background: #0d2b24;
}

.footer-main {
  display: grid;
  padding-block: 3.5rem;
  gap: 2.5rem;
}

.brand-footer .brand-mark {
  color: var(--forest-deep);
  background: var(--peach);
}

.brand-footer .brand-name {
  color: var(--white);
}

.footer-main > div:first-child > p {
  max-width: 24rem;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;
}

.footer-nav {
  display: grid;
  align-content: start;
  gap: 0.65rem;
}

.footer-nav a,
.footer-bottom a {
  color: var(--white);
  font-weight: 700;
  text-underline-offset: 0.25rem;
}

.footer-details {
  display: grid;
  align-content: start;
  gap: 0.5rem;
}

.footer-details p {
  margin: 0;
  color: rgba(255, 255, 255, 0.67);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.72rem;
  overflow-wrap: anywhere;
}

.footer-details strong {
  color: var(--white);
  font-family: var(--font-body);
}

.footer-bottom {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 1.25rem;
  gap: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.75rem;
}

.footer-bottom a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
}

@media (min-width: 36rem) {
  .container {
    width: min(100% - 3rem, var(--container));
  }

  .header-cta {
    display: inline-flex;
  }

  .hero-actions {
    align-items: center;
    flex-direction: row;
  }

  .hero-points {
    grid-template-columns: repeat(2, minmax(0, max-content));
    column-gap: 1.5rem;
  }

  .services-grid,
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .price-card:last-child {
    grid-column: 1 / -1;
  }

  .placeholder-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .placeholder-list li {
    min-height: 5.25rem;
  }
}

@media (min-width: 48rem) {
  html {
    scroll-padding-top: 6rem;
  }

  .section {
    padding-block: 7rem;
  }

  .site-header {
    height: 5.4rem;
  }

  .header-inner {
    min-height: 5.4rem;
  }

  .site-nav {
    position: absolute;
    top: 0;
    left: 50%;
    width: auto;
    height: 5.4rem;
    align-items: center;
    padding-bottom: 0;
    transform: translateX(-50%);
  }

  .site-nav a {
    font-size: 0.78rem;
  }

  .trust-inner {
    align-items: center;
    flex-direction: row;
  }

  .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .demo-card {
    grid-template-columns: minmax(0, 1.15fr) minmax(19rem, 0.85fr);
  }

  .demo-copy {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
  }

  .price-card:last-child {
    grid-column: auto;
  }

  .pricing-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .contact-card {
    grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
    padding: 3.5rem;
  }

  .pending-card {
    padding: 2.5rem;
  }

  .footer-main {
    grid-template-columns: minmax(18rem, 1.4fr) 0.6fr 1fr;
  }

  .footer-bottom {
    align-items: center;
    flex-direction: row;
  }
}

@media (min-width: 62rem) {
  .hero {
    min-height: calc(100vh - 5.4rem);
    padding-block: 6.5rem;
  }

  .hero-inner {
    align-items: center;
    grid-template-columns: minmax(0, 1.13fr) minmax(25rem, 0.87fr);
    gap: 3rem;
  }

  .hero-points {
    grid-template-columns: repeat(3, max-content);
  }

  .hero-visual {
    min-height: 32rem;
  }

  .storefront-card {
    inset: 2rem 1rem 2rem 0;
  }

  .process-layout {
    align-items: start;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 6rem;
  }

  .process-intro {
    position: sticky;
    top: 8rem;
  }

  .faq-layout {
    align-items: start;
    grid-template-columns: minmax(18rem, 0.75fr) minmax(0, 1.25fr);
    gap: 6rem;
  }

  .faq-intro {
    position: sticky;
    top: 8rem;
  }
}

@media (min-width: 72rem) {
  .site-nav {
    gap: 2rem;
  }

  .site-nav a {
    font-size: 0.85rem;
  }

  .service-card {
    padding: 2rem;
  }

  .price-card {
    padding: 2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
