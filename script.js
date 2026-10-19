/* Portfolio content and interactions. */

const portfolio = {
  email: "tanespero@gmail.com",
  profiles: {
    github: "https://github.com/tantan-casimero27",
    linkedin: ""
  },
  tools: [
    {
      name: "CapCut",
      url: "https://www.capcut.com/creative-suite?utm_medium=websem&utm_source=googleadwords_int&utm_campaign=brand&pid=348188&af_c_id=23334028235&adset_id=190159439416&ad_id=787067117710&placement=&keyword=capcut%20online&targetid=kwd-1415464579613&matchtype=p&utm_content=ccweb&gad_source=1&gad_campaignid=23334028235&gbraid=0AAAAACROvhltcL7hr22WYcMe5Jlld-ayK&gclid=CjwKCAjwirLWBhBBEiwAlItbEo0BDlFCd2XuWJtFxNCoSW3V3GgzzKub-z8Bk83pKE_RlRZ1ej48ohoCiLYQAvD_BwEE",
      color: "#f8fafc",
      logo: "./assets/tool-logos/capcut.png"
    },
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      color: "#74d7ae",
      logo: "./assets/tool-logos/chatgpt.png"
    },
    {
      name: "Claude",
      url: "https://claude.ai/new?redirect=claude.com&via=cookie",
      color: "#d98252",
      logo: "./assets/tool-logos/claude.png"
    },
    {
      name: "Canva",
      url: "https://www.canva.com/",
      color: "#8b72ff",
      logo: "./assets/tool-logos/canva.png"
    },
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
      color: "#36a9f3",
      logo: "./assets/tool-logos/vscode.png"
    },
    {
      name: "AutoCAD 2021",
      url: "https://www.autodesk.com/blogs/autocad/autocad-2021/",
      color: "#f44747",
      logo: "./assets/tool-logos/autocad.png"
    }
  ],
  services: [
    {
      title: "Web Development",
      description: "Creating simple, responsive, and user-friendly websites using HTML, CSS, and JavaScript.",
      icon: "</>",
      accent: "#22d3ee"
    },
    {
      title: "Electronics & Prototyping",
      description: "Exploring microcontroller-based systems, component integration, and electronics project documentation.",
      icon: "⌘",
      accent: "#ff6b2c"
    },
    {
      title: "Technical Documentation",
      description: "Organizing project requirements, system diagrams, process flows, and technical presentations.",
      icon: "▤",
      accent: "#ffd166"
    },
    {
      title: "Basic Video Editing",
      description: "Editing clips, adding transitions, text, music, and effects using CapCut.",
      icon: "▶",
      accent: "#ffb347"
    },
    {
      title: "Canva Design",
      description: "Designing basic posters, social media graphics, presentations, and visual materials using Canva.",
      icon: "C",
      accent: "#14b8a6"
    },
    {
      title: "Basic AutoCAD",
      description: "Create basic 2D technical drawings, simple layouts, and dimensioned plans using AutoCAD.",
      logo: "./assets/tool-logos/autocad.svg",
      accent: "#f44747"
    }
  ],
  projects: [
    {
      title: "ERecPass",
      category: "HEALTHCARE SYSTEM · SAMPLE",
      status: "Replace with actual project status",
      description: "A concept for authorized patient identification and hospital information management.",
      details: "Sample description only. Add verified project scope and implementation details here. Do not publish patient data, credentials, or confidential hospital information.",
      technologies: ["Patient identification", "Access control", "Information management"],
      icon: "EP",
      accent: "#22d3ee",
      glow: "rgba(34, 211, 238, 0.2)",
      repository: "",
      demo: ""
    },
    {
      title: "EdiDeliver",
      category: "WEB DEVELOPMENT / DELIVERY MANAGEMENT SYSTEM",
      status: "In Progress",
      description: "EdiDeliver is a delivery management system concept designed to support customer ordering, driver operations, and administrative management through separate interfaces. The project is being developed to explore delivery workflows, dashboard design, and web application functionality.",
      details: "The preview bundle includes separate customer, admin, driver, login, signup, and password-reset pages. Its script.js file is empty; some page behavior is defined in inline scripts.",
      technologies: ["Customer dashboard", "Driver dashboard", "Admin dashboard"],
      icon: "🏍️",
      accent: "#22d3ee",
      glow: "rgba(34, 211, 238, 0.2)",
      repository: "",
      demo: "./edideliver/login.html",
      demoLabel: "View Project",
      files: [
        { name: "Customer booking page", path: "index.html", type: "HTML" },
        { name: "Admin dashboard", path: "admin.html", type: "HTML" },
        { name: "Driver dashboard", path: "driver.html", type: "HTML" },
        { name: "Forgot password", path: "forgot_password.html", type: "HTML" },
        { name: "Login page", path: "login.html", type: "HTML" },
        { name: "Signup page", path: "signup.html", type: "HTML" },
        { name: "Shared script", path: "script.js", type: "JavaScript" },
        { name: "EdiDeliver title proposal", path: "docs/Title-ProposalEDIDELIVER.docx", type: "DOCX" }
      ]
    }
  ],
};

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });

const getProfileUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
};

const toolsGrid = document.querySelector("#tools-grid");
toolsGrid.innerHTML = portfolio.tools
  .map((tool) => {
    const url = getProfileUrl(tool.url);
    if (!url) {
      throw new Error(`The ${tool.name} destination must be a valid HTTP or HTTPS URL.`);
    }

    return `
      <a class="tool-link reveal" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${escapeHTML(tool.name)} website (opens in a new tab)" title="${escapeHTML(tool.name)}" style="--tool-color:${escapeHTML(tool.color)}">
        <span class="tool-logo"><img src="${escapeHTML(tool.logo)}" alt="" aria-hidden="true"></span>
      </a>
    `;
  })
  .join("");

const safeProjectLink = (url, label, isButton = false) => {
  const linkClass = isButton ? "project-link project-link-button" : "project-link";
  if (!url) {
    return `<span class="${linkClass} is-placeholder">${escapeHTML(label)} — add link</span>`;
  }

  const isLocalPage =
    url.startsWith("./") &&
    url.endsWith(".html") &&
    !url.includes("..") &&
    !/[?#\\]/.test(url);
  if (isLocalPage) {
    return `<a class="${linkClass}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;
  }

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return `<span class="${linkClass} is-placeholder">${escapeHTML(label)} — add link</span>`;
    }
    return `<a class="${linkClass}" href="${escapeHTML(parsed.href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;
  } catch {
    return `<span class="${linkClass} is-placeholder">${escapeHTML(label)} — add link</span>`;
  }
};

const projectsGrid = document.querySelector("#projects-grid");
projectsGrid.innerHTML = portfolio.projects
  .map((project, index) => {
    const artTag = project.files ? "button" : "div";
    const artAttributes = project.files
      ? `type="button" class="project-art project-files-trigger" data-project-index="${index}" aria-label="Browse all ${escapeHTML(project.title)} files"`
      : `class="project-art" role="img" aria-label="Decorative ${escapeHTML(project.title)} project artwork"`;

    return `
      <article class="project-card reveal">
        <${artTag} ${artAttributes} style="--art-accent:${escapeHTML(project.accent)};--art-glow:${escapeHTML(project.glow)}">
          <span class="project-index">${String(index + 1).padStart(2, "0")} / ${String(portfolio.projects.length).padStart(2, "0")}</span>
          <span class="project-art-glyph" aria-hidden="true">${escapeHTML(project.icon)}</span>
          <span class="project-art-tag">${project.files ? "CLICK TO BROWSE PROJECT FILES" : "N.J.C. / PROJECT FILE"}</span>
        </${artTag}>
        <div class="project-body">
          <div class="project-meta">
            <span class="project-category">${escapeHTML(project.category)}</span>
            ${project.status && project.status !== "Replace with actual project status" ? `<span class="project-status">${escapeHTML(project.status)}</span>` : ""}
          </div>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.description)}</p>
          <div class="project-tags">${project.technologies.map((technology) => `<span>${escapeHTML(technology)}</span>`).join("")}</div>
          <div class="project-actions">
            ${project.repository ? safeProjectLink(project.repository, "GitHub repository") : ""}
            ${project.demo ? safeProjectLink(project.demo, project.demoLabel || "Live demo", Boolean(project.demoLabel)) : ""}
            ${project.files ? `<button class="project-link project-link-button project-files-trigger" type="button" data-project-index="${index}">Browse project files <span aria-hidden="true">↗</span></button>` : ""}
          </div>
        </div>
      </article>
    `;
  })
  .join("");

const projectFilesDialog = document.querySelector("#project-files-dialog");
const projectFileList = document.querySelector("#project-file-list");

projectsGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest(".project-files-trigger");
  if (!trigger) return;

  const project = portfolio.projects[Number(trigger.dataset.projectIndex)];
  if (!project?.files) {
    throw new Error("The selected project does not have a file list.");
  }

  projectFileList.innerHTML = project.files
    .map((file) => {
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_./-]*$/.test(file.path) || file.path.includes("..")) {
        throw new Error(`The ${file.name} project file path is invalid.`);
      }

      const isDocument = file.path.endsWith(".docx");
      return `
        <li>
          <a class="project-file-link" href="./edideliver/${escapeHTML(file.path)}"${isDocument ? ` download="${escapeHTML(file.path.split("/").pop())}"` : ` target="_blank" rel="noopener noreferrer"`}>
            <span class="project-file-name">${escapeHTML(file.name)}</span>
            <span class="project-file-meta">${escapeHTML(file.path)} <span>${escapeHTML(file.type)} ↗</span></span>
          </a>
        </li>
      `;
    })
    .join("");

  projectFilesDialog.showModal();
});

projectFilesDialog.addEventListener("click", (event) => {
  if (event.target === projectFilesDialog) projectFilesDialog.close();
});

const servicesGrid = document.querySelector("#services-grid");
servicesGrid.innerHTML = portfolio.services
  .map(
    (service) => `
      <article class="service-card reveal" style="--service-accent:${escapeHTML(service.accent)}">
        <h4>
          <span class="service-icon" aria-hidden="true">${
            service.logo
              ? `<img src="${escapeHTML(service.logo)}" alt="">`
              : escapeHTML(service.icon)
          }</span>
          ${escapeHTML(service.title)}
        </h4>
        <p>${escapeHTML(service.description)}</p>
      </article>
    `
  )
  .join("");

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.href = `mailto:${portfolio.email}`;
});
document.querySelectorAll("[data-email-text]").forEach((element) => {
  element.textContent = portfolio.email;
});

const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-btn");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const honeypot = contactForm.elements.namedItem("_gotcha");
  if (honeypot instanceof HTMLInputElement && honeypot.value.trim()) {
    formStatus.textContent = "Unable to submit this form.";
    formStatus.className = "form-status is-error";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  formStatus.textContent = "";
  formStatus.className = "form-status";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      formStatus.textContent = `The form service could not send your message (HTTP ${response.status}). Please try again or email me directly.`;
      formStatus.className = "form-status is-error";
      return;
    }

    contactForm.reset();
    formStatus.textContent = "Thank you! Your inquiry has been sent successfully.";
    formStatus.className = "form-status is-success";
  } catch {
    formStatus.textContent = "A network error prevented your message from being sent. Please try again or email me directly.";
    formStatus.className = "form-status is-error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send inquiry ↗";
  }
});

Object.entries(portfolio.profiles).forEach(([profile, value]) => {
  const url = getProfileUrl(value);
  if (!url) return;

  const heroPlaceholder = document.querySelector(`[data-profile-hero="${profile}"]`);
  if (heroPlaceholder) {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = profile === "github" ? "GitHub" : "LinkedIn";
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = " ↗";
    link.append(arrow);
    heroPlaceholder.replaceWith(link);
  }

  const contactPlaceholder = document.querySelector(`[data-profile-row="${profile}"]`);
  if (contactPlaceholder) {
    const link = document.createElement("a");
    link.className = "contact-row";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const label = contactPlaceholder.querySelector("strong");
    if (label) label.textContent = profile === "github" ? "GitHub profile" : "LinkedIn profile";
    while (contactPlaceholder.firstChild) link.append(contactPlaceholder.firstChild);
    contactPlaceholder.replaceWith(link);
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navLinks.classList.remove("is-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const navigationLinks = [...document.querySelectorAll(".nav-link")];
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link) => {
          const active = link.hash === `#${entry.target.id}`;
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
          link.classList.toggle("active", active);
        });
      });
    },
    { rootMargin: "-32% 0px -58% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

// Gently shift the hero's decorative line layers toward the pointer.
const heroArt = document.querySelector(".hero-art");
const heroLineMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerPreference = window.matchMedia("(hover: hover) and (pointer: fine)");

if (heroArt && finePointerPreference.matches) {
  const lineLayers = [
    { element: heroArt.querySelector(".orbit-one"), depth: 1 },
    { element: heroArt.querySelector(".orbit-two"), depth: -0.72 },
    { element: heroArt.querySelector(".sigil-ring"), depth: 0.42 }
  ].filter((layer) => layer.element);
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let parallaxFrame = 0;

  const clearLineParallax = () => {
    lineLayers.forEach(({ element }) => {
      element.style.removeProperty("--line-shift-x");
      element.style.removeProperty("--line-shift-y");
    });
    targetX = 0;
    targetY = 0;
  };

  const updateLineParallax = () => {
    parallaxFrame = 0;
    if (heroLineMotionPreference.matches) {
      currentX = 0;
      currentY = 0;
      clearLineParallax();
      return;
    }

    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    lineLayers.forEach(({ element, depth }) => {
      element.style.setProperty("--line-shift-x", `${(currentX * depth).toFixed(2)}px`);
      element.style.setProperty("--line-shift-y", `${(currentY * depth).toFixed(2)}px`);
    });

    if (Math.abs(targetX - currentX) > 0.03 || Math.abs(targetY - currentY) > 0.03) {
      parallaxFrame = window.requestAnimationFrame(updateLineParallax);
    } else {
      currentX = targetX;
      currentY = targetY;
    }
  };

  const handleHeroPointerMove = (event) => {
    if (heroLineMotionPreference.matches || event.pointerType === "touch") return;
    const bounds = heroArt.getBoundingClientRect();
    targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateLineParallax);
  };

  const handleHeroPointerLeave = () => {
    targetX = 0;
    targetY = 0;
    if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateLineParallax);
  };

  const handleHeroMotionChange = () => {
    if (!heroLineMotionPreference.matches) return;
    if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
    parallaxFrame = 0;
    currentX = 0;
    currentY = 0;
    clearLineParallax();
  };

  const handleHeroPageHide = () => {
    if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
    heroArt.removeEventListener("pointermove", handleHeroPointerMove);
    heroArt.removeEventListener("pointerleave", handleHeroPointerLeave);
    heroLineMotionPreference.removeEventListener("change", handleHeroMotionChange);
    window.removeEventListener("pagehide", handleHeroPageHide);
  };

  heroArt.addEventListener("pointermove", handleHeroPointerMove, { passive: true });
  heroArt.addEventListener("pointerleave", handleHeroPointerLeave, { passive: true });
  heroLineMotionPreference.addEventListener("change", handleHeroMotionChange);
  window.addEventListener("pagehide", handleHeroPageHide, { once: true });
}

// Hero energy field. Adjust these values to tune density and motion.
const energySettings = {
  particlesPerArea: 1 / 11000,
  minimumParticles: 34,
  maximumParticles: 118,
  maximumPixelRatio: 1.5,
  vortexStrength: 13,
  particleSpeed: 1,
  glowIntensity: 1
};

const energyCanvas = document.querySelector(".hero-energy");
const hero = document.querySelector(".hero");
const energyContext = energyCanvas?.getContext("2d", { alpha: true });

if (energyCanvas && hero && energyContext) {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const colors = {
    orange: "255, 107, 44",
    amber: "255, 179, 71",
    gold: "255, 209, 102",
    cyan: "34, 211, 238",
    teal: "20, 184, 166",
    blue: "59, 130, 246"
  };
  const particlePalette = Object.keys(colors);
  const particles = [];
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let animationFrame = 0;
  let lastFrame = 0;
  let elapsed = 0;
  let destroyed = false;

  const random = (min, max) => min + Math.random() * (max - min);

  const createParticle = (x = Math.random(), y = Math.random()) => ({
    x,
    y,
    vx: random(-0.007, 0.007),
    vy: random(-0.006, 0.006),
    radius: random(0.65, 1.8),
    phase: random(0, Math.PI * 2),
    twinkleSpeed: random(0.45, 1.1),
    color: particlePalette[Math.floor(Math.random() * particlePalette.length)],
    glows: Math.random() < 0.16
  });

  const resizeCanvas = () => {
    const bounds = hero.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    pixelRatio = Math.min(window.devicePixelRatio || 1, energySettings.maximumPixelRatio);
    energyCanvas.width = Math.round(width * pixelRatio);
    energyCanvas.height = Math.round(height * pixelRatio);
    energyContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const count = Math.max(
      energySettings.minimumParticles,
      Math.min(
        energySettings.maximumParticles,
        Math.round((width * height) * energySettings.particlesPerArea)
      )
    );

    while (particles.length < count) particles.push(createParticle());
    if (particles.length > count) particles.length = count;

    if (motionPreference.matches) drawFrame(0, false);
  };

  const getParticleColor = (particle, vortexX) => {
    const distanceToVortex = Math.abs(particle.x * width - vortexX);
    const centerBlend = Math.max(0, 1 - distanceToVortex / (width * 0.2));
    if (centerBlend > 0.55) return colors.gold;
    if (particle.x < 0.38) {
      return particle.color === "amber" || particle.color === "gold"
        ? colors[particle.color]
        : colors.orange;
    }
    if (particle.x > 0.72) {
      return particle.color === "blue" || particle.color === "teal"
        ? colors[particle.color]
        : colors.cyan;
    }
    return colors[particle.color];
  };

  const drawVortex = (vortexX, vortexY) => {
    const radius = Math.min(width * 0.16, height * 0.34, 175);
    const atmosphere = energyContext.createRadialGradient(
      vortexX,
      vortexY,
      0,
      vortexX,
      vortexY,
      radius
    );
    atmosphere.addColorStop(0, `rgba(${colors.gold}, ${0.045 * energySettings.glowIntensity})`);
    atmosphere.addColorStop(0.42, `rgba(${colors.orange}, ${0.022 * energySettings.glowIntensity})`);
    atmosphere.addColorStop(0.78, `rgba(${colors.cyan}, 0.018)`);
    atmosphere.addColorStop(1, "rgba(8, 11, 18, 0)");
    energyContext.fillStyle = atmosphere;
    energyContext.fillRect(vortexX - radius, vortexY - radius, radius * 2, radius * 2);

  };

  const drawFrame = (deltaSeconds, animate) => {
    energyContext.clearRect(0, 0, width, height);
    const vortexX = width * 0.67;
    const vortexY = height * 0.5;
    const vortexRadius = Math.min(width * 0.28, height * 0.52, 250);
    drawVortex(vortexX, vortexY);

    if (animate) {
      elapsed += deltaSeconds;
      particles.forEach((particle) => {
        const px = particle.x * width;
        const py = particle.y * height;
        const dx = vortexX - px;
        const dy = vortexY - py;
        const distance = Math.hypot(dx, dy);

        particle.vx += Math.sin(elapsed * 0.16 + particle.phase) * 0.00022 * deltaSeconds;
        particle.vy += Math.cos(elapsed * 0.13 + particle.phase) * 0.00018 * deltaSeconds;

        if (distance < vortexRadius && distance > 0) {
          const influence = (1 - distance / vortexRadius) * energySettings.vortexStrength;
          particle.vx += ((-dy / distance) * influence + (dx / distance) * influence * 0.2) * deltaSeconds / width;
          particle.vy += ((dx / distance) * influence + (dy / distance) * influence * 0.2) * deltaSeconds / height;
        }

        const drag = Math.exp(-0.06 * deltaSeconds);
        particle.vx *= drag;
        particle.vy *= drag;
        particle.x += particle.vx * deltaSeconds * energySettings.particleSpeed;
        particle.y += particle.vy * deltaSeconds * energySettings.particleSpeed;

        if (particle.x < -0.025) particle.x = 1.025;
        if (particle.x > 1.025) particle.x = -0.025;
        if (particle.y < -0.025) particle.y = 1.025;
        if (particle.y > 1.025) particle.y = -0.025;
      });
    }

    const positions = particles.map((particle) => ({
      particle,
      x: particle.x * width,
      y: particle.y * height
    }));

    positions.forEach(({ particle, x, y }, index) => {
      const color = getParticleColor(particle, vortexX);
      const pulse = animate
        ? 0.62 + Math.sin(elapsed * particle.twinkleSpeed + particle.phase) * 0.18
        : 0.58;
      energyContext.beginPath();
      energyContext.arc(x, y, particle.radius, 0, Math.PI * 2);
      energyContext.fillStyle = `rgba(${color}, ${pulse})`;
      energyContext.fill();

      if (particle.glows && index % 3 === 0) {
        const glowRadius = particle.radius * 7 * energySettings.glowIntensity;
        const glow = energyContext.createRadialGradient(x, y, 0, x, y, glowRadius);
        glow.addColorStop(0, `rgba(${color}, 0.19)`);
        glow.addColorStop(1, `rgba(${color}, 0)`);
        energyContext.fillStyle = glow;
        energyContext.fillRect(x - glowRadius, y - glowRadius, glowRadius * 2, glowRadius * 2);
      }
    });
  };

  const animate = (timestamp) => {
    if (destroyed || document.hidden || motionPreference.matches) return;
    const deltaSeconds = lastFrame
      ? Math.min((timestamp - lastFrame) / 1000, 0.05)
      : 0;
    lastFrame = timestamp;
    drawFrame(deltaSeconds, true);
    animationFrame = window.requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (destroyed || document.hidden || motionPreference.matches || animationFrame) return;
    lastFrame = 0;
    animationFrame = window.requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastFrame = 0;
  };

  const handleMotionPreference = () => {
    stopAnimation();
    if (motionPreference.matches) drawFrame(0, false);
    else startAnimation();
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopAnimation();
    } else if (motionPreference.matches) {
      drawFrame(0, false);
    } else {
      startAnimation();
    }
  };

  const handlePageHide = () => {
    destroyed = true;
    stopAnimation();
    resizeObserver.disconnect();
    window.removeEventListener("resize", resizeCanvas);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", handlePageHide);
    motionPreference.removeEventListener("change", handleMotionPreference);
  };

  const resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(hero);
  window.addEventListener("resize", resizeCanvas, { passive: true });
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide, { once: true });
  motionPreference.addEventListener("change", handleMotionPreference);
  resizeCanvas();
  if (motionPreference.matches) drawFrame(0, false);
  else startAnimation();
}

// A quiet star field behind the content, fading from the hero toward the footer.
const pageStarsCanvas = document.querySelector(".page-stars");
const pageStarsContext = pageStarsCanvas?.getContext("2d");

if (pageStarsCanvas && pageStarsContext && hero) {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const starPalette = [
    "255, 107, 44",
    "255, 179, 71",
    "255, 209, 102",
    "34, 211, 238",
    "20, 184, 166",
    "59, 130, 246",
    "220, 232, 248"
  ];
  const stars = [];
  const maximumStars = 180;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let documentHeight = 0;
  let heroBottom = 0;
  let animationFrame = 0;
  let lastFrameTimestamp = 0;
  let destroyed = false;

  const refreshPageDimensions = () => {
    documentHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
  };

  const resizePageStars = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    pageStarsCanvas.width = Math.round(width * pixelRatio);
    pageStarsCanvas.height = Math.round(height * pixelRatio);
    pageStarsContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    refreshPageDimensions();

    const count = Math.min(maximumStars, Math.max(48, Math.round((width * height) / 8500)));
    stars.length = 0;
    for (let index = 0; index < count; index += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.45 + Math.random() * 1.25,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.4 + Math.random() * 1.3,
        color: starPalette[Math.floor(Math.random() * starPalette.length)],
        driftX: (Math.random() - 0.5) * 7,
        driftY: (Math.random() - 0.5) * 9,
        glow: Math.random() < 0.12,
        sparkle: Math.random() < 0.1
      });
    }

    drawPageStars(performance.now());
    if (!motionPreference.matches && !document.hidden && window.scrollY + height > heroBottom) {
      startPageStars();
    }
  };

  const drawPageStars = (timestamp) => {
    pageStarsContext.clearRect(0, 0, width, height);
    const pageDepth = Math.max(1, documentHeight - heroBottom);
    const elapsed = timestamp / 1000;

    stars.forEach((star) => {
      const documentY = window.scrollY + star.y;
      const depth = documentY - heroBottom;
      if (depth <= 0 || depth >= pageDepth) return;

      const progress = depth / pageDepth;
      const fadeIn = Math.min(1, depth / Math.max(1, height * 0.22));
      const fadeOut = Math.pow(1 - progress, 1.25);
      const twinkle = motionPreference.matches
        ? 0.72
        : 0.3 + (Math.sin(elapsed * star.twinkleSpeed + star.phase) + 1) * 0.32;
      const opacity = fadeIn * fadeOut * twinkle;
      if (opacity < 0.025) return;

      pageStarsContext.beginPath();
      pageStarsContext.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      pageStarsContext.fillStyle = `rgba(${star.color}, ${opacity})`;
      pageStarsContext.fill();

      if (star.sparkle && twinkle > 0.82) {
        const glintSize = star.radius * 3.5;
        pageStarsContext.beginPath();
        pageStarsContext.moveTo(star.x - glintSize, star.y);
        pageStarsContext.lineTo(star.x + glintSize, star.y);
        pageStarsContext.moveTo(star.x, star.y - glintSize);
        pageStarsContext.lineTo(star.x, star.y + glintSize);
        pageStarsContext.strokeStyle = `rgba(${star.color}, ${opacity * 0.42})`;
        pageStarsContext.lineWidth = 0.7;
        pageStarsContext.stroke();
      }

      if (star.glow) {
        const glowRadius = star.radius * 5;
        const glow = pageStarsContext.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          glowRadius
        );
        glow.addColorStop(0, `rgba(${star.color}, ${opacity * 0.26})`);
        glow.addColorStop(1, `rgba(${star.color}, 0)`);
        pageStarsContext.fillStyle = glow;
        pageStarsContext.fillRect(
          star.x - glowRadius,
          star.y - glowRadius,
          glowRadius * 2,
          glowRadius * 2
        );
      }
    });
  };

  const animatePageStars = (timestamp) => {
    animationFrame = 0;
    if (destroyed || document.hidden || motionPreference.matches) return;
    const deltaSeconds = lastFrameTimestamp
      ? Math.min((timestamp - lastFrameTimestamp) / 1000, 0.05)
      : 0;
    lastFrameTimestamp = timestamp;
    stars.forEach((star) => {
      star.x += star.driftX * deltaSeconds;
      star.y += star.driftY * deltaSeconds;
      if (star.x < -4) star.x = width + 4;
      else if (star.x > width + 4) star.x = -4;
      if (star.y < -4) star.y = height + 4;
      else if (star.y > height + 4) star.y = -4;
    });
    drawPageStars(timestamp);
    if (window.scrollY + height > heroBottom) {
      animationFrame = window.requestAnimationFrame(animatePageStars);
    }
  };

  const startPageStars = () => {
    if (destroyed || document.hidden || motionPreference.matches || animationFrame) return;
    animationFrame = window.requestAnimationFrame(animatePageStars);
  };

  const stopPageStars = () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastFrameTimestamp = 0;
  };

  const handlePageScroll = () => {
    refreshPageDimensions();
    drawPageStars(performance.now());
    if (!motionPreference.matches && window.scrollY + height > heroBottom) startPageStars();
    else stopPageStars();
  };

  const handleMotionPreference = () => {
    stopPageStars();
    drawPageStars(performance.now());
    if (!motionPreference.matches) startPageStars();
  };

  const handleVisibilityChange = () => {
    if (document.hidden) stopPageStars();
    else handlePageScroll();
  };

  const handlePageHide = () => {
    destroyed = true;
    stopPageStars();
    window.removeEventListener("resize", resizePageStars);
    window.removeEventListener("scroll", handlePageScroll);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", handlePageHide);
    motionPreference.removeEventListener("change", handleMotionPreference);
  };

  window.addEventListener("resize", resizePageStars, { passive: true });
  window.addEventListener("scroll", handlePageScroll, { passive: true });
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide, { once: true });
  motionPreference.addEventListener("change", handleMotionPreference);
  resizePageStars();
}

// Theme-colored cursor sparks; the overlay never captures pointer interaction.
const cursorCanvas = document.querySelector(".cursor-trail");
const cursorContext = cursorCanvas?.getContext("2d");
const cursorMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (
  cursorCanvas &&
  cursorContext &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches
) {
  const cursorColors = ["255, 107, 44", "255, 179, 71", "255, 209, 102", "34, 211, 238", "20, 184, 166"];
  const cursorParticles = [];
  const maximumCursorParticles = 90;
  let cursorPixelRatio = 1;
  let cursorFrame = 0;
  let previousPointer = null;
  let previousFrame = 0;

  const resizeCursorCanvas = () => {
    cursorPixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    cursorCanvas.width = Math.round(window.innerWidth * cursorPixelRatio);
    cursorCanvas.height = Math.round(window.innerHeight * cursorPixelRatio);
    cursorContext.setTransform(cursorPixelRatio, 0, 0, cursorPixelRatio, 0, 0);
  };

  const stopCursorAnimation = () => {
    if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
    previousFrame = 0;
    cursorParticles.length = 0;
    cursorContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const drawCursorTrail = (timestamp) => {
    cursorFrame = 0;
    if (document.hidden) return;

    const deltaSeconds = previousFrame
      ? Math.min((timestamp - previousFrame) / 1000, 0.05)
      : 0;
    previousFrame = timestamp;
    cursorContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let index = cursorParticles.length - 1; index >= 0; index -= 1) {
      const particle = cursorParticles[index];
      particle.life -= deltaSeconds;
      if (particle.life <= 0) {
        cursorParticles.splice(index, 1);
        continue;
      }

      particle.x += particle.vx * deltaSeconds;
      particle.y += particle.vy * deltaSeconds;
      particle.vx *= Math.exp(-2.2 * deltaSeconds);
      particle.vy *= Math.exp(-2.2 * deltaSeconds);
      const opacity = Math.min(1, particle.life / particle.maxLife) * 0.72;
      const radius = particle.radius * (0.55 + (particle.life / particle.maxLife) * 0.65);

      cursorContext.beginPath();
      cursorContext.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      cursorContext.fillStyle = `rgba(${particle.color}, ${opacity})`;
      cursorContext.shadowColor = `rgba(${particle.color}, ${opacity})`;
      cursorContext.shadowBlur = 11;
      cursorContext.fill();
    }

    cursorContext.shadowBlur = 0;
    if (cursorParticles.length) cursorFrame = window.requestAnimationFrame(drawCursorTrail);
    else previousFrame = 0;
  };

  const addCursorParticle = (x, y, movementX, movementY) => {
    const angle = Math.random() * Math.PI * 2;
    const drift = 10 + Math.random() * 23;
    cursorParticles.push({
      x,
      y,
      vx: -movementX * 1.2 + Math.cos(angle) * drift,
      vy: -movementY * 1.2 + Math.sin(angle) * drift,
      radius: 1.1 + Math.random() * 2.1,
      life: 0.34 + Math.random() * 0.36,
      maxLife: 0.7,
      color: cursorColors[Math.floor(Math.random() * cursorColors.length)]
    });
    if (cursorParticles.length > maximumCursorParticles) cursorParticles.shift();
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    const currentPointer = { x: event.clientX, y: event.clientY };
    if (previousPointer) {
      const movementX = currentPointer.x - previousPointer.x;
      const movementY = currentPointer.y - previousPointer.y;
      const distance = Math.hypot(movementX, movementY);
      if (distance > 2) {
        const particleCount = Math.min(4, Math.max(1, Math.ceil(distance / 12)));
        for (let index = 0; index < particleCount; index += 1) {
          const progress = (index + 1) / particleCount;
          addCursorParticle(
            previousPointer.x + movementX * progress,
            previousPointer.y + movementY * progress,
            movementX * 0.025,
            movementY * 0.025
          );
        }
      }
    }
    previousPointer = currentPointer;
    if (cursorParticles.length && !cursorFrame) {
      cursorFrame = window.requestAnimationFrame(drawCursorTrail);
    }
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      previousPointer = null;
      stopCursorAnimation();
    }
  };

  const handleMotionPreferenceChange = () => {
    previousPointer = null;
    if (cursorMotionPreference.matches) {
      window.removeEventListener("pointermove", handlePointerMove);
      stopCursorAnimation();
    } else {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }
  };

  const handlePageHide = () => {
    stopCursorAnimation();
    window.removeEventListener("resize", resizeCursorCanvas);
    window.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", handlePageHide);
    cursorMotionPreference.removeEventListener("change", handleMotionPreferenceChange);
  };

  resizeCursorCanvas();
  window.addEventListener("resize", resizeCursorCanvas, { passive: true });
  if (!cursorMotionPreference.matches) {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
  }
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide, { once: true });
  cursorMotionPreference.addEventListener("change", handleMotionPreferenceChange);
}
