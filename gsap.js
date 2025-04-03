// gsap.js — iconosquare animation script — v1.0 — 2025-03-28

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const textEffects = {
    "text-fade-up": {
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    },
    "text-scale-in": {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    },
    "text-rotate-in": {
      from: { opacity: 0, y: 20, rotation: -5 },
      to: { opacity: 1, y: 0, rotation: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    },
    "text-slide-left": {
      from: { opacity: 0, x: -30 },
      to: { opacity: 1, x: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    }
  };

  Object.keys(textEffects).forEach(effect => {
    document.querySelectorAll(`[data-effect="${effect}"]`).forEach(el => {
      const shouldSplit = el.getAttribute("data-split") === "words";
      const duration = parseFloat(el.getAttribute("data-duration")) || textEffects[effect].to.duration;
      const stagger = parseFloat(el.getAttribute("data-stagger")) || textEffects[effect].to.stagger;

      if (shouldSplit) {
        new SplitType(el, { types: "words", tagName: "span" });
        el.querySelectorAll(".word").forEach(word => word.style.whiteSpace = "nowrap");
        const targets = el.querySelectorAll(".word");

        gsap.fromTo(
          targets,
          textEffects[effect].from,
          {
            ...textEffects[effect].to,
            duration,
            stagger,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      } else {
        gsap.fromTo(
          el,
          textEffects[effect].from,
          {
            ...textEffects[effect].to,
            duration,
            stagger,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      }
    });
  });

  document.querySelectorAll('[data-effect="btn-blue"]').forEach((btn) => {
    let overlay = btn.querySelector(".btn-blue-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.classList.add("btn-blue-overlay");
      overlay.setAttribute("aria-hidden", "true");
      Object.assign(overlay.style, {
        position: "absolute",
        backgroundColor: "#33A1FF",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "none",
        pointerEvents: "none",
        zIndex: 0,
        borderRadius: "inherit"
      });
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.prepend(overlay);
    }

    const getCoords = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      return { x, y };
    };

    btn.addEventListener("mouseenter", (e) => {
      const { x, y } = getCoords(e, btn);
      overlay.style.display = "block";
      gsap.fromTo(overlay, {
        clipPath: `circle(0% at ${x}% ${y}%)`
      }, {
        clipPath: `circle(141.4% at ${x}% ${y}%)`,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", (e) => {
      const { x, y } = getCoords(e, btn);
      gsap.to(overlay, {
        clipPath: `circle(0% at ${x}% ${y}%)`,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => overlay.style.display = "none"
      });
    });
  });

  if (isMobile) {
    document.querySelectorAll(".cta-big_link").forEach((btn) => {
      gsap.to(btn, {
        backgroundColor: "#0089ff",
        borderColor: "transparent",
        boxShadow: "0px 0px 30px 10px rgba(0, 174, 255, 0.60) inset, 0px 0px 40px 20px rgba(0, 137, 255, 0.50)",
        duration: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btn,
          start: "top 100%",
          toggleActions: "play none none none",
          once: true
        }
      });
    });
  }

  const imageEffects = {
    "img-reveal": {
      startClip: "inset(0% 50% 0% 50%)",
      endClip: "inset(0% 0% 0% 0%)"
    },
    "img-reveal-top": {
      startClip: "inset(100% 0% 0% 0%)",
      endClip: "inset(0% 0% 0% 0%)"
    }
  };

  Object.entries(imageEffects).forEach(([attr, config]) => {
    document.querySelectorAll(`[data-effect="${attr}"]`).forEach((img) => {
      gsap.set(img, {
        clipPath: config.startClip,
        opacity: 1
      });

      gsap.to(img, {
        clipPath: config.endClip,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true
        }
      });
    });
  });
});
