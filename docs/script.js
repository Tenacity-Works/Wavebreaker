// ============================================================================
// EASY EDIT CONFIGURATION — Update any download, itch.io, or feedback URLs here!
// ============================================================================
const SITE_LINKS = {
  windowsDownload: "https://github.com/Tenacity-Works/Wavebreaker/releases/latest",
  githubRepo: "https://github.com/Tenacity-Works/Wavebreaker",
  itchPage: "#play",       // Replace with your itch.io URL once created (e.g. "https://tenacityworks.itch.io/wavebreaker")
  feedbackForm: "#play"    // Replace with your Google Form or Discord invite URL if desired
};

const CHAMPIONS = [
  {
    id: "auren",
    name: "Auren",
    role: "Frostfire Prince",
    unlock: "Starter Champion",
    weapon: "Winter's Requiem",
    accent: "#5ce1ff",
    accentSoft: "rgba(92, 225, 255, 0.20)",
    poseImg: "assets/heroes/auren.png",
    ultImg: "assets/ultimates/auren-ult.jpg",
    passiveName: "Frostfire",
    passiveDesc: "Piercing sword waves sear victims with 3 seconds of lingering Frostfire damage over time.",
    ultName: "Iceflame (12s)",
    ultDesc: "Awakens ancient winter flames, unleashing enlarged blazing waves that deal 1.7× direct damage and stronger Frostfire.",
    runes: [
      { name: "Twin Crescent", base: "Every attack sends a second wave at an angle.", awaken: "Fire three waves per swing instead of two." },
      { name: "Whiteout", base: "Frostfire deaths burst outward, spreading Frostfire to nearby foes.", awaken: "Death bursts deal twice the damage." },
      { name: "Ascension", base: "Every 100 kills grants a permanent Common upgrade to a random attribute.", awaken: "Triggers every 75 kills instead of 100." },
      { name: "Soulfire", base: "Frostfire ticks restore Mana and extend Iceflame by +4s.", awaken: "Double restored Mana and +8s total bonus Iceflame duration." },
      { name: "Royal Reprisal", base: "Every 4th attack unleashes an 8-wave frostfire ring.", awaken: "Releases the full ring every 3rd attack." }
    ]
  },
  {
    id: "aelinor",
    name: "Aelinor",
    role: "Windrunner Archer",
    unlock: "500 Gold",
    weapon: "Verdant Bow",
    accent: "#5df2a8",
    accentSoft: "rgba(93, 242, 168, 0.18)",
    poseImg: "assets/heroes/aelinor.png",
    ultImg: "assets/ultimates/aelinor-ult.jpg",
    passiveName: "Concentration",
    passiveDesc: "Arrows pierce an extra target by default. Gain +0.5% critical chance per level (up to 100%) for 2× damage.",
    ultName: "Windrunner (12s)",
    ultDesc: "Become the gale—gain +40% movement speed and +30% attack speed wreathed in emerald wind ribbons.",
    runes: [
      { name: "Twin Arrows", base: "Loose a second arrow with every shot.", awaken: "All arrows deal +20% more damage." },
      { name: "Piercing Arrows", base: "Arrows pierce cleanly through unlimited enemies.", awaken: "Arrows return to Aelinor like a boomerang at max range, striking again." },
      { name: "Ricochet", base: "Arrows bounce to up to 2 nearby foes (+7.5% damage per bounce).", awaken: "Gain +1 extra bounce for every 25% Luck." },
      { name: "Zephyr Momentum", base: "Arrows scale with +20% Move Speed; crits grant +25% Move Speed for 2.5s.", awaken: "Increases to +35% Move Speed scaling and +20% Attack Speed on crit." },
      { name: "Fortune's Quarry", base: "Gain crit chance from Luck; crits mark foes to take +25% arrow damage.", awaken: "Higher Luck crit scaling, and killing a marked foe fires 3 arrows outward." }
    ]
  },
  {
    id: "cyrene",
    name: "Cyrene",
    role: "Glacial Arcanist",
    unlock: "750 Gold",
    weapon: "Glacial Scepter",
    accent: "#6cb8ff",
    accentSoft: "rgba(108, 184, 255, 0.20)",
    poseImg: "assets/heroes/cyrene.png",
    ultImg: "assets/ultimates/cyrene-ult.jpg",
    passiveName: "Frostbite",
    passiveDesc: "Explosive ice bolts apply 10% stacking movement slow per hit (up to 50% for 5 seconds).",
    ultName: "Absolute Zero (8s)",
    ultDesc: "Summon a stationary blizzard at your cursor that freezes enemies for 2s on entry and deals rapid AoE Frostbite.",
    runes: [
      { name: "Glacial Bloom", base: "Basic attack ice explosions cover +30% more area.", awaken: "Explosion area also grows by +15% per 5 Damage above base." },
      { name: "Gathering Storm", base: "Self-centered blizzard ticks twice as fast and expands over its lifetime.", awaken: "Enemy projectiles are blocked inside Absolute Zero." },
      { name: "Twin Shards", base: "Fire two angled ice projectiles with every cast.", awaken: "Projectiles deal +7% more damage per Frostbite stack (up to +35%)." },
      { name: "Shatterpoint", base: "Hitting a 5-stack target triggers Frost Shatter (1s freeze + AoE burst).", awaken: "Triggers at 4 Frostbite stacks with +66% stronger shatter damage." },
      { name: "Rime Conduit", base: "Frostbite restores Mana; ice blasts gain up to +25% damage from current Mana.", awaken: "Double Mana on Frostbite and refund 25 Mana when Absolute Zero ends." }
    ]
  },
  {
    id: "caraxx",
    name: "Caraxx",
    role: "Dragon Juggernaut",
    unlock: "1,000 Gold",
    weapon: "Dragonfang Greatsword",
    accent: "#ff6242",
    accentSoft: "rgba(255, 98, 66, 0.20)",
    poseImg: "assets/heroes/caraxx.png",
    ultImg: "assets/ultimates/caraxx-ult.jpg",
    passiveName: "Dragonscales",
    passiveDesc: "Sweeping crimson melee cleaves backed by 20% flat damage reduction and +0.1 HP/s per level (up to +5 HP/s).",
    ultName: "Fury of the Dragon Warrior (10s)",
    ultDesc: "Spin relentlessly in a 360° crimson vortex at 3× attack frequency with +10% movement speed.",
    runes: [
      { name: "Blood Reforge", base: "Sacrifice 40% Max HP for +5 HP/s; every 1 HP/s grants +12% Area.", awaken: "Regeneration bonus increases to +7.5 HP/s." },
      { name: "Inferno Reach", base: "Increase ultimate spin radius by +20%.", awaken: "Spinning blades destroy incoming enemy projectiles." },
      { name: "Dragon Guard", base: "Gain an extra +20% damage reduction during your ultimate.", awaken: "Ultimate spin damage gains +1.5 per point of Armor." },
      { name: "Colossal Cleave", base: "Melee swings and spins deal bonus damage equal to +8% Max Health.", awaken: "Increases to +12% Max Health scaling and knocks enemies back." },
      { name: "Iron Juggernaut", base: "Taking a hit unleashes an Armor-scaling physical shockwave.", awaken: "Also unleashes the shockwave on every 4th basic melee swing." }
    ]
  },
  {
    id: "elys",
    name: "Elys",
    role: "Solar Valkyrie",
    unlock: "1,250 Gold",
    weapon: "Sunfire Blade",
    accent: "#ffae38",
    accentSoft: "rgba(255, 174, 56, 0.20)",
    poseImg: "assets/heroes/elys.png",
    ultImg: "assets/ultimates/elys-ult.jpg",
    passiveName: "Blazing Courage",
    passiveDesc: "Piercing solar crescents ignite enemies with Sunburn; burning foes detonate in fiery chain explosions upon death.",
    ultName: "Wrath of the Sun (10s)",
    ultDesc: "Blaze with solar fury—gain +20% attack speed, +2 HP/s, and unleash larger 1.5× damage sunfire waves.",
    runes: [
      { name: "Scorched Earth", base: "Blazing ultimate waves leave 3-second burning ground trails.", awaken: "Fire trails last 5 seconds and deal increased tick damage." },
      { name: "Solar Echo", base: "Every swing also fires a full sunfire wave directly behind Elys.", awaken: "Both front and rear waves deal +20% more damage." },
      { name: "Courageous Heart", base: "Deal +25% more damage to enemies within 3 units.", awaken: "Enemies dying nearby have a 10% chance to heal Elys for 10 HP." },
      { name: "Supernova Chain", base: "+25% death-explosion radius and explosions spread Sunburn.", awaken: "Explosion damage rises to 55% of Damage and restores 1.5 Mana." },
      { name: "Radiant Presence", base: "Project a permanent solar burn aura equal to 80% of Magnet.", awaken: "Expands to 100% of Magnet and slows enemies inside by 25%." }
    ]
  },
  {
    id: "lilith",
    name: "Lilith",
    role: "Soul Sovereign",
    unlock: "1,500 Gold",
    weapon: "Sovereign's Heart",
    accent: "#c56bff",
    accentSoft: "rgba(197, 107, 255, 0.20)",
    poseImg: "assets/heroes/lilith.png",
    ultImg: "assets/ultimates/lilith-ult.jpg",
    passiveName: "Soulstealer",
    passiveDesc: "Explosive violet soul bolts harvest the fallen, granting +10 permanent Maximum Health every 100 kills.",
    ultName: "Devourer's Ritual (8s)",
    ultDesc: "Conjure a cursed rune circle at your cursor that drains foes every 0.5s, healing up to 5 HP per tick.",
    runes: [
      { name: "Blood Tithe", base: "Bolts gain +5% Max HP damage and 1 HP lifesteal (locks Regen upgrades).", awaken: "Rises to +9% Max HP bonus damage and pierces up to 4 enemies." },
      { name: "Soul Harvest", base: "Soulstealer triggers every 60 kills and heals 10% Max HP.", awaken: "Gain +8% Attack Speed and +8% Area per 100 bonus Max HP." },
      { name: "Abyssal Tether", base: "+25% ritual radius, pulls foes inward, and amplifies damage by +20%.", awaken: "+4s ritual duration and doubles heal cap to 10 HP per tick." },
      { name: "Crimson Overflow", base: "Every 25 overhealed HP blasts nearby foes for 30% of Max Health.", awaken: "Overhealing restores Mana and triggers Soul Nova every 18 HP." },
      { name: "Twin Phantoms", base: "Fire 2 curving, homing soul bolts (70% damage each).", awaken: "Foes dying inside Devourer's Ritual can spawn free homing bolts." }
    ]
  },
  {
    id: "danny",
    name: "Danny",
    role: "Storm Conduit",
    unlock: "1,750 Gold",
    weapon: "Stormweaver",
    accent: "#4ce8ff",
    accentSoft: "rgba(76, 232, 255, 0.20)",
    poseImg: "assets/heroes/danny.png",
    ultImg: "assets/ultimates/danny-ult.jpg",
    passiveName: "Static Shock",
    passiveDesc: "Hold attack to channel continuous lightning that chains at 66% damage to 2 nearby enemies (+1 target per +50% Area).",
    ultName: "God of Lightning (10s)",
    ultDesc: "Ascend in a storm aura with +25% Move Speed while each held lightning tick compounds damage by +3%.",
    runes: [
      { name: "Storm Conductor", base: "Chain lightning hits deal 85% damage instead of 66%.", awaken: "Primary and chained hits stun foes for 1.5s (5s per-enemy cooldown)." },
      { name: "Overcharge", base: "Removes the 40% movement penalty while channeling lightning.", awaken: "Gain +10% Move Speed and apply a 10% shock slow on hit." },
      { name: "Thunderclap", base: "Lightning kills detonate an electrical AoE blast.", awaken: "Every 10th primary hit also explodes on surviving targets." },
      { name: "Living Circuit", base: "Take 15% less damage while channeling lightning.", awaken: "Increases to 25% reduction and heals 1% Max HP every 20 primary hits." },
      { name: "Endless Tempest", base: "God of Lightning lasts 30% longer.", awaken: "Ramps by +4% per tick and preserves ramp for 1s after releasing." }
    ]
  },
  {
    id: "chiori",
    name: "Chiori",
    role: "Sakura Blademaster",
    unlock: "2,000 Gold",
    weapon: "Sakura's Edge",
    accent: "#ff7eb6",
    accentSoft: "rgba(255, 126, 182, 0.20)",
    poseImg: "assets/heroes/chiori.png",
    ultImg: "assets/ultimates/chiori-ult.jpg",
    passiveName: "Swift as the Wind",
    passiveDesc: "Rapid circular katana slashes paired with a 3s-cooldown Right-Click cursor dash heralded by orbiting sakura petals.",
    ultName: "Final Slash (Instant)",
    ultDesc: "Blink 10 units through the horde in a flash of steel, dealing 350% basic attack damage along the entire path.",
    runes: [
      { name: "Tailwind", base: "Every dash hurls 3 ninja stars toward the nearest enemies.", awaken: "Reduces Swift as the Wind dash cooldown from 3s to 2s." },
      { name: "Iaijutsu", base: "Your next basic slash within 2s after dashing deals +45% damage.", awaken: "Empowered slash also gains +25% attack radius." },
      { name: "Petalwake", base: "Dashes leave a 2s sakura petal trail dealing periodic AoE damage.", awaken: "Trails last 3s and slow enemies by 25%." },
      { name: "Windguard", base: "Dashing grants 15% damage reduction for 2 seconds.", awaken: "Increases to 25% reduction and heals 3% Max HP (6s cooldown)." },
      { name: "Echo of the Final Slash", base: "Final Slash carves a 30% wider path.", awaken: "An afterimage strikes the path again 1s later for 50% ultimate damage." }
    ]
  }
];

let activeHeroIndex = 0;
let showUltArt = false;
let runesAwakened = false;

function applyConfiguredLinks() {
  document.querySelectorAll("[data-link='windows']").forEach(el => el.href = SITE_LINKS.windowsDownload);
  document.querySelectorAll("[data-link='github']").forEach(el => el.href = SITE_LINKS.githubRepo);
}

function renderRosterTabs() {
  const container = document.getElementById("roster-tabs");
  if (!container) return;
  container.innerHTML = CHAMPIONS.map((c, idx) => `
    <button class="roster-tab ${idx === activeHeroIndex ? "active" : ""}" data-idx="${idx}" type="button">
      <div class="roster-tab-thumb">
        <img src="${c.poseImg}" alt="${c.name}" loading="lazy" />
      </div>
      <span class="roster-tab-name">${c.name}</span>
      <span class="roster-tab-role">${c.role}</span>
    </button>
  `).join("");

  container.querySelectorAll(".roster-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeHeroIndex = Number(btn.dataset.idx);
      showUltArt = false;
      renderRosterTabs();
      renderActiveChampion();
    });
  });
}

function renderActiveChampion() {
  const c = CHAMPIONS[activeHeroIndex];
  const section = document.getElementById("champions");
  section.style.setProperty("--hero-accent", c.accent);
  section.style.setProperty("--hero-accent-soft", c.accentSoft);

  const visualPanel = document.getElementById("champion-visual-panel");
  visualPanel.classList.toggle("show-ult", showUltArt);

  const poseEl = document.getElementById("champion-pose-img");
  const ultEl = document.getElementById("champion-ult-img");
  poseEl.src = c.poseImg;
  poseEl.alt = `${c.name} battle pose`;
  ultEl.src = c.ultImg;
  ultEl.alt = `${c.name} ultimate splash`;

  document.getElementById("champion-unlock").textContent = c.unlock;
  document.getElementById("champion-name").textContent = c.name;
  document.getElementById("champion-weapon").textContent = `Unique Weapon  •  ${c.weapon}`;
  document.getElementById("passive-title").textContent = c.passiveName;
  document.getElementById("passive-desc").textContent = c.passiveDesc;
  document.getElementById("ult-title").textContent = c.ultName;
  document.getElementById("ult-desc").textContent = c.ultDesc;

  document.getElementById("mode-pose-btn").classList.toggle("active", !showUltArt);
  document.getElementById("mode-ult-btn").classList.toggle("active", showUltArt);

  const awakenBtn = document.getElementById("awaken-toggle");
  awakenBtn.classList.toggle("active", runesAwakened);
  awakenBtn.textContent = runesAwakened ? "✦ Awakened (Lv. 50 / 80)" : "✦ Preview Awakening";

  const runesList = document.getElementById("runes-list");
  runesList.innerHTML = c.runes.map(r => `
    <div class="rune-item ${runesAwakened ? "awakened" : ""}">
      <div class="rune-item-title">${runesAwakened ? "✦ " : "◆ "}${r.name}</div>
      <div class="rune-item-desc">${runesAwakened ? `<strong>AWAKENED:</strong> ${r.awaken}` : r.base}</div>
    </div>
  `).join("");
}

function setupControls() {
  document.getElementById("mode-pose-btn")?.addEventListener("click", () => {
    showUltArt = false;
    renderActiveChampion();
  });
  document.getElementById("mode-ult-btn")?.addEventListener("click", () => {
    showUltArt = true;
    renderActiveChampion();
  });
  document.getElementById("awaken-toggle")?.addEventListener("click", () => {
    runesAwakened = !runesAwakened;
    renderActiveChampion();
  });

  // Lightbox for screenshots
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCap = document.getElementById("lightbox-caption");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const cap = item.querySelector(".gallery-caption");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCap.textContent = cap ? cap.textContent : "";
      lightbox.classList.add("open");
    });
  });

  lightbox?.addEventListener("click", e => {
    if (e.target === lightbox || e.target.id === "lightbox-close") {
      lightbox.classList.remove("open");
    }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox?.classList.remove("open");
  });
}

// Subtle floating elemental embers on Hero canvas
function initHeroParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0;

  const colors = [
    "rgba(92, 225, 255, ",
    "rgba(247, 207, 92, ",
    "rgba(255, 132, 66, ",
    "rgba(197, 107, 255, ",
    "rgba(93, 242, 168, "
  ];

  const motes = Array.from({ length: 52 }, (_, i) => ({
    x: Math.random(),
    y: Math.random(),
    r: 1.4 + Math.random() * 3.2,
    vy: 0.00025 + Math.random() * 0.00055,
    amp: 0.008 + Math.random() * 0.018,
    freq: 0.5 + Math.random() * 1.2,
    phase: Math.random() * Math.PI * 2,
    color: colors[i % colors.length]
  }));

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function frame(ms) {
    const t = ms * 0.001;
    ctx.clearRect(0, 0, w, h);
    for (const m of motes) {
      const py = ((m.y - t * m.vy * 60) % 1 + 1) % 1;
      const px = m.x + Math.sin(t * m.freq + m.phase) * m.amp;
      const fade = Math.min(py * 5, (1 - py) * 5, 1);
      const twinkle = 0.45 + 0.55 * Math.sin(t * 2.1 + m.phase);
      const alpha = fade * twinkle * 0.72;
      const x = px * w, y = py * h;

      const grad = ctx.createRadialGradient(x, y, 0, x, y, m.r * 4);
      grad.addColorStop(0, `${m.color}${alpha})`);
      grad.addColorStop(1, `${m.color}0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, m.r * 4, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfiguredLinks();
  renderRosterTabs();
  renderActiveChampion();
  setupControls();
  initHeroParticles();
});
