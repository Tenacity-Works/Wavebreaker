// ============================================================================
// EASY EDIT CONFIGURATION — Update any download, itch.io, or feedback URLs here!
// ============================================================================
const SITE_LINKS = {
  windowsDownload: "https://github.com/Tenacity-Works/Wavebreaker/releases/latest",
  githubRepo: "https://github.com/Tenacity-Works/Wavebreaker",
  itchPage: "https://tenacityworks.itch.io/wavebreaker",
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
      { name: "Twin Crescent", base: "Every attack sends a second wave at an angle.", awaken: "fire three waves instead of two." },
      { name: "Whiteout", base: "Enemies afflicted with Frostfire burst on death, spreading Frostfire.", awaken: "bursts deal twice the damage." },
      { name: "Ascension", base: "Every 100 enemies killed by Auren or his Frostfire grants a Common upgrade to a random attribute.", awaken: "requires 75 enemies killed instead of 100." },
      { name: "Soulfire", base: "Frostfire ticks restore mana. Iceflame lasts 4 seconds longer.", awaken: "double restored mana and +4 more seconds." },
      { name: "Royal Reprisal", base: "Every fourth attack releases a full ring of smaller waves.", awaken: "every third attack releases the ring." }
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
      { name: "Twin Arrows", base: "Shoot a second arrow with every attack.", awaken: "arrows deal 20% more damage." },
      { name: "Piercing Arrows", base: "Arrows pierce through enemies, hitting each target once.", awaken: "reaching maximum range returns arrows to Aelinor like a boomerang, hitting enemies again on the way back." },
      { name: "Ricochet", base: "Arrows bounce to up to two additional enemies, dealing +7.5% more damage with each bounce.", awaken: "gain one extra bounce for every 25% Luck." },
      { name: "Zephyr Momentum", base: "Arrows gain bonus damage equal to +20% of your movement speed, and critical hits grant +25% movement speed for 2.5 seconds.", awaken: "bonus damage increases to +35% of your movement speed, and critical hits also grant +20% attack speed for 2.5 seconds." },
      { name: "Fortune's Quarry", base: "Increase critical chance by +20% of your Luck. Critical hits mark enemies for 4 seconds, causing them to take +25% damage from arrows.", awaken: "critical chance increases by +35% of your Luck, and killing a marked enemy fires 3 arrows outward." }
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
      { name: "Glacial Bloom", base: "Basic attack explosions cover 30% more area.", awaken: "explosion area also increases by +15% for every 5 Damage above base." },
      { name: "Gathering Storm", base: "Blizzard ticks twice as fast and grows until it expires, but can only be summoned on your position.", awaken: "enemy projectiles cannot pass through Absolute Zero." },
      { name: "Twin Shards", base: "Basic attacks fire two ice projectiles at neighboring angles.", awaken: "projectiles deal +7% more damage for each Frostbite stack on the target (up to +35% at 5 stacks)." },
      { name: "Shatterpoint", base: "Hitting an enemy at 5 Frostbite stacks triggers Frost Shatter, freezing them for 1s (8s cooldown) and dealing bonus AoE damage equal to 30% of Damage \u00d7 Area.", awaken: "triggers at 4 stacks and deals 50% of Damage \u00d7 Area." },
      { name: "Rime Conduit", base: "Applying Frostbite restores 0.20 Mana, and ice explosions deal +1% damage per 4 Current Mana (up to +25%).", awaken: "every 20 Mana gained beyond the 100-Mana limit grants one Hypothermia orb (maximum 5). Casting Absolute Zero consumes all stacks, adding +7.5% damage per tick for each stack consumed." }
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
    ultDesc: "Spin in a 360° crimson vortex, striking 2.5 times per second at base Attack Speed. Attack Speed increases the strike and animation rate. Gain +10% movement speed.",
    runes: [
      { name: "Blood Reforge", base: "Lose 40% of maximum health and gain +4 HP per second. Every 1 HP/s of health regeneration grants +8% attack area.", awaken: "gain +7.5 HP per second instead." },
      { name: "Inferno Reach", base: "Increase the ultimate's radius by 20%. Its normal radius matches your basic swing.", awaken: "enemy projectiles cannot pass through the spinning blade during Fury of the Dragon Warrior." },
      { name: "Dragon Guard", base: "Gain an additional 20% damage reduction during your ultimate.", awaken: "ultimate spin damage increases by +1.5 for every point of Armor." },
      { name: "Colossal Cleave", base: "Melee swings and ultimate spins deal bonus damage equal to +8% of your maximum health.", awaken: "bonus damage increases to +12% of your maximum health, and basic melee swings knock enemies back." },
      { name: "Iron Juggernaut", base: "Taking a hit unleashes a physical shockwave around Caraxx dealing 20 + 200% of Armor damage.", awaken: "also unleashes the shockwave every fourth basic melee swing, scaling with Armor and Area." }
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
      { name: "Scorched Earth", base: "Enhanced waves leave ground flames for 3 seconds. Enemies standing in the fire take damage every half second.", awaken: "fire lasts 5 seconds and deals more damage." },
      { name: "Solar Echo", base: "Every attack also fires a projectile directly behind you.", awaken: "both projectiles deal 20% more damage." },
      { name: "Courageous Heart", base: "Deal 25% more damage to enemies within 3 units of you.", awaken: "enemies dying within 3 units of Elys have a 10% chance to heal her for 10 health." },
      { name: "Supernova Chain", base: "Sunburn death explosions have a 25% larger radius and apply Sunburn to enemies they hit.", awaken: "death explosion damage increases from 35% to 55% of Damage, and each explosion restores 1.5 Mana." },
      { name: "Radiant Presence", base: "Projects a permanent solar aura with a radius equal to 80% of Magnet, hitting every 0.25 seconds for 50% of Damage + 300% of Health Regeneration per second.", awaken: "aura radius increases to 100% of Magnet, and enemies inside move 25% slower." }
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
      { name: "Blood Tithe", base: "Soul bolts deal +5% of your maximum health as bonus damage and steal 1 HP on hit (0.25s cooldown), but Health Regeneration can no longer be increased.", awaken: "bonus damage increases to +9% of maximum health, and soul bolts pierce up to 4 enemies." },
      { name: "Soul Harvest", base: "Soulstealer triggers every 60 kills instead of 100 and heals 10% of maximum health.", awaken: "every 100 maximum health above base grants +8% Attack Speed and +8% Area." },
      { name: "Abyssal Tether", base: "Devourer's Ritual radius increases by +25%, pulling enemies inward while they take +20% more damage.", awaken: "Devourer's Ritual lasts +4 seconds longer and its heal cap per tick doubles to 10 HP." },
      { name: "Crimson Overflow", base: "Excess healing at full health charges a Soul Nova around Lilith\u2014every 25 overhealed HP blasts nearby foes for 30% of maximum health.", awaken: "excess healing also restores Mana (1 per 3 HP) and triggers every 18 overhealed HP." },
      { name: "Twin Phantoms", base: "Basic attacks fire 2 homing soul bolts (70% damage each) that curve toward nearby enemies.", awaken: "enemies dying inside Devourer's Ritual have a 15% + 30% Luck chance to spawn a free homing soul bolt." }
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
    ultDesc: "Gain +25% movement speed. Each held lightning tick compounds damage by 3%, capped at +45% total ramp damage. Releasing resets the ramp.",
    runes: [
      { name: "Storm Conductor", base: "Static Shock's secondary hits deal 85% damage instead of 66%.", awaken: "primary and chained lightning hits stun enemies for 1.5s, with a separate 5s cooldown per enemy." },
      { name: "Overcharge", base: "Remove the 40% movement penalty while channeling, in base and ultimate forms.", awaken: "gain +10% movement speed, and lightning hits apply 10% slow for 2s, refreshing on hit." },
      { name: "Thunderclap", base: "Lightning kills cause a small electrical explosion dealing 50% of a primary tick's damage. Explosions cannot trigger more explosions.", awaken: "every tenth primary hit also explodes if the target survives." },
      { name: "Living Circuit", base: "Take 15% less damage while channeling lightning.", awaken: "reduction increases to 25%, and every twenty primary hits restore 1% of maximum health." },
      { name: "Endless Tempest", base: "God of Lightning lasts 30% longer.", awaken: "each ultimate tick ramps damage by 4% instead of 3% (still capped at +45%), and releasing preserves the ramp for 1s." }
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
    passiveDesc: "Sweep a 200-degree sector toward the cursor, centered on Chiori’s body. Right-click to dash toward the cursor (3s cooldown); orbiting petals signal dash readiness.",
    ultName: "Final Slash (Instant)",
    ultDesc: "Blink up to 10 units toward your cursor, dealing 350% basic attack damage along the path. Gain protection during the ultimate and briefly afterward; collected XP is awarded after the dash effect finishes.",
    runes: [
      { name: "Tailwind", base: "Every dash fires 3 ninja stars toward the nearest enemies, each dealing 70% basic attack damage.", awaken: "Swift as the Wind cooldown decreases from 3s to 2s." },
      { name: "Iaijutsu", base: "After a normal dash, your next basic attack within 2s deals +45% damage.", awaken: "this empowered attack also has +25% radius." },
      { name: "Petalwake", base: "Normal dashes leave a 2s petal trail dealing 30% basic attack damage per second. Overlapping trails do not stack.", awaken: "trails last 3s and slow enemies by 25%." },
      { name: "Windguard", base: "Normal dashes grant 15% damage reduction for 2s.", awaken: "reduction increases to 25%, and dashing heals 3% maximum health (6s heal cooldown)." },
      { name: "Echo of the Final Slash", base: "Final Slash strikes a 30% wider path.", awaken: "the same path is struck again after 1s for 50% ultimate damage, without moving Chiori." }
    ]
  }
];

let activeHeroIndex = 0;
let showUltArt = false;
let runesAwakened = false;

function applyConfiguredLinks() {
  document.querySelectorAll("[data-link='windows']").forEach(el => el.href = SITE_LINKS.windowsDownload);
  document.querySelectorAll("[data-link='github']").forEach(el => el.href = SITE_LINKS.githubRepo);
  document.querySelectorAll("[data-link='itch']").forEach(el => el.href = SITE_LINKS.itchPage);
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
