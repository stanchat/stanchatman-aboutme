/* global SITE */
(function () {
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  };

  // --- Set primary info
  $("#headline").textContent = SITE.person.headline;
  $("#summaryBlurb").textContent = SITE.person.summaryBlurb;
  $("#aboutSummary").textContent = SITE.person.aboutSummary;
  $("#location").textContent = SITE.person.location;
  $("#nowLine").textContent = SITE.nowLine;

  const img = $("#profileImg");
  img.src = SITE.person.profileImage;

  // links
  $("#linkLinkedIn").href = SITE.person.links.linkedin;
  $("#linkAboutMe").href = SITE.person.links.aboutMe;
  $("#linkGitHub").href = SITE.person.links.github;
  $("#linkEmail").href = SITE.person.links.email;
  $("#footerEmail").href = SITE.person.links.email;
  $("#resumeLink").href = "./assets/Stanley-Chatman-Resume.pdf"; // replace with your preferred filename

  // top skills
  const tagWrap = $("#topSkills");
  SITE.person.topSkills.forEach((t) => {
    const s = el("span", "tag");
    s.textContent = t;
    tagWrap.appendChild(s);
  });

  // stats
  const stats = $("#stats");
  SITE.stats.forEach((s) => {
    const c = el("div", "stat");
    const v = el("div", "stat__value");
    v.textContent = s.value;
    const l = el("div", "stat__label");
    l.textContent = s.label;
    c.appendChild(v);
    c.appendChild(l);
    stats.appendChild(c);
  });

  // focus areas
  const focus = $("#focusAreas");
  SITE.focusAreas.forEach((item) => {
    const li = el("li");
    li.textContent = item;
    focus.appendChild(li);
  });

  // volunteering timeline
  const vol = $("#volunteering");
  SITE.volunteering.forEach((v) => {
    const it = el("div", "tlItem");
    const top = el("div", "tlItem__top");

    const left = el("div");
    const title = el("div", "tlItem__title");
    title.textContent = `${v.role} — ${v.org}`;
    const meta = el("div", "tlItem__meta");
    meta.textContent = v.dates;

    left.appendChild(title);
    left.appendChild(meta);

    const when = el("div", "tlItem__when");
    when.textContent = "";

    top.appendChild(left);
    top.appendChild(when);

    const desc = el("div", "tlItem__desc");
    desc.textContent = v.description;

    it.appendChild(top);
    it.appendChild(desc);

    vol.appendChild(it);
  });

  // experience timeline
  const exp = $("#experienceTimeline");
  SITE.experience.forEach((x) => {
    const it = el("div", "tlItem");
    const top = el("div", "tlItem__top");

    const left = el("div");
    const title = el("div", "tlItem__title");
    title.textContent = `${x.title} — ${x.company}`;
    const meta = el("div", "tlItem__meta");
    meta.textContent = `${x.dates} • ${x.location || ""}`.trim();

    left.appendChild(title);
    left.appendChild(meta);

    const when = el("div", "tlItem__when");
    when.textContent = "";

    top.appendChild(left);
    top.appendChild(when);

    const desc = el("div", "tlItem__desc");
    const ul = el("ul", "bullets");
    x.bullets.forEach((b) => {
      const li = el("li");
      li.textContent = b;
      ul.appendChild(li);
    });
    desc.appendChild(ul);

    if (x.links && x.links.length) {
      const links = el("div", "projectCard__links");
      x.links.forEach((lk) => {
        const a = el("a", "link");
        a.href = lk.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = lk.label;
        links.appendChild(a);
      });
      desc.appendChild(links);
    }

    it.appendChild(top);
    it.appendChild(desc);
    exp.appendChild(it);
  });

  // projects grid
  const grid = $("#projectsGrid");
  SITE.projects.forEach((p) => {
    const card = el("div", "projectCard");

    const title = el("div", "projectCard__title");
    title.textContent = p.name;

    const meta = el("div", "tlItem__meta");
    meta.textContent = p.period || "";

    const desc = el("p", "projectCard__desc");
    desc.textContent = p.description;

    const links = el("div", "projectCard__links");
    (p.links || []).forEach((lk) => {
      const a = el("a", "link");
      a.href = lk.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = lk.label;
      links.appendChild(a);
    });

    const tags = el("div", "projectCard__meta");
    (p.tags || []).forEach((t) => {
      const pill = el("span", "pill");
      pill.textContent = t;
      tags.appendChild(pill);
    });

    card.appendChild(title);
    if (p.period) card.appendChild(meta);
    card.appendChild(desc);
    if ((p.links || []).length) card.appendChild(links);
    card.appendChild(tags);

    grid.appendChild(card);
  });

  // writing
  const makeList = (items, targetId, includeMeta = false) => {
    const wrap = $(targetId);
    items.forEach((i) => {
      const row = el("div", "listItem");
      const t = el("div", "listItem__title");
      t.textContent = i.title;

      const m = el("div", "listItem__meta");
      m.textContent = includeMeta ? `${i.date || ""}` : `${i.date || i.meta || ""}`.trim();

      const a = el("a", "listItem__link link");
      a.href = i.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = "Open";

      row.appendChild(t);
      if (m.textContent) row.appendChild(m);
      row.appendChild(a);

      wrap.appendChild(row);
    });
  };

  makeList(SITE.writing.medium, "#mediumList");
  makeList(SITE.writing.scrumOrg, "#scrumBlogList");
  makeList(SITE.writing.other, "#otherWriting");

  // certs
  const certs = $("#certsGrid");
  SITE.certifications.forEach((c) => {
    const row = el("div", "cert");
    const t = el("div", "cert__title");
    t.textContent = c.name;

    const meta = el("div", "cert__meta");
    const parts = [];
    if (c.issuer) parts.push(c.issuer);
    if (c.issued) parts.push(`Issued ${c.issued}`);
    if (c.expires) parts.push(`Expires ${c.expires}`);
    meta.textContent = parts.join(" • ");

    row.appendChild(t);
    row.appendChild(meta);
    certs.appendChild(row);
  });

  // --- Mobile nav toggle
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close on link click (mobile)
  menu?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    menu.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });

  // --- Tabs
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panels = Array.from(document.querySelectorAll(".tabPanel"));
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      tabs.forEach((x) => {
        x.classList.remove("is-active");
        x.setAttribute("aria-selected", "false");
      });
      panels.forEach((p) => p.classList.remove("is-active"));

      t.classList.add("is-active");
      t.setAttribute("aria-selected", "true");
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel?.classList.add("is-active");
    });
  });
})();
