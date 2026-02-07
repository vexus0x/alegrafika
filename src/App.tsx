import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X, Package, Printer, Tag, Palette, Mail, Phone, Instagram, Dribbble, ChevronDown } from 'lucide-react'

// Custom Behance Icon
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
)

// Sample portfolio items
/* ============================================
   PLACEHOLDER: PORTFOLIO PROJECTS
   Replace with your actual portfolio items
   Each object represents one project card
   
   Image locations:
   - /portfolio/coffee-brand.jpg
   - /portfolio/skincare-pack.jpg
   - /portfolio/beer-label.jpg
   - /portfolio/restaurant-brand.jpg
   - /portfolio/sauce-pack.jpg
   - /portfolio/wine-label.jpg
   
   Recommended: 800x600px images for 4:3 aspect ratio
   ============================================ */
const portfolioItems = [
  {
    id: 1,
    category: 'Branding',
    title: 'Artisan Coffee Co.',
    image: '/portfolio/coffee-brand.jpg',
    description: 'Complete brand identity for specialty coffee roaster.',
    printSpecs: 'CMYK + Pantone, bleed 3mm',
  },
  {
    id: 2,
    category: 'Packaging',
    title: 'Organic Skincare Line',
    image: '/portfolio/skincare-pack.jpg',
    description: 'Sustainable packaging design with texture embossing.',
    printSpecs: 'Spot UV, foil stamping, recycled paper',
  },
  {
    id: 3,
    category: 'Labels',
    title: 'Craft Beer Labels',
    image: '/portfolio/beer-label.jpg',
    description: 'Series of beer labels for local brewery.',
    printSpecs: 'Metallic inks, die-cut, waterproof',
  },
  {
    id: 4,
    category: 'Branding',
    title: 'Modern Restaurant',
    image: '/portfolio/restaurant-brand.jpg',
    description: 'Brand identity for farm-to-table restaurant.',
    printSpecs: 'CMYK, Pantone 7530C',
  },
  {
    id: 5,
    category: 'Packaging',
    title: 'Gourmet Sauces',
    image: '/portfolio/sauce-pack.jpg',
    description: 'Premium sauce packaging with window cut.',
    printSpecs: 'Matte lamination, gold foil',
  },
  {
    id: 6,
    category: 'Labels',
    title: 'Wine Bottle Labels',
    image: '/portfolio/wine-label.jpg',
    description: 'Elegant label design for boutique winery.',
    printSpecs: 'Textured paper, embossing',
  },
]

const services = [
  {
    icon: Palette,
    title: 'Branding',
    description: 'Logo design, brand guidelines, visual identity systems that make lasting impressions.',
    deliverables: ['Logo Suite', 'Brand Guidelines', 'Color Palette', 'Typography System'],
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Eye-catching packaging that stands out on shelves and communicates your brand story.',
    deliverables: ['Box Design', 'Blister Packs', 'Bags & Pouches', 'Tube Packaging'],
  },
  {
    icon: Tag,
    title: 'Label Creation',
    description: 'Precision labels for products, meeting all print requirements for flawless output.',
    deliverables: ['Product Labels', 'Barcode Integration', 'Compliance Info', 'Die-Lines'],
  },
  {
    icon: Printer,
    title: 'Print-Ready Files',
    description: 'Production-ready files with proper bleed, margins, and color mode setup.',
    deliverables: ['PDF/X-1a Files', 'CMYK Setup', 'Bleed & Trim Lines', 'Prepress Check'],
  },
]

const timeline = [
  { year: '2024', event: 'Founded Alegrafika', description: 'Started full-time freelance practice' },
  { year: '2023', event: '50+ Projects', description: 'Delivered branding & packaging for global clients' },
  { year: '2022', event: 'Print Expert', description: 'Specialized in print production & CMYK workflows' },
  { year: '2021', event: 'Agency Experience', description: 'Senior designer at creative agency' },
  { year: '2020', event: 'Design Degree', description: 'BA Graphic Design, Cum Laude' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ]

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-grafik-cream">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold tracking-tight">Alegrafika</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-grafik-gray hover:text-grafik-accent font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-sm">
                Work Together
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 z-50 bg-grafik-black md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-display font-bold text-white">Alegrafika</span>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-display text-white hover:text-grafik-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 mb-6 text-sm font-semibold tracking-widest uppercase text-grafik-accent bg-grafik-accent/10 rounded-full">
              Graphic Design & Print Specialist
            </span>
            {/* ============================================ */}
            {/* PLACEHOLDER: HERO TAGLINE */}
            {/* Replace with your own tagline if desired */}
            {/* ============================================ */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              Crafting Brands That <br className="hidden sm:block" />
              <span className="text-grafik-accent">Print Perfectly</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Professional graphic design specializing in branding, packaging, labels, and print-ready files. 
              Where creativity meets precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="btn-primary w-full sm:w-auto">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-grafik-accent animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] bg-grafik-cream rounded-2xl overflow-hidden relative">
                {/* ============================================ */}
                {/* PLACEHOLDER: DESIGNER HEADSHOT */}
                {/* Replace this entire div with actual headshot */}
                {/* Options: */}
                {/*   - <img src="/images/headshot.jpg" className="w-full h-full object-cover" /> */}
                {/*   - <img src="/images/headshot.jpg" alt="[Designer Name]" className="w-full h-full object-cover" /> */}
                {/* Recommended: 800x1000px portrait photo */}
                {/* ============================================ */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-grafik-cream to-gray-200">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-grafik-accent/20 flex items-center justify-center">
                      <Palette className="w-16 h-16 text-grafik-accent" />
                    </div>
                    <p className="text-grafik-gray/50">[Designer Headshot]</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm a graphic designer passionate about bringing brands to life through thoughtful design and print perfection. 
                With expertise in packaging, labels, and brand identity, I help businesses create memorable visual experiences 
                that translate seamlessly from screen to shelf.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My approach combines creative vision with technical precision—ensuring every design is not only visually 
                striking but also perfectly optimized for print production.
              </p>

              <div className="space-y-4 mb-8">
                {/* ============================================ */}
                {/* PLACEHOLDER: TIMELINE */}
                {/* Update with your actual career milestones */}
                {/* ============================================ */}
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-grafik-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-grafik-accent">{item.year}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-grafik-black">{item.event}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-4">Tools & Software</h4>
                <div className="flex flex-wrap gap-2">
                  {/* ============================================ */}
                  {/* PLACEHOLDER: TOOLS & SOFTWARE LIST */}
                  {/* Replace with actual tools you use */}
                  {/* ============================================ */}
                  {['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Affinity Designer', 'Figma', 'Cricut Design'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-grafik-cream rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-grafik-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-grafik-accent font-semibold tracking-widest uppercase text-sm">What I Do</span>
            <h2 className="section-title mt-4 text-white">Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ============================================ */}
            {/* PLACEHOLDER: SERVICES CARDS */}
            {/* Update service titles, descriptions, and deliverables below */}
            {/* ============================================ */}
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 hover:border-grafik-accent/50 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-grafik-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-grafik-accent transition-colors">
                  <service.icon className="w-7 h-7 text-grafik-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                {/* ============================================ */}
                {/* PLACEHOLDER: SERVICE DELIVERABLES */}
                {/* Update list items per service */}
                {/* ============================================ */}
                <div className="space-y-2">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-grafik-accent rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-grafik-accent font-semibold tracking-widest uppercase text-sm">My Work</span>
            <h2 className="section-title mt-4">Portfolio</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Branding', 'Packaging', 'Labels'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-grafik-black text-white'
                    : 'bg-grafik-cream text-grafik-gray hover:bg-grafik-black hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* ============================================ */}
                {/* PLACEHOLDER: PROJECT IMAGE */}
                {/* Location: /public/portfolio/[image-filename].jpg */}
                {/* Example: /public/portfolio/coffee-brand.jpg */}
                {/* Recommended: 800x600px, high quality */}
                {/* ============================================ */}
                <div className="aspect-[4/3] bg-grafik-cream rounded-xl overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Package className="w-12 h-12 mx-auto mb-2 text-grafik-accent/30" />
                      <p className="text-sm text-grafik-gray/40">[Project Image]</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-grafik-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="btn-primary text-sm">
                      View Case Study
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-grafik-accent uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Tag className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{item.printSpecs}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-grafik-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-grafik-accent font-semibold tracking-widest uppercase text-sm">Get in Touch</span>
              <h2 className="section-title mt-4 mb-6">Let's Work Together</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind? I'd love to hear about it. 
                Let's create something amazing together.
              </p>

              <div className="space-y-6">
                {/* ============================================ */}
                {/* PLACEHOLDER: CONTACT INFORMATION */}
                {/* Replace with actual email and phone */}
                {/* ============================================ */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-grafik-accent/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-grafik-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">hello@alegrafika.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-grafik-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-grafik-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* ============================================ */}
              {/* PLACEHOLDER: SOCIAL LINKS */}
              {/* Replace href="#" with actual profile URLs */}
              {/* ============================================ */}
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-grafik-black text-white rounded-full flex items-center justify-center hover:bg-grafik-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-grafik-black text-white rounded-full flex items-center justify-center hover:bg-grafik-accent transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
                <BehanceIcon className="w-10 h-10 bg-grafik-black text-white rounded-full flex items-center justify-center hover:bg-grafik-accent transition-colors p-2" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-grafik-accent transition-colors"
                      placeholder="[Your Name]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-grafik-accent transition-colors"
                      placeholder="[your@email.com]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-grafik-accent transition-colors">
                    <option>Select a service...</option>
                    <option>Branding</option>
                    <option>Packaging Design</option>
                    <option>Labels</option>
                    <option>Print-Ready Files</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-grafik-accent transition-colors resize-none"
                    placeholder="[Tell me about your project...]"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* ============================================ */}
      {/* PLACEHOLDER: FOOTER YEAR */}
      {/* Update year if needed */}
      {/* ============================================ */}
      <footer className="py-8 bg-grafik-black text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Alegrafika. All rights reserved. | Crafting Brands That Print Perfectly.
        </p>
      </footer>
    </div>
  )
}

export default App
