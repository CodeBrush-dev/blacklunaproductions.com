// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.blacklunaproductions.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.blacklunaproductions.com/","title_tag":"Sound Editing Chicago & Audio Engineering | Black Luna","meta_description":"Chicago sound editing, audio engineering, mixing and mastering services. Creative sound design and music production tailored to your project."},{"page_url":"https://www.blacklunaproductions.com/portfolio","title_tag":"Professional Mixing Chicago Portfolio | Black Luna","meta_description":"Hear our Chicago professional mixing and music mastering work across country, pop and alternative rock. Explore polished, radio-ready productions."},{"page_url":"https://www.blacklunaproductions.com/services","title_tag":"Audio Production & Mixing Services Chicago | Black Luna","meta_description":"Full-service audio production in Chicago: composition, recording, professional mixing and mastering for film, games, commercials and music artists."},{"page_url":"https://www.blacklunaproductions.com/rates","title_tag":"Mixing & Mastering Services Chicago Rates | Black Luna","meta_description":"Affordable Chicago mixing services, mastering and music production rates. Custom quotes for composition and full production projects."},{"page_url":"https://www.blacklunaproductions.com/mixing","title_tag":"Professional Mixing Services Chicago | Black Luna","meta_description":"Chicago professional mixing with clarity, depth and impact. Expert balancing, EQ, compression and effects to deliver powerful, emotional mixes."},{"page_url":"https://www.blacklunaproductions.com/mastering","title_tag":"Mastering Services & Music Mastering Chicago | Black Luna","meta_description":"Chicago mastering services to polish your mixes. Loudness, clarity and balance optimized for streaming, radio and all playback systems."},{"page_url":"https://www.blacklunaproductions.com/composition","title_tag":"Composition Services & Music Production Chicago | Black Luna","meta_description":"Chicago composition services crafting original music for film, games, brands and artists. Emotional scores and soundtracks tailored to your story."},{"page_url":"https://www.blacklunaproductions.com/studio","title_tag":"Audio Production Studio Chicago | Black Luna Productions","meta_description":"Chicago audio production studio with analog gear, premium microphones and precise monitoring. Record and mix music in a creative environment."},{"page_url":"https://www.blacklunaproductions.com/contact-us","title_tag":"Sound Editing & Audio Engineering Chicago | Contact","meta_description":"Contact Black Luna Productions in Chicago for sound editing, audio engineering, mixing, mastering and music production quotes within 24 hours."}],"keywords":["Sound Editing Chicago","Audio Engineering Chicago","Mixing Services Chicago","Mastering Services Chicago","Music Production Chicago","Composition Services Chicago","Professional Mixing Chicago","Audio Production Chicago","Sound Design Chicago","Music Mastering Chicago"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.blacklunaproductions.com/#organization",
  "name": "Black Luna Productions",
  "url": "https://www.blacklunaproductions.com/",
  "description": "Black Luna Productions provides professional sound editing and engineering, including music production, mixing, mastering, and composition services delivered from a state-of-the-art recording studio.",
  "image": [
    "https://static.wixstatic.com/media/5528cf_279852a362dd449182a84bea481c251c~mv2.jpg/v1/fill/w_217,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_edited.jpg",
    "https://static.wixstatic.com/media/5528cf_f9ca0938ea844d05adeb3a38cbc09a3c%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/5528cf_f9ca0938ea844d05adeb3a38cbc09a3c%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/5528cf_f9ca0938ea844d05adeb3a38cbc09a3c%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/5528cf_f9ca0938ea844d05adeb3a38cbc09a3c%7Emv2.jpg",
  "email": "services@blacklunaproductions.com",
  "telephone": "+1-312-265-2174",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.youtube.com/",
    "https://soundcloud.com/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "services@blacklunaproductions.com",
      "telephone": "+1-312-265-2174"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Audio Production Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Music Production",
        "description": "Comprehensive music production services in a state-of-the-art studio, from conceptualization to final production.",
        "url": "https://www.blacklunaproductions.com/rates"
      },
      {
        "@type": "Offer",
        "name": "Mixing Services",
        "description": "Professional mixing services to balance and enhance individual tracks for a cohesive and impactful final mix.",
        "url": "https://www.blacklunaproductions.com/mixing",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": 150,
          "maxPrice": 250,
          "unitText": "per song"
        }
      },
      {
        "@type": "Offer",
        "name": "Mastering",
        "description": "Audio mastering services that polish and optimize tracks for distribution across streaming and physical formats.",
        "url": "https://www.blacklunaproductions.com/mastering",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": 100,
          "maxPrice": 150,
          "unitText": "per song"
        }
      },
      {
        "@type": "Offer",
        "name": "Composition",
        "description": "Custom music composition tailored to a project’s mood, style, and purpose for film, games, commercials, and more.",
        "url": "https://www.blacklunaproductions.com/composition"
      }
    ]
  },
  "serviceType": [
    "Sound editing and engineering",
    "Music production",
    "Audio mixing",
    "Audio mastering",
    "Music composition"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "United States"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
