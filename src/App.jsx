import { useEffect, useId, useMemo, useState } from "react";
import meWordmark from "./assets/me-wordmark.png";
import {
  aboutParagraphs,
  approachCards,
  contactDetails,
  contactLinks,
  footerContactLinks,
  footerNavigationLinks,
  heroMeta,
  focusAreas,
  navItems,
  playbookItems,
  profileStats,
  systems,
} from "./data";

function HeroMarquee({ label }) {
  const rows = [
    { reverse: true, mobileOnly: false },
    { reverse: false, mobileOnly: false },
    { reverse: true, mobileOnly: true },
  ];

  return (
    <div className="hero-marquee" aria-hidden="true">
      {rows.map((row, index) => (
        <div
          key={`${label}-${index}`}
          className={[
            "marquee-row",
            row.reverse ? "marquee-row-reverse" : "",
            row.mobileOnly ? "mobile-only-row" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, wordIndex) => (
              <span className="hero-word" key={`${label}-${index}-${wordIndex}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroSignature() {
  return (
    <div className="hero-visual-frame hero-visual-frame-signature" aria-hidden="true">
      <div className="hero-signature-image-wrap">
        <div className="hero-signature-rotator">
          <img className="hero-signature-image hero-signature-image-front" src={meWordmark} alt="" />
          <img className="hero-signature-image hero-signature-image-back" src={meWordmark} alt="" />
        </div>
      </div>
    </div>
  );
}

function HeroSystemsVisual() {
  const nodes = [
    { label: "API", className: "system-node-api" },
    { label: "QUEUE", className: "system-node-queue" },
    { label: "DB", className: "system-node-db" },
    { label: "TRACE", className: "system-node-trace" },
  ];

  return (
    <div className="hero-visual-frame" aria-hidden="true">
      <div className="hero-visual-grid"></div>
      <div className="systems-hero">
        <span className="system-line system-line-one"></span>
        <span className="system-line system-line-two"></span>
        <span className="system-line system-line-three"></span>
        {nodes.map((node) => (
          <span className={`system-node ${node.className}`} key={node.label}>
            {node.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroApproachVisual() {
  const cards = ["Reliable", "Simple", "Visible"];

  return (
    <div className="hero-visual-frame" aria-hidden="true">
      <div className="hero-visual-grid"></div>
      <div className="approach-hero">
        {cards.map((card, index) => (
          <div className={`approach-hero-card approach-hero-card-${index + 1}`} key={card}>
            <small>0{index + 1}</small>
            <strong>{card}</strong>
            <span>Engineering decisions with calm edges and clean tradeoffs.</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroConnectVisual() {
  const chips = [
    { label: "EMAIL", className: "contact-chip-email" },
    { label: "LINKEDIN", className: "contact-chip-linkedin" },
    { label: "GITHUB", className: "contact-chip-github" },
    { label: "INDIA", className: "contact-chip-india" },
  ];

  return (
    <div className="hero-visual-frame" aria-hidden="true">
      <div className="hero-visual-grid"></div>
      <div className="connect-hero">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit-center"></div>
        {chips.map((chip) => (
          <span className={`contact-chip ${chip.className}`} key={chip.label}>
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroVisual({ pageId }) {
  if (pageId === "systems") {
    return <HeroSystemsVisual />;
  }

  if (pageId === "approach") {
    return <HeroApproachVisual />;
  }

  if (pageId === "connect") {
    return <HeroConnectVisual />;
  }

  return <HeroSignature />;
}

function DotMatrixBanner({ label }) {
  const safeLabel = label.toUpperCase();
  const svgId = useId();
  const wordmarkWidth = 1320;
  const wordmarkHeight = 260;
  const gridPatternId = `${svgId}-grid`;
  const textPatternId = `${svgId}-text`;
  const wordmarkConfig = useMemo(
    () => ({
      "MAHEK PATEL": { fontSize: 176, letterSpacing: 4, textLength: 940 },
      SYSTEMS: { fontSize: 194, letterSpacing: 4, textLength: 760 },
      APPROACH: { fontSize: 184, letterSpacing: 3, textLength: 900 },
      CONNECT: { fontSize: 194, letterSpacing: 4, textLength: 780 },
    }),
    []
  );
  const config = wordmarkConfig[safeLabel] ?? {
    fontSize: 182,
    letterSpacing: 4,
    textLength: 860,
  };

  return (
    <div className="footer-dot-banner" aria-label={`${label} dot matrix display`}>
      <div className="footer-dot-stage">
        <svg
          className="footer-dot-wordmark"
          viewBox={`0 0 ${wordmarkWidth} ${wordmarkHeight}`}
          role="img"
        >
          <defs>
            <pattern id={gridPatternId} width="12" height="12" patternUnits="userSpaceOnUse">
              <circle className="footer-dot-grid-point" cx="6" cy="6" r="1.55" />
            </pattern>
            <pattern id={textPatternId} width="12" height="12" patternUnits="userSpaceOnUse">
              <circle className="footer-dot-text-point" cx="6" cy="6" r="2.3" />
            </pattern>
          </defs>

          <rect
            className="footer-dot-grid"
            fill={`url(#${gridPatternId})`}
            height={wordmarkHeight}
            width={wordmarkWidth}
          />

          <text
            className="footer-dot-text-outline"
            dominantBaseline="middle"
            fontSize={config.fontSize}
            lengthAdjust="spacingAndGlyphs"
            letterSpacing={config.letterSpacing}
            textAnchor="middle"
            textLength={config.textLength}
            x="50%"
            y="55%"
          >
            {safeLabel}
          </text>

          <text
            className="footer-dot-text-shape"
            dominantBaseline="middle"
            fill={`url(#${textPatternId})`}
            fontSize={config.fontSize}
            lengthAdjust="spacingAndGlyphs"
            letterSpacing={config.letterSpacing}
            textAnchor="middle"
            textLength={config.textLength}
            x="50%"
            y="55%"
          >
            {safeLabel}
          </text>
        </svg>
      </div>
    </div>
  );
}

function ListDivider({ item }) {
  return (
    <div className="list-divider">
      <p>{item.number}</p>
      <h2>{item.title}</h2>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="category-body-split page-shell">
      <div className="about-copy" id="about-intro">
        <h1>I build backend systems that stay calm under real product pressure.</h1>
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about-sidebar" id="about-strengths">
        <div className="stats-grid">
          {profileStats.map((item) => (
            <div className="stat-card" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </div>
          ))}
        </div>

        <div className="focus-table">
          <div className="focus-row focus-header">
            <span>Now</span>
            <span>Focus Area</span>
            <span>Outcome</span>
          </div>
          {focusAreas.map((item) => (
            <div className="focus-row" key={item.number}>
              <span>{item.number}</span>
              <span>{item.area}</span>
              <span>{item.outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SystemsPage() {
  return (
    <div className="category-body page-shell">
      <div className="list-container">
        {systems.map((system) => (
          <article className="system-card" id={system.anchor} key={system.number}>
            <div className="system-index">{system.number}</div>
            <div className="system-copy">
              <div className="system-header">
                <h3>{system.title}</h3>
                <span>{system.kicker}</span>
              </div>
              <p>{system.description}</p>
              <div className="tag-row">
                {system.tags.map((tag) => (
                  <span className="tag-pill" key={`${system.number}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={`system-visual ${system.visualClassName}`}>
              {system.visualLabels.map((label) => (
                <span key={`${system.number}-${label}`}>{label}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ApproachPage() {
  return (
    <div className="category-body-split page-shell">
      <div className="approach-grid" id="approach-principles">
        {approachCards.map((item) => (
          <article className="approach-card" key={item.number}>
            <small>{item.number}</small>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="playbook" id="approach-delivery">
        {playbookItems.map((item) => (
          <div className="playbook-row" key={item.label}>
            <span>{item.label}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectPage() {
  return (
    <div className="category-body-split page-shell">
      <div className="connect-copy" id="connect-availability">
        <h1>Open to meaningful backend engineering work from India.</h1>
        <p>
          If you need APIs, service design, or event-driven systems that feel
          dependable instead of chaotic, this portfolio is set up to present
          that work in a cleaner, more editorial format.
        </p>

        <div className="detail-table">
          {contactDetails.map((item) => (
            <div className="detail-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

        <div className="contact-panel" id="connect-links">
          {contactLinks.map((item) => (
            <a
              className={`contact-link${item.placeholder ? " placeholder-link" : ""}`}
              href={item.href}
              key={item.label}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
          </a>
        ))}
      </div>
    </div>
  );
}

function Footer({ activeLabel, activePageId, onNavigate }) {
  return (
    <footer className="site-footer">
      <DotMatrixBanner label={activeLabel} />

      <div className="footer-content">
        <div>
          <h1>Contact</h1>
          {footerContactLinks.map((item) => (
            <a
              className="footer-link"
              href={item.href}
              key={`${item.title}-${item.subtitle}`}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              <span>{item.title}</span>
              <small>{item.subtitle}</small>
            </a>
          ))}
        </div>

        <div className="navigation-container">
          <h1>Navigation</h1>
          {footerNavigationLinks.map((item) => (
            <button
              className={`footer-nav${activePageId === item.pageId ? " active" : ""}`}
              key={`${item.title}-${item.pageId}`}
              type="button"
              onClick={() => onNavigate(item.pageId)}
            >
              <span>{item.title}</span>
              {item.subtitle ? <small>{item.subtitle}</small> : null}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-credit">
        <p>Mahek Patel</p>
        <small>Backend engineer portfolio, rebuilt in a category-first layout.</small>
      </div>
    </footer>
  );
}

export default function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [previewPageIndex, setPreviewPageIndex] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState(null);

  const displayedPageIndex = previewPageIndex ?? activePageIndex;
  const activePage = navItems[activePageIndex];
  const displayedPage = navItems[displayedPageIndex];

  const pageLookup = useMemo(
    () => Object.fromEntries(navItems.map((item, index) => [item.id, index])),
    []
  );

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [navOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!pendingAnchor) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      const target = document.getElementById(pendingAnchor);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setPendingAnchor(null);
    }, 80);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [activePageIndex, pendingAnchor]);

  const handlePageSelect = (pageIndex) => {
    setActivePageIndex(pageIndex);
    setPreviewPageIndex(null);
    setNavOpen(false);
    setPendingAnchor(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubcategorySelect = (pageIndex, anchor) => {
    setActivePageIndex(pageIndex);
    setPreviewPageIndex(null);
    setNavOpen(false);
    setPendingAnchor(anchor);
  };

  const handleFooterNavigation = (pageId) => {
    const targetIndex = pageLookup[pageId];

    if (typeof targetIndex === "number") {
      handlePageSelect(targetIndex);
    }
  };

  return (
    <>
      <div className="site-noise" aria-hidden="true"></div>

      <header className={`site-header${stickyVisible && !navOpen ? " hidden" : ""}`}>
        <div className="nav-background" aria-hidden="true"></div>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-container${navOpen ? " open" : ""}`} id="site-nav" aria-label="Primary">
          {navItems.map((item, index) => (
            <div
              className={`nav-item${
                activePageIndex === index ? " active" : ""
              }${displayedPageIndex === index ? " preview" : ""}`}
              key={item.id}
            >
              <button
                className="nav-main"
                type="button"
                onMouseEnter={() => setPreviewPageIndex(index)}
                onMouseLeave={() => setPreviewPageIndex(null)}
                onFocus={() => setPreviewPageIndex(index)}
                onBlur={() => setPreviewPageIndex(null)}
                onClick={() => handlePageSelect(index)}
              >
                <span className="nav-title">{item.title}</span>
              </button>

              <div className="nav-sublist">
                {item.subcategories.map((subcategory) => (
                  <button
                    className="nav-sub"
                    key={`${item.id}-${subcategory.label}`}
                    type="button"
                    onClick={() => handleSubcategorySelect(index, subcategory.anchor)}
                  >
                    {subcategory.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>

      <div className={`sticky-nav${stickyVisible ? " visible" : ""}`} aria-hidden="true">
        <div>
          <small>Name</small>
          <span>Mahek Patel</span>
        </div>
        <div>
          <small>Availability</small>
          <span className="availability-dot">Available Today</span>
        </div>
      </div>

      <main>
        <section className="morphing-hero" id="top">
          <HeroMarquee label={displayedPage.marquee} />

          <div
            className={`morphing-hero-visual${
              displayedPage.id === "about" ? " morphing-hero-visual-signature" : ""
            }`}
          >
            <HeroVisual pageId={displayedPage.id} />
          </div>

          <div className={`hero-bottom${previewPageIndex !== null ? " dimmed" : ""}`}>
            <div>
              <small>{heroMeta[0].label}</small>
              <span className="availability-dot">{heroMeta[0].value}</span>
            </div>

            <div className="hero-mobile-description">
              <small>Overview</small>
              <span>{displayedPage.description}</span>
            </div>

            <div className="hero-bottom-right">
              <small>{heroMeta[1].label}</small>
              <span>{heroMeta[1].value}</span>
            </div>
          </div>
        </section>

        <div key={activePage.id} className="page-group">
          <ListDivider item={activePage} />

          {activePage.id === "about" && <AboutPage />}
          {activePage.id === "systems" && <SystemsPage />}
          {activePage.id === "approach" && <ApproachPage />}
          {activePage.id === "connect" && <ConnectPage />}
        </div>
      </main>

      <Footer
        activeLabel={activePage.marquee}
        activePageId={activePage.id}
        onNavigate={handleFooterNavigation}
      />
    </>
  );
}
