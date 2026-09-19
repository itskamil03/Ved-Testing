import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  const [inView, setInView] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="whoweare-wrap">
      <div ref={rowRef} className={`whoweare-row ${inView ? "in-view" : ""}`}>
        
        {/* Card 1: Left card - slides from LEFT */}
        <div className="whoweare-card whoweare-card-left whoweare-card-brand">
          <ul className="whoweare-services">
            <li className="whoweare-anim-text" style={{ "--item-delay": "350ms" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Web Development</span>
            </li>
            <li className="whoweare-anim-text" style={{ "--item-delay": "450ms" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Mobile App Development</span>
            </li>
            <li className="whoweare-anim-text" style={{ "--item-delay": "550ms" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Custom Software Solutions</span>
            </li>
            <li className="whoweare-anim-text" style={{ "--item-delay": "650ms" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Digital Marketing</span>
            </li>
          </ul>
          <div className="whoweare-brand-tagline">
            <h3 className="whoweare-anim-text" style={{ "--item-delay": "600ms" }}>
              Solutions built to scale with your business, across every industry.
            </h3>
            <Link className="whoweare-cta whoweare-anim-text" style={{ "--item-delay": "750ms" }} to="/WebsiteDevelopment">
              <span>Explore Our Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Card 2: Center card - slides from BOTTOM / CENTER */}
        <div className="whoweare-card whoweare-card-center whoweare-card-content">
          <div className="whoweare-text">
            <h2 className="whoweare-anim-text" style={{ "--item-delay": "300ms" }}>
              Who We Are
            </h2>
            <p className="whoweare-anim-text" style={{ "--item-delay": "450ms" }}>
              Venturing Digitally delivers top-quality IT services and solutions across a wide range of industries. Our team combines technical expertise with a genuine focus on outcomes — helping clients turn web, mobile, and software ideas into real business results.
            </p>
          </div>
          <div className="whoweare-illus-panel whoweare-anim-illus" style={{ "--item-delay": "600ms" }}>
            <svg viewBox="0 0 500 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="whoweare-scr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4FD1E8"/>
                  <stop offset="100%" stopColor="#2C6E8C"/>
                </linearGradient>
              </defs>
              <rect width="500" height="340" fill="none"/>
              {/* table */}
              <rect x="40" y="240" width="420" height="14" rx="4" fill="#1B2848"/>
              {/* laptop */}
              <rect x="150" y="170" width="120" height="80" rx="4" fill="#0E1836" stroke="#2C3B66" strokeWidth="2"/>
              <rect x="158" y="178" width="104" height="58" rx="2" fill="#0A1024"/>
              <polyline points="166,220 186,196 204,208 226,180 248,198" fill="none" stroke="url(#whoweare-scr)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="140" y="250" width="140" height="6" rx="3" fill="#243252"/>
              {/* tablet */}
              <rect x="300" y="210" width="46" height="34" rx="3" fill="#132048" stroke="#2C3B66" strokeWidth="1.5"/>
              {/* mug */}
              <circle cx="330" cy="248" r="8" fill="none" stroke="#3A4A78" strokeWidth="2"/>
              {/* people */}
              <g>
                <circle cx="110" cy="150" r="17" fill="#E7B98C"/>
                <path d="M80 248 Q84 180 110 174 Q140 180 144 248 Z" fill="#254B8C"/>
              </g>
              <g>
                <circle cx="190" cy="138" r="17" fill="#D89A78"/>
                <path d="M160 240 Q164 166 190 160 Q220 166 224 240 Z" fill="#2C6E8C"/>
              </g>
              <g>
                <circle cx="270" cy="148" r="16" fill="#E7B98C"/>
                <path d="M242 244 Q246 178 270 172 Q296 178 300 244 Z" fill="#1E2C57"/>
              </g>
              <g>
                <circle cx="345" cy="160" r="15" fill="#D89A78"/>
                <path d="M320 246 Q322 186 345 180 Q370 186 372 246 Z" fill="#4FD1E8" fillOpacity="0.85"/>
              </g>
              <circle cx="60" cy="70" r="2.2" fill="#4FD1E8" opacity="0.6"/>
              <circle cx="440" cy="50" r="2" fill="#C8963E" opacity="0.5"/>
              <circle cx="420" cy="110" r="1.8" fill="#4FD1E8" opacity="0.5"/>
            </svg>
          </div>
        </div>

        {/* Card 3: Right card - slides from RIGHT */}
        <div className="whoweare-card whoweare-card-right whoweare-card-stat">
          <div className="whoweare-stat-icon whoweare-anim-text" style={{ "--item-delay": "300ms" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
              <circle cx="10" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="whoweare-stat-headline">
            <span className="whoweare-num whoweare-anim-text" style={{ "--item-delay": "400ms" }}>
              200+
            </span>
            <span className="whoweare-label whoweare-anim-text" style={{ "--item-delay": "500ms" }}>
              Successful Clients
            </span>
            <p className="whoweare-desc whoweare-anim-text" style={{ "--item-delay": "600ms" }}>
              Satisfied clients across industries, powered by reliable delivery and long-term partnerships.
            </p>
          </div>
          <ul className="whoweare-sub-stats">
            <li className="whoweare-anim-text" style={{ "--item-delay": "650ms" }}>
              <span><b>120+</b>Websites Delivered</span>
            </li>
            <li className="whoweare-anim-text" style={{ "--item-delay": "750ms" }}>
              <span><b>30+</b>Mobile Apps Developed</span>
            </li>
            <li className="whoweare-anim-text" style={{ "--item-delay": "850ms" }}>
              <span><b>20+</b>Software Solutions Deployed</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
