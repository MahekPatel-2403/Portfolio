import { useEffect, useMemo, useState } from "react";
import {
  approachCards,
  contactLinks,
  focusAreas,
  footerContactLinks,
  footerNavigationLinks,
  heroMeta,
  navItems,
  playbookItems,
  profileStats,
  systems,
} from "./data";

function SectionDivider({ item }) {
  return (
    <div className="section-divider" id={`${item.id}-divider`}>
      <p>{item.number}</p>
      <h2>{item.title}</h2>
    </div>
  );
}

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

function HeroMonogram({ text }) {
  const layers = Array.from({ length: 14 });

  return (
    <div className="hero-centerpiece" aria-hidden="true">
      <div className="hero-center-glow hero-center-glow-one"></div>
      <div className="hero-center-glow hero-center-glow-two"></div>
      <div className="hero-center-grid"></div>
      <div className="monogram-3d" data-text={text}>
        {layers.map((_, index) => (
          <span
            key={`${text}-${index}`}
            className="monogram-layer"
            style={{ "--layer-index": index }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [hoveredSection, setHoveredSection] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroBackgroundWord = "MAHEK";
  const heroMonogram = "mahek";

  const sectionLookup = useMemo(
    () =>
      Object.fromEntries(
        navItems.map((item) => [item.id, { title: item.title, label: item.title.toUpperCase() }])
      ),
    []
  );

  const displayedSection = hoveredSection ?? activeSection;
  const displayedTitle = sectionLookup[displayedSection]?.title ?? "Profile";

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [navOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > window.innerHeight * 0.42);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".observed-section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-20% 0px -25% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const closeMobileNav = () => {
    setNavOpen(false);
    setHoveredSection(null);
  };

  return (
    <>
      <div className="site-noise" aria-hidden="true"></div>

      <header className="site-header">
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

        <nav className="nav-grid" id="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav-item${activeSection === item.id ? " active" : ""}`}
              href={`#${item.id}`}
              data-section={item.id}
              onMouseEnter={() => setHoveredSection(item.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onFocus={() => setHoveredSection(item.id)}
              onBlur={() => setHoveredSection(null)}
              onClick={closeMobileNav}
            >
              <span className="nav-title">{item.title}</span>
              {item.subcategories.map((subcategory) => (
                <span className="nav-sub" key={`${item.id}-${subcategory}`}>
                  {subcategory}
                </span>
              ))}
            </a>
          ))}
        </nav>
      </header>

      <div className={`sticky-bar${stickyVisible ? " visible" : ""}`} aria-hidden="true">
        <div>
          <small>Current Section</small>
          <span id="sticky-label">{displayedTitle}</span>
        </div>
        <div>
          <small>Role</small>
          <span>Backend Engineer</span>
        </div>
      </div>

      <main>
        <section className="hero" id="top" data-section="profile">
          <HeroMarquee label={heroBackgroundWord} />
          <HeroMonogram text={heroMonogram} />

          <div className="hero-copy">
            <p className="eyebrow">Mahek Patel</p>
            <h1>
              Backend engineer crafting calm, scalable systems for products that
              need structure, speed, and resilience.
            </h1>
            <p className="hero-description">
              I focus on backend architecture, API design, asynchronous
              workflows, databases, and observability. Based in India, I like
              building the reliable layers that help teams ship confidently.
            </p>
          </div>

          <div className="hero-meta">
            {heroMeta.map((item) => (
              <div key={item.label}>
                <small>{item.label}</small>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider item={navItems[0]} />

        <section className="section section-profile observed-section" id="profile">
          <div className="profile-copy">
            <p className="lead-copy">
              I build backend platforms that keep product experiences fast,
              stable, and understandable.
            </p>
            <p>
              My work lives where product goals meet engineering discipline:
              service boundaries, database design, async processing,
              integrations, and operational clarity. I care about systems that
              feel calm under load and stay easy to evolve as teams grow.
            </p>
            <p>
              The parts I enjoy most are turning messy requirements into clean
              backend contracts, designing flows that recover gracefully, and
              leaving teams with better visibility into how their systems
              behave.
            </p>
          </div>

          <div className="profile-panel">
            <h3>Core Strengths</h3>
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
        </section>

        <SectionDivider item={navItems[1]} />

        <section className="section section-systems observed-section" id="systems">
          <div className="systems-list">
            {systems.map((system) => (
              <article className="system-card" key={system.number}>
                <div className="system-index">{system.number}</div>
                <div className="system-content">
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
        </section>

        <SectionDivider item={navItems[2]} />

        <section className="section section-approach observed-section" id="approach">
          <div className="approach-grid">
            {approachCards.map((item) => (
              <article className="approach-card" key={item.number}>
                <small>{item.number}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="playbook">
            {playbookItems.map((item) => (
              <div className="playbook-row" key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider item={navItems[3]} />

        <section className="section section-connect observed-section" id="connect">
          <div className="connect-heading">
            <h3>Open to meaningful backend engineering work from India.</h3>
            <p>
              If you need resilient APIs, better service design, or calmer
              backend delivery, this site is ready to be extended with your real
              contact links and project history.
            </p>
          </div>

          <div className="contact-panel">
            {contactLinks.map((item) => (
              <a
                className={`contact-link${item.placeholder ? " placeholder-link" : ""}`}
                href={item.href}
                key={item.label}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <h3>Contact</h3>
            {footerContactLinks.map((item) => (
              <a className="footer-link" href={item.href} key={`${item.title}-${item.subtitle}`}>
                <span>{item.title}</span>
                <small>{item.subtitle}</small>
              </a>
            ))}
          </div>

          <div className="footer-navigation">
            <h3>Navigation</h3>
            {footerNavigationLinks.map((item) => (
              <a className="footer-nav" href={item.href} key={`${item.title}-${item.subtitle}`}>
                <span>{item.title}</span>
                <small>{item.subtitle}</small>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-credit">
          <p>Mahek Patel</p>
          <small>Backend Engineer Portfolio Concept</small>
        </div>
      </footer>
    </>
  );
}
