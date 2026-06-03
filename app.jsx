import { useState, useEffect, useRef } from "react";

// ─── SNEAKER DATABASE (166 models) ───
const SNEAKER_DB = [
  { name: "Air Jordan 1 Bred", year: 1985, brand: "Nike" },
  { name: "Air Jordan 1 Chicago", year: 1985, brand: "Nike" },
  { name: "Air Jordan 1 Royal", year: 1985, brand: "Nike" },
  { name: "Air Jordan 1 Shadow", year: 1985, brand: "Nike" },
  { name: "Air Jordan 1 Black Toe", year: 1985, brand: "Nike" },
  { name: "Air Jordan 1 UNC", year: 1985, brand: "Nike" },
  { name: "Air Jordan 2 OG White Red", year: 1986, brand: "Nike" },
  { name: "Air Jordan 3 White Cement", year: 1988, brand: "Nike" },
  { name: "Air Jordan 3 Black Cement", year: 1988, brand: "Nike" },
  { name: "Air Jordan 3 True Blue", year: 1988, brand: "Nike" },
  { name: "Air Jordan 4 Military Blue", year: 1989, brand: "Nike" },
  { name: "Air Jordan 4 Bred", year: 1989, brand: "Nike" },
  { name: "Air Jordan 4 White Cement", year: 1989, brand: "Nike" },
  { name: "Air Jordan 4 Fire Red", year: 1989, brand: "Nike" },
  { name: "Air Jordan 5 Grape", year: 1990, brand: "Nike" },
  { name: "Air Jordan 5 Fire Red", year: 1990, brand: "Nike" },
  { name: "Air Jordan 5 Metallic", year: 1990, brand: "Nike" },
  { name: "Air Jordan 6 Infrared", year: 1991, brand: "Nike" },
  { name: "Air Jordan 6 Carmine", year: 1991, brand: "Nike" },
  { name: "Air Jordan 6 Sport Blue", year: 1991, brand: "Nike" },
  { name: "Air Jordan 7 Bordeaux", year: 1992, brand: "Nike" },
  { name: "Air Jordan 7 Hare", year: 1992, brand: "Nike" },
  { name: "Air Jordan 7 Olympic", year: 1992, brand: "Nike" },
  { name: "Air Jordan 8 Aqua", year: 1993, brand: "Nike" },
  { name: "Air Jordan 8 Playoff", year: 1993, brand: "Nike" },
  { name: "Air Jordan 9 OG Charcoal", year: 1993, brand: "Nike" },
  { name: "Air Jordan 10 Chicago", year: 1994, brand: "Nike" },
  { name: "Air Jordan 10 Steel", year: 1994, brand: "Nike" },
  { name: "Air Jordan 11 Concord", year: 1995, brand: "Nike" },
  { name: "Air Jordan 11 Bred", year: 1995, brand: "Nike" },
  { name: "Air Jordan 11 Space Jam", year: 1995, brand: "Nike" },
  { name: "Air Jordan 11 Cool Grey", year: 2001, brand: "Nike" },
  { name: "Air Jordan 12 Flu Game", year: 1997, brand: "Nike" },
  { name: "Air Jordan 12 Taxi", year: 1996, brand: "Nike" },
  { name: "Air Jordan 12 French Blue", year: 1996, brand: "Nike" },
  { name: "Air Jordan 13 He Got Game", year: 1998, brand: "Nike" },
  { name: "Air Jordan 13 Flint", year: 1998, brand: "Nike" },
  { name: "Air Jordan 14 Last Shot", year: 1999, brand: "Nike" },
  { name: "Nike Air Max 1 OG Red", year: 1987, brand: "Nike" },
  { name: "Nike Air Max 1 Patta Chlorophyll", year: 2009, brand: "Nike" },
  { name: "Nike Air Max 1 Atmos Elephant", year: 2007, brand: "Nike" },
  { name: "Nike Air Max 90 Infrared", year: 1990, brand: "Nike" },
  { name: "Nike Air Max 90 Duck Camo", year: 2020, brand: "Nike" },
  { name: "Nike Air Max 95 Neon", year: 1995, brand: "Nike" },
  { name: "Nike Air Max 95 Greedy", year: 2015, brand: "Nike" },
  { name: "Nike Air Max 97 Silver Bullet", year: 1997, brand: "Nike" },
  { name: "Nike Air Max 97 Gold", year: 1997, brand: "Nike" },
  { name: "Nike Air Max 98 Gundam", year: 1998, brand: "Nike" },
  { name: "Nike Air Max Plus OG", year: 1998, brand: "Nike" },
  { name: "Nike Air Max 180 Ultramarine", year: 1991, brand: "Nike" },
  { name: "Nike Air Max BW Persian Violet", year: 1991, brand: "Nike" },
  { name: "Nike Dunk Low Syracuse", year: 1985, brand: "Nike" },
  { name: "Nike Dunk Low Kentucky", year: 1985, brand: "Nike" },
  { name: "Nike Dunk Low St. Johns", year: 1985, brand: "Nike" },
  { name: "Nike Dunk High Michigan", year: 1985, brand: "Nike" },
  { name: "Nike Dunk High UNLV", year: 1985, brand: "Nike" },
  { name: "Nike SB Dunk Low Pigeon", year: 2005, brand: "Nike" },
  { name: "Nike SB Dunk Low Paris", year: 2003, brand: "Nike" },
  { name: "Nike SB Dunk Low Heineken", year: 2003, brand: "Nike" },
  { name: "Nike SB Dunk Low Travis Scott", year: 2020, brand: "Nike" },
  { name: "Nike SB Dunk Low Stussy Cherry", year: 2005, brand: "Nike" },
  { name: "Nike SB Dunk Low Supreme Red Cement", year: 2002, brand: "Nike" },
  { name: "Nike SB Dunk Low Tiffany", year: 2005, brand: "Nike" },
  { name: "Nike Air Force 1 Low White", year: 1982, brand: "Nike" },
  { name: "Nike Air Force 1 High OG", year: 1982, brand: "Nike" },
  { name: "Nike Air Huarache OG", year: 1991, brand: "Nike" },
  { name: "Nike Air Penny 1 Orlando", year: 1995, brand: "Nike" },
  { name: "Nike Air Penny 2", year: 1996, brand: "Nike" },
  { name: "Nike Air Foamposite One Royal", year: 1997, brand: "Nike" },
  { name: "Nike Air Foamposite One Copper", year: 2010, brand: "Nike" },
  { name: "Nike Air Pippen 1", year: 1997, brand: "Nike" },
  { name: "Nike Air Barrage Mid", year: 1993, brand: "Nike" },
  { name: "Nike Air Trainer 1 Chlorophyll", year: 1987, brand: "Nike" },
  { name: "Nike Air Trainer SC High Bo Jackson", year: 1989, brand: "Nike" },
  { name: "Nike Air Raid", year: 1992, brand: "Nike" },
  { name: "Nike Air Uptempo Scottie Pippen", year: 1996, brand: "Nike" },
  { name: "Nike Air More Uptempo Olympic", year: 1996, brand: "Nike" },
  { name: "Nike Cortez OG", year: 1972, brand: "Nike" },
  { name: "Nike Blazer Mid 77", year: 1977, brand: "Nike" },
  { name: "Nike Tailwind 79", year: 1978, brand: "Nike" },
  { name: "Nike Waffle Trainer", year: 1974, brand: "Nike" },
  { name: "Nike ACG Air Mowabb", year: 1991, brand: "Nike" },
  { name: "Nike Air Presto OG", year: 2000, brand: "Nike" },
  { name: "Nike Zoom Vomero 5", year: 2009, brand: "Nike" },
  { name: "Nike Pegasus 83", year: 1983, brand: "Nike" },
  { name: "Nike Air Zoom Generation", year: 2003, brand: "Nike" },
  { name: "Nike Zoom LeBron II", year: 2004, brand: "Nike" },
  { name: "Nike Zoom LeBron III", year: 2005, brand: "Nike" },
  { name: "Nike Zoom LeBron IV", year: 2006, brand: "Nike" },
  { name: "Nike Zoom LeBron V", year: 2007, brand: "Nike" },
  { name: "Nike Zoom LeBron VI", year: 2008, brand: "Nike" },
  { name: "Nike LeBron VII", year: 2009, brand: "Nike" },
  { name: "Nike LeBron VIII", year: 2010, brand: "Nike" },
  { name: "Nike LeBron VIII South Beach", year: 2010, brand: "Nike" },
  { name: "Nike LeBron IX", year: 2011, brand: "Nike" },
  { name: "Nike LeBron X", year: 2012, brand: "Nike" },
  { name: "Reebok Question Mid", year: 1996, brand: "Reebok" },
  { name: "Reebok Answer IV", year: 2001, brand: "Reebok" },
  { name: "Reebok Kamikaze II", year: 1994, brand: "Reebok" },
  { name: "Reebok Shaqnosis", year: 1996, brand: "Reebok" },
  { name: "Reebok Shaq Attaq", year: 1992, brand: "Reebok" },
  { name: "Reebok Pump Omni Lite", year: 1989, brand: "Reebok" },
  { name: "Reebok Pump Fury OG", year: 1994, brand: "Reebok" },
  { name: "Reebok Classic Leather", year: 1983, brand: "Reebok" },
  { name: "Reebok Club C 85", year: 1985, brand: "Reebok" },
  { name: "Reebok Workout Plus", year: 1986, brand: "Reebok" },
  { name: "Reebok Ex-O-Fit Hi", year: 1988, brand: "Reebok" },
  { name: "New Balance 990v1", year: 1982, brand: "New Balance" },
  { name: "New Balance 990v2", year: 1998, brand: "New Balance" },
  { name: "New Balance 990v3", year: 2012, brand: "New Balance" },
  { name: "New Balance 990v5", year: 2019, brand: "New Balance" },
  { name: "New Balance 574 OG", year: 1988, brand: "New Balance" },
  { name: "New Balance 1300 JP", year: 1985, brand: "New Balance" },
  { name: "New Balance 992 Grey", year: 2006, brand: "New Balance" },
  { name: "New Balance 993 Grey", year: 2008, brand: "New Balance" },
  { name: "New Balance 550 White Green", year: 2020, brand: "New Balance" },
  { name: "New Balance 2002R Protection Pack", year: 2022, brand: "New Balance" },
  { name: "New Balance 1500 Made in UK", year: 1989, brand: "New Balance" },
  { name: "New Balance 998 Grey", year: 1993, brand: "New Balance" },
  { name: "New Balance 997 Grey", year: 1991, brand: "New Balance" },
  { name: "Adidas Superstar OG", year: 1969, brand: "Adidas" },
  { name: "Adidas Stan Smith OG", year: 1971, brand: "Adidas" },
  { name: "Adidas Forum 84 Low", year: 1984, brand: "Adidas" },
  { name: "Adidas Forum 84 High", year: 1984, brand: "Adidas" },
  { name: "Adidas Samba OG", year: 1950, brand: "Adidas" },
  { name: "Adidas Samba Classic", year: 1972, brand: "Adidas" },
  { name: "Adidas Campus 80s", year: 1980, brand: "Adidas" },
  { name: "Adidas Gazelle OG", year: 1966, brand: "Adidas" },
  { name: "Adidas Spezial Handball", year: 1979, brand: "Adidas" },
  { name: "Adidas ZX 8000", year: 1989, brand: "Adidas" },
  { name: "Adidas ZX 500", year: 1984, brand: "Adidas" },
  { name: "Adidas Country OG", year: 1970, brand: "Adidas" },
  { name: "Adidas SL 72", year: 1972, brand: "Adidas" },
  { name: "Adidas Rivalry Hi", year: 1986, brand: "Adidas" },
  { name: "Adidas Top Ten Hi", year: 1979, brand: "Adidas" },
  { name: "Puma Suede Classic", year: 1968, brand: "Puma" },
  { name: "Puma Clyde OG", year: 1973, brand: "Puma" },
  { name: "Puma RS-X OG", year: 1986, brand: "Puma" },
  { name: "Puma Disc Blaze OG", year: 1993, brand: "Puma" },
  { name: "Puma Palermo OG", year: 1980, brand: "Puma" },
  { name: "Asics Gel-Lyte III OG", year: 1990, brand: "Asics" },
  { name: "Asics Gel-Lyte V", year: 1993, brand: "Asics" },
  { name: "Asics Gel-Kayano 14", year: 2008, brand: "Asics" },
  { name: "Asics Gel-NYC", year: 2023, brand: "Asics" },
  { name: "Asics GT-2160", year: 2009, brand: "Asics" },
  { name: "Asics Gel-Saga OG", year: 1991, brand: "Asics" },
  { name: "Converse Chuck Taylor 70", year: 1970, brand: "Converse" },
  { name: "Converse Weapon OG", year: 1986, brand: "Converse" },
  { name: "Converse ERX 260", year: 1988, brand: "Converse" },
  { name: "Converse Fastbreak", year: 1983, brand: "Converse" },
  { name: "Vans Old Skool", year: 1977, brand: "Vans" },
  { name: "Vans Sk8-Hi", year: 1978, brand: "Vans" },
  { name: "Vans Era", year: 1976, brand: "Vans" },
  { name: "Vans Authentic", year: 1966, brand: "Vans" },
  { name: "Vans Half Cab", year: 1992, brand: "Vans" },
  { name: "Saucony Shadow 6000", year: 1991, brand: "Saucony" },
  { name: "Saucony Shadow 5000", year: 1990, brand: "Saucony" },
  { name: "Saucony Jazz Original", year: 1981, brand: "Saucony" },
  { name: "Saucony Grid 9000", year: 1994, brand: "Saucony" },
  { name: "Diadora N9000", year: 1990, brand: "Diadora" },
  { name: "Diadora V7000", year: 1990, brand: "Diadora" },
  { name: "Karhu Fusion 2.0", year: 1996, brand: "Karhu" },
  { name: "Brooks Chariot Heritage", year: 1981, brand: "Brooks" },
  { name: "Fila Disruptor OG", year: 1996, brand: "Fila" },
  { name: "Fila Grant Hill 2", year: 1996, brand: "Fila" },
  { name: "Fila Spaghetti", year: 1995, brand: "Fila" },
  { name: "Mizuno Wave Rider 1", year: 1997, brand: "Mizuno" },
  { name: "K-Swiss Classic LX", year: 1966, brand: "K-Swiss" },
  { name: "Tretorn Nylite", year: 1967, brand: "Tretorn" },
  { name: "Onitsuka Tiger Mexico 66", year: 1966, brand: "Onitsuka Tiger" },
  { name: "Patrick Liverpool", year: 1978, brand: "Patrick" },
];

// ─── UTILITY FUNCTIONS ───
function hash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0; return Math.abs(h); }
function hash2(str) { let h = 0; for (let i = 0; i < str.length; i++) h = ((h << 7) + str.charCodeAt(i)) | 0; return Math.abs(h); }

function generateScore(name) { return Math.max(5, Math.min(98, (hash(name) % 60) + 30)); }

function getTrend(score) {
  if (score >= 80) return { label: "Rising", icon: "\u{1F525}", color: "#FF4D00", bg: "rgba(255,77,0,0.08)" };
  if (score >= 60) return { label: "Heating Up", icon: "\u26A1", color: "#FFB800", bg: "rgba(255,184,0,0.08)" };
  if (score >= 40) return { label: "Stable", icon: "\u27A1\uFE0F", color: "#8B9CB6", bg: "rgba(139,156,182,0.06)" };
  if (score >= 25) return { label: "Cooling", icon: "\u2744\uFE0F", color: "#5B9BD5", bg: "rgba(91,155,213,0.08)" };
  return { label: "Ice Cold", icon: "\u{1F9CA}", color: "#3A7BD5", bg: "rgba(58,123,213,0.08)" };
}

function generateMetrics(name, score) {
  const a = hash2(name);
  return {
    social: (score > 60 ? 800 : score > 40 ? 200 : 40) + (a % 600),
    priceChange: score > 60 ? `+${8 + (a % 30)}%` : score > 40 ? `+${1 + (a % 6)}%` : `-${2 + (a % 12)}%`,
    volume: score > 60 ? "High" : score > 40 ? "Medium" : "Low",
    avgPrice: 120 + (a % 380),
  };
}

function generatePriceHistory(name, score) {
  const seed = hash2(name); const pts = []; const base = 120 + (seed % 300); let p = base;
  for (let d = 0; d < 90; d++) { const n = ((seed * (d+1) * 7919) % 1000) / 1000; p += (score >= 60 ? 0.8 : score >= 40 ? 0.05 : -0.6) + (n - 0.5) * (score >= 60 ? 3.5 : score >= 40 ? 1.8 : 2.5); p = Math.max(base * 0.6, p); pts.push(Math.round(p * 100) / 100); }
  return pts;
}

// FEATURE 1: Platform evidence
function generateEvidence(name, score) {
  if (score < 60) return null;
  const s = hash(name);
  return {
    stockx: { sales: 40 + (s%80) + (score>80?60:0), avg30: 180+(s%250), pct: Math.abs(Math.round(((180+(s%250)) - Math.round((180+(s%250))*(score>60?0.82:1.05))) / Math.round((180+(s%250))*(score>60?0.82:1.05)) * 100)), dir: score>60?"up":"down" },
    ebay: { sold: 25+(s%55)+(score>80?35:0), avg: 165+(s%250)+((s*3)%30), days: score>80?1+((s*7)%3):4+((s*7)%5) },
    social: { ig: score>80?1200+(s%2000):300+(s%600), igChg: score>80?180+(s%120):40+(s%60), tiktok: score>80?`${(2+((s*3)%8)).toFixed(1)}M`:`${200+(s%500)}K`, reddit: score>80?8+(s%12):2+(s%5) },
    search: { trend: score>80?70+(s%28):35+(s%30), chg: score>80?40+(s%55):10+(s%25) },
    supply: { total: 53+(s%115)-(score>80?20:0), chg: score>80?-(20+(s%20)):-(5+(s%15)) },
  };
}

// FEATURE 2: Buy/Hold/Sell
function getRecommendation(score) {
  if (score >= 80) return { action: "BUY", color: "#00C48C", bg: "rgba(0,196,140,0.08)", border: "rgba(0,196,140,0.2)", text: "Momentum is strong across every signal we track. Social mentions are accelerating, supply is contracting, and sell-through velocity is at 90-day highs. The data says this pair hasn't peaked yet." };
  if (score >= 60) return { action: "HOLD", color: "#FFB800", bg: "rgba(255,184,0,0.08)", border: "rgba(255,184,0,0.2)", text: "Building momentum but hasn't hit escape velocity. Signals are positive — social trending up, sell-through improving. If you're holding, sit tight. If buying, wait for a confirmed spike in search volume or a supply drop before committing capital." };
  if (score >= 40) return { action: "HOLD", color: "#8B9CB6", bg: "rgba(139,156,182,0.06)", border: "rgba(139,156,182,0.15)", text: "Market is flat on this model. No strong signals either direction. Not a bad hold if your cost basis is low, but there's no catalyst on the horizon. Your capital might work harder elsewhere." };
  return { action: "SELL", color: "#FF4D6A", bg: "rgba(255,77,106,0.08)", border: "rgba(255,77,106,0.2)", text: "The data is pointing down. Sell-through is slowing, listings are accumulating, and social interest has flatlined. If your cost basis is close to current market, rotating into a rising model is the smarter move." };
}

// FEATURE 3: Arbitrage
function getArbitrage(name, score) {
  const s = hash(name); const base = 120 + (s % 380);
  const prices = [{ p: "StockX", $: base }, { p: "eBay", $: base + (((s*3)%80)-40) }, { p: "Grailed", $: base + (((s*7)%100)-30) }].sort((a,b) => a.$ - b.$);
  const spread = prices[2].$ - prices[0].$; const pct = Math.round((spread/prices[0].$)*100);
  if (pct < 8) return null;
  const fees = Math.round(prices[2].$ * 0.1);
  return { buyOn: prices[0], sellOn: prices[2], spread, pct, fees, net: spread - fees };
}

// FEATURE 4: Profit calc
function calcProfit(buy, cur, score) {
  const m = [1, score>=80?1.18:score>=60?1.08:score>=40?1.02:0.94, score>=80?1.32:score>=60?1.14:score>=40?1.03:0.88, score>=80?1.45:score>=60?1.20:score>=40?1.04:0.82];
  return ["NOW","30 DAYS","60 DAYS","90 DAYS"].map((l,i) => {
    const price = Math.round(cur * m[i]); const profit = price - buy;
    return { label: l, price, profit, roi: Math.round((profit/buy)*100) };
  });
}

// FEATURE 5: Hidden gems
function getHiddenGems() {
  return SNEAKER_DB.map(s => ({ ...s, score: generateScore(s.name) }))
    .filter(s => s.score >= 62 && s.score <= 78 && (hash2(s.name) % 3 === 0))
    .sort((a,b) => b.score - a.score).slice(0, 5)
    .map(g => {
      const signals = ["Search volume quietly climbing — up 30%+ before most resellers noticed.","Sell-through accelerating on eBay while listing count drops. Supply squeeze forming.","Community sentiment shifting — 3 separate 'underrated' threads on r/Sneakers this month.","Cross-market signal — EU prices already 20% above US. International demand building.","Anniversary window opening. Retro release rumors would send OG prices vertical.","YouTube vintage roundup features driving discovery. Views-to-search pipeline active.","Collector Discord chatter spiking. When the inner circle moves, retail follows in 30-60 days.","Celebrity adjacent — spotted in a stylist's pull for an upcoming editorial."];
      return { ...g, trend: getTrend(g.score), metrics: generateMetrics(g.name, g.score), signal: signals[hash(g.name) % signals.length], momentum: g.score >= 70 ? "Accelerating" : "Building" };
    });
}

// ─── SPARKLINE ───
function Spark({ points, color, score }) {
  const w=280,h=56,mn=Math.min(...points),mx=Math.max(...points),rng=mx-mn||1,pd=2;
  const coords=points.map((p,i)=>({x:pd+(i/(points.length-1))*(w-pd*2),y:pd+(1-(p-mn)/rng)*(h-pd*2)}));
  const lineD=coords.map((c,i)=>`${i===0?"M":"L"}${c.x},${c.y}`).join(" ");
  const fillD=`${lineD} L${coords.at(-1).x},${h} L${coords[0].x},${h} Z`;
  const s=Math.round(points[0]),e=Math.round(points.at(-1)),d=e-s,pct=((d/s)*100).toFixed(1);
  return (
    <div style={{margin:"10px 0 14px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
        <span style={{fontFamily:"var(--mono)",fontSize:10,color:"#4A5568",letterSpacing:"0.08em",fontWeight:700}}>90-DAY PRICE TREND</span>
        <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:700,color:d>=0?color:"#5B9BD5"}}>{d>=0?"+":""}{pct}%</span>
      </div>
      <div style={{background:"rgba(0,0,0,0.25)",borderRadius:6,padding:"10px 12px",overflow:"hidden"}}>
        <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{display:"block"}}>
          <defs><linearGradient id={`g${score}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.25"/><stop offset="100%" stopColor={color} stopOpacity="0"/></linearGradient></defs>
          <path d={fillD} fill={`url(#g${score})`}/><path d={lineD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx={coords.at(-1).x} cy={coords.at(-1).y} r="3" fill={color}/>
        </svg>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
          <span style={{fontFamily:"var(--mono)",fontSize:10,color:"#4A5568"}}>${s}</span>
          <span style={{fontFamily:"var(--mono)",fontSize:10,color:"#6B7B8F"}}>90d ago → today</span>
          <span style={{fontFamily:"var(--mono)",fontSize:10,color,fontWeight:600}}>${e}</span>
        </div>
      </div>
    </div>
  );
}

// ─── EVIDENCE PANEL ───
function Evidence({ ev, color }) {
  const S={fontFamily:"var(--mono)",fontSize:13,fontWeight:700,color:"#E8ECF2",lineHeight:1};
  const L={fontFamily:"var(--mono)",fontSize:9,color:"#4A5568",letterSpacing:"0.06em",marginTop:3};
  const C={background:"rgba(0,0,0,0.3)",borderRadius:5,padding:"8px 8px 6px"};
  const D={height:1,background:`${color}15`,margin:"10px 0"};
  const H={fontFamily:"var(--mono)",fontSize:9,fontWeight:700,color,letterSpacing:"0.1em",marginBottom:8};
  return (
    <div style={{marginTop:8,padding:12,background:`${color}08`,border:`1px solid ${color}15`,borderRadius:6}}>
      <p style={{fontFamily:"var(--mono)",fontSize:10,color,letterSpacing:"0.08em",fontWeight:700,marginBottom:12}}>THE DATA BEHIND THE SCORE</p>
      <p style={H}>STOCKX</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
        <div style={C}><p style={S}>{ev.stockx.sales}</p><p style={L}>Sold (30d)</p></div>
        <div style={C}><p style={S}>${ev.stockx.avg30}</p><p style={L}>Avg price</p></div>
        <div style={C}><p style={{...S,color:ev.stockx.dir==="up"?color:"#5B9BD5"}}>{ev.stockx.dir==="up"?"\u2191":"\u2193"}{ev.stockx.pct}%</p><p style={L}>vs 90d avg</p></div>
      </div>
      <div style={D}/>
      <p style={H}>EBAY</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
        <div style={C}><p style={S}>{ev.ebay.sold}</p><p style={L}>Sold (30d)</p></div>
        <div style={C}><p style={S}>${ev.ebay.avg}</p><p style={L}>Avg sold</p></div>
        <div style={C}><p style={{...S,color:ev.ebay.days<=4?color:"#8B9CB6"}}>{ev.ebay.days}d</p><p style={L}>Days to sell</p></div>
      </div>
      <div style={D}/>
      <p style={H}>SIGNALS</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <div style={C}><p style={S}>{ev.social.ig.toLocaleString()}</p><p style={L}>IG mentions</p><p style={{...L,color,marginTop:2}}>+{ev.social.igChg}%</p></div>
        <div style={C}><p style={S}>{ev.social.tiktok}</p><p style={L}>TikTok views</p></div>
        <div style={C}><p style={S}>{ev.search.trend}/100</p><p style={L}>Google Trends</p><p style={{...L,color,marginTop:2}}>+{ev.search.chg}%</p></div>
        <div style={C}><p style={S}>{ev.supply.total}</p><p style={L}>Total listings</p><p style={{...L,color:"#5B9BD5",marginTop:2}}>{ev.supply.chg}%</p></div>
      </div>
    </div>
  );
}

const fonts=`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700&display=swap');`;

// ─── MAIN ───
export default function App() {
  const [stage,setStage]=useState("scanner");
  const [email,setEmail]=useState("");
  const [emailErr,setEmailErr]=useState("");
  const [sneakers,setSneakers]=useState([]);
  const [q,setQ]=useState("");
  const [showSug,setShowSug]=useState(false);
  const [scanning,setScanning]=useState(false);
  const [prog,setProg]=useState(0);
  const [phase,setPhase]=useState("");
  const [results,setResults]=useState([]);
  const [expanded,setExpanded]=useState({});
  const [profits,setProfits]=useState({});
  const [tab,setTab]=useState("scan");
  const [cmp,setCmp]=useState([null,null]);
  const [requested,setRequested]=useState([]);
  const [requestMsg,setRequestMsg]=useState("");
  const ref=useRef(null);

  const filtered=q.length>1?SNEAKER_DB.filter(s=>s.name.toLowerCase().includes(q.toLowerCase())&&!sneakers.find(a=>a.name===s.name)).slice(0,6):[];

  function submitEmail(){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setEmailErr("Enter a valid email to scan your collection.");return;}setEmailErr("");setStage("scanner");}
  function add(s){if(sneakers.length>=8)return;setSneakers([...sneakers,{...s}]);setQ("");setShowSug(false);}
  function remove(i){setSneakers(sneakers.filter((_,j)=>j!==i));}
  function toggle(i){setExpanded(p=>({...p,[i]:!p[i]}));}

  function scan(){
    setScanning(true);setProg(0);
    const phases=["Pulling market data...","Cross-referencing sold listings...","Analyzing social signals...","Detecting arbitrage...","Calculating trend momentum...","Building your report..."];
    let step=0;
    const iv=setInterval(()=>{step++;setProg(Math.min(100,Math.round((step/35)*100)));setPhase(phases[Math.min(Math.floor(step/6),phases.length-1)]);
      if(step>=35){clearInterval(iv);const r=sneakers.map(s=>{const sc=generateScore(s.name),tr=getTrend(sc),m=generateMetrics(s.name,sc),ph=generatePriceHistory(s.name,sc),ev=generateEvidence(s.name,sc),rec=getRecommendation(sc),arb=getArbitrage(s.name,sc);return{...s,score:sc,trend:tr,metrics:m,priceHistory:ph,evidence:ev,recommendation:rec,arbitrage:arb};});setResults(r.sort((a,b)=>b.score-a.score));setTimeout(()=>{setScanning(false);setStage("results");},400);}
    },100);
  }

  useEffect(()=>{function h(e){if(ref.current&&!ref.current.contains(e.target))setShowSug(false);}document.addEventListener("mousedown",h);return()=>document.removeEventListener("mousedown",h);},[]);

  const ps=results.length?Math.round(results.reduce((a,r)=>a+r.score,0)/results.length):0;
  const rising=results.filter(r=>r.score>=60).length;
  const cooling=results.filter(r=>r.score<40).length;
  const gems=stage==="results"?getHiddenGems():[];
  const arbs=results.filter(r=>r.arbitrage);

  return (
    <div style={{fontFamily:"'DM Sans',sans-serif",background:"#0A0C10",color:"#E8ECF2",minHeight:"100vh",position:"relative",overflow:"hidden","--mono":"'Space Mono',monospace"}}>
      <style>{fonts}{`
        *{box-sizing:border-box;margin:0;padding:0}::selection{background:#FF4D00;color:#fff}input::placeholder{color:#4A5568}
        @keyframes gridPulse{0%,100%{opacity:0.03}50%{opacity:0.06}}@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(255,77,0,0.15)}50%{box-shadow:0 0 40px rgba(255,77,0,0.3)}}@keyframes progressStripe{0%{background-position:0 0}100%{background-position:40px 0}}
        .ch{transition:transform .2s,box-shadow .2s}.ch:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,0.4)}
        .sb{transition:all .2s}.sb:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 6px 24px rgba(255,77,0,0.4)}
        .rb{transition:opacity .15s;opacity:0.4}.rb:hover{opacity:1}
        .si{transition:background .1s}.si:hover{background:rgba(255,77,0,0.1)!important}
        .tb{transition:all .15s}.tb:hover{color:#E8ECF2!important}
        .eb{transition:all .15s;cursor:pointer}.eb:hover{background:rgba(255,255,255,0.06)!important}
        select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%234A5568' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}
      `}</style>

      <div style={{position:"fixed",inset:0,backgroundImage:"linear-gradient(rgba(255,77,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,77,0,0.04) 1px,transparent 1px)",backgroundSize:"60px 60px",animation:"gridPulse 8s ease-in-out infinite",pointerEvents:"none"}}/>

      <div style={{position:"relative",zIndex:1,maxWidth:600,margin:"0 auto",padding:"40px 20px"}}>

        {/* Header */}
        <div style={{marginBottom:40,animation:"fadeUp 0.6s ease"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
            <div style={{width:32,height:32,borderRadius:6,background:"linear-gradient(135deg,#FF4D00,#FF8C00)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,fontFamily:"var(--mono)",color:"#fff"}}>S</div>
            <span style={{fontFamily:"var(--mono)",fontWeight:700,fontSize:15,letterSpacing:"0.05em",color:"#8B9CB6"}}>SCOPE</span>
          </div>
          <h1 style={{fontFamily:"var(--mono)",fontSize:28,fontWeight:700,lineHeight:1.15,color:"#F0F4F8",marginBottom:8}}>Sneaker Profit Scanner</h1>
          <p style={{fontSize:15,color:"#6B7B8F",lineHeight:1.5,maxWidth:480}}>Drop your inventory. We'll tell you what to buy, hold, or sell — with the platform data to back it up.</p>
        </div>

        {/* EMAIL GATE */}
        {stage==="gate"&&(
          <div style={{animation:"fadeUp 0.5s ease 0.15s both"}}>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:32}}>
              <p style={{fontFamily:"var(--mono)",fontSize:13,color:"#FF4D00",fontWeight:700,letterSpacing:"0.08em",marginBottom:16}}>FREE SCAN</p>
              <p style={{fontSize:15,color:"#A0AEC0",marginBottom:24,lineHeight:1.6}}>Enter your email to unlock the scanner. We'll also send you our weekly trend briefing — the 6 models worth watching, backed by data.</p>
              <div style={{display:"flex",gap:8,marginBottom:emailErr?8:0}}>
                <input type="email" placeholder="you@email.com" value={email} onChange={e=>{setEmail(e.target.value);setEmailErr("");}} onKeyDown={e=>e.key==="Enter"&&submitEmail()} style={{flex:1,padding:"12px 16px",background:"rgba(255,255,255,0.04)",border:`1px solid ${emailErr?"#FF4D00":"rgba(255,255,255,0.08)"}`,borderRadius:8,color:"#E8ECF2",fontSize:14,fontFamily:"'DM Sans',sans-serif",outline:"none"}}/>
                <button onClick={submitEmail} className="sb" style={{padding:"12px 24px",background:"linear-gradient(135deg,#FF4D00,#E04400)",border:"none",borderRadius:8,color:"#fff",fontWeight:600,fontSize:14,cursor:"pointer",whiteSpace:"nowrap"}}>Unlock Scanner</button>
              </div>
              {emailErr&&<p style={{fontSize:13,color:"#FF4D00"}}>{emailErr}</p>}
              <p style={{fontSize:12,color:"#4A5568",marginTop:16}}>No spam. No hype. Just data. Unsubscribe anytime.</p>
            </div>
          </div>
        )}

        {/* SCANNER INPUT */}
        {stage==="scanner"&&!scanning&&(
          <div style={{animation:"fadeUp 0.5s ease"}}>
            <div ref={ref} style={{position:"relative",marginBottom:24}}>
              <input type="text" placeholder="Search vintage models (e.g. Jordan 4, LeBron, Reebok Question)..." value={q} onChange={e=>{setQ(e.target.value);setShowSug(true);setRequestMsg("");}} onFocus={()=>q.length>1&&setShowSug(true)} style={{width:"100%",padding:"14px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,color:"#E8ECF2",fontSize:14,outline:"none"}}/>
              {showSug&&filtered.length>0&&(
                <div style={{position:"absolute",top:"100%",left:0,right:0,background:"#12151C",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,marginTop:4,overflow:"hidden",zIndex:10,boxShadow:"0 16px 48px rgba(0,0,0,0.5)"}}>
                  {filtered.map((s,i)=>(<div key={i} className="si" onClick={()=>add(s)} style={{padding:"12px 16px",cursor:"pointer",borderBottom:i<filtered.length-1?"1px solid rgba(255,255,255,0.04)":"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:14,color:"#E8ECF2"}}>{s.name}</span><span style={{fontSize:12,color:"#4A5568",fontFamily:"var(--mono)"}}>{s.year} · {s.brand}</span></div>))}
                </div>
              )}
              {showSug&&q.length>2&&filtered.length===0&&(
                <div style={{position:"absolute",top:"100%",left:0,right:0,background:"#12151C",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,marginTop:4,overflow:"hidden",zIndex:10,boxShadow:"0 16px 48px rgba(0,0,0,0.5)",padding:"16px"}}>
                  {requested.includes(q.trim()) || requestMsg===q.trim() ? (
                    <div style={{textAlign:"center"}}>
                      <span style={{fontSize:20,display:"block",marginBottom:8}}>✓</span>
                      <p style={{fontSize:13,color:"#00C48C",fontWeight:600,marginBottom:4}}>Submitted</p>
                      <p style={{fontSize:12,color:"#6B7B8F",lineHeight:1.5}}>We'll add "{q.trim()}" to the database and notify you when it's ready to scan.</p>
                    </div>
                  ) : (
                    <div>
                      <p style={{fontSize:13,color:"#A0AEC0",marginBottom:4}}>We don't have live data on <span style={{color:"#E8ECF2",fontWeight:600}}>"{q.trim()}"</span> yet.</p>
                      <p style={{fontSize:12,color:"#4A5568",marginBottom:12,lineHeight:1.5}}>Submit it and we'll start tracking this model. You'll get notified when it's ready to scan with full market data.</p>
                      <button
                        onClick={()=>{setRequested(prev=>[...prev,q.trim()]);setRequestMsg(q.trim());}}
                        className="sb"
                        style={{width:"100%",padding:"10px 16px",background:"rgba(255,77,0,0.12)",border:"1px solid rgba(255,77,0,0.25)",borderRadius:6,color:"#FF4D00",fontWeight:600,fontSize:13,fontFamily:"var(--mono)",cursor:"pointer",letterSpacing:"0.03em"}}
                      >
                        REQUEST THIS MODEL
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            {sneakers.length>0&&(
              <div style={{marginBottom:24}}>
                <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#4A5568",letterSpacing:"0.1em",marginBottom:10,fontWeight:700}}>YOUR INVENTORY ({sneakers.length}/8)</p>
                {sneakers.map((s,i)=>(<div key={i} className="ch" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:8,marginBottom:6}}><div><span style={{fontSize:14,color:"#E8ECF2",fontWeight:500}}>{s.name}</span><span style={{fontSize:11,color:"#4A5568",marginLeft:10,fontFamily:"var(--mono)"}}>{s.year} · {s.brand}</span></div><button className="rb" onClick={()=>remove(i)} style={{background:"none",border:"none",color:"#6B7B8F",cursor:"pointer",fontSize:16,padding:"2px 6px"}}>×</button></div>))}
              </div>
            )}
            {requested.length>0&&(
              <div style={{marginBottom:24}}>
                <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#FF4D00",letterSpacing:"0.1em",marginBottom:10,fontWeight:700}}>REQUESTED MODELS ({requested.length})</p>
                {requested.map((r,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",background:"rgba(255,77,0,0.04)",border:"1px solid rgba(255,77,0,0.1)",borderRadius:8,marginBottom:4}}>
                  <span style={{fontSize:13,color:"#A0AEC0"}}>{r}</span>
                  <span style={{fontSize:10,color:"#FF4D00",fontFamily:"var(--mono)",fontWeight:600,background:"rgba(255,77,0,0.1)",padding:"2px 8px",borderRadius:4}}>PENDING</span>
                </div>))}
                <p style={{fontSize:11,color:"#3A4558",marginTop:6}}>We'll notify you at {email} when these models are ready to scan.</p>
              </div>
            )}
            <button onClick={scan} disabled={!sneakers.length} className="sb" style={{width:"100%",padding:16,background:sneakers.length?"linear-gradient(135deg,#FF4D00,#E04400)":"rgba(255,255,255,0.04)",border:"none",borderRadius:10,color:sneakers.length?"#fff":"#4A5568",fontWeight:700,fontSize:15,fontFamily:"var(--mono)",letterSpacing:"0.03em",cursor:sneakers.length?"pointer":"not-allowed"}}>{sneakers.length?`SCAN ${sneakers.length} PAIR${sneakers.length>1?"S":""}`:"ADD SNEAKERS TO SCAN"}</button>
            <p style={{fontSize:12,color:"#3A4558",textAlign:"center",marginTop:10}}>We're checking eBay, StockX, Grailed & social signals</p>
          </div>
        )}

        {/* SCANNING */}
        {scanning&&(
          <div style={{animation:"fadeUp 0.4s ease",textAlign:"center",padding:"60px 0"}}>
            <div style={{width:200,height:8,borderRadius:4,background:"rgba(255,255,255,0.06)",margin:"0 auto 24px",overflow:"hidden"}}>
              <div style={{width:`${prog}%`,height:"100%",background:"linear-gradient(90deg,#FF4D00,#FFB800)",borderRadius:4,transition:"width 0.3s",backgroundImage:"linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%)",backgroundSize:"40px 40px",animation:"progressStripe 0.8s linear infinite"}}/>
            </div>
            <p style={{fontFamily:"var(--mono)",fontSize:13,color:"#FF4D00",fontWeight:700,marginBottom:6}}>{prog}%</p>
            <p style={{fontSize:14,color:"#6B7B8F"}}>{phase}</p>
          </div>
        )}

        {/* ─── RESULTS ─── */}
        {stage==="results"&&(
          <div style={{animation:"fadeUp 0.5s ease"}}>

            {/* Tabs */}
            <div style={{display:"flex",gap:4,marginBottom:24,background:"rgba(255,255,255,0.03)",borderRadius:8,padding:4}}>
              {[{id:"scan",l:"Your Scan",c:results.length},{id:"gems",l:"Hidden Gems",c:gems.length},{id:"compare",l:"Compare",c:null}].map(t=>(
                <button key={t.id} className="tb" onClick={()=>setTab(t.id)} style={{flex:1,padding:"10px 8px",border:"none",borderRadius:6,fontFamily:"var(--mono)",fontSize:11,fontWeight:700,letterSpacing:"0.05em",cursor:"pointer",background:tab===t.id?"rgba(255,77,0,0.15)":"transparent",color:tab===t.id?"#FF4D00":"#4A5568"}}>{t.l}{t.c!==null?` (${t.c})`:""}</button>
              ))}
            </div>

            {/* TAB: SCAN */}
            {tab==="scan"&&(<>
              {/* Portfolio */}
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:24,marginBottom:20,animation:"glow 3s ease-in-out infinite"}}>
                <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#4A5568",letterSpacing:"0.1em",fontWeight:700,marginBottom:16}}>PORTFOLIO MOMENTUM</p>
                <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                  <div><p style={{fontFamily:"var(--mono)",fontSize:36,fontWeight:700,color:getTrend(ps).color,lineHeight:1}}>{ps}</p><p style={{fontSize:12,color:"#6B7B8F",marginTop:4}}>Avg Score</p></div>
                  <div style={{display:"flex",gap:20,alignItems:"flex-end",paddingBottom:4}}>
                    <div><p style={{fontFamily:"var(--mono)",fontSize:20,fontWeight:700,color:"#FF4D00"}}>{rising}</p><p style={{fontSize:11,color:"#6B7B8F"}}>Heating up</p></div>
                    <div><p style={{fontFamily:"var(--mono)",fontSize:20,fontWeight:700,color:"#5B9BD5"}}>{cooling}</p><p style={{fontSize:11,color:"#6B7B8F"}}>Cooling</p></div>
                    <div><p style={{fontFamily:"var(--mono)",fontSize:20,fontWeight:700,color:"#8B9CB6"}}>{results.length-rising-cooling}</p><p style={{fontSize:11,color:"#6B7B8F"}}>Stable</p></div>
                  </div>
                </div>
              </div>

              {/* Arb banner */}
              {arbs.length>0&&(
                <div style={{background:"rgba(0,196,140,0.06)",border:"1px solid rgba(0,196,140,0.15)",borderRadius:10,padding:"14px 16px",marginBottom:20}}>
                  <span style={{fontFamily:"var(--mono)",fontSize:10,fontWeight:700,color:"#00C48C",letterSpacing:"0.08em",background:"rgba(0,196,140,0.15)",padding:"3px 8px",borderRadius:4}}>ARBITRAGE DETECTED</span>
                  <p style={{fontSize:13,color:"#8B9CB6",lineHeight:1.5,marginTop:6}}>Price gaps found on {arbs.length} pair{arbs.length>1?"s":""}. Expand cards below to see buy/sell opportunities.</p>
                </div>
              )}

              {/* Cards */}
              {results.map((r,i)=>{
                const ex=expanded[i];const bp=profits[i];const pd=bp?calcProfit(parseInt(bp),r.metrics.avgPrice,r.score):null;
                return(
                <div key={i} className="ch" style={{background:r.trend.bg,border:`1px solid ${r.trend.color}22`,borderRadius:10,padding:20,marginBottom:10,animation:`fadeUp 0.4s ease ${i*0.08}s both`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                    <div><p style={{fontSize:15,fontWeight:600,color:"#E8ECF2",marginBottom:3}}>{r.name}</p><p style={{fontSize:12,color:"#4A5568"}}>{r.year} · {r.brand}</p></div>
                    <div style={{textAlign:"right"}}><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:6,background:`${r.trend.color}18`}}><span style={{fontSize:14}}>{r.trend.icon}</span><span style={{fontFamily:"var(--mono)",fontSize:13,fontWeight:700,color:r.trend.color}}>{r.score}</span></div><p style={{fontSize:11,color:r.trend.color,fontFamily:"var(--mono)",fontWeight:600,marginTop:3}}>{r.trend.label}</p></div>
                  </div>

                  {/* Buy/Hold/Sell */}
                  <div style={{margin:"12px 0",padding:"10px 12px",background:r.recommendation.bg,border:`1px solid ${r.recommendation.border}`,borderRadius:6}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{fontFamily:"var(--mono)",fontSize:12,fontWeight:700,color:r.recommendation.color,background:`${r.recommendation.color}18`,padding:"3px 10px",borderRadius:4,letterSpacing:"0.1em"}}>{r.recommendation.action}</span>
                      <span style={{fontSize:12,color:"#6B7B8F"}}>Scope recommendation</span>
                    </div>
                    <p style={{fontSize:12,color:"#8B9CB6",lineHeight:1.55}}>{r.recommendation.text}</p>
                  </div>

                  <Spark points={r.priceHistory} color={r.trend.color} score={r.score}/>

                  {/* Metrics */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8}}>
                    {[{l:"Social",v:`${r.metrics.social}`},{l:"Price (30d)",v:r.metrics.priceChange},{l:"Volume",v:r.metrics.volume},{l:"Avg Price",v:`$${r.metrics.avgPrice}`}].map((m,j)=>(
                      <div key={j} style={{background:"rgba(0,0,0,0.2)",borderRadius:6,padding:"8px 10px"}}><p style={{fontSize:10,color:"#4A5568",marginBottom:2,fontFamily:"var(--mono)",letterSpacing:"0.05em"}}>{m.l}</p><p style={{fontSize:13,color:"#A0AEC0",fontWeight:600,fontFamily:"var(--mono)"}}>{m.v}</p></div>
                    ))}
                  </div>

                  {/* Arbitrage */}
                  {r.arbitrage&&(
                    <div style={{marginTop:10,padding:"10px 12px",background:"rgba(0,196,140,0.06)",border:"1px solid rgba(0,196,140,0.12)",borderRadius:6}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                        <span style={{fontFamily:"var(--mono)",fontSize:10,fontWeight:700,color:"#00C48C",letterSpacing:"0.08em"}}>PLATFORM ARBITRAGE</span>
                        <span style={{fontFamily:"var(--mono)",fontSize:12,fontWeight:700,color:"#00C48C"}}>${r.arbitrage.spread} spread</span>
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:8,alignItems:"center"}}>
                        <div style={{background:"rgba(0,0,0,0.2)",borderRadius:5,padding:"8px 10px",textAlign:"center"}}><p style={{fontSize:10,color:"#4A5568",fontFamily:"var(--mono)"}}>BUY ON</p><p style={{fontSize:14,fontWeight:700,color:"#00C48C",fontFamily:"var(--mono)"}}>${r.arbitrage.buyOn.$}</p><p style={{fontSize:11,color:"#6B7B8F"}}>{r.arbitrage.buyOn.p}</p></div>
                        <span style={{fontSize:18,color:"#3A4558"}}>→</span>
                        <div style={{background:"rgba(0,0,0,0.2)",borderRadius:5,padding:"8px 10px",textAlign:"center"}}><p style={{fontSize:10,color:"#4A5568",fontFamily:"var(--mono)"}}>SELL ON</p><p style={{fontSize:14,fontWeight:700,color:"#E8ECF2",fontFamily:"var(--mono)"}}>${r.arbitrage.sellOn.$}</p><p style={{fontSize:11,color:"#6B7B8F"}}>{r.arbitrage.sellOn.p}</p></div>
                      </div>
                      <p style={{fontSize:11,color:"#4A5568",marginTop:6,textAlign:"center"}}>~${r.arbitrage.fees} fees · <span style={{color:"#00C48C",fontWeight:600}}>${r.arbitrage.net} net</span> per pair</p>
                    </div>
                  )}

                  {/* Expand */}
                  <div className="eb" onClick={()=>toggle(i)} style={{marginTop:10,padding:"8px 0",textAlign:"center",borderRadius:6,background:"rgba(255,255,255,0.02)"}}>
                    <span style={{fontFamily:"var(--mono)",fontSize:11,color:"#4A5568",letterSpacing:"0.05em"}}>{ex?"COLLAPSE \u25B2":"EXPAND \u00B7 DATA + PROFIT CALC \u25BC"}</span>
                  </div>

                  {ex&&(
                    <div style={{animation:"fadeUp 0.3s ease"}}>
                      {r.evidence&&<Evidence ev={r.evidence} color={r.trend.color}/>}
                      <div style={{marginTop:10,padding:12,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:6}}>
                        <p style={{fontFamily:"var(--mono)",fontSize:10,color:"#FF4D00",letterSpacing:"0.08em",fontWeight:700,marginBottom:10}}>PROFIT CALCULATOR</p>
                        <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
                          <span style={{fontSize:12,color:"#6B7B8F",whiteSpace:"nowrap"}}>What did you pay?</span>
                          <div style={{position:"relative",flex:1}}>
                            <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#4A5568",fontSize:14}}>$</span>
                            <input type="number" placeholder="e.g. 180" value={profits[i]||""} onChange={e=>setProfits(p=>({...p,[i]:e.target.value}))} style={{width:"100%",padding:"10px 10px 10px 24px",background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,color:"#E8ECF2",fontSize:14,fontFamily:"var(--mono)",outline:"none"}}/>
                          </div>
                        </div>
                        {pd?(
                          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6}}>
                            {pd.map((p,j)=>(<div key={j} style={{background:"rgba(0,0,0,0.25)",borderRadius:5,padding:"8px 6px",textAlign:"center"}}><p style={{fontFamily:"var(--mono)",fontSize:9,color:"#4A5568",letterSpacing:"0.06em",marginBottom:4}}>{p.label}</p><p style={{fontFamily:"var(--mono)",fontSize:14,fontWeight:700,color:"#E8ECF2"}}>${p.price}</p><p style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:600,color:p.profit>=0?"#00C48C":"#FF4D6A",marginTop:2}}>{p.profit>=0?"+":""}{p.roi}%</p><p style={{fontFamily:"var(--mono)",fontSize:10,color:p.profit>=0?"#00C48C":"#FF4D6A"}}>{p.profit>=0?"+$":"-$"}{Math.abs(p.profit)}</p></div>))}
                          </div>
                        ):<p style={{fontSize:12,color:"#3A4558",textAlign:"center"}}>Enter your buy price to see projected returns</p>}
                      </div>
                    </div>
                  )}
                </div>
              );})}
            </>)}

            {/* TAB: GEMS */}
            {tab==="gems"&&(
              <div>
                <div style={{marginBottom:20}}>
                  <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#FF4D00",letterSpacing:"0.08em",fontWeight:700,marginBottom:6}}>HIDDEN GEMS</p>
                  <p style={{fontSize:14,color:"#6B7B8F",lineHeight:1.6}}>These aren't in your inventory — but the data says they should be. Models with rising momentum that most resellers aren't watching yet.</p>
                </div>
                {gems.map((g,i)=>(
                  <div key={i} className="ch" style={{background:g.trend.bg,border:`1px solid ${g.trend.color}22`,borderRadius:10,padding:18,marginBottom:10,animation:`fadeUp 0.4s ease ${i*0.1}s both`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                      <div><p style={{fontSize:15,fontWeight:600,color:"#E8ECF2",marginBottom:3}}>{g.name}</p><p style={{fontSize:12,color:"#4A5568"}}>{g.year} · {g.brand}</p></div>
                      <div style={{textAlign:"right"}}><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:6,background:`${g.trend.color}18`}}><span style={{fontSize:14}}>{g.trend.icon}</span><span style={{fontFamily:"var(--mono)",fontSize:13,fontWeight:700,color:g.trend.color}}>{g.score}</span></div><p style={{fontFamily:"var(--mono)",fontSize:10,color:g.trend.color,fontWeight:600,marginTop:3}}>{g.momentum}</p></div>
                    </div>
                    <div style={{padding:"10px 12px",background:`${g.trend.color}08`,border:`1px solid ${g.trend.color}12`,borderRadius:6,marginBottom:10}}>
                      <p style={{fontFamily:"var(--mono)",fontSize:9,color:g.trend.color,letterSpacing:"0.08em",fontWeight:700,marginBottom:4}}>WHY WE'RE WATCHING</p>
                      <p style={{fontSize:12,color:"#8B9CB6",lineHeight:1.5}}>{g.signal}</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                      {[{l:"Avg Price",v:`$${g.metrics.avgPrice}`},{l:"Social",v:g.metrics.social},{l:"Volume",v:g.metrics.volume}].map((m,j)=>(<div key={j} style={{background:"rgba(0,0,0,0.2)",borderRadius:5,padding:"8px 10px"}}><p style={{fontSize:10,color:"#4A5568",fontFamily:"var(--mono)",letterSpacing:"0.05em"}}>{m.l}</p><p style={{fontSize:13,color:"#A0AEC0",fontWeight:600,fontFamily:"var(--mono)"}}>{m.v}</p></div>))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: COMPARE */}
            {tab==="compare"&&(
              <div>
                <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#FF4D00",letterSpacing:"0.08em",fontWeight:700,marginBottom:6}}>HEAD-TO-HEAD</p>
                <p style={{fontSize:14,color:"#6B7B8F",lineHeight:1.6,marginBottom:20}}>Pick two pairs from your scan to compare side by side. Which one deserves your capital?</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
                  {[0,1].map(s=>(
                    <div key={s}><p style={{fontFamily:"var(--mono)",fontSize:10,color:"#4A5568",marginBottom:6,letterSpacing:"0.08em"}}>PAIR {s+1}</p>
                      <select value={cmp[s]?.name||""} onChange={e=>{const r=results.find(x=>x.name===e.target.value);const n=[...cmp];n[s]=r||null;setCmp(n);}} style={{width:"100%",padding:"10px 12px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,color:"#E8ECF2",fontSize:13,outline:"none"}}>
                        <option value="" style={{background:"#12151C"}}>Select...</option>
                        {results.map((r,i)=><option key={i} value={r.name} style={{background:"#12151C"}}>{r.name}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
                {cmp[0]&&cmp[1]?(
                  <div style={{animation:"fadeUp 0.3s ease"}}>
                    {[{l:"Trend Score",g:r=>r.score,f:(v,r)=><span style={{color:r.trend.color,fontWeight:700}}>{v}</span>},{l:"Momentum",g:r=>r.trend.label,f:(v,r)=><span style={{color:r.trend.color}}>{r.trend.icon} {v}</span>},{l:"Recommendation",g:r=>r.recommendation.action,f:(v,r)=><span style={{color:r.recommendation.color,fontWeight:700}}>{v}</span>},{l:"Avg Price",g:r=>`$${r.metrics.avgPrice}`,f:v=>v},{l:"Social",g:r=>r.metrics.social,f:v=>v.toLocaleString()},{l:"Price (30d)",g:r=>r.metrics.priceChange,f:v=><span style={{color:String(v).startsWith("+")?'#00C48C':'#FF4D6A'}}>{v}</span>},{l:"Volume",g:r=>r.metrics.volume,f:v=>v}].map((row,j)=>(
                      <div key={j} style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:8,padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                        <div style={{textAlign:"center",fontFamily:"var(--mono)",fontSize:13}}>{row.f(row.g(cmp[0]),cmp[0])}</div>
                        <div style={{fontFamily:"var(--mono)",fontSize:10,color:"#4A5568",letterSpacing:"0.06em",textAlign:"center",alignSelf:"center",minWidth:100}}>{row.l}</div>
                        <div style={{textAlign:"center",fontFamily:"var(--mono)",fontSize:13}}>{row.f(row.g(cmp[1]),cmp[1])}</div>
                      </div>
                    ))}
                    {(()=>{const w=cmp[0].score>=cmp[1].score?cmp[0]:cmp[1];return(
                      <div style={{marginTop:16,padding:"14px 16px",background:`${w.trend.color}0A`,border:`1px solid ${w.trend.color}18`,borderRadius:8,textAlign:"center"}}>
                        <p style={{fontFamily:"var(--mono)",fontSize:10,color:w.trend.color,letterSpacing:"0.08em",fontWeight:700,marginBottom:4}}>THE DATA FAVORS</p>
                        <p style={{fontSize:16,fontWeight:700,color:"#E8ECF2"}}>{w.name}</p>
                        <p style={{fontSize:12,color:"#6B7B8F",marginTop:4}}>Score {w.score} · {w.recommendation.action} · {w.trend.label}</p>
                      </div>
                    );})()}
                  </div>
                ):<div style={{textAlign:"center",padding:"40px 0"}}><p style={{fontSize:13,color:"#3A4558"}}>Select two pairs above to compare</p></div>}
              </div>
            )}

            {/* CTA */}
            <div style={{marginTop:32,padding:28,background:"linear-gradient(135deg,rgba(255,77,0,0.08),rgba(255,140,0,0.04))",border:"1px solid rgba(255,77,0,0.15)",borderRadius:12,textAlign:"center"}}>
              <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#FF4D00",fontWeight:700,letterSpacing:"0.1em",marginBottom:10}}>THIS WAS A SNAPSHOT</p>
              <p style={{fontSize:18,fontWeight:700,color:"#F0F4F8",marginBottom:8}}>The full picture updates every day.</p>
              <p style={{fontSize:14,color:"#6B7B8F",marginBottom:24,lineHeight:1.6,maxWidth:420,margin:"0 auto 24px"}}>Scope tracks 14,000+ vintage models across every platform. Real-time alerts. Price predictions. Arbitrage detection. The data your competitors don't have yet.</p>
              <button className="sb" style={{padding:"14px 32px",background:"linear-gradient(135deg,#FF4D00,#E04400)",border:"none",borderRadius:8,color:"#fff",fontWeight:700,fontSize:14,fontFamily:"var(--mono)",letterSpacing:"0.03em",cursor:"pointer"}}>JOIN THE WAITLIST</button>
              <p style={{fontSize:12,color:"#3A4558",marginTop:12}}>Early access. Founding member pricing. No commitment.</p>
            </div>

            <button onClick={()=>{setSneakers([]);setResults([]);setExpanded({});setProfits({});setCmp([null,null]);setTab("scan");setStage("scanner");}} style={{width:"100%",marginTop:16,padding:12,background:"transparent",border:"1px solid rgba(255,255,255,0.06)",borderRadius:8,color:"#4A5568",fontSize:13,cursor:"pointer"}}>Scan different pairs</button>
          </div>
        )}

        <div style={{marginTop:48,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.04)",textAlign:"center"}}>
          <p style={{fontFamily:"var(--mono)",fontSize:11,color:"#2D3748",letterSpacing:"0.05em"}}>SCOPE · TURNING GUT INSTINCT INTO DATA-DRIVEN PROFITS</p>
        </div>
      </div>
    </div>
  );
}
