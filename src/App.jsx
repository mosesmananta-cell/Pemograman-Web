import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Briefcase, 
  Code, 
  Cpu, 
  Globe, 
  Send, 
  CheckCircle, 
  Menu, 
  X, 
  ExternalLink, 
  ChevronRight, 
  Activity, 
  Sliders, 
  Target,
  Zap,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({ name: '', club: '', email: '', message: '' });

  // Data Profil Moses Simanullang - Format Player Profile
  const player = {
    name: "Moses Simanullang",
    shortName: "M. SIMANULLANG",
    number: "10",
    position: "FULL-STACK PLAYMAKER",
    ovr: 92,
    nationality: "INDONESIA 🇮🇩",
    preferredFoot: "REACT / NODE.JS",
    bio: "Developer serba bisa dengan visi permainan tinggi dalam merancang arsitektur web modern, performa tinggi, dan UI/UX yang responsif.",
    linkedin: "https://www.linkedin.com/in/moses-simanullang-6a2a3837a",
    github: "https://github.com",
    email: "moses.simanullang@example.com"
  };

  // Player Attributes (Atribut Keahlian)
  const attributes = [
    { code: "DEV", name: "Frontend Agility", value: 94, category: "React & Next.js" },
    { code: "API", name: "Backend Vision", value: 92, category: "Node.js & Express" },
    { code: "DB", name: "Database Control", value: 90, category: "PostgreSQL & MySQL" },
    { code: "OPT", name: "Speed & Performance", value: 95, category: "Lighthouse 100/100" },
    { code: "UI", name: "Styling & Precision", value: 88, category: "Tailwind CSS & UI/UX" },
    { code: "GIT", name: "Team Collaboration", value: 93, category: "Git & CI/CD" }
  ];

  // Match Highlights (Proyek Portofolio)
  const projects = [
    {
      id: 1,
      title: "Interactive E-Commerce Engine",
      category: "web",
      stat: "Match Winner",
      rating: "9.8",
      description: "Platform toko online skala besar dengan sistem transaksi real-time, manajemen stok otomatis, dan dashboard analisis performa.",
      tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Task & Project Management Board",
      category: "web",
      stat: "Top Assist",
      rating: "9.5",
      description: "Aplikasi manajemen proyek tim dengan kolaborasi real-time, papan kanban interaktif, dan pelacakan progres deadline.",
      tech: ["React", "Vite", "Tailwind CSS", "REST API"]
    },
    {
      id: 3,
      title: "High-Performance Landing Platform",
      category: "landing",
      stat: "Clean Sheet",
      rating: "9.9",
      description: "Landing page modern dengan fokus pada kecepatan muat instan, animasi halus, dan konversi tinggi untuk entitas profesional.",
      tech: ["React", "Tailwind CSS", "SEO Opt"]
    }
  ];

  // Career / Transfer History (Pengalaman Kerja)
  const career = [
    {
      season: "2023 - SEKARANG",
      club: "Lead Full Stack Developer",
      league: "Freelance & High-Impact Projects",
      desc: "Memimpin pembuatan dan eksekusi aplikasi web dari ide hingga produksi, mengoptimalkan kecepatan respons server, serta memastikan integritas database."
    },
    {
      season: "2022 - 2023",
      club: "Frontend Specialist",
      league: "Tech Collaborations",
      desc: "Merancang UI komponen modular yang reusable, mengintegrasikan REST API backend, dan mencapai skor aksesibilitas web maksimal."
    }
  ];

  // Trophy Cabinet (Sertifikasi & Wins)
  const trophies = [
    { title: "Full Stack Web Mastery", year: "2023", issuer: "Professional Certification" },
    { title: "React & Modern JS Specialist", year: "2023", issuer: "Advanced Tech Academy" },
    { title: "Lighthouse 100% Performance", year: "2024", issuer: "Web Optimization Win" }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', club: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 font-sans selection:bg-lime-400 selection:text-black relative overflow-x-hidden">
      
      {/* Background Stadium Pitch Texture Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-lime-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* 1. NAVBAR (MATCHDAY HEADER) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Player Badge */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center text-black font-black text-xl italic transform -skew-x-12 group-hover:bg-white transition">
                #{player.number}
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-widest text-lg text-white uppercase italic">MOSES</span>
                <span className="text-[10px] text-lime-400 font-mono tracking-widest -mt-1 uppercase">SIMANULLANG</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest uppercase">
              <a href="#card" className="text-slate-300 hover:text-lime-400 transition">Player Card</a>
              <a href="#stats" className="text-slate-300 hover:text-lime-400 transition">Stats & Attributes</a>
              <a href="#highlights" className="text-slate-300 hover:text-lime-400 transition">Match Highlights</a>
              <a href="#career" className="text-slate-300 hover:text-lime-400 transition">Career History</a>
              <a href="#transfer" className="px-5 py-2.5 bg-lime-400 hover:bg-lime-300 text-black font-black rounded-sm transform -skew-x-12 transition shadow-lg shadow-lime-400/20">
                <span className="inline-block transform skew-x-12">TRANSFER INQUIRY</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-lime-400 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0D1322] border-b border-slate-800 px-6 py-6 space-y-4 text-sm font-bold uppercase tracking-wider">
            <a href="#card" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-lime-400">Player Card</a>
            <a href="#stats" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-lime-400">Stats & Attributes</a>
            <a href="#highlights" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-lime-400">Match Highlights</a>
            <a href="#career" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-lime-400">Career History</a>
            <a href="#transfer" onClick={() => setIsMenuOpen(false)} className="block text-center py-3 bg-lime-400 text-black font-extrabold rounded">Transfer Inquiry</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION (EA SPORTS FC / DRIBBBLE STYLE PLAYER SHOWCASE) */}
      <section id="card" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Player Info & Headline */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center space-x-3 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping" />
                <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">AVAILABLE FOR CONTRACT & PROJECT</span>
              </div>

              <div>
                <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block mb-2">#10 • PLAYMAKER POSITION</span>
                <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase italic leading-none">
                  {player.name.split(" ")[0]} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400">
                    {player.name.split(" ")[1]}
                  </span>
                </h1>
                <p className="text-xl font-bold text-slate-300 mt-4 tracking-wide uppercase">
                  {player.position}
                </p>
              </div>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                {player.bio}
              </p>

              {/* Quick Spec Badge */}
              <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg font-mono text-xs">
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-slate-500 block uppercase">NATIONALITY</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{player.nationality}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-slate-500 block uppercase">MAIN FOOT</span>
                  <span className="text-lime-400 font-bold text-sm mt-0.5 block">{player.preferredFoot}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
                  <span className="text-slate-500 block uppercase">MATCH RATING</span>
                  <span className="text-cyan-400 font-bold text-sm mt-0.5 block">9.5 / 10</span>
                </div>
              </div>

              {/* Action Buttons & Social */}
              <div className="flex flex-wrap gap-4 items-center pt-4">
                <a 
                  href="#transfer" 
                  className="px-8 py-4 bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-wider rounded-sm transform -skew-x-12 transition shadow-xl shadow-lime-400/20 flex items-center space-x-3"
                >
                  <span className="transform skew-x-12 inline-flex items-center space-x-2">
                    <span>SIGN MOSES</span>
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </a>

                <a 
                  href={player.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold uppercase tracking-wider rounded-sm transform -skew-x-12 transition flex items-center space-x-2"
                >
                  <span className="transform skew-x-12 inline-flex items-center space-x-2">
                    <svg className="w-5 h-5 text-lime-400 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z"/></svg>
                    <span>LINKEDIN PRO</span>
                  </span>
                </a>
              </div>

            </div>

            {/* Right Column: EA FC Style FIFA Player Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-lime-400/20 to-cyan-500/20 blur-2xl rounded-3xl" />

                {/* Ultimate Team Player Card */}
                <div className="relative bg-gradient-to-b from-slate-900 via-[#0E1626] to-[#0A0F1D] border-2 border-lime-400/60 rounded-2xl p-6 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                  
                  {/* Card Top Header */}
                  <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div className="text-center">
                      <span className="text-5xl font-black text-lime-400 tracking-tighter leading-none block">{player.ovr}</span>
                      <span className="text-xs font-extrabold text-slate-400 tracking-widest uppercase block mt-1">DEV</span>
                      <span className="text-[10px] text-slate-500 font-mono block">POS: FULLSTACK</span>
                    </div>

                    <div className="w-14 h-14 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-center text-lime-400 font-black text-2xl italic">
                      #{player.number}
                    </div>
                  </div>

                  {/* Player Silhouette / Avatar Visual Area */}
                  <div className="my-6 py-8 bg-gradient-to-b from-lime-400/5 to-transparent rounded-xl border border-slate-800/50 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-lime-400 flex items-center justify-center text-lime-400 mb-2 shadow-inner">
                      <Code className="w-12 h-12" />
                    </div>
                    <span className="text-xl font-black tracking-wider text-white italic uppercase mt-2">{player.shortName}</span>
                    <span className="text-xs font-mono text-lime-400 tracking-widest uppercase">ID • FULLSTACK DEV</span>
                  </div>

                  {/* Player Stats Grid (EA FC Attributes) */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2 border-t border-slate-800">
                    {attributes.map((attr, idx) => (
                      <div key={idx} className="flex items-center justify-between font-mono">
                        <span className="text-xs text-slate-400 font-bold">{attr.code}</span>
                        <span className="text-sm font-black text-white">{attr.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom Shield Footer */}
                  <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>VERIFIED PROFILE</span>
                    <span className="text-lime-400 font-bold">MOSES SIMANULLANG</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATS & ATTRIBUTES SECTION */}
      <section id="stats" className="py-20 bg-[#060910] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-lime-400 tracking-widest uppercase block mb-2">// TECHNICAL ATTRIBUTES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white italic uppercase">EVALUASI PERFORMA & KEAHLIAN</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attributes.map((attr, index) => (
              <div 
                key={index} 
                className="bg-slate-900/60 border border-slate-800 hover:border-lime-400/50 p-6 rounded-xl transition group hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-lime-400 font-bold uppercase">{attr.category}</span>
                  <span className="text-2xl font-black text-white font-mono">{attr.value}</span>
                </div>

                <h3 className="text-lg font-bold text-white uppercase mb-3">{attr.name}</h3>

                {/* Progress Bar (Stat Bar) */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-lime-400 to-emerald-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${attr.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MATCH HIGHLIGHTS (PROJECTS) */}
      <section id="highlights" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-lime-400 tracking-widest uppercase block mb-2">// FEATURED MATCHES</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white italic uppercase">PROYEK PORTOFOLIO PILIHAN</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-2 mt-6 md:mt-0 bg-slate-900 p-1 rounded border border-slate-800">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === 'all' ? 'bg-lime-400 text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                ALL MATCHES
              </button>
              <button 
                onClick={() => setActiveTab('web')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === 'web' ? 'bg-lime-400 text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                WEB APPS
              </button>
              <button 
                onClick={() => setActiveTab('landing')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === 'landing' ? 'bg-lime-400 text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                LANDING
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-lime-400/60 transition group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-1 bg-lime-400/10 border border-lime-400/30 text-lime-400 text-[10px] font-mono font-bold uppercase rounded">
                      {project.stat}
                    </span>
                    <span className="text-sm font-black font-mono text-cyan-400">RATING: {project.rating}</span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase italic mb-3 group-hover:text-lime-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 bg-slate-950 text-slate-300 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CAREER HISTORY & TROPHY CABINET */}
      <section id="career" className="py-20 bg-[#060910] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Transfer / Career History */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono text-lime-400 tracking-widest uppercase block mb-2">// CLUB CONTRACTS</span>
                <h2 className="text-3xl font-black text-white italic uppercase">RIWAYAT KARIR & PENGALAMAN</h2>
              </div>

              <div className="space-y-6">
                {career.map((item, index) => (
                  <div key={index} className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl relative pl-8 border-l-4 border-l-lime-400">
                    <span className="text-xs font-mono text-lime-400 font-bold block mb-1">{item.season}</span>
                    <h3 className="text-xl font-black text-white uppercase italic">{item.club}</h3>
                    <span className="text-xs font-mono text-slate-400 block mb-3 uppercase">{item.league}</span>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Trophy Cabinet */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono text-lime-400 tracking-widest uppercase block mb-2">// HONORS & AWARDS</span>
                <h2 className="text-3xl font-black text-white italic uppercase">TROPHY CABINET</h2>
              </div>

              <div className="space-y-4">
                {trophies.map((trophy, index) => (
                  <div key={index} className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center space-x-4">
                    <div className="w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-lg flex items-center justify-center text-lime-400">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base uppercase">{trophy.title}</h4>
                      <p className="text-xs font-mono text-slate-400">{trophy.issuer} • {trophy.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TRANSFER INQUIRY / AGENT CONTACT FORM */}
      <section id="transfer" className="py-20 z-10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-b from-slate-900 to-[#0A0F1D] p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-lime-400 tracking-widest uppercase block mb-2">// TRANSFER WINDOW OPEN</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white italic uppercase">AJUKAN KONTRAK / KERJASAMA</h2>
              <p className="text-slate-400 text-sm mt-2">
                Hubungi Moses Simanullang untuk diskusi rekrutmen tim, proyek pembuatan web, atau kolaborasi teknis.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-lime-400 mx-auto" />
                <h3 className="text-2xl font-black text-white uppercase italic">PENAWARAN TERKIRIM!</h3>
                <p className="text-slate-400 text-sm">Pesan Anda telah diterima. Moses akan menghubungi Anda secepatnya.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">NAMA LENGKAP / AGENT</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Masukkan Nama Anda"
                      className="w-full px-4 py-3.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-lime-400 font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">EMAIL KONTAK</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-3.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-lime-400 font-mono text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">NAMA PERUSAHAAN / PROYEK</label>
                  <input 
                    type="text" 
                    value={formData.club}
                    onChange={(e) => setFormData({...formData, club: e.target.value})}
                    placeholder="Contoh: PT Tech Innovation / Project X"
                    className="w-full px-4 py-3.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-lime-400 font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">DETAIL PENAWARAN / PESAN</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tuliskan detail proyek atau posisi rekrutmen..."
                    className="w-full px-4 py-3.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-lime-400 font-mono text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest text-sm rounded transform -skew-x-12 transition shadow-xl shadow-lime-400/20 flex items-center justify-center space-x-2"
                >
                  <span className="transform skew-x-12 inline-flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>KIRIM PENAWARAN TRANSFER</span>
                  </span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800/80 text-center text-slate-500 font-mono text-xs">
        <p>© {new Date().getFullYear()} MOSES SIMANULLANG • OFFICIAL PLAYER PORTFOLIO</p>
      </footer>

    </div>
  );
}