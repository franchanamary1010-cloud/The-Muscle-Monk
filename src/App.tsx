import { motion } from "motion/react";
import { 
  Dumbbell, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Menu,
  X,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-brand-black/90 backdrop-blur-md py-4 border-b border-brand-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-sm">
            <span className="text-brand-black font-display font-black text-xl">M</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">The Muscle Monk</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Programs", "Results", "Trainers", "Pricing"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
              {item}
            </a>
          ))}
          <a href="#trial" className="btn-primary py-2 px-6 text-xs">Start Trial</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-black border-b border-brand-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {["Programs", "Results", "Trainers", "Pricing"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest">
              {item}
            </a>
          ))}
          <a href="#trial" onClick={() => setIsOpen(false)} className="btn-primary w-full">Start Free Trial</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Atmospheric gym background" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Discipline • Strength • Mindfulness</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]">
            Train Like a <span className="text-brand-gold">Monk</span><br />
            Build Like a <span className="text-brand-gold">Warrior</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-white/70 mb-10 max-w-xl leading-relaxed">
            The premium fitness sanctuary for high-performers. Master your body, sharpen your mind, and achieve the transformation you've always delayed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#trial" className="btn-primary">Claim Your 3-Day Trial</a>
            <a href="#programs" className="btn-outline">Explore Programs</a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 border-t border-brand-white/10 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  className="w-10 h-10 rounded-full border-2 border-brand-black" 
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-brand-white/60">
              <span className="text-brand-white font-bold">500+</span> Professionals Transformed
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 border-8 border-brand-gold/20 p-4">
             <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000" 
              alt="Fitness transformation" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-brand-gold text-brand-black p-8 font-display font-black text-4xl leading-none z-20">
            NO<br />EXCUSES
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="bg-brand-gray py-12 border-y border-brand-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
        {["Forbes", "Men's Health", "GQ", "Vogue", "TechCrunch"].map(brand => (
          <span key={brand} className="text-2xl font-display font-black tracking-tighter uppercase">{brand}</span>
        ))}
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Monk Strength",
      desc: "Functional bodybuilding focused on aesthetics and raw power. Build a warrior's physique.",
      icon: <Dumbbell className="w-8 h-8" />,
      features: ["Personalized Macros", "Strength Tracking", "Form Correction"]
    },
    {
      title: "Zen Cardio",
      desc: "High-intensity interval training combined with breathwork. Burn fat while staying centered.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Metabolic Conditioning", "Breath Mastery", "Heart Rate Monitoring"]
    },
    {
      title: "The Transformation",
      desc: "Our flagship 12-week program for total body and mind overhaul. Guaranteed results.",
      icon: <Target className="w-8 h-8" />,
      features: ["Weekly Assessments", "Private Coaching", "Community Access"]
    }
  ];

  return (
    <section id="programs" className="section-container">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl mb-4">Elite Programs</h2>
        <p className="text-brand-white/60 max-w-2xl mx-auto">We don't just sell gym memberships. We provide the blueprint for your evolution.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-brand-gray p-10 border border-brand-white/5 group hover:border-brand-gold/50 transition-all"
          >
            <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
            <h3 className="text-2xl mb-4">{p.title}</h3>
            <p className="text-brand-white/60 mb-8 leading-relaxed">{p.desc}</p>
            <ul className="space-y-3 mb-10">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-brand-white/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {f}
                </li>
              ))}
            </ul>
            <a href="#trial" className="text-brand-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Transformation = () => {
  return (
    <section id="results" className="bg-brand-gray overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">Real Stories.<br />Real Discipline.</h2>
          <div className="space-y-12">
            <div className="relative pl-12 border-l-2 border-brand-gold/30">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-brand-gold -translate-x-1/2 bg-brand-gray" />
              <p className="text-xl italic mb-6 text-brand-white/90">
                "I was a typical stressed executive. The Muscle Monk didn't just change my body; it changed how I approach my business. I'm sharper, stronger, and more disciplined than ever."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=33" className="w-12 h-12 rounded-full grayscale" alt="Client" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">David Chen</p>
                  <p className="text-xs text-brand-gold uppercase">CEO, TechFlow • Lost 15kg in 12 Weeks</p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-12 border-l-2 border-brand-gold/30">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-brand-gold -translate-x-1/2 bg-brand-gray" />
              <p className="text-xl italic mb-6 text-brand-white/90">
                "The atmosphere here is different. It's not a gym; it's a sanctuary. The trainers actually care about your form and your mental state."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=44" className="w-12 h-12 rounded-full grayscale" alt="Client" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">Sarah Jenkins</p>
                  <p className="text-xs text-brand-gold uppercase">Creative Director • Gained 5kg Muscle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=500" className="w-full h-64 object-cover grayscale" alt="Before/After" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" className="w-full h-80 object-cover grayscale" alt="Before/After" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=500" className="w-full h-80 object-cover grayscale" alt="Before/After" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=500" className="w-full h-64 object-cover grayscale" alt="Before/After" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="trial" className="section-container">
      <div className="bg-brand-gold p-12 md:p-24 text-brand-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Start Your Evolution</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
            Claim your 3-day premium trial pass and body assessment. Limited to 15 new members per month to ensure elite coaching quality.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="bg-white/20 border border-brand-black/10 p-4 placeholder:text-brand-black/50 focus:outline-none focus:bg-white/40 transition-all"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/20 border border-brand-black/10 p-4 placeholder:text-brand-black/50 focus:outline-none focus:bg-white/40 transition-all"
            />
            <button type="submit" className="bg-brand-black text-brand-gold py-5 font-black uppercase tracking-[0.2em] hover:scale-105 transition-all">
              Claim My Pass Now
            </button>
            <p className="text-xs uppercase tracking-widest opacity-60 mt-4 flex items-center justify-center gap-2">
              <Users className="w-3 h-3" /> 8 Spots Remaining This Week
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-gold flex items-center justify-center rounded-sm">
              <span className="text-brand-black font-display font-black text-lg">M</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase">The Muscle Monk</span>
          </div>
          <p className="text-brand-white/50 max-w-sm leading-relaxed mb-8">
            The Muscle Monk is a premium fitness sanctuary designed for those who seek strength through discipline and mindfulness.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-brand-white/10 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 border border-brand-white/10 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 border border-brand-white/10 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-black transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
          <ul className="space-y-4 text-brand-white/50 text-sm">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
            <li><a href="#programs" className="hover:text-brand-gold transition-colors">Programs</a></li>
            <li><a href="#results" className="hover:text-brand-gold transition-colors">Results</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Membership</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Location</h4>
          <p className="text-brand-white/50 text-sm leading-relaxed">
            123 Warrior Way,<br />
            Elite District, Metropolis<br />
            Mon-Fri: 5am - 10pm<br />
            Sat-Sun: 7am - 6pm
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-brand-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-brand-white/30">
        <p>© 2026 The Muscle Monk. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <Hero />
      <SocialProof />
      <Programs />
      <Transformation />
      <CTASection />
      <Footer />
    </div>
  );
}
