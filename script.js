'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = 'en';

/* ---------- Remove Camera Button & Modal ---------- */
['#camBtn', '#photoIn', '#galleryIn', '#camModal'].forEach(sel => $(sel)?.remove());

/* ---------- Text (EN + TH) ---------- */
const T = {
  en: {
    brand: 'Khanom Kong', kicker: 'Thai Traditional Dessert', start: 'Start',
    lead: 'A golden fried wheel of sticky rice and mung bean — a sweet that stands for continuity and a smooth journey through life.',
    ingTitle: 'Ingredients', ingSub: 'Eight simple things. Meet them before we cook.',
    cookTitle: "Let's cook together!", cookText: "I'm Chef Nok. I'll show you every step of making Khanom Kong. Ready?", letsStart: "Let's start cooking",
    endTitle: 'Your Khanom Kong is ready!', endSub: 'Served on a fresh banana leaf! Share your dessert to Story.',
    share: 'Share to Story', again: 'Cook again',
    stepN: ['Mix the dough', 'Stir it well', 'Shape the wheel', 'Fry until golden', 'Sprinkle coconut'],
    say: [
      'Tap each ingredient to drop it into the Benjarong bowl.',
      'Stir in circles with your wooden spoon. Round and round!',
      'Tap the glowing spots (1–4) to lay the crossing dough strands.',
      'Pour the oil, flip the wheel when the needle hits green, then take it out!',
      'Tap the coconut to sprinkle it on top.'
    ],
    sayFlip: 'Nice flip! Now wait for the green zone again to take it out!',
    good: 'Yum!', tooEarly: 'Missed the green zone! Try again!', great: 'Perfect golden!', done: 'Beautiful! Khanom Kong is done!', wait: 'Finish cooking first!', saved: 'Saved to your device',
    ing: [['Sticky rice flour', 'Makes the chewy dough'], ['Mung beans', 'Gives a nutty, sweet body'], ['Sugar', 'Sweetens the dough'], ['Grated coconut', 'Fresh, creamy topping'], ['Coconut milk', 'Rich and fragrant'], ['Chicken egg', 'Binds the mixture'], ['Frying oil', 'For a crisp golden crust'], ['A little water', 'Brings the dough together']],
    short: ['Flour', 'Beans', 'Sugar', 'Coconut', 'Milk', 'Egg', 'Oil', 'Water'],
    oil: 'Pour oil', flip: 'Flip wheel', out: 'Take out', myKong: 'My Khanom Kong'
  },
  th: {
    brand: 'ขนมกง', kicker: 'ขนมไทยโบราณ', start: 'เริ่มเลย',
    lead: 'ขนมทอดทรงวงล้อสีทอง ทำจากแป้งข้าวเหนียวและถั่วเขียว เป็นสัญลักษณ์ของความต่อเนื่องและชีวิตที่ราบรื่น',
    ingTitle: 'วัตถุดิบ', ingSub: 'มีแค่แปดอย่าง มารู้จักกันก่อนลงมือทำ',
    cookTitle: 'มาทำขนมกันเถอะ!', cookText: 'พี่นกเองจ้ะ จะพาทำขนมกงทีละขั้นตอนเลย พร้อมหรือยัง?', letsStart: 'เริ่มทำขนมกัน',
    endTitle: 'ขนมกงของคุณเสร็จแล้ว!', endSub: 'จัดเสิร์ฟบนใบตองหอมๆ กดแชร์ขนมของคุณลงสตอรี่ได้เลย!',
    share: 'แชร์ลงสตอรี่', again: 'ทำอีกครั้ง',
    stepN: ['ผสมแป้ง', 'นวดให้เข้ากัน', 'ปั้นเป็นวงล้อ', 'ทอดให้เหลืองทอง', 'โรยมะพร้าว'],
    say: [
      'แตะวัตถุดิบทีละอย่างเพื่อใส่ลงในชามเบญจรงค์',
      'ใช้พายไม้คนแป้งเป็นวงกลม วนไปเรื่อยๆ!',
      'แตะจุดที่เรืองแสง (1–4) เพื่อวางเส้นแป้งพาดไขว้กัน',
      'เทน้ำมัน กดพลิกขนมตอนเข็มอยู่ในช่องสีเขียว แล้วค่อยตักขึ้น!',
      'แตะมะพร้าวเพื่อโรยหน้าขนม'
    ],
    sayFlip: 'พลิกสวยมาก! รอเข็มเข้าช่องสีเขียวอีกครั้งแล้วกดตักขึ้นเลย!',
    good: 'อร่อย!', tooEarly: 'กดพลาดช่องสีเขียว ลองใหม่อีกทีนะ!', great: 'เหลืองทองกรอบกำลังดี!', done: 'สวยมาก! ขนมกงเสร็จแล้ว!', wait: 'ทำขนมให้เสร็จก่อนนะ!', saved: 'บันทึกลงเครื่องแล้ว',
    ing: [['แป้งข้าวเหนียว', 'ทำให้แป้งเหนียวนุ่ม'], ['ถั่วเขียว', 'หอมมันและหวาน'], ['น้ำตาลทราย', 'เพิ่มความหวาน'], ['มะพร้าวขูด', 'โรยหน้าหอมมัน'], ['น้ำกะทิ', 'หอมและเข้มข้น'], ['ไข่ไก่', 'ช่วยให้แป้งเกาะตัว'], ['น้ำมันสำหรับทอด', 'ให้กรอบเหลืองทอง'], ['น้ำเปล่าเล็กน้อย', 'ช่วยให้แป้งรวมตัว']],
    short: ['แป้ง', 'ถั่ว', 'น้ำตาล', 'มะพร้าว', 'กะทิ', 'ไข่', 'น้ำมัน', 'น้ำ'],
    oil: 'เทน้ำมัน', flip: 'พลิกขนม', out: 'ตักขึ้น', myKong: 'ขนมกงของฉัน'
  }
};
const t = k => T[lang][k];

/* ---------- Soft 2D Hand-Drawn SVG Icons ---------- */
const O = '#B5527A', st = `stroke="${O}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const ICON = [
  `<path d="M18 22h28l5 34H13z" fill="#fff" ${st}/><path d="M20 22q12-12 24 0" fill="#FFE9A8" ${st}/><circle cx="32" cy="40" r="8" fill="#F59BBB"/>`,
  `<ellipse cx="22" cy="34" rx="11" ry="7" fill="#E8CF4A" ${st} transform="rotate(-25 22 34)"/><ellipse cx="42" cy="30" rx="11" ry="7" fill="#E8CF4A" ${st} transform="rotate(20 42 30)"/><ellipse cx="32" cy="48" rx="11" ry="7" fill="#F2DC6B" ${st}/>`,
  `<path d="M8 32h48q-2 22-24 22T8 32z" fill="#FFDDE8" ${st}/><rect x="18" y="16" width="14" height="14" rx="4" fill="#fff" ${st}/><rect x="34" y="20" width="12" height="12" rx="4" fill="#fff" ${st}/>`,
  `<path d="M8 28h48a24 24 0 0 1-48 0z" fill="#9B6B43" ${st}/><ellipse cx="32" cy="28" rx="24" ry="7" fill="#FFFDF0" ${st}/><circle cx="24" cy="26" r="2" fill="#E8D9B0"/><circle cx="38" cy="29" r="2" fill="#E8D9B0"/>`,
  `<path d="M22 12h20v10l8 10v24H14V32l8-10z" fill="#fff" ${st}/><rect x="16" y="38" width="32" height="12" fill="#FFE9A8"/><path d="M18 56h28" ${st}/>`,
  `<path d="M32 8C20 8 13 30 13 40a19 17 0 0 0 38 0C51 30 44 8 32 8z" fill="#FFF3D1" ${st}/><path d="M24 36q2-8 8-9" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  `<rect x="25" y="6" width="14" height="10" rx="3" fill="#C98F1E" ${st}/><path d="M25 16h14l7 14v26H18V30z" fill="#FFD45E" ${st}/><circle cx="32" cy="42" r="7" fill="#fff"/>`,
  `<path d="M32 8Q13 30 13 42a19 16 0 0 0 38 0Q51 30 32 8z" fill="#BEE6F7" ${st}/><path d="M24 40q1 6 6 8" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  // 8: Wooden Spatula (Flip)
  `<path d="M48 10 L36 28" stroke="#B87B3D" stroke-width="6" stroke-linecap="round"/><path d="M24 26 L42 36 L30 54 Q22 56 16 50 Q12 44 16 36 Z" fill="#E6B268" stroke="#8C5828" stroke-width="2.8" stroke-linejoin="round"/><line x1="25" y1="36" x2="21" y2="44" stroke="#8C5828" stroke-width="2" stroke-linecap="round"/><line x1="31" y1="39" x2="27" y2="47" stroke="#8C5828" stroke-width="2" stroke-linecap="round"/>`,
  // 9: Wire Strainer / Skimmer
  `<path d="M52 12 L38 28" stroke="#C98F1E" stroke-width="6" stroke-linecap="round"/><ellipse cx="26" cy="40" rx="16" ry="13" transform="rotate(-35 26 40)" fill="#FFFDF7" stroke="#7A6E72" stroke-width="3"/><path d="M16 34 L36 46 M20 29 L38 40 M14 40 L32 51 M22 49 L34 31 M16 44 L28 27" stroke="#9E9296" stroke-width="1.8" stroke-linecap="round"/>`
];
const ico = i => `<svg viewBox="0 0 64 64" aria-hidden="true">${ICON[i]}</svg>`;

/* ---------- Soft 2D Puffy Khanom Kong ---------- */
let kid = 0;
function kongInner(color = '#E8AD3C', n = 4, coconut = 0) {
  const id = 'kc' + kid++;
  const d = ['M70 16v168', 'M130 16v168', 'M16 70h168', 'M16 130h168'];
  const strands = d.slice(0, n);
  return `
  <defs><clipPath id="${id}"><circle cx="100" cy="100" r="85"/></clipPath></defs>
  <ellipse cx="100" cy="112" rx="88" ry="86" fill="#5A2D16" opacity="0.2"/>
  <g transform="translate(0, 8)">
    <g clip-path="url(#${id})" stroke="#B06D1C" stroke-width="18" stroke-linecap="round" fill="none">
      ${strands.map(p => `<path d="${p}"/>`).join('')}
    </g>
    <circle cx="100" cy="100" r="84" fill="none" stroke="#B06D1C" stroke-width="20"/>
  </g>
  <g clip-path="url(#${id})" stroke="${color}" stroke-width="17" stroke-linecap="round" fill="none">
    ${strands.map(p => `<path d="${p}"/>`).join('')}
  </g>
  <circle cx="100" cy="100" r="84" fill="none" stroke="${color}" stroke-width="19"/>
  <g clip-path="url(#${id})" stroke="#FFF6C7" stroke-opacity="0.6" stroke-width="5" stroke-linecap="round" fill="none" transform="translate(-2,-2)">
    ${strands.map(p => `<path d="${p}"/>`).join('')}
  </g>
  <circle cx="98" cy="98" r="84" fill="none" stroke="#FFF6C7" stroke-opacity="0.65" stroke-width="5"/>
  <circle cx="100" cy="100" r="84" fill="none" stroke="#B06D1C" stroke-opacity="0.25" stroke-width="19" stroke-dasharray="3 9" stroke-linecap="round"/>
  ${coconut ? Array.from({ length: 34 }, (_, i) => {
    const a = i * 2.39, r = 16 + (i * 41 % 68);
    const cx = 100 + r * Math.cos(a), cy = 100 + r * Math.sin(a), rot = i * 47;
    return `<g transform="translate(${cx} ${cy}) rotate(${rot})">
      <ellipse cx="0" cy="1.8" rx="6" ry="2.2" fill="#8C5214" opacity="0.32"/>
      <ellipse cx="0" cy="0" rx="6" ry="2.2" fill="#FFFDF7" stroke="#EFE2BE" stroke-width="0.6"/>
    </g>`;
  }).join('') : ''}`;
}
function kong(color = '#E8AD3C', n = 4, coconut = 0) {
  return `<svg viewBox="0 0 200 210">${kongInner(color, n, coconut)}</svg>`;
}

/* ---------- Soft 2D Banana Leaf Platter ---------- */
function bananaLeafPlatter(color = '#E8AD3C') {
  const leaf = `
  <ellipse cx="210" cy="222" rx="184" ry="156" fill="#6E3249" opacity="0.14"/>
  <circle cx="210" cy="210" r="182" fill="#E8C27A" stroke="#B5822E" stroke-width="5"/>
  <circle cx="210" cy="210" r="168" fill="#D6A856" stroke="#9E6D20" stroke-width="3" stroke-dasharray="10 6"/>
  <g transform="translate(210,210)">
    <path d="M-162,-16 Q-118,-144 10,-156 Q144,-144 162,-8 Q146,136 0,156 Q-140,140 -162,-16 Z" fill="#5EA845" stroke="#3B7A27" stroke-width="4.5"/>
    <path d="M-148,-8 Q-105,-128 8,-140 Q128,-128 146,-6 Q130,122 0,138 Q-124,124 -148,-8 Z" fill="#74C257"/>
    <path d="M-152,-10 Q0,6 154,-6" fill="none" stroke="#A8E889" stroke-width="5" stroke-linecap="round"/>
    <path d="M-95,-75 Q-82,-38 -72,-4 M-45,-112 Q-34,-56 -25,0 M10,-122 Q16,-60 22,2 M68,-105 Q70,-52 72,-2 M112,-70 Q111,-36 110,-4" fill="none" stroke="#5EA845" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
    <path d="M-95,72 Q-82,34 -72,-2 M-42,110 Q-32,56 -22,2 M15,120 Q20,60 25,3 M72,102 Q73,50 74,0 M115,65 Q113,30 112,-3" fill="none" stroke="#5EA845" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
    <path d="M-110,-90 Q-20,-135 85,-95" fill="none" stroke="#BDF59F" stroke-width="5" stroke-linecap="round" opacity="0.65"/>
  </g>`;

  const pieces = [
    { x: 64,  y: 74,  s: 0.76, r: -14 },
    { x: 186, y: 68,  s: 0.78, r: 12 },
    { x: 74,  y: 176, s: 0.80, r: 8 },
    { x: 174, y: 164, s: 0.86, r: -6 }
  ];
  const stack = pieces.map(p =>
    `<g transform="translate(${p.x}, ${p.y}) scale(${p.s}) rotate(${p.r} 100 100)">
      ${kongInner(color, 4, 1)}
    </g>`
  ).join('');

  const jasmine = `
  <g transform="translate(82, 294) rotate(-12)">
    <circle cx="-10" cy="-7" r="8" fill="#FFFDF7" stroke="#E0B642" stroke-width="2"/>
    <circle cx="10" cy="-7" r="8" fill="#FFFDF7" stroke="#E0B642" stroke-width="2"/>
    <circle cx="-10" cy="8" r="8" fill="#FFFDF7" stroke="#E0B642" stroke-width="2"/>
    <circle cx="10" cy="8" r="8" fill="#FFFDF7" stroke="#E0B642" stroke-width="2"/>
    <circle cx="0" cy="-12" r="8" fill="#FFFDF7" stroke="#E0B642" stroke-width="2"/>
    <circle cx="0" cy="0" r="6" fill="#FFD45E"/>
  </g>`;

  return `<svg viewBox="0 0 420 420">${leaf}${stack}${jasmine}</svg>`;
}

/* ---------- Cute Soft 2D Thai Chef "Nok" ---------- */
const CHEF = `<svg viewBox="0 0 200 265">
  <ellipse cx="100" cy="252" rx="58" ry="8" fill="#6E3249" opacity="0.14"/>
  <path d="M62 168 Q100 174 138 168 L156 244 Q158 250 150 250 L50 250 Q42 250 44 244 Z" fill="#F59BBB" stroke="#B5527A" stroke-width="3" stroke-linejoin="round"/>
  <path d="M115 170 L138 168 L156 244 Q158 250 150 250 L125 250 Z" fill="#E37EA4" opacity="0.5"/>
  <path d="M46 232 L154 232 L156 246 Q156 250 150 250 L50 250 Q44 250 44 246 Z" fill="#FFD45E" stroke="#C98F1E" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M68 126 Q42 152 56 180" stroke="#F7CFA8" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path d="M68 126 Q42 152 56 180" stroke="#C98F1E" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.4"/>
  <path d="M70 120 Q100 112 130 120 L138 168 Q100 174 62 168 Z" fill="#FFD45E" stroke="#C98F1E" stroke-width="3" stroke-linejoin="round"/>
  <path d="M72 118 Q84 114 95 115 L140 172 Q126 176 114 174 Z" fill="#FFFDF7" stroke="#C98F1E" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M80 120 L126 172" stroke="#F59BBB" stroke-width="3.5" stroke-dasharray="3 5" stroke-linecap="round"/>
  <rect x="62" y="162" width="76" height="9" rx="4.5" fill="#FFF0B8" stroke="#C98F1E" stroke-width="2.5"/>
  <g class="arm">
    <path d="M130 126 Q158 120 166 86" stroke="#F7CFA8" stroke-width="14" stroke-linecap="round" fill="none"/>
    <circle cx="167" cy="82" r="9.5" fill="#F7CFA8" stroke="#C98F1E" stroke-width="2.5"/>
  </g>
  <g class="head">
    <circle cx="100" cy="26" r="19" fill="#36262B" stroke="#24181C" stroke-width="2.5"/>
    <g fill="#FFFDF7" stroke="#E0B642" stroke-width="1.8">
      <circle cx="83" cy="29" r="6"/><circle cx="100" cy="13" r="6"/>
      <circle cx="117" cy="29" r="6"/><circle cx="82" cy="46" r="5"/>
    </g>
    <path d="M60 80 Q58 36 100 36 Q142 36 140 80 Q138 102 126 104 L74 104 Q62 102 60 80 Z" fill="#36262B"/>
    <ellipse cx="100" cy="82" rx="37" ry="35" fill="#FAD7B4" stroke="#C98F1E" stroke-width="2.5"/>
    <path d="M63 78 Q66 42 100 44 Q134 42 137 78 Q122 58 100 62 Q78 58 63 78 Z" fill="#36262B" stroke="#24181C" stroke-width="2" stroke-linejoin="round"/>
    <ellipse class="eye" cx="85" cy="84" rx="4" ry="5" fill="#2E2226"/>
    <circle cx="83.5" cy="82" r="1.6" fill="#FFF"/>
    <ellipse class="eye" cx="115" cy="84" rx="4" ry="5" fill="#2E2226"/>
    <circle cx="113.5" cy="82" r="1.6" fill="#FFF"/>
    <ellipse cx="75" cy="94" rx="6.5" ry="4" fill="#F59BBB" opacity="0.65"/>
    <ellipse cx="125" cy="94" rx="6.5" ry="4" fill="#F59BBB" opacity="0.65"/>
    <path d="M91 97 Q100 106 109 97" stroke="#B5527A" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
</svg>`;

/* ---------- Warm 2D Traditional Thai Kitchen Background ---------- */
const KITCHEN_BG = `
  <rect x="0" y="0" width="640" height="218" fill="#FCEFD2"/>
  <g stroke="#E8D1A7" stroke-width="2.5" opacity="0.7">
    ${Array.from({ length: 16 }, (_, i) => `<line x1="${i * 42}" y1="0" x2="${i * 42}" y2="218"/>`).join('')}
  </g>
  <rect x="0" y="218" width="640" height="36" fill="#7D9E7A"/>
  <g stroke="#5F805C" stroke-width="2">
    <line x1="0" y1="236" x2="640" y2="236"/>
    ${Array.from({ length: 16 }, (_, i) => `<line x1="${i * 42}" y1="218" x2="${i * 42}" y2="254"/>`).join('')}
  </g>

  <!-- Window -->
  <g transform="translate(22, 16)">
    <rect x="0" y="0" width="128" height="122" rx="12" fill="#9E5E2E" stroke="#6E3E1A" stroke-width="3.5"/>
    <rect x="10" y="10" width="108" height="102" rx="8" fill="#DCF2FF"/>
    <path d="M10 98 Q32 36 74 66 Q64 98 52 112 L10 112 Z" fill="#6BB852"/>
    <path d="M56 112 Q78 44 118 72 L118 112 Z" fill="#52993C"/>
    <circle cx="94" cy="32" r="12" fill="#FFD45E"/>
    <rect x="61" y="10" width="6" height="102" fill="#9E5E2E"/>
    <rect x="10" y="58" width="108" height="6" fill="#9E5E2E"/>
    <rect x="-6" y="118" width="140" height="10" rx="5" fill="#7D471F"/>
  </g>

  <!-- Hanging Utensils -->
  <g transform="translate(172, 24)">
    <rect x="0" y="0" width="96" height="9" rx="4.5" fill="#8C5327"/>
    <line x1="18" y1="9" x2="18" y2="52" stroke="#B87B3D" stroke-width="4" stroke-linecap="round"/>
    <path d="M8 52 Q18 68 28 52 Z" fill="#7D4E28" stroke="#523117" stroke-width="2"/>
    <line x1="48" y1="9" x2="48" y2="44" stroke="#C98842" stroke-width="4" stroke-linecap="round"/>
    <path d="M40 44 L56 44 L54 68 Q48 73 42 68 Z" fill="#DF9E56" stroke="#8C5327" stroke-width="2"/>
    <line x1="78" y1="9" x2="78" y2="48" stroke="#B87B3D" stroke-width="4" stroke-linecap="round"/>
    <circle cx="78" cy="56" r="11" fill="#FFFDF7" stroke="#7A6E72" stroke-width="2.5"/>
    <path d="M70 56h16M78 48v16" stroke="#9E9296" stroke-width="1.5"/>
  </g>

  <!-- Chalkboard (Only Khanom Kong Illustration) -->
  <g transform="translate(290, 14)">
    <rect x="0" y="0" width="110" height="104" rx="8" fill="#4A3E42" stroke="#9E5E2E" stroke-width="6"/>
    <circle cx="55" cy="52" r="28" fill="none" stroke="#FFFDF7" stroke-width="3.5" stroke-dasharray="5 3"/>
    <line x1="45" y1="24" x2="45" y2="80" stroke="#FFFDF7" stroke-width="2.5"/>
    <line x1="65" y1="24" x2="65" y2="80" stroke="#FFFDF7" stroke-width="2.5"/>
    <line x1="27" y1="42" x2="83" y2="42" stroke="#FFFDF7" stroke-width="2.5"/>
    <line x1="27" y1="62" x2="83" y2="62" stroke="#FFFDF7" stroke-width="2.5"/>
  </g>

  <!-- Thai Kitchen Wooden Shelves (Clean Jars without Labels) -->
  <g transform="translate(422, 16)">
    <rect x="0" y="64" width="204" height="8" rx="4" fill="#9E5E2E"/>
    <rect x="12" y="24" width="38" height="40" rx="9" fill="#E8C27A" stroke="#AD7824" stroke-width="2.5"/>
    <path d="M10 34 Q31 24 52 34" fill="none" stroke="#AD7824" stroke-width="2.5"/>
    <rect x="60" y="14" width="44" height="50" rx="8" fill="#FFFDF7" stroke="#C98F1E" stroke-width="2.5"/>
    <rect x="64" y="8" width="36" height="8" rx="4" fill="#F59BBB"/>
    <rect x="114" y="18" width="42" height="46" rx="8" fill="#FFFDF7" stroke="#C98F1E" stroke-width="2.5"/>
    <rect x="118" y="12" width="34" height="8" rx="4" fill="#7D9E7A"/>
    <path d="M164 46 Q167 64 182 64 Q197 64 200 46 Z" fill="#F59BBB"/>
    <path d="M166 34 Q169 48 182 48 Q195 48 198 34 Z" fill="#FFD45E"/>

    <rect x="0" y="136" width="204" height="8" rx="4" fill="#9E5E2E"/>
    <rect x="24" y="96" width="24" height="40" rx="7" fill="#FFFDF7" stroke="#C98F1E" stroke-width="2"/>
    <rect x="56" y="92" width="24" height="44" rx="7" fill="#FFD45E" stroke="#C98F1E" stroke-width="2"/>
    <path d="M148 112 Q138 82 148 70 Q155 86 154 112 Z" fill="#5D9E56"/>
    <path d="M154 112 Q154 74 164 68 Q168 86 160 112 Z" fill="#6EB866"/>
    <path d="M160 112 Q170 80 180 74 Q178 90 166 112 Z" fill="#4E8A48"/>
    <polygon points="142,110 176,110 171,136 147,136" fill="#B85D43" stroke="#8C412B" stroke-width="2"/>
  </g>

  <!-- Stone Mortar & Pestle -->
  <g transform="translate(534, 182)">
    <path d="M44 10 L34 38" stroke="#8C8884" stroke-width="11" stroke-linecap="round"/>
    <path d="M14 36 Q16 70 40 70 Q64 70 66 36 Z" fill="#7D7975" stroke="#524F4C" stroke-width="2.5" stroke-linejoin="round"/>
    <ellipse cx="40" cy="36" rx="26" ry="6" fill="#9E9A95" stroke="#524F4C" stroke-width="2.5"/>
  </g>

  <!-- Wooden Countertop -->
  <rect x="0" y="254" width="640" height="12" fill="#D99B52"/>
  <rect x="0" y="266" width="640" height="114" fill="#C98A42"/>
  <path d="M0 302h640M0 342h640" stroke="#B57632" stroke-width="3" opacity="0.6"/>
`;

/* ---------- Sound ---------- */
let AC, soundOn = true;
const ac = () => AC || (AC = new (window.AudioContext || window.webkitAudioContext)());
function tone(f, d = .15, type = 'sine', v = .12, at = 0) {
  if (!soundOn) return; const c = ac(), o = c.createOscillator(), g = c.createGain(), s = c.currentTime + at;
  o.type = type; o.frequency.setValueAtTime(f, s); g.gain.setValueAtTime(v, s); g.gain.exponentialRampToValueAtTime(.001, s + d);
  o.connect(g).connect(c.destination); o.start(s); o.stop(s + d);
}
function noise(d = .5, v = .05) {
  if (!soundOn) return; const c = ac(), b = c.createBuffer(1, c.sampleRate * d, c.sampleRate), a = b.getChannelData(0);
  for (let i = 0; i < a.length; i++) a[i] = (Math.random() * 2 - 1) * (1 - i / a.length);
  const s = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2500; g.gain.value = v;
  s.buffer = b; s.connect(f).connect(g).connect(c.destination); s.start();
}
const sfx = {
  pop: () => { tone(520, .1, 'sine', .15); tone(780, .12, 'sine', .1, .06) }, plop: () => tone(180, .25, 'sine', .2),
  flip: () => { tone(360, .12, 'triangle', .16); tone(580, .16, 'triangle', .14, .08); noise(.35, .06) },
  ding: () => [660, 880, 1320].forEach((f, i) => tone(f, .3, 'triangle', .12, i * .09)),
  tada: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, .35, 'triangle', .14, i * .12)),
  oops: () => { tone(220, .25, 'sawtooth', .08); tone(160, .3, 'sawtooth', .08, .15) }, sizzle: () => noise(.9, .07), tick: () => tone(300 + Math.random() * 60, .05, 'square', .04)
};

/* ---------- Page flow ---------- */
const pages = $$('.page'); let idx = 0, gameDone = false;
$('#dots').innerHTML = pages.map(() => '<i></i>').join('');
function go(i) {
  if (i < 0 || i >= pages.length) return;
  if (idx === 3 && i > 3 && !gameDone) return toast(t('wait'));
  idx = i; pages.forEach((p, k) => p.classList.toggle('on', k === i));
  $$('#dots i').forEach((d, k) => d.classList.toggle('on', k === i));
  $('#back').style.visibility = i ? 'visible' : 'hidden'; $('#next').style.visibility = i < 4 ? 'visible' : 'hidden';
  if (i === 3) startGame(); if (i === 4) buildEnd(); sfx.pop();
}
$('#back').onclick = () => go(idx - 1); $('#next').onclick = () => go(idx + 1);
$('#startBtn').onclick = () => go(1);
$('#cookStartBtn').onclick = () => go(3);
$('#again').onclick = () => go(3);
let tt; function toast(m) { const e = $('#toast'); e.textContent = m; e.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => e.classList.remove('on'), 2200) }

/* ---------- Language ---------- */
function setLang(l) {
  lang = l; document.documentElement.lang = l;
  $$('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  $$('[data-i]').forEach(e => e.textContent = t(e.dataset.i));
  $('#ings').innerHTML = t('ing').map((x, i) => `<div class="ing">${ico(i)}<b>${x[0]}</b><small>${x[1]}</small></div>`).join('');
  if (idx === 3 && step >= 0) { renderStepText(); renderTray() }
}
$$('[data-lang]').forEach(b => b.onclick = () => setLang(b.dataset.lang));
$('#snd').onclick = e => { soundOn = !soundOn; e.target.textContent = soundOn ? '♪ On' : '♪ Off' };

/* ---------- Mini game ---------- */
let step = -1, st_ = {}, raf = 0, stage = $('#stage');
const say = k => { const b = $('#say'); b.textContent = k; const p = b.parentElement; p.style.animation = 'none'; p.offsetHeight; p.style.animation = '' };
function renderStepText() { $('#stepName').textContent = (step + 1) + '/5  ' + t('stepN')[step]; say(t('say')[step]); $('#progBar').style.width = (step / 5 * 100) + '%' }
function renderTray() {
  const tr = $('#tray'); tr.innerHTML = '';
  const btn = (i, label, fn, cls = '') => { const b = document.createElement('button'); b.className = 'tbtn ' + cls; b.innerHTML = ico(i) + label; b.onclick = fn; tr.appendChild(b); return b };
  if (step === 0) [0, 1, 2, 4, 5, 7].forEach(i => { btn(i, t('short')[i], () => addIng(i, event.currentTarget), st_.used?.has(i) ? 'used' : '') });
  if (step === 3) {
    btn(6, t('oil'), pourOil, st_.oiled ? 'used' : 'highlight');
    btn(8, t('flip'), flipWheel, (st_.oiled && !st_.flipped) ? 'highlight' : 'used');
    btn(9, t('out'), takeOut, (st_.oiled && st_.flipped) ? 'highlight' : 'used');
  }
  if (step === 4) btn(3, t('short')[3], sprinkle, 'highlight');
}
function startGame() { cancelAnimationFrame(raf); gameDone = false; chef(); step = -1; st_ = {}; nextStep() }
function chef() { $('#chefGame').innerHTML = CHEF }
function nextStep() {
  cancelAnimationFrame(raf); step++; st_ = { used: new Set(), n: 0, oiled: false, flipped: false };
  if (step > 4) { gameDone = true; $('#progBar').style.width = '100%'; say(t('done')); sfx.tada(); confetti(); setTimeout(() => go(4), 1600); return }
  stage.innerHTML = ''; renderStepText(); renderTray(); [scene0, scene1, scene2, scene3, scene4][step]();
}
const S = inner => { stage.innerHTML = `<svg class="scene" viewBox="0 0 640 380" preserveAspectRatio="xMidYMax meet">${KITCHEN_BG}${inner}</svg>`; return stage.firstChild };

/* ---------- Thai Benjarong Mixing Bowl (with Clipped Smooth Swirl) ---------- */
const BOWL = (fill = 0, rot = 0) => `<g id="bowl">
  <defs>
    <clipPath id="benjaClip">
      <path d="M162 204 Q174 316 254 328 L386 328 Q466 316 478 204 Z"/>
    </clipPath>
    <clipPath id="doughClip">
      <ellipse cx="320" cy="208" rx="134" ry="22"/>
    </clipPath>
    <g id="lotusMotif">
      <path d="M0 -14 Q8 -4 0 8 Q-8 -4 0 -14 Z" fill="#F59BBB" stroke="#C98F1E" stroke-width="1.5"/>
      <path d="M-4 -10 Q-14 -2 -6 8 Q-2 2 -4 -10 Z" fill="#FFDDE8" stroke="#C98F1E" stroke-width="1.3"/>
      <path d="M4 -10 Q14 -2 6 8 Q2 2 4 -10 Z" fill="#FFDDE8" stroke="#C98F1E" stroke-width="1.3"/>
      <circle cx="0" cy="9" r="3" fill="#FFD45E"/>
    </g>
    <g id="thaiDiamond">
      <path d="M0 -13 Q7 -5 11 0 Q7 5 0 13 Q-7 5 -11 0 Q-7 -5 0 -13 Z" fill="#7D9E7A" stroke="#FFD45E" stroke-width="1.8"/>
      <circle cx="0" cy="0" r="3.5" fill="#F59BBB"/>
    </g>
  </defs>

  <ellipse cx="320" cy="346" rx="145" ry="14" fill="#4A3E42" opacity="0.24"/>

  <path d="M258 324 L266 342 Q320 349 374 342 L382 324 Z" fill="#FFFDF7" stroke="#C98F1E" stroke-width="4" stroke-linejoin="round"/>
  <path d="M263 334 Q320 341 377 334" fill="none" stroke="#F59BBB" stroke-width="4"/>

  <path d="M162 204 Q174 316 254 328 L386 328 Q466 316 478 204 Z" fill="#FFFDF7"/>

  <g clip-path="url(#benjaClip)">
    <path d="M160 226 Q320 250 480 226 L480 242 Q320 266 160 242 Z" fill="#F59BBB"/>
    <path d="M160 226 Q320 250 480 226" fill="none" stroke="#C98F1E" stroke-width="3"/>
    <path d="M160 242 Q320 266 480 242" fill="none" stroke="#C98F1E" stroke-width="3"/>

    <path d="M165 252 Q320 278 475 252 L465 304 Q320 326 175 304 Z" fill="#BCE0B8" opacity="0.55"/>
    <use href="#lotusMotif" x="215" y="280" transform="rotate(-10 215 280)"/>
    <use href="#thaiDiamond" x="268" y="286"/>
    <use href="#lotusMotif" x="320" y="289"/>
    <use href="#thaiDiamond" x="372" y="286"/>
    <use href="#lotusMotif" x="425" y="280" transform="rotate(10 425 280)"/>

    <path d="M180 304 Q320 326 460 304" fill="none" stroke="#C98F1E" stroke-width="3"/>
    <path d="M210 314 Q230 302 250 318 Q270 304 290 321 Q320 306 350 321 Q370 304 390 318 Q410 302 430 314" fill="none" stroke="#C98F1E" stroke-width="2.5" stroke-linecap="round"/>

    <path d="M395 204 L478 204 Q466 316 386 328 L355 328 Q415 290 395 204 Z" fill="#C98F1E" opacity="0.12"/>
  </g>

  <path d="M162 204 Q174 316 254 328 L386 328 Q466 316 478 204 Z" fill="none" stroke="#C98F1E" stroke-width="4.5" stroke-linejoin="round"/>

  <ellipse cx="320" cy="204" rx="158" ry="32" fill="#FFF3D1" stroke="#C98F1E" stroke-width="5"/>
  <ellipse cx="320" cy="204" rx="148" ry="27" fill="none" stroke="#F59BBB" stroke-width="2.5" stroke-dasharray="6 6"/>

  <ellipse id="dough" cx="320" cy="208" rx="${fill * 138}" ry="${fill * 23}" fill="#FBE7A1"/>
  <g clip-path="url(#doughClip)" opacity="${fill ? 1 : 0}" id="swirlWrap">
    <g id="swirl" transform="rotate(${rot} 320 208)">
      <ellipse cx="320" cy="208" rx="95" ry="14" fill="none" stroke="#E3C25A" stroke-width="4.5" stroke-dasharray="48 24" stroke-linecap="round"/>
      <ellipse cx="320" cy="208" rx="54" ry="8" fill="none" stroke="#FFFDF7" stroke-width="3.5" stroke-dasharray="28 18" stroke-linecap="round"/>
    </g>
  </g>
</g>`;

function scene0() { S(BOWL(0)) }
function addIng(i, b) {
  if (st_.used.has(i)) return; st_.used.add(i); b.classList.add('used'); sfx.plop();
  const f = document.createElement('div'); f.className = 'fly'; f.innerHTML = ico(i);
  f.style.left = 'calc(50% - 27px)'; f.style.setProperty('--x', (Math.random() * 60 - 30) + 'px'); f.style.setProperty('--y', stage.clientHeight * .5 + 'px');
  stage.appendChild(f); setTimeout(() => f.remove(), 750); splash('+1', 46 + Math.random() * 12);
  const k = st_.used.size / 6; $('#dough').setAttribute('rx', 20 + k * 118); $('#dough').setAttribute('ry', 4 + k * 21); $('#swirlWrap').setAttribute('opacity', 1);
  if (k === 1) { sfx.ding(); say(t('good')); setTimeout(nextStep, 850) }
}
function splash(txt, x) { const e = document.createElement('span'); e.className = 'splash'; e.textContent = txt; e.style.left = x + '%'; e.style.top = '38%'; stage.appendChild(e); setTimeout(() => e.remove(), 950) }

/* Step 2: Wooden Mixing Spoon */
function scene1() {
  const s = S(BOWL(.92) + `
  <g id="spoon" class="spoon" transform="translate(320 186)">
    <path d="M-2 -4 L54 -146 Q60 -158 70 -152 Q78 -146 72 -134 L8 2 Z" fill="#C98842" stroke="#7A491D" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M4 -8 L58 -142" stroke="#E8B26E" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="63" cy="-143" r="3.5" fill="#FCEFD2" stroke="#7A491D" stroke-width="2"/>
    <ellipse cx="0" cy="6" rx="22" ry="13" transform="rotate(-18 0 6)" fill="#DF9E56" stroke="#7A491D" stroke-width="3.5"/>
    <ellipse cx="1" cy="5" rx="15" ry="7" transform="rotate(-18 1 5)" fill="#BA7732" opacity="0.55"/>
    <path d="M-12 2 Q-4 -4 8 -2" fill="none" stroke="#F7CFA0" stroke-width="2.5" stroke-linecap="round"/>
  </g>`);
  let last = null, total = 0, rot = 0; const need = Math.PI * 8, sp = $('#spoon', s);
  stage.onpointermove = e => {
    const r = s.getBoundingClientRect(), sc = Math.min(r.width / 640, r.height / 380), ox = r.left + (r.width - 640 * sc) / 2, oy = r.top + r.height - 380 * sc;
    const x = (e.clientX - ox) / sc, y = (e.clientY - oy) / sc, a = Math.atan2(y - 208, x - 320);
    sp.setAttribute('transform', `translate(${Math.max(230, Math.min(410, x))} ${Math.max(182, Math.min(232, y))})`);
    if (last !== null && (e.buttons || e.pointerType === 'touch')) {
      let d = a - last; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI;
      total += Math.abs(d); rot = (rot + d * 57) % 360;
      $('#swirl').setAttribute('transform', `rotate(${rot} 320 208)`);
      if (Math.random() < .15) sfx.tick(); $('#progBar').style.width = ((1 + total / need) / 5 * 100) + '%';
      if (total > need) { stage.onpointermove = null; sfx.ding(); say(t('good')); setTimeout(nextStep, 800) }
    } last = a;
  };
  stage.onpointerleave = () => last = null;
}

/* Step 3: Full Closed Soft 2D Wheel */
function scene2() {
  const hits = [
    [274, 62, 'M274 60V320'],
    [366, 62, 'M366 60V320'],
    [192, 144, 'M190 144H450'],
    [192, 236, 'M190 236H450']
  ];
  const s = S(`
  <defs><clipPath id="wc"><circle cx="320" cy="190" r="132"/></clipPath></defs>
  <ellipse cx="320" cy="348" rx="185" ry="16" fill="#4A3E42" opacity="0.2"/>
  <ellipse cx="320" cy="336" rx="170" ry="18" fill="#E8C27A" stroke="#B5822E" stroke-width="4"/>
  <g clip-path="url(#wc)" stroke="#E3A93E" stroke-opacity="0.24" stroke-width="18" stroke-dasharray="10 10" stroke-linecap="round">
    ${hits.map(h => `<path d="${h[2]}"/>`).join('')}
  </g>
  <circle cx="320" cy="199" r="132" fill="none" stroke="#B57B24" stroke-width="24"/>
  <g id="lines-shadow" clip-path="url(#wc)" fill="none" stroke="#B57B24" stroke-width="22" stroke-linecap="round" transform="translate(0,8)"></g>
  <g id="lines" clip-path="url(#wc)" fill="none" stroke="#F0CC65" stroke-width="21" stroke-linecap="round"></g>
  <g id="lines-hi" clip-path="url(#wc)" fill="none" stroke="#FFF8D6" stroke-opacity="0.55" stroke-width="5" stroke-linecap="round" transform="translate(-2,-2)"></g>
  <circle cx="320" cy="190" r="132" fill="none" stroke="#F0CC65" stroke-width="24"/>
  <circle cx="318" cy="188" r="132" fill="none" stroke="#FFF8D6" stroke-opacity="0.6" stroke-width="5"/>
  <g id="hits">${hits.map((h, i) => `
    <g class="hit-grp" data-i="${i}" style="cursor:pointer">
      <circle class="hit" cx="${h[0]}" cy="${h[1]}" r="22"/>
      <text x="${h[0]}" y="${h[1] + 5}" text-anchor="middle" fill="#6E3249" font-family="Mitr,sans-serif" font-weight="600" font-size="15" pointer-events="none">${i + 1}</text>
    </g>`).join('')}
  </g>`);

  sfx.pop(); let n = 0;
  $$('.hit-grp', s).forEach(g => g.onpointerdown = () => {
    const idx = g.dataset.i; g.remove();
    const d = hits[idx][2];
    [['#lines-shadow', 'strand'], ['#lines', 'strand'], ['#lines-hi', 'strand']].forEach(([sel, cls]) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', d); p.setAttribute('class', cls);
      $(sel, s).appendChild(p);
    });
    sfx.plop(); n++; $('#progBar').style.width = ((2 + n / 4) / 5 * 100) + '%';
    if (n === 4) { sfx.ding(); say(t('good')); setTimeout(nextStep, 950) }
  });
}

/* Step 4: Thai Wok + Clay Stove + In-Place Flip */
let kongColor = '#E8AD3C';
function scene3() {
  S(`
  <path d="M188 274 L452 274 L434 348 Q320 362 206 348 Z" fill="#C96446" stroke="#8A3D26" stroke-width="4" stroke-linejoin="round"/>
  <ellipse cx="320" cy="274" rx="132" ry="18" fill="#A64B30" stroke="#8A3D26" stroke-width="4"/>
  <rect x="284" y="314" width="72" height="28" rx="8" fill="#4A3835" stroke="#8A3D26" stroke-width="3"/>
  <path d="M245 276 Q265 248 285 274 Q305 242 325 274 Q345 244 365 274 Q382 250 398 276 Z" fill="#FF7A33"/>
  <path d="M265 276 Q282 256 300 275 Q320 252 340 275 Q358 256 376 276 Z" fill="#FFD45E"/>

  <path d="M106 202 Q68 198 68 212 Q68 224 112 220" fill="none" stroke="#3E3538" stroke-width="14" stroke-linecap="round"/>
  <path d="M534 202 Q572 198 572 212 Q572 224 528 220" fill="none" stroke="#3E3538" stroke-width="14" stroke-linecap="round"/>

  <path d="M98 204 Q125 298 320 298 Q515 298 542 204 Z" fill="#595053" stroke="#3E3538" stroke-width="4.5" stroke-linejoin="round"/>
  <path d="M135 240 Q320 276 505 240" fill="none" stroke="#7A7073" stroke-width="6" stroke-linecap="round" opacity="0.55"/>
  <ellipse cx="320" cy="204" rx="224" ry="36" fill="#3B3235" stroke="#3E3538" stroke-width="4.5"/>

  <ellipse id="oil" cx="320" cy="208" rx="0" ry="0" fill="#F8C94A"/>
  <g id="fw" class="bob-fry"></g>
  <g id="bb" class="bubbleoil"></g>`);
}

function pourOil() {
  if (st_.oiled) return;
  st_.oiled = true; st_.flipped = false;
  sfx.plop(); sfx.sizzle(); renderTray();
  const o = $('#oil'); o.setAttribute('rx', 198); o.setAttribute('ry', 28); o.style.transition = 'all .6s';
  $('#bb').innerHTML = [0, 1, 2, 3, 4, 5, 6].map(i => `<circle cx="${165 + i * 52}" cy="${210 + (i % 2) * 6}" r="${5 + i % 3 * 2}" fill="#FFF7C2" style="animation-delay:${i * .18}s"/>`).join('');

  $('#fw').innerHTML = `
  <g transform="translate(320 202) scale(1.02 .38)">
    <g id="flipInner" class="flip-inner">
      <g transform="translate(-100 -100)">${kongInner('#F5DF98', 4, 0)}</g>
    </g>
  </g>`;

  stage.insertAdjacentHTML('beforeend', `<div class="meter"><div class="zone"></div><div class="needle" id="nd"></div></div>`);
  const t0 = performance.now(); st_.pos = 0;

  (function loop(now) {
    const p = ((now - t0) / 3800) % 2, v = p > 1 ? 2 - p : p;
    st_.pos = v;
    const nd = $('#nd');
    if (nd) nd.style.left = `calc(${v * 100}% - 4px)`;

    let col;
    if (!st_.flipped) {
      col = mix([245, 223, 152], [238, 185, 72], Math.min(1, v / 0.72));
    } else {
      col = v < 0.76
        ? mix([238, 185, 72], [232, 168, 52], v / 0.76)
        : mix([232, 168, 52], [176, 112, 36], (v - 0.76) / 0.24);
    }
    $('#fw').querySelectorAll('[stroke-width="17"],[stroke-width="19"]').forEach(e => e.setAttribute('stroke', col));
    raf = requestAnimationFrame(loop);
  })(t0);
}

const mix = (a, b, k) => `rgb(${a.map((x, i) => Math.round(x + (b[i] - x) * k))})`;

function flipWheel() {
  if (!st_.oiled || st_.flipped) return;
  if (st_.pos > 0.52 && st_.pos < 0.76) {
    st_.flipped = true;
    sfx.flip();
    say(t('sayFlip'));
    splash('Flip! ✨', 46);
    $('#progBar').style.width = ((3 + 0.5) / 5 * 100) + '%';
    const fi = $('#flipInner');
    if (fi) {
      fi.classList.remove('do-flip');
      void fi.offsetWidth;
      fi.classList.add('do-flip');
    }
    renderTray();
  } else {
    sfx.oops(); say(t('tooEarly')); toast(t('tooEarly'));
  }
}

function takeOut() {
  if (!st_.oiled || !st_.flipped) return;
  if (st_.pos > 0.52 && st_.pos < 0.76) {
    cancelAnimationFrame(raf);
    sfx.ding(); say(t('great'));
    kongColor = '#E8AD3C';
    setTimeout(nextStep, 950);
  } else {
    sfx.oops(); say(t('tooEarly')); toast(t('tooEarly'));
  }
}

function scene4() {
  stage.innerHTML = `<svg class="scene" viewBox="0 0 640 380" preserveAspectRatio="xMidYMax meet">${KITCHEN_BG}</svg>
  <div id="plate" style="position:absolute;inset:0;display:grid;place-items:center">
    <div style="width:min(62%,255px)" id="topKong">${kong(kongColor, 4, 0)}</div>
  </div>`;
}
function sprinkle() {
  st_.n++; sfx.tick(); sfx.pop();
  $('#topKong').innerHTML = kong(kongColor, 4, 1);
  splash('✧', 38 + Math.random() * 24);
  $('#progBar').style.width = ((4 + st_.n / 4) / 5 * 100) + '%';
  if (st_.n >= 4) { say(t('good')); $('#tray').innerHTML = ''; setTimeout(nextStep, 800) }
}
function confetti() {
  const c = ['#FFD45E', '#F59BBB', '#fff', '#74C257'];
  for (let i = 0; i < 42; i++) {
    const e = document.createElement('i'); e.className = 'confetti'; e.style.left = Math.random() * 100 + 'vw'; e.style.background = c[i % 4];
    e.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px'); e.style.animationDelay = Math.random() * .6 + 's';
    document.body.appendChild(e); setTimeout(() => e.remove(), 3200);
  }
}

/* ---------- End page ---------- */
const svgImg = (svg, w = 600, h = 600) => new Promise(r => {
  const i = new Image();
  i.onload = () => r(i);
  i.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" `));
});

function buildEnd() {
  const box = $('#finalKong');
  box.innerHTML = bananaLeafPlatter(kongColor);
  $('#story').style.display = 'none';
}

async function makeStory() {
  const cv = $('#story'), x = cv.getContext('2d'), W = 1080, H = 1920;
  const g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#FFDDE8'); g.addColorStop(.55, '#FFF0B8'); g.addColorStop(1, '#FFFDF7');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = '#F59BBB33';
  for (let i = 0; i < 12; i++) for (let j = 0; j < 20; j++) {
    x.save(); x.translate(i * 100 + (j % 2) * 50, j * 100); x.rotate(Math.PI / 4); x.fillRect(-8, -8, 16, 16); x.restore();
  }
  x.textAlign = 'center'; x.fillStyle = '#C98F1E'; x.font = '600 124px Mitr, sans-serif'; x.fillText(t('myKong'), W / 2, 290);
  x.fillStyle = '#F59BBB'; x.font = '500 54px Mitr, sans-serif'; x.fillText(t('kicker'), W / 2, 380);

  x.save(); x.translate(W / 2, 960); x.rotate(-.025);
  x.fillStyle = '#fff'; x.shadowColor = '#c98f1e55'; x.shadowBlur = 40; x.fillRect(-440, -470, 880, 960); x.shadowBlur = 0;
  x.strokeStyle = '#FFD45E'; x.lineWidth = 12; x.strokeRect(-440, -470, 880, 960);
  x.drawImage(await svgImg(bananaLeafPlatter(kongColor), 800, 800), -390, -420, 780, 780);
  x.restore();

  x.drawImage(await svgImg(kong(kongColor, 4, 1), 300, 315), W / 2 + 230, 1220, 260, 273);
  x.fillStyle = '#7A3A52'; x.font = '500 60px Mitr, sans-serif'; x.fillText('#KhanomKong  #ขนมกง', W / 2, 1650);
  cv.style.display = 'block';
}

$('#shareBtn').onclick = async () => {
  await makeStory();
  $('#story').toBlob(async b => {
    const f = new File([b], 'khanom-kong.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [f] })) {
      try { await navigator.share({ files: [f], title: t('myKong') }) } catch (e) { }
    } else {
      const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'khanom-kong-story.png'; a.click(); toast(t('saved'));
    }
  });
};

/* ---------- Init ---------- */
$('#heroKong').innerHTML = kong('#E8AD3C', 4, 1);
$('#chefIntro').innerHTML = CHEF;
setLang('en'); go(0);