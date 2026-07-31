/***************************************************
==================== JS INDEX ======================
****************************************************

01. Smooth Scroll Js
02. Char SplitText Js
03. Text Invart Js
04. Button Hover Js
05. Banner Title
06. Footer Title
07. Portfolio Panel Js
08. Image Cliping Effect
09. Hover Reveal
10. Tesimonial Two Shape Effect
11. Portfolio Three Effect


****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. Smooth Scroll Js
  function smoothScroll() {
    $(document).on("click", 'a[href^="#"]', function (event) {
      var href = $(this).attr("href");
      if (href && href !== "#" && href !== "#0") {
        var target = $(href);
        if (target.length) {
          event.preventDefault();
          let smoother = (typeof ScrollSmoother !== "undefined") ? ScrollSmoother.get() : null;
          if (smoother) {
            smoother.scrollTo(target[0], true);
          } else if (typeof gsap !== "undefined" && gsap.plugins && gsap.plugins.scrollTo) {
            gsap.to(window, { scrollTo: { y: target[0], offsetY: 80 }, duration: 1, ease: "power2.inOut" });
          } else {
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: target.offset().top - 80,
                },
                1000,
              );
          }
        }
      }
    });
  }
  smoothScroll();

  if ($("#smooth-wrapper").length && $("#smooth-content").length) {
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      ScrollToPlugin
    );
    gsap.config({
      nullTargetWarn: false,
    });
    let smoother = ScrollSmoother.create({
      smoothTouch: 0.2,
      smooth: 4,
      effects: true,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });

    $(window).on("load", function () {
      ScrollTrigger.refresh();
    });
  }

  ////////////////////////////////////////////////////
  // 02. Char SplitText Js
  if ($(window).width() > 576 && $(".tw-char-animation").length > 0) {
    let char_come = gsap.utils.toArray(".tw-char-animation");
    char_come.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });
      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words",
      });
      gsap.set(splitTextLine, {
        perspective: 300,
      });
      itemSplitted.split({
        type: "chars, words",
      });
      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }

  ////////////////////////////////////////////////////
  // 03. Text Invart Js
  if ($(".tw-itm-title tw-itm-anim").length) {
    let staggerAmount = 0.03,
      translateXValue = 20,
      delayValue = 0.1,
      easeType = "power2.out",
      animatedTextElements = document.querySelectorAll(
        ".tw-itm-title tw-itm-anim",
      );

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, { type: "chars, words" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          gsap.from(animationSplitText.chars, {
            duration: 1,
            delay: delayValue,
            x: translateXValue,
            autoAlpha: 0,
            stagger: staggerAmount,
            ease: easeType,
          });
        },
      });
    });
  }
  if ($(".tw-sub-tilte").length) {
    var agtsub = $(".tw-sub-tilte");
    if (agtsub.length == 0) return;
    gsap.registerPlugin(SplitText);
    agtsub.each(function (index, el) {
      el.split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      if ($(el).hasClass("tw-sub-anim")) {
        gsap.set(el.split.chars, {
          opacity: 0,
          x: "7",
        });
      }
      el.anim = gsap.to(el.split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          markers: false,
          scrub: 1,
        },
        x: "0",
        y: "0",
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      });
    });
  }
  if ($(".tw-itm-title").length) {
    var txtheading = $(".tw-itm-title");
    if (txtheading.length == 0) return;
    gsap.registerPlugin(SplitText);
    txtheading.each(function (index, el) {
      el.split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      if ($(el).hasClass("tw-itm-anim")) {
        gsap.set(el.split.chars, {
          opacity: 0.3,
          x: "-7",
        });
      }
      el.anim = gsap.to(el.split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          end: "top 60%",
          markers: false,
          scrub: 1,
        },
        x: "0",
        y: "0",
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. Button Hover Js
  $(".tw-hover-btn").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-hover-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  $(".tw-hover-btn").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-hover-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  $(".tw-hover-btn").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  $(".tw-hover-btn").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  var hoverBtns = gsap.utils.toArray(".tw-hover-btn-wrapper");
  const hoverBtnItem = gsap.utils.toArray(".tw-hover-btn-item");
  hoverBtns.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, hoverBtnItem[i], 60);
    }
    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
      gsap.to(target, 1, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(hoverBtnItem[i], 1, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  ////////////////////////////////////////////////////
  // 05. Banner Title
  const mm = gsap.matchMedia();
  mm.add(
    {
      desktop: "(max-width: 1920px)",
      desktop_one: "(min-width: 1700px) and (max-width: 1800px)",
      desktop_two: "((min-width: 1600px) and (max-width: 1699px))",
      desktop_three: "((min-width: 1400px) and (max-width: 1599px)",
      desktop_four: "((min-width: 1200px) and (max-width: 1399px))",
      desktop_five: "((min-width: 992px) and (max-width: 1199px))",
      desktop_six: "((min-width: 768px) and (max-width: 991px))",
      desktop_seven: "((min-width: 576px) and (max-width: 767px))",
      desktop_eight: "((min-width: 425px) and (max-width: 575px))",
      desktop_nine: "((min-width: 375px) and (max-width: 424px))",
    },
    (context) => {
      const {
        desktop,
        desktop_one,
        desktop_two,
        desktop_three,
        desktop_four,
        desktop_five,
        desktop_six,
        desktop_seven,
        desktop_eight,
        desktop_nine,
      } = context.conditions;
      if (document.querySelector(".banner-area")) {
        const isDarkMode = document.body.classList.contains("dark");
        const bigtextColor = isDarkMode ? "#FFFFFF" : "#FF5101";
        let scaleVal, yVal, xVal;

        if (desktop) {
          scaleVal = 0.095;
          yVal = "39.5%";
          xVal = "-11.5%";
        }

        if (desktop_one) {
          scaleVal = 0.105;
          yVal = "41.5%";
          xVal = "-11.5%";
        }

        if (desktop_two) {
          scaleVal = 0.11;
          yVal = "44%";
          xVal = "-11%";
        }

        if (desktop_three) {
          scaleVal = 0.125;
          yVal = "51%";
          xVal = "-10%";
        }

        if (desktop_four) {
          scaleVal = 0.105;
          yVal = "55%";
          xVal = "-11%";
        }

        if (desktop_five) {
          scaleVal = 0.125;
          yVal = "66%";
          xVal = "-44%";
        }

        if (desktop_six) {
          scaleVal = 0.165;
          yVal = "71%";
          xVal = "-42%";
        }

        if (desktop_seven) {
          scaleVal = 0.225;
          yVal = "98%";
          xVal = "-39%";
        }

        if (desktop_eight) {
          scaleVal = 0.285;
          yVal = "119%";
          xVal = "-36%";
        }

        if (desktop_nine) {
          scaleVal = 0.305;
          yVal = "136%";
          xVal = "-35%";
        }
        const ab2 = gsap.timeline({
          duration: 5,
          scrollTrigger: {
            trigger: ".banner-area",
            scrub: 2,
            start: "top 100%",
            end: "bottom 0%",
          },
        });
        ab2.to(".big-text-wrapper .big-text", {
          scale: scaleVal,
          color: bigtextColor,
          duration: 2,
          y: yVal,
          x: xVal,
          transformOrigin: "bottom center",
        });
      }
    },
  );

  ////////////////////////////////////////////////////
  // 06. Footer Title
  if ($(".animated-title").length > 0) {
    let cta = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".animated-title",
        start: "bottom 100%-=50px",
      },
    });
    gsap.set(".animated-title", {
      opacity: 0,
    });
    gsap.to(".animated-title", {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animated-title",
        start: "bottom 100%-=50px",
        once: true,
      },
    });
    let mySplitText = new SplitText(".animated-title", { type: "words,chars" });
    let chars = mySplitText.chars;
    let endGradient = chroma.scale([
      "#ffff",
      "#ffff",
      "#ffff",
      "#ffff",
      "#ffff",
    ]);
    cta.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power1.out",
      stagger: 0.04,
      transformOrigin: "center bottom",
    });
    cta.to(
      chars,
      {
        yPercent: -10,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8,
      },
      0.5,
    );
    cta.to(
      chars,
      {
        scaleY: 1,
        ease: "elastic.out",
        stagger: 0.03,
        duration: 1.5,
      },
      0.5,
    );
    cta.to(
      chars,
      {
        color: (i, el, arr) => {
          return endGradient(i / arr.length).hex();
        },
        ease: "power1.out",
        stagger: 0.03,
        duration: 0.3,
      },
      0.5,
    );
    cta.to(
      chars,
      {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8,
      },
      0.7,
    );
    cta.to(chars, {
      color: "#ffff",
      duration: 1.4,
      stagger: 0.05,
    });
  }

  ////////////////////////////////////////////////////
  // 07. Portfolio Panel Js
  let otherSections = document.querySelectorAll(".portfolio-panel");
  gsap.set(otherSections, {
    scale: 1,
  });
  otherSections.forEach((section) => {
    gsap.to(section, {
      scale: 0.8,
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top 20%",
        end: "bottom 100%",
        endTrigger: ".portfolio-panel-area",
        pinSpacing: false,
        markers: false,
      },
    });
  });

  ///////////////////////
  // 08. Image Cliping Effect
  document.addEventListener("DOMContentLoaded", () => {
    const initialClipPaths = [
      "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
      "polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
      "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
      "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
      "polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
      "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
      "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)",
    ];
    const finalClipPaths = [
      "polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
      "polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
      "polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
      "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
      "polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
      "polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
      "polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
      "polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)",
    ];
    // Create mask divs for each wrapper
    document.querySelectorAll(".tw-clip-anim").forEach((wrapper) => {
      const img = wrapper.querySelector(".tw-anim-img[data-animate='true']");
      if (!img) return;
      const url = img.src;
      // Remove old masks if any (reuse safe)
      wrapper.querySelectorAll(".mask").forEach((m) => m.remove());
      for (let i = 0; i < 9; i++) {
        const mask = document.createElement("div");
        mask.className = `mask mask-${i + 1}`;
        Object.assign(mask.style, {
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: "0",
        });
        wrapper.appendChild(mask);
      }
    });
    // Animate masks
    gsap.utils.toArray(".tw-clip-anim").forEach((wrapper) => {
      const masks = wrapper.querySelectorAll(".mask");
      if (!masks.length) return;
      gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });
      const order = [
        [".mask-1"],
        [".mask-2", ".mask-4"],
        [".mask-3", ".mask-5", ".mask-7"],
        [".mask-6", ".mask-8"],
        [".mask-9"],
      ];
      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrapper, start: "top 75%" },
      });
      order.forEach((targets, i) => {
        const validTargets = targets
          .map((c) => wrapper.querySelector(c))
          .filter((el) => el); // filter out nulls

        if (validTargets.length) {
          tl.to(
            validTargets,
            {
              clipPath: (j, el) =>
                finalClipPaths[Array.from(masks).indexOf(el)],
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            },
            i * 0.125,
          );
        }
      });
    });
  });

  ///////////////////////
  // 09. Hover Reveal
  const hoverItem = document.querySelectorAll(".hover__reveal-item");
  function moveImage(e, hoverItem, index) {
    const item = hoverItem.getBoundingClientRect();
    const x = e.clientX - item.x;
    const y = e.clientY - item.y;
    if (hoverItem.children[index]) {
      hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
    }
  }
  hoverItem.forEach((item, i) => {
    item.addEventListener("mousemove", (e) => {
      setInterval(moveImage(e, item, 1), 50);
    });
  });

  ///////////////////////
  // 10. Tesimonial Two child (2) Effect
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    // only run on 1200px and above
    "(min-width: 1199px)": function () {
      gsap.fromTo(
        ".testimonial-two-main .testimonial-wrapper:nth-child(2)",
        {
          y: 300,
        },
        {
          y: 0,
          ease: "power9.out",
          scrollTrigger: {
            trigger: ".testimonial-two-main",
            start: "top 80%",
            end: "top 40%",
            scrub: 5.5, // рџ‘€ add smooth transition delay
            markers: false,
          },
        },
      );
    },
    // below 1199px в†’ do nothing (animation OFF)
    "(max-width: 1198px)": function () {
      // optional cleanup if needed
    },
  });

  ///////////////////////
  // 10. Tesimonial Two Shape Effect
  let nn = gsap.matchMedia();
  nn.add("(min-width: 1199px)", () => {
    gsap.fromTo(
      ".testimonial-two-shape",
      { y: "0%" },
      {
        y: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".testimonial-two-shape",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  });

  ///////////////////////
  // 11. Portfolio Three Effect
  gsap.to(".portfolio-three-shape", {
    scrollTrigger: {
      trigger: ".portfolio-three-area",
      start: "top center-=200",
      pin: ".portfolio-three-shape",
      end: "bottom bottom-=200",
      markers: false,
      pinSpacing: false,
      scrub: 1,
    },
  });

  ///////////////////////
  // 12. Project Cards JOURNEY Storytelling GSAP Master Animations
  if (document.querySelectorAll("#projects").length > 0) {
    // A. Ambient Radial Glow Slow Pulse (Layer 3)
    const ambientGlow = document.querySelector("#projects .journey-ambient-glow");
    if (ambientGlow) {
      gsap.to(ambientGlow, {
        opacity: 0.15,
        scale: 1.12,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    // B. Per-Letter JOURNEY Typography Reveal (Layer 2)
    const journeyChars = document.querySelectorAll("#projects .journey-char");
    if (journeyChars.length > 0) {
      gsap.fromTo(
        journeyChars,
        {
          opacity: 0,
          y: 60,
          rotation: 4,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          filter: "blur(0px)",
          duration: 1.0,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // C. Scroll-driven Background Parallax on JOURNEY Text (40px-60px upward shift)
    const journeyBgShape = document.querySelector("#projects .journey-bg-shape");
    if (journeyBgShape) {
      gsap.to(journeyBgShape, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // D. Project Cards & Clip-Path Image Reveal Timelines
    gsap.utils.toArray("#projects .project-card").forEach((card, index) => {
      const isLeft = index % 2 === 0;
      const thumbImg = card.querySelector(".project-card-thumb img");
      const thumbBox = card.querySelector(".project-card-thumb");
      const titleLink = card.querySelector(".project-title a");
      const projectNumber = card.querySelector(".project-number");
      const numberLine = card.querySelector(".project-number-line");
      const tags = card.querySelectorAll(".project-tag");
      const chips = card.querySelectorAll(".project-chip");
      const chipIcons = card.querySelectorAll(".project-chip i");

      // 1. Project Card Emerging Transition from JOURNEY Background
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.96,
          rotation: isLeft ? -2 : 2,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // 2. Left-to-Right Clip-Path Image Reveal (0.9s power4.out)
      if (thumbImg) {
        gsap.fromTo(
          thumbImg,
          {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            scale: 0.94,
            filter: "blur(12px) brightness(0.85)",
          },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            scale: 1,
            filter: "blur(0px) brightness(1.0)",
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Micro Interaction Hover Timeline (Card Lifts 6px, Border & Title Orange, Soft Glow)
      const hoverTl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.35, ease: "power2.out" },
      });

      // Lift Card 6px & Orange Border & Shadow Glow
      hoverTl.to(
        card,
        {
          y: -6,
          borderColor: "#ff6a00",
          backgroundColor: "rgba(9, 9, 9, 0.95)",
          boxShadow: "0 15px 45px rgba(255, 106, 0, 0.22)",
        },
        0
      );

      // Title -> Bright Orange (#ff6a00)
      if (titleLink) {
        hoverTl.to(titleLink, { color: "#ff6a00" }, 0);
      }

      // Number & Line -> Orange (#ff6a00)
      if (projectNumber) {
        hoverTl.to(projectNumber, { color: "#ff6a00" }, 0);
      }
      if (numberLine) {
        hoverTl.to(numberLine, { backgroundColor: "#ff6a00" }, 0);
      }

      // Tech Tags -> Orange border & text
      if (tags.length) {
        hoverTl.to(
          tags,
          {
            borderColor: "#ff6a00",
            color: "#ff6a00",
          },
          0
        );
      }

      // Image Hover Zoom (105%), Brightness
      if (thumbImg) {
        hoverTl.to(
          thumbImg,
          {
            scale: 1.05,
            filter: "brightness(1.08)",
          },
          0
        );
      }

      if (thumbBox) {
        hoverTl.to(thumbBox, { borderColor: "#ff6a00" }, 0);
      }

      // Chips / Buttons -> subtle orange accent
      if (chips.length) {
        hoverTl.to(
          chips,
          {
            borderColor: "rgba(255, 106, 0, 0.4)",
          },
          0
        );
      }
      if (chipIcons.length) {
        hoverTl.to(chipIcons, { color: "#ff6a00" }, 0);
      }

      // 4. Subtle Image Mouse Parallax (max 8px opposite to cursor)
      card.addEventListener("mousemove", (e) => {
        if (!thumbImg) return;
        const rect = card.getBoundingClientRect();
        const cursorX = (e.clientX - rect.left) / rect.width - 0.5;
        const cursorY = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(thumbImg, {
          x: -cursorX * 8,
          y: -cursorY * 8,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      // Hover triggers & mouseleave reset
      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => {
        hoverTl.reverse();
        if (thumbImg) {
          gsap.to(thumbImg, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });

      // Clickable card
      card.style.cursor = "pointer";
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const primaryLink = card.querySelector(".project-title a")?.getAttribute("href");
        if (primaryLink && primaryLink !== "#") {
          window.open(primaryLink, "_blank");
        }
      });
    });
  }

  ////////////////////////////////////////////////////
  // Dynamic Hero Identity Typography Animation System
  ////////////////////////////////////////////////////
  // Dynamic Hero Identity Typography Animation System (Static Calm & Premium)
  function initHeroIdentityAnimation() {
    const container = document.getElementById("heroIdentityContainer");
    const bgWrapper = document.getElementById("heroIdentityBg");
    const heroSection = document.querySelector(".banner-three-area");
    if (!container) return;

    const identityTitles = [
      "DEVELOPER",
      "CINEMATOGRAPHER",
      "ETHICAL HACKER",
      "PROBLEM SOLVER"
    ];

    let currentIndex = 0;
    let isAnimating = false;

    function getFontSizeForText(text) {
      const len = text.length;
      if (len > 14) {
        return "clamp(75px, 12vw, 270px)";
      } else if (len > 10) {
        return "clamp(85px, 13vw, 280px)";
      } else {
        return "clamp(95px, 14vw, 300px)";
      }
    }

    function createWordElement(text) {
      const wordDiv = document.createElement("div");
      wordDiv.className = "identity-word";
      wordDiv.style.fontSize = getFontSizeForText(text);

      const characters = text.split("");
      characters.forEach((char) => {
        if (char === " ") {
          const spaceSpan = document.createElement("span");
          spaceSpan.className = "identity-space";
          spaceSpan.innerHTML = "&nbsp;";
          wordDiv.appendChild(spaceSpan);
        } else {
          const charWrap = document.createElement("span");
          charWrap.className = "identity-char-wrap";

          const charSpan = document.createElement("span");
          charSpan.className = "identity-char";
          charSpan.textContent = char;

          charWrap.appendChild(charSpan);
          wordDiv.appendChild(charWrap);
        }
      });

      return wordDiv;
    }

    // Create initial word element
    let currentWordElem = createWordElement(identityTitles[currentIndex]);
    container.appendChild(currentWordElem);

    // Initial Page-Load Reveal Animation (runs once on load)
    // Opacity: 0 -> 1, Blur: 8px -> 0, Scale: 0.98 -> 1, Duration: 1s, Ease: power4.out
    const initialChars = currentWordElem.querySelectorAll(".identity-char");
    gsap.fromTo(
      initialChars,
      {
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.0,
        ease: "power4.out",
        stagger: 0.02
      }
    );

    // Calm crossfade transition between identity titles without vertical movement
    function transitionToNextWord() {
      if (isAnimating) return;
      isAnimating = true;

      const nextIndex = (currentIndex + 1) % identityTitles.length;
      const nextWordElem = createWordElement(identityTitles[nextIndex]);
      container.appendChild(nextWordElem);

      const outgoingChars = currentWordElem.querySelectorAll(".identity-char");
      const incomingChars = nextWordElem.querySelectorAll(".identity-char");

      gsap.set(incomingChars, {
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98
      });

      const tl = gsap.timeline({
        onComplete: () => {
          if (currentWordElem && currentWordElem.parentNode) {
            currentWordElem.parentNode.removeChild(currentWordElem);
          }
          currentWordElem = nextWordElem;
          currentIndex = nextIndex;
          isAnimating = false;

          // 3.5 seconds hold between word changes
          gsap.delayedCall(3.5, transitionToNextWord);
        }
      });

      // Outgoing word fades out cleanly
      tl.to(
        outgoingChars,
        {
          opacity: 0,
          filter: "blur(8px)",
          scale: 1.01,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.02
        },
        0
      );

      // Incoming word fades in smoothly in place
      tl.to(
        incomingChars,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.02
        },
        0
      );
    }

    // Schedule word transition after 3.5 seconds
    gsap.delayedCall(3.5, transitionToNextWord);

    // Mouse Interaction (Strict Maximum: X: 4px, Y: 2px, NO rotation, NO floating, NO bouncing)
    if (heroSection && bgWrapper) {
      const xTo = gsap.quickTo(bgWrapper, "x", { duration: 0.8, ease: "power2.out" });
      const yTo = gsap.quickTo(bgWrapper, "y", { duration: 0.8, ease: "power2.out" });

      window.addEventListener("mousemove", (e) => {
        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const normX = (e.clientX - centerX) / (rect.width / 2);
        const normY = (e.clientY - centerY) / (rect.height / 2);

        // Strict limit: X: 4px, Y: 2px (No rotation, no floating, no bounce)
        const targetX = Math.max(-4, Math.min(4, normX * 4));
        const targetY = Math.max(-2, Math.min(2, normY * 2));

        xTo(targetX);
        yTo(targetY);
      });
    }

    // Scroll Behavior: Option A - Completely fixed and visually stable behind portrait.
    // No vertical scroll motion or continuous translateY animation.
  }

  // Initialize Hero Identity Animation & Portfolio Navigation
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initHeroIdentityAnimation();
      initCertificatesScrollReveal();
      initPortfolioNav();
    });
  } else {
    initHeroIdentityAnimation();
    initCertificatesScrollReveal();
    initPortfolioNav();
  }

  ////////////////////////////////////////////////////
  // Portfolio Offcanvas Navigation, Smooth Scroll & Scrollspy
  function initPortfolioNav() {
    // Delegated click handler for menu links
    $(document).on("click", ".tw-main-menu-content a[href^='#'], .tw-main-menu-mobile a[href^='#']", function (e) {
      const targetId = $(this).attr("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        e.preventDefault();
        const $target = $(targetId);
        if ($target.length) {
          // Auto Close Offcanvas Menu
          $(".tw-offcanvas-2-area").removeClass("opened");
          $(".body-overlay").removeClass("opened");
          setTimeout(() => {
            $(".tw-text-hover-effect-word").removeClass("animated-text");
          }, 500);

          // Smooth Scroll
          $("html, body").animate(
            {
              scrollTop: $target.offset().top - 40
            },
            600
          );
        }
      }
    });

    // Active Menu Scrollspy Highlight
    function updateActiveNav() {
      const scrollPos = $(window).scrollTop() + 200;
      const navOrder = ["#contact", "#certificates", "#projects", "#about", "#home"];
      let activeId = "";

      for (let i = 0; i < navOrder.length; i++) {
        const id = navOrder[i];
        const $sec = $(id);
        if ($sec.length) {
          const top = $sec.offset().top - 150;
          const height = $sec.outerHeight();
          if (scrollPos >= top && scrollPos < top + height) {
            activeId = id;
            break;
          }
        }
      }

      if (!activeId && $(window).scrollTop() < 300) {
        activeId = "#home";
      }

      $(".tw-main-menu-content a, .tw-main-menu-mobile a").each(function () {
        const href = $(this).attr("href");
        if (href === activeId) {
          $(this).addClass("active-nav-item").css("color", "#ff6b00");
        } else if (href && href.startsWith("#")) {
          $(this).removeClass("active-nav-item").css("color", "");
        }
      });
    }

    $(window).on("scroll", updateActiveNav);
    updateActiveNav();
  }

  ////////////////////////////////////////////////////
  // Certificates & Achievements Scroll Reveal (0.8s, TranslateY: 50px -> 0, Stagger: 0.12s, Ease: power3.out)
  function initCertificatesScrollReveal() {
    const certItems = document.querySelectorAll(".cert-item");
    if (!certItems.length || typeof gsap === "undefined") return;

    gsap.fromTo(
      certItems,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certificates-timeline-wrapper",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }
})(jQuery);

