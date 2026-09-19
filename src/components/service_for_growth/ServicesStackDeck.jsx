import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./ServicesStackDeck.css";

export default function ServicesStackDeck({ cards = [] }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Sticky scroll stacking effect (identical animation on both desktop and mobile)
  useEffect(() => {
    const container = containerRef.current;
    const cardEls = cardRefs.current.filter(Boolean);
    if (!container || cardEls.length === 0) return;

    const total = cardEls.length;
    if (total <= 1) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrolled / scrollable;

      const step = 1 / (total - 1);

      cardEls.forEach((card, i) => {
        if (!card) return;
        if (i === 0) {
          card.style.transform = "translate3d(0, 0, 0)";
          card.style.zIndex = 1;
          card.style.visibility = "visible";
          card.style.opacity = "1";
          return;
        }

        const start = (i - 1) * step;
        // 80% of each step is the slide-in transition, 20% is rest dwell
        const animDuration = step * 0.82;
        let p = (progress - start) / animDuration;
        p = Math.min(Math.max(p, 0), 1);

        if (p <= 0) {
          card.style.visibility = "hidden";
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
          card.style.transform = "translate3d(0, 100%, 0)";
        } else {
          const yPercent = (1 - p) * 100;
          card.style.visibility = "visible";
          card.style.opacity = "1";
          card.style.pointerEvents = "auto";
          card.style.transform = `translate3d(0, ${yPercent.toFixed(2)}%, 0)`;
          card.style.zIndex = i + 1;
          card.style.boxShadow = "0 20px 45px -12px rgba(15, 23, 42, 0.22)";
        }
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [cards.length]);

  return (
    <div className="cservice-stack-container" ref={containerRef}>
      {/* Sticky Stage pinned under header */}
      <div className="cservice-sticky-stage">
        {/* Section Heading */}
        <div className="cservice-stack-head">
          <h2 className="cservice-head-title head_title">
            Our Best Exceptional Service For You
          </h2>
          <p className="cservice-head-slogan page_title">
            At Venturing Digitally we measure our success by the growth and
            success of our clients. That's why we go above and beyond to deliver
            exceptional service and customized solutions that help them achieve
            their goals.
          </p>
        </div>

        {/* Cards Stack Deck */}
        <div className="cservice-cards-stack-list">
          {cards.map((card, index) => (
            <article
              key={card.id || index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="cservice-sticky-card"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="cservice-sticky-card-inner">
                {/* Left Column: Image with Badge */}
                <div className="cservice-sticky-image-col">
                  <span className="cservice-sticky-badge">{card.number}</span>
                  <img
                    src={card.image}
                    alt={card.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span
                    className="cservice-sticky-image-overlay"
                    aria-hidden="true"
                  />
                </div>

                {/* Right Column: Detailed Content */}
                <div className="cservice-sticky-content-col">
                  <span
                    className="cservice-sticky-bg-number"
                    aria-hidden="true"
                  >
                    {card.number}
                  </span>

                  <div className="cservice-sticky-tagline">
                    <span className="cservice-sticky-line" />
                    {card.tagline}
                  </div>

                  <h3 className="cservice-sticky-title">{card.title}</h3>
                  <p className="cservice-sticky-desc">{card.description}</p>

                  {/* Tech Stack Icons */}
                  {card.icons && card.icons.length > 0 && (
                    <div className="cservice-sticky-icons">
                      {card.icons.map((iconObj, idx) => {
                        const IconComp = iconObj.icon;
                        return (
                          <IconComp
                            key={idx}
                            style={{
                              fontSize: "22px",
                              color: iconObj.color,
                            }}
                          />
                        );
                      })}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    to={card.link}
                    className="cservice-sticky-btn"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Read More{" "}
                    <FaLongArrowAltRight className="cservice-sticky-btn-arrow" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
