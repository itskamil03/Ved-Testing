import React, { useEffect, useRef } from "react";
import "./IndustriesSection.css";

const IndustriesSection = () => {
  const pinTrackRef = useRef(null);
  const stageInnerRef = useRef(null);
  const orbRef = useRef(null);
  const orbitsRef = useRef(null);

  useEffect(() => {
    const track = pinTrackRef.current;
    const stageInner = stageInnerRef.current;
    const orb = orbRef.current;
    const orbits = orbitsRef.current;

    if (!track || !stageInner || !orb) return;

    // Query cards and sort by assigned sequential reveal order
    const cards = Array.from(stageInner.querySelectorAll(".industries-card")).sort(
      (a, b) => parseInt(a.dataset.order, 10) - parseInt(b.dataset.order, 10)
    );

    // Create ambient glowing background particles
    const particleCount = 20;
    const createdParticles = [];
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "industries-particle";
      const size = 2 + Math.random() * 3.5;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.setProperty("--dur", `${(5 + Math.random() * 6).toFixed(2)}s`);
      p.style.setProperty("--delay", `${(-Math.random() * 8).toFixed(2)}s`);
      p.style.setProperty("--dx", `${(Math.random() * 24 - 12).toFixed(1)}px`);
      p.style.setProperty("--dy", `${(-(16 + Math.random() * 28)).toFixed(1)}px`);
      p.style.setProperty("--op", `${(0.25 + Math.random() * 0.45).toFixed(2)}`);
      stageInner.appendChild(p);
      createdParticles.push(p);
    }

    const totalCards = cards.length;
    const cardsStart = 0.04;
    const cardsEnd = 0.92;
    const span = cardsEnd - cardsStart;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;

      let progress = -rect.top / total;
      progress = clamp(progress, 0, 1);

      // Scroll-driven central ball and surrounding orbital lines 3D spin
      const sphereRotation = progress * 720;
      orb.style.transform = `rotateY(${sphereRotation}deg) rotateX(${progress * 180}deg)`;
      
      if (orbits) {
        orbits.style.transform = `rotateY(${sphereRotation}deg) rotateZ(${progress * 360}deg) rotateX(${progress * 120}deg)`;
      }

      // Sequential 1-by-1 Card Reveal on Scroll
      cards.forEach((card, i) => {
        const cardStart = cardsStart + (span * i) / totalCards;
        const cardShowAt = cardStart + 0.005;
        if (progress >= cardShowAt) {
          card.classList.add("shown");
        } else {
          card.classList.remove("shown");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      createdParticles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div className="industries-sphere-section" id="orbital-industries">
      <div className="industries-pin-track" id="industriesPinTrack" ref={pinTrackRef}>
        <div className="industries-pin-stage">
          <div className="industries-stage-inner" id="industriesStageInner" ref={stageInnerRef}>
            {/* Header - Always clearly visible at the top together with cards */}
            <div className="industries-heading" id="industriesHeading">
              <h2>Why Choose Venturing Digitally?</h2>
              <div className="rule"></div>
            </div>

            {/* 8-Card Orbital Grid */}
            <div className="industries-grid">
              {/* 1. Skilled Expert Team (Order 0 - Top Left) */}
              <div className="industries-cell" style={{ "--gc": 2, "--gr": 1 }}>
                <div
                  className="industries-card"
                  data-order="0"
                  style={{
                    "--icon-fg": "#3ec6ff",
                    "--icon-bg": "rgba(62, 198, 255, 0.08)",
                    "--icon-glow": "rgba(62, 198, 255, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <h3>Skilled Expert Team</h3>
                  <p>Seasoned engineers &amp; domain specialists</p>
                </div>
              </div>

              {/* 2. Reliable Project Execution (Order 1 - Featured Top Center) */}
              <div className="industries-cell cell-top-center" style={{ "--gc": 3, "--gr": 1 }}>
                <div
                  className="industries-card featured"
                  data-order="1"
                  style={{
                    "--icon-fg": "#a78bfa",
                    "--icon-bg": "rgba(167, 139, 250, 0.08)",
                    "--icon-glow": "rgba(167, 139, 250, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h3>Reliable Project Execution</h3>
                  <p>On-time agile delivery &amp; milestones</p>
                </div>
              </div>

              {/* 3. Budget-Friendly Solutions (Order 2 - Top Right) */}
              <div className="industries-cell" style={{ "--gc": 4, "--gr": 1 }}>
                <div
                  className="industries-card"
                  data-order="2"
                  style={{
                    "--icon-fg": "#34d399",
                    "--icon-bg": "rgba(52, 211, 153, 0.08)",
                    "--icon-glow": "rgba(52, 211, 153, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                  <h3>Budget-Friendly Solutions</h3>
                  <p>Cost-effective architecture &amp; high ROI</p>
                </div>
              </div>

              {/* 4. Business Driven Development (Order 3 - Mid Left) */}
              <div className="industries-cell cell-mid-left" style={{ "--gc": 1, "--gr": 2 }}>
                <div
                  className="industries-card"
                  data-order="3"
                  style={{
                    "--icon-fg": "#fb923c",
                    "--icon-bg": "rgba(251, 146, 60, 0.08)",
                    "--icon-glow": "rgba(251, 146, 60, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <h3>Business Driven Development</h3>
                  <p>Technology built to scale business value</p>
                </div>
              </div>

              {/* =========================================================================
                  CENTRAL CELL: CONTINUOUS 3D MULTI-LAYER ORBITAL SYSTEM
                 ========================================================================= */}
              <div className="industries-center-cell">
                {/* 1. Atmospheric Ambient Breathing Aura */}
                <div className="orbital-ambient-glow"></div>

                {/* 2. Multi-Layer Continuous 3D Elliptical System */}
                <div className="orbital-system-3d" ref={orbitsRef}>
                  {/* Elliptical Orbit 1: Tilted -24deg (Clockwise) + Traveling Cyan Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-1">
                    <div className="orbital-particle particle-cyan"></div>
                  </div>

                  {/* Elliptical Orbit 2: Tilted +32deg (Counter-Clockwise) + Traveling Purple Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-2">
                    <div className="orbital-particle particle-purple"></div>
                  </div>

                  {/* Elliptical Orbit 3: Wide Angle Inclined Orbit + Traveling Blue Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-3">
                    <div className="orbital-particle particle-blue"></div>
                  </div>

                  {/* Elliptical Orbit 4: Steep Diagonal Orbit + Traveling Aqua Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-4">
                    <div className="orbital-particle particle-aqua"></div>
                  </div>

                  {/* Elliptical Orbit 5: Golden Amber Orbit + Traveling Gold Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-5">
                    <div className="orbital-particle particle-amber"></div>
                  </div>

                  {/* Elliptical Orbit 6: Rose Magenta Polar Orbit + Traveling Rose Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-6">
                    <div className="orbital-particle particle-rose"></div>
                  </div>

                  {/* Elliptical Orbit 7: Neon Violet Gyroscopic Orbit + Traveling Violet Beacon */}
                  <div className="orbital-ellipse orbit-ellipse-7">
                    <div className="orbital-particle particle-violet"></div>
                  </div>

                  {/* Dashed Circular Primary, Secondary & Tertiary Rings */}
                  <div className="orbital-dashed-ring ring-primary"></div>
                  <div className="orbital-dashed-ring ring-secondary"></div>
                  <div className="orbital-dashed-ring ring-tertiary"></div>
                  <div className="orbital-dashed-ring ring-inner-gyro"></div>

                  {/* Glowing Energy Arcs */}
                  <div className="orbital-energy-arc arc-cyan"></div>
                  <div className="orbital-energy-arc arc-purple"></div>
                  <div className="orbital-energy-arc arc-emerald"></div>
                  <div className="orbital-energy-arc arc-rose"></div>
                </div>

                {/* 3. Core Radial Pulsing Halo */}
                <div className="industries-orb-halo"></div>

                {/* 4. Central 3D Glowing Ball / Sphere */}
                <div className="industries-orb-wrap">
                  <div className="industries-orb" id="industriesOrb" ref={orbRef}></div>
                </div>
              </div>

              {/* 5. Scalable Modern Solutions (Order 4 - Mid Right) */}
              <div className="industries-cell cell-mid-right" style={{ "--gc": 5, "--gr": 2 }}>
                <div
                  className="industries-card"
                  data-order="4"
                  style={{
                    "--icon-fg": "#f43f5e",
                    "--icon-bg": "rgba(244, 63, 94, 0.08)",
                    "--icon-glow": "rgba(244, 63, 94, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <h3>Scalable Modern Solutions</h3>
                  <p>Cloud-native architectures &amp; frameworks</p>
                </div>
              </div>

              {/* 6. Client Centric Approach (Order 5 - Bottom Left) */}
              <div className="industries-cell" style={{ "--gc": 2, "--gr": 3 }}>
                <div
                  className="industries-card"
                  data-order="5"
                  style={{
                    "--icon-fg": "#f59e0b",
                    "--icon-bg": "rgba(245, 158, 11, 0.08)",
                    "--icon-glow": "rgba(245, 158, 11, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  </div>
                  <h3>Client Centric Approach</h3>
                  <p>Transparent &amp; collaborative partnerships</p>
                </div>
              </div>

              {/* 7. Innovative Technology Solutions (Order 6 - Bottom Center) */}
              <div className="industries-cell cell-bottom-center" style={{ "--gc": 3, "--gr": 3 }}>
                <div
                  className="industries-card"
                  data-order="6"
                  style={{
                    "--icon-fg": "#60a5fa",
                    "--icon-bg": "rgba(96, 165, 250, 0.08)",
                    "--icon-glow": "rgba(96, 165, 250, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M12 2a7 7 0 00-7 7c0 2.5 1.3 4.7 3.3 6h7.4c2-1.3 3.3-3.5 3.3-6a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3>Innovative Technology Solutions</h3>
                  <p>Cutting-edge stacks &amp; future-ready tech</p>
                </div>
              </div>

              {/* 8. Dedicated Customer Support (Order 7 - Bottom Right) */}
              <div className="industries-cell" style={{ "--gc": 4, "--gr": 3 }}>
                <div
                  className="industries-card"
                  data-order="7"
                  style={{
                    "--icon-fg": "#e879f9",
                    "--icon-bg": "rgba(232, 121, 249, 0.08)",
                    "--icon-glow": "rgba(232, 121, 249, 0.35)",
                  }}
                >
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0118 0v6" />
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                    </svg>
                  </div>
                  <h3>Dedicated Customer Support</h3>
                  <p>24/7 proactive monitoring &amp; assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
