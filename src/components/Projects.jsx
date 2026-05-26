import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineGlobe, HiOutlineCode, HiOutlineTruck, HiOutlineCube } from "react-icons/hi";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiRedis,
  SiApachekafka, SiStripe, SiFirebase, SiRedux, SiTailwindcss,
  SiJavascript, SiChartdotjs, SiReactquery, SiDotnet, SiPostgresql,
} from "react-icons/si";
import AnimatedCounter from "./AnimatedCounter";

const techIcons = {
  "React.js": { icon: <SiReact />, color: "#61DBFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#FFFFFF" },
  "Node.js": { icon: <SiNodedotjs />, color: "#3C873A" },
  MongoDB: { icon: <SiMongodb />, color: "#47A248" },
  Redis: { icon: <SiRedis />, color: "#D82C20" },
  Kafka: { icon: <SiApachekafka />, color: "#FFFFFF" },
  Stripe: { icon: <SiStripe />, color: "#6772E5" },
  Firebase: { icon: <SiFirebase />, color: "#FFA611" },
  "Redux Toolkit": { icon: <SiRedux />, color: "#764ABC" },
  CSS3: { icon: <SiTailwindcss />, color: "#38BDF8" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38BDF8" },
  "REST API": { icon: <HiOutlineGlobe />, color: "#a78bfa" },
  "Chart.js": { icon: <SiChartdotjs />, color: "#FF6384" },
  JavaScript: { icon: <SiJavascript />, color: "#F0DB4F" },
  TanStack: { icon: <SiReactquery />, color: "#FF4154" },
  Zustand: { icon: <HiOutlineCube />, color: "#E0A458" },
  ".NET": { icon: <SiDotnet />, color: "#512BD4" },
  "Postgres SQL": { icon: <SiPostgresql />, color: "#4169E1" },
  ShipRocket: { icon: <HiOutlineTruck />, color: "#7C3AED" },
};

const proudProjects = [
  {
    img: "menumitra.png",
    mock: "menumitra",
    title: "Hotel Hospitality",
    client: "Restaurant SaaS Platform",
    category: "SaaS · Multi-Tenant",
    tagline: "Cloud-based restaurant OS powering 15,000+ venues with QR menus, real-time orders, and analytics.",
    challenge: "Build a multi-tenant restaurant management platform unifying QR menus, order routing, kitchen displays, inventory, and analytics across single outlets to enterprise chains.",
    impact: "Scaled to 15,000+ active restaurants with a 4.5/5 customer rating; centralized control for chains and real-time KDS used across QSR, fine dining, and cloud kitchens.",
    stack: ["React.js", "Node.js", "MongoDB", "Redis", "REST API"],
    metrics: [
      { value: 15000, suffix: "+", label: "Restaurants" },
      { value: 4.5, suffix: "/5", label: "Rating" },
      { value: 24, suffix: "/7", label: "Support" },
    ],
    live: "https://menumitra.com/",
    git: "https://menumitra.com/",
    accent: "#F59E0B",
  },
  {
    img: "quno.png",
    mock: "quno",
    title: "Ecom Application",
    client: "Student E-Commerce Platform",
    category: "E-Commerce · K-12",
    tagline: "One-stop shop for school uniforms, books, toys & stationery — built for parents and students.",
    challenge: "Build a multi-category e-commerce platform tailored to students — grade-based catalogs, school-specific uniforms, and curated bundles for books, toys, and stationery, with fast checkout and reliable delivery.",
    impact: "Launched a 50K+ SKU catalog across 6 categories, partnered with 500+ schools for uniform fulfilment, and powered a smooth back-to-school shopping experience with a 4.7★ rating.",
    stack: ["React.js", "Tailwind CSS", "TanStack", "Zustand", ".NET", "Postgres SQL", "ShipRocket"],
    metrics: [
      { value: 1200, suffix: "+", label: "Products" },
      { value: 25, suffix: "+", label: "Schools" },
      { value: 4.7, suffix: "★", label: "Rating" },
    ],
    live: "https://qunoindia.com/",
    git: "https://qunoindia.com/",
    accent: "#3B5BDB",
  },
];

const otherProjects = [
  {
    img: "TaskManager.png",
    title: "Task Management",
    category: "Full Stack · Productivity",
    disc: "Team task tracker with real-time updates, assignments, due dates, and progress dashboards.",
    live: "https://task-manager-stamurai-client.vercel.app",
    git: "https://github.com/Karansayambar/Task-Manager-Frontend-App/tree/main",
    stack: ["React.js", "Node.js", "MongoDB", "Firebase"],
    span: false,
  },
  {
    img: "JobPiolet.png",
    title: "Job Piolet",
    category: "Job Portal · Full Stack",
    disc: "Job discovery platform with role-based listings, applicant tracking, and recruiter dashboards.",
    live: "https://job-piolet-frontend.vercel.app",
    git: "https://github.com/Karansayambar/JobPiolet-Frontend",
    stack: ["React.js", "Node.js", "MongoDB", "Redis", "Stripe"],
    span: false,
  },
  {
    img: "code-editor.png",
    title: "Code Editor",
    category: "Developer Tool",
    disc: "In-browser code editor with multi-language syntax highlighting, live preview, and theme support.",
    live: "https://glistening-heliotrope-d2489e.netlify.app",
    git: "https://github.com/Karansayambar/code-editor",
    stack: ["React.js", "JavaScript", "CSS3"],
    span: false,
  },
  {
    img: "TypingWebsite.jpg",
    title: "Typing Speed Test",
    category: "Web App",
    disc: "Responsive typing test tracking WPM, accuracy, and mistakes in real-time.",
    live: "https://dainty-cobbler-e0f573.netlify.app",
    git: "https://github.com/Karansayambar/typing-speed-test-website",
    stack: ["React.js", "CSS3"],
    span: false,
  },
  {
    img: "NewsWebsite.jpg",
    title: "TrendsHub News",
    category: "API Integration",
    disc: "News aggregator fetching live APIs with category filters and smooth UI.",
    live: "https://calm-treacle-de3898.netlify.app/",
    git: "https://github.com/Karansayambar/TrendsHub",
    stack: ["React.js", "REST API"],
    span: false,
  },
  {
    img: "PodcastApp.jpg",
    title: "Podcast App",
    category: "Audio Streaming",
    disc: "Audio streaming platform with episode categories and player controls.",
    live: "https://beamish-pony-c3dc73.netlify.app/",
    git: "https://github.com/Karansayambar/Podcast-App-Unleash-Your-Mind-s-Potential",
    stack: ["React.js", "Node.js"],
    span: false,
  },
  {
    img: "CryptoMonitor.jpg",
    title: "Crypto Monitor",
    category: "Data Visualization",
    disc: "Crypto tracker with real-time prices, market cap, and responsive charts.",
    live: "https://moonlit-melba-3d133f.netlify.app",
    git: "https://github.com/Karansayambar/CryptoMonitor",
    stack: ["React.js", "Chart.js"],
    span: false,
  },
];

// MenuMitra landing-page mock — mirrors the layout at menumitra.com
const MenuMitraMock = ({ accent = "#F59E0B" }) => {
  const navItems = ["Home", "About", "Products", "Features", "AddOns", "Outlet Type"];
  const bars = [38, 55, 30, 70, 50, 82, 60, 75, 45, 88];

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col overflow-hidden text-[10px] leading-tight">
      {/* Top nav */}
      <header className="flex items-center justify-between px-5 py-2.5 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-1.5">
          <div
            className="h-5 w-5 rounded-md flex items-center justify-center font-bold text-[10px] text-white"
            style={{ background: accent }}
          >
            M
          </div>
          <span className="font-bold tracking-tight text-slate-900 text-[12px]">MenuMitra</span>
        </div>
        <nav className="hidden sm:flex items-center gap-3">
          {navItems.map((n, i) => (
            <span
              key={n}
              className={`text-[9px] font-medium ${
                i === 0 ? "text-slate-900" : "text-slate-500"
              }`}
            >
              {n}
            </span>
          ))}
        </nav>
        <button
          className="text-[9px] font-semibold px-2.5 py-1 rounded-md text-white shadow-sm"
          style={{ background: accent }}
        >
          Book a Demo
        </button>
      </header>

      {/* Hero */}
      <section className="relative flex-1 grid grid-cols-12 gap-3 px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-amber-50/40 overflow-hidden">
        {/* Decorative grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          aria-hidden
        >
          <defs>
            <pattern id="mm-grid" width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#0f172a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mm-grid)" />
        </svg>

        {/* Copy */}
        <div className="col-span-7 flex flex-col justify-center relative z-10 gap-1.5">
          <span
            className="inline-flex items-center self-start gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-semibold"
            style={{ background: `${accent}22`, color: "#92400E" }}
          >
            <span className="h-1 w-1 rounded-full" style={{ background: accent }} />
            TRUSTED BY 15,000+ RESTAURANTS
          </span>
          <h1 className="text-[15px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Join <span style={{ color: accent }}>15,000+ Restaurants</span>
            <br />
            Using MenuMitra
          </h1>
          <p className="text-[9px] text-slate-600 leading-snug max-w-[90%]">
            Boost sales with smart QR menus & real-time insights. Cloud-based restaurant
            management built for outlets of every size.
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <button
              className="text-[9px] font-semibold px-2.5 py-1 rounded-md text-white shadow"
              style={{ background: accent }}
            >
              Book a Demo
            </button>
            <button className="text-[9px] font-semibold px-2.5 py-1 rounded-md text-slate-700 border border-slate-200 bg-white">
              Watch Video
            </button>
          </div>
          <div className="flex items-center gap-3 mt-1.5">
            <div>
              <p className="text-[10px] font-bold text-slate-900">15K+</p>
              <p className="text-[7px] text-slate-500 uppercase tracking-wider">Restaurants</p>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div>
              <p className="text-[10px] font-bold text-slate-900">4.5★</p>
              <p className="text-[7px] text-slate-500 uppercase tracking-wider">Rated</p>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div>
              <p className="text-[10px] font-bold text-slate-900">24/7</p>
              <p className="text-[7px] text-slate-500 uppercase tracking-wider">Support</p>
            </div>
          </div>
        </div>

        {/* Hero graphic — analytics card */}
        <div className="col-span-5 relative z-10 flex items-center">
          <div className="w-full rounded-lg bg-white shadow-xl border border-slate-100 p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <p className="text-[7px] text-slate-400 uppercase tracking-wider">Today</p>
                <p className="text-[11px] font-bold text-slate-900">₹48,320</p>
              </div>
              <span
                className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
                style={{ background: `${accent}22`, color: "#92400E" }}
              >
                +12.4%
              </span>
            </div>
            <div className="flex items-end gap-0.5 h-10 mb-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i === bars.length - 1
                        ? accent
                        : `linear-gradient(to top, ${accent}cc, ${accent}55)`,
                  }}
                />
              ))}
            </div>
            <div className="space-y-1">
              {[
                { l: "QR Orders", v: "128", c: accent },
                { l: "POS Orders", v: "56", c: "#10B981" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between text-[8px]">
                  <span className="flex items-center gap-1 text-slate-500">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: r.c }}
                    />
                    {r.l}
                  </span>
                  <span className="font-semibold text-slate-900">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="grid grid-cols-3 gap-2 px-5 py-2.5 bg-white border-t border-slate-100">
        {[
          { t: "Smart QR Menus", d: "Contactless ordering" },
          { t: "Live Orders", d: "Routing & KDS" },
          { t: "Analytics", d: "Sales & insights" },
        ].map((f) => (
          <div
            key={f.t}
            className="flex items-center gap-1.5 rounded-md border border-slate-100 px-2 py-1.5"
          >
            <div
              className="h-5 w-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
              style={{ background: accent }}
            >
              ✓
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold text-slate-900 truncate">{f.t}</p>
              <p className="text-[8px] text-slate-500 truncate">{f.d}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

// Quno India landing-page mock — student e-commerce (toys, uniforms, books)
const QunoMock = ({ accent = "#3B5BDB" }) => {
  const categories = [
    { t: "Toys", icon: "🧸" },
    { t: "Uniforms", icon: "👕" },
    { t: "Books", icon: "📚" },
    { t: "Stationery", icon: "✏️" },
    { t: "Bags", icon: "🎒" },
    { t: "Shoes", icon: "👟" },
  ];
  const products = [
    { n: "School Uniform Set", cat: "Class 5-7", price: "₹1,249", mrp: "₹1,799", off: "30%", emoji: "👕" },
    { n: "NCERT Bundle", cat: "Class 8", price: "₹899", mrp: "₹1,200", off: "25%", emoji: "📚" },
    { n: "Wooden Puzzle", cat: "Ages 4-6", price: "₹449", mrp: "₹699", off: "35%", emoji: "🧸" },
  ];

  return (
    <div className="w-full h-full bg-white text-slate-800 flex flex-col overflow-hidden text-[10px] leading-tight">
      {/* Top nav */}
      <header className="flex items-center justify-between px-5 py-2.5 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-1.5">
          <div
            className="h-5 w-5 rounded-full flex items-center justify-center font-bold text-[10px] text-white"
            style={{ background: accent }}
          >
            Q
          </div>
          <span className="font-bold tracking-tight text-slate-900 text-[12px]">Quno</span>
        </div>
        <nav className="hidden sm:flex items-center gap-3">
          {["Shop", "Categories", "Schools", "Offers", "Track"].map((n, i) => (
            <span
              key={n}
              className={`text-[9px] font-medium ${
                i === 0 ? "text-slate-900" : "text-slate-500"
              }`}
            >
              {n}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px]">🔍</span>
          <span className="text-[10px]">❤️</span>
          <div className="relative">
            <span className="text-[10px]">🛒</span>
            <span
              className="absolute -top-1 -right-1.5 text-[7px] font-bold text-white rounded-full px-1"
              style={{ background: accent }}
            >
              3
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative grid grid-cols-12 gap-3 px-5 py-3 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accent}12, #ffffff 60%, ${accent}08)`,
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-2xl"
          style={{ background: accent }}
        />

        {/* Copy */}
        <div className="col-span-7 flex flex-col justify-center relative z-10 gap-1.5">
          <span
            className="inline-flex items-center self-start gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-semibold"
            style={{ background: `${accent}1A`, color: accent }}
          >
            <span className="h-1 w-1 rounded-full" style={{ background: accent }} />
            BACK-TO-SCHOOL SALE · UP TO 40% OFF
          </span>
          <h1 className="text-[14px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Everything for <span style={{ color: accent }}>School & Play</span>
            <br />
            Delivered to Your Door
          </h1>
          <p className="text-[9px] text-slate-600 leading-snug max-w-[92%]">
            Toys, uniforms, books & stationery — curated for every grade. Trusted by parents
            across India with fast, safe delivery.
          </p>

          {/* Search */}
          <div className="mt-1 flex items-center gap-1 rounded-md bg-white border border-slate-200 shadow-sm p-1">
            <div className="flex-1 px-2 py-1 text-[9px] text-slate-500 border-r border-slate-100">
              🔍 Search uniforms, books, toys…
            </div>
            <div className="px-2 py-1 text-[9px] text-slate-500">🎓 Grade</div>
            <button
              className="text-[9px] font-semibold px-2.5 py-1 rounded text-white"
              style={{ background: accent }}
            >
              Shop
            </button>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3 mt-1.5">
            <div>
              <p className="text-[10px] font-bold text-slate-900">1.2K+</p>
              <p className="text-[7px] text-slate-500 uppercase tracking-wider">Products</p>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div>
              <p className="text-[10px] font-bold text-slate-900">25+</p>
              <p className="text-[7px] text-slate-500 uppercase tracking-wider">Schools</p>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <div>
              <p className="text-[10px] font-bold text-slate-900">4.7★</p>
              <p className="text-[7px] text-slate-500 uppercase tracking-wider">Rated</p>
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="col-span-5 relative z-10 flex items-center">
          <div className="w-full rounded-lg bg-white shadow-xl border border-slate-100 p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">
                Trending Now
              </p>
              <span
                className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
                style={{ background: `${accent}1A`, color: accent }}
              >
                Free Ship
              </span>
            </div>
            <div className="space-y-1.5">
              {products.map((p) => (
                <div
                  key={p.n}
                  className="flex items-center gap-2 rounded-md p-1.5 border border-slate-100"
                >
                  <div
                    className="h-8 w-8 rounded-md flex items-center justify-center text-[14px] flex-shrink-0"
                    style={{ background: `${accent}12` }}
                  >
                    {p.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-semibold text-slate-900 truncate">{p.n}</p>
                    <p className="text-[8px] text-slate-500 truncate">{p.cat}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[9px] font-bold text-slate-900">{p.price}</p>
                    <p className="text-[7px] text-slate-400 line-through">{p.mrp}</p>
                  </div>
                  <span
                    className="text-[7px] font-bold px-1 py-0.5 rounded"
                    style={{ background: "#10B98122", color: "#047857" }}
                  >
                    -{p.off}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="flex items-center justify-between gap-2 px-5 py-2.5 bg-white border-t border-slate-100">
        {categories.map((s) => (
          <div
            key={s.t}
            className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-md border border-slate-100 flex-1"
          >
            <span className="text-[12px] leading-none">{s.icon}</span>
            <span className="text-[8px] font-medium text-slate-600">{s.t}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

// Browser frame mockup
const BrowserFrame = ({ children, url }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-bg-base shadow-2xl shadow-black/50">
    <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border-b border-white/5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
      </div>
      <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-500 truncate font-mono">
        {url || "localhost:3000"}
      </div>
    </div>
    <div className="relative">{children}</div>
  </div>
);

const FeaturedCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const isReverse = index % 2 === 1;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const cleanUrl = project.live.replace(/^https?:\/\//, "");

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ "--mx": "50%", "--my": "50%" }}
      className="group relative glass-strong rounded-3xl overflow-hidden hover:border-accent/40 transition-colors duration-500"
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(700px circle at var(--mx) var(--my), ${project.accent}18, transparent 40%)`,
        }}
      />
      {/* Decorative corner glow */}
      <div
        className={`absolute ${
          isReverse ? "-bottom-32 -left-32" : "-top-32 -right-32"
        } w-96 h-96 blur-[100px] rounded-full pointer-events-none opacity-60`}
        style={{ background: `${project.accent}25` }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div
        className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image side */}
        <div className="lg:col-span-7 relative">
          <div className="relative">
            <BrowserFrame url={cleanUrl}>
              <div className="relative overflow-hidden aspect-[16/10]">
                {project.mock === "menumitra" ? (
                  <MenuMitraMock accent={project.accent} />
                ) : project.mock === "quno" ? (
                  <QunoMock accent={project.accent} />
                ) : (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 to-transparent pointer-events-none" />
              </div>
            </BrowserFrame>

            {/* Floating tech chips */}
            <div className="absolute -bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center md:justify-start">
              {project.stack.slice(0, 7).map((t, i) => {
                const tech = techIcons[t];
                if (!tech) return null;
                return (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass-strong border border-white/10 shadow-lg"
                  >
                    <span className="text-sm" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="text-[11px] font-medium text-gray-200">{t}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Project number */}
            <div className="absolute -top-4 -right-2 sm:-right-4 px-4 py-2 rounded-xl glass-strong border border-accent/30 shadow-xl">
              <p className="font-display text-xs accent-text font-bold tracking-widest">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 pt-6 lg:pt-0">
          <div>
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4">
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: project.accent }}
              />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{project.client}</p>

            {/* Tagline */}
            <p className="text-base text-gray-300 leading-relaxed mb-5 text-balance">{project.tagline}</p>

            {/* Challenge / Impact */}
            <div className="space-y-3 mb-6">
              <div className="border-l-2 border-accent/40 pl-3">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Challenge</p>
                <p className="text-sm text-gray-400 leading-relaxed">{project.challenge}</p>
              </div>
              <div className="border-l-2 border-green-400/40 pl-3">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Impact</p>
                <p className="text-sm text-gray-300 leading-relaxed">{project.impact}</p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {project.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition"
                >
                  <p className="font-display text-lg font-bold accent-text leading-none">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider mt-1.5">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 py-2.5 px-5 bg-accent-gradient rounded-xl text-sm font-medium text-white hover:glow-soft transition duration-300"
            >
              Live Demo
              <HiArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
            </a>
            <a
              href={project.gitFrontend || project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 border border-white/15 rounded-xl text-sm font-medium text-gray-200 hover:border-accent/50 hover:bg-white/5 transition duration-300"
            >
              <FaGithub /> Code
            </a>
            {project.gitBackend && (
              <a
                href={project.gitBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-4 border border-white/10 rounded-xl text-sm font-medium text-gray-400 hover:border-accent/40 hover:text-white transition duration-300"
              >
                Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const SideProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/40 to-transparent" />

        {/* Category tag */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass-strong text-[10px] uppercase tracking-wider text-accent-light font-medium border border-accent/30">
          {project.category}
        </span>

        {/* Hover overlay with quick actions */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center gap-3 bg-bg-base/70 backdrop-blur-sm"
            >
              <motion.a
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent-gradient text-white shadow-xl hover:scale-110 transition"
                aria-label="View live"
              >
                <HiOutlineGlobe className="text-lg" />
              </motion.a>
              <motion.a
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-strong border border-white/15 text-white hover:scale-110 transition"
                aria-label="View code"
              >
                <HiOutlineCode className="text-lg" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:accent-text transition duration-300">
          {project.title}
        </h4>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{project.disc}</p>

        {/* Stack with icons */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => {
            const tech = techIcons[t];
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium"
              >
                {tech && (
                  <span style={{ color: tech.color }} className="text-xs">
                    {tech.icon}
                  </span>
                )}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Proud Projects */}
      {proudProjects.length > 0 && (
        <div>
          <div className="flex items-center justify-between gap-4 mb-10 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-accent" />
              <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-accent-light">
                Proud Work
              </h3>
            </div>
            <span className="text-xs text-gray-500">
              {proudProjects.length} flagship builds
            </span>
          </div>

          <div className="flex flex-col gap-10">
            {proudProjects.map((p, i) => (
              <FeaturedCard key={i} project={p} index={i} total={proudProjects.length} />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-10 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-accent" />
            <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-accent-light">
              Side Projects
            </h3>
          </div>
          <a
            href="https://github.com/Karansayambar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-gray-400 hover:text-accent-light transition"
          >
            View all on GitHub
            <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherProjects.map((p, i) => (
            <SideProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>

      {/* CTA card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-light mb-3 font-medium">
            Have a project in mind?
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-3 text-balance">
            Let&apos;s build something measurable together
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-6 text-sm sm:text-base">
            I&apos;m open to senior full-stack roles and select freelance engagements.
          </p>
          <a
            href="mailto:karansayambar@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gradient rounded-xl font-medium glow-soft hover:glow-accent transition duration-300"
          >
            Start a Conversation <HiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
