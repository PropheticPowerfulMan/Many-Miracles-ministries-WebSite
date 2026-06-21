import {
  ArrowUpRight,
  CalendarDays,
  Cross,
  Facebook,
  Globe2,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  PlayCircle,
  Send,
  Youtube,
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from './assets/many-miracles-logo.png';
import AnimatedSection from './components/AnimatedSection';
import Button from './components/Button';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import {
  contactItems,
  events,
  footerLinks,
  impactStats,
  pillars,
  sermons,
  testimonies,
} from './data/content';

function Field({ as = 'input', placeholder, rows = 4 }) {
  const Component = as;
  return <Component className="field" placeholder={placeholder} rows={rows} />;
}

function Card({ children, className = '' }) {
  return <div className={`divine-border glass-panel rounded-2xl ${className}`}>{children}</div>;
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-ivory">
      <Navbar />

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0 light-rays opacity-80" aria-hidden="true" />
          <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl animate-pulseGlow" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-midnight to-transparent" aria-hidden="true" />

          <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1fr_0.92fr]">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                <Cross className="h-4 w-4" />
                Jesus Christ • Miracles • Nations
              </div>
              <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
                <span className="gold-text">Many Miracles</span>
                <span className="block text-ivory">Ministries</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold text-gold sm:text-xl">
                Miracles • Prophetic Vision • Evangelism • Transformation
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/72 sm:text-lg">
                A prophetic and evangelical movement proclaiming Jesus Christ, healing hearts, equipping disciples and carrying the glory of God to the nations.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button href="#contact" icon={HeartHandshake}>Join the Ministry</Button>
                <Button href="#prayer" variant="secondary" icon={Send}>Send a Prayer Request</Button>
                <Button href="#sermons" variant="secondary" icon={PlayCircle}>Watch Sermons</Button>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.18 }}
            >
              <div className="absolute inset-10 rounded-full bg-gold/30 blur-3xl" aria-hidden="true" />
              <img
                src={logo}
                alt="Many Miracles Ministries royal logo with cross, globe, crown and golden light"
                className="relative z-10 w-full rounded-[2rem] object-cover shadow-halo ring-1 ring-gold/30 animate-float"
              />
            </motion.div>
          </div>
        </section>

        <AnimatedSection id="about" className="py-24">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Card className="p-7 sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-gold">Divine Mandate</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ivory sm:text-5xl">
                Announcing Christ, restoring lives, equipping nations.
              </h2>
              <div className="mt-8 h-px bg-gold-line" />
              <p className="mt-8 text-base leading-8 text-ivory/72">
                Many Miracles Ministries exists as a divine vision to proclaim Jesus Christ, heal wounded hearts, teach the Word of God, form faithful disciples and impact nations with the transforming power of the Holy Spirit.
              </p>
            </Card>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Love of God', 'Prophetic Vision', 'Power of the Spirit', 'Evangelism', 'Glory to God', 'Transformed Destinies'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-transparent" />
                  <p className="font-display text-2xl font-bold text-ivory">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="vision" className="py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Vision & Mission"
              title="A royal calling for awakening, discipleship and harvest."
              text="Every expression of the ministry points people to Jesus and prepares believers to serve with faith, purity and spiritual authority."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ title, text, icon: Icon }) => (
                <Card key={title} className="group p-6 transition duration-300 hover:-translate-y-2 hover:shadow-halo">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ivory">{title}</h3>
                  <p className="mt-3 leading-7 text-ivory/68">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="section-shell">
            <Card className="grid items-center gap-8 overflow-hidden p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />
                <img src={logo} alt="" className="relative aspect-square w-full rounded-2xl object-cover ring-1 ring-gold/30" />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-gold">Founder / Servant of God</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-ivory sm:text-5xl">
                  Prophet Jonathan Lokala Lomboto
                </h2>
                <p className="mt-2 text-lg font-semibold text-gold">Founder & Visionary Leader</p>
                <p className="mt-6 text-base leading-8 text-ivory/72">
                  A man of God carrying a prophetic and evangelical vision, called to announce Christ, lead souls into divine transformation and awaken destinies through prayer, the Word and the power of the Holy Spirit.
                </p>
              </div>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection id="sermons" className="py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Sermons / Teachings" title="Messages that build faith for miracles." />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {sermons.map(({ title, meta, text, icon: Icon }) => (
                <Card key={title} className="flex min-h-72 flex-col p-6">
                  <Icon className="h-9 w-9 text-gold" />
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-gold/80">{meta}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ivory">{title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-ivory/66">{text}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
                    Watch / Read More <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="prayer" className="py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              align="left"
              eyebrow="Prayer Request"
              title="Send your request with faith and expectation."
              text="Our intercession team stands with families, leaders, churches and nations, believing Jesus Christ for healing, restoration and breakthrough."
            />
            <Card className="p-6 sm:p-8">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field placeholder="Full Name" />
                  <Field placeholder="Email / WhatsApp" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field placeholder="Country" />
                  <Field placeholder="Prayer Topic" />
                </div>
                <Field as="textarea" placeholder="Message" rows={5} />
                <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-amberfire to-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-midnight transition hover:-translate-y-1 hover:shadow-halo">
                  Submit Prayer Request <Send className="h-4 w-4" />
                </button>
              </form>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Testimonies" title="Every miracle gives glory to God." />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {testimonies.map((item) => (
                <Card key={item} className="p-6 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold ring-1 ring-gold/25">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ivory">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-ivory/62">A life transformed by the mercy and power of Jesus Christ.</p>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="events" className="py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Events" title="Gatherings for revival, prayer and harvest." />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {events.map((event) => (
                <Card key={event.title} className="p-6">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold ring-1 ring-gold/25">
                      <CalendarDays className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-bold text-ivory">{event.title}</h3>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">{event.date} • {event.place}</p>
                      <p className="mt-4 leading-7 text-ivory/68">{event.text}</p>
                      <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-sm font-bold text-gold transition hover:bg-gold hover:text-midnight">
                        Register <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Nations / Global Impact"
                title="A ministry vision reaching hearts across the world."
                text="From local prayer rooms to international crusades, Many Miracles Ministries carries a burden for nations, families, leaders and the next generation."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-gold/15 bg-white/[0.04] p-5">
                    <p className="gold-text font-display text-4xl font-bold">{stat.value}</p>
                    <p className="mt-2 text-sm text-ivory/62">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-96 overflow-hidden rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_center,rgba(248,199,90,.20),rgba(18,63,117,.28)_42%,rgba(5,8,18,.9)_70%)] p-8 shadow-halo">
              <div className="absolute inset-8 rounded-full border border-gold/30" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30 bg-royal/40 shadow-halo" />
              <Globe2 className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 text-gold" />
              {['Africa', 'Europe', 'America', 'Asia'].map((place, index) => (
                <span
                  key={place}
                  className="absolute rounded-full border border-gold/25 bg-midnight/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold"
                  style={{
                    left: `${18 + index * 19}%`,
                    top: `${24 + (index % 2) * 42}%`,
                  }}
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="partnership" className="py-24">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/18 via-royal/70 to-midnight p-8 shadow-halo sm:p-12 lg:p-16">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
              <div className="relative max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-gold">Donation / Partnership</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-ivory sm:text-6xl">Partner With The Vision</h2>
                <p className="mt-6 text-lg leading-8 text-ivory/74">
                  Support the work of God as we preach Christ, strengthen disciples, pray for families and take the gospel to the nations.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Button href="#contact" icon={HeartHandshake}>Give Now</Button>
                  <Button href="#contact" variant="secondary" icon={ArrowUpRight}>Become a Partner</Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading align="left" eyebrow="Contact" title="Connect with Many Miracles Ministries." />
              <div className="mt-9 grid gap-4">
                {contactItems.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold/80">{label}</p>
                      <p className="text-ivory/78">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a className="icon-button" href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                <a className="icon-button" href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a className="icon-button" href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                <a className="icon-button" href="mailto:contact@manymiraclesministries.org" aria-label="Email"><Mail className="h-5 w-5" /></a>
              </div>
            </div>
            <Card className="p-6 sm:p-8">
              <form className="grid gap-4">
                <Field placeholder="Full Name" />
                <Field placeholder="Email Address" />
                <Field placeholder="Subject" />
                <Field as="textarea" placeholder="Message" rows={5} />
                <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/35 bg-white/5 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-1 hover:bg-gold hover:text-midnight">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </Card>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-gold/15 py-10">
        <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-3xl font-bold text-ivory">Many Miracles Ministries</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ivory/62">
              John 14:12 - He who believes in Me, the works that I do he will do also.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <a key={link} href="#home" className="text-sm font-semibold text-ivory/60 transition hover:text-gold">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-ivory/48">© 2026 Many Miracles Ministries. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
