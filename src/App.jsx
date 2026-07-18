import { useState } from 'react'
import amyPhoto from './assets/amy.js'
import './App.css'

const STRIPE_LINK = 'https://buy.stripe.com/eVqdR98C6fgmgycgON08g01'

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">Amy <span>Witt</span></a>
      <a href="#offer" className="nav-cta">Get Started</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-inner">
        <div className="hero-eyebrow fade-up">Online Strength Programs &amp; Coaching · For People Who Want More Out of Their Workouts</div>
        <h1 className="hero-h1 fade-up delay-1">Stop Guessing.<br />Start Getting <em>Stronger.</em></h1>
        <p className="hero-sub fade-up delay-2">
          You've put in the reps. But <strong>random workouts and guesswork are keeping you stuck.</strong> This programming gives you a smart, structured path to real, lasting strength — without the trial and error.
        </p>
        <div className="hero-ctas fade-up delay-3">
          <a href="#offer" className="btn-primary">Get Started</a>
          <a href="#about" className="btn-secondary">My story →</a>
        </div>
        <div className="hero-proof fade-up delay-4">
          <div className="proof-item">
            <div className="proof-icon"><svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2" stroke="#3d8fff" fill="none"/></svg></div>
            <div className="proof-text"><strong>15+ Years</strong>of coaching experience</div>
          </div>
          <div className="proof-item">
            <div className="proof-icon"><svg viewBox="0 0 24 24" stroke="#3d8fff" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
            <div className="proof-text"><strong>Former Gym Owner</strong>hundreds of clients trained</div>
          </div>
          <div className="proof-item">
            <div className="proof-icon"><svg viewBox="0 0 24 24" stroke="#3d8fff" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div className="proof-text"><strong>3-4 Days/Week</strong>built for real schedules</div>
          </div>
          <div className="proof-item">
            <div className="proof-icon"><svg viewBox="0 0 24 24" stroke="#3d8fff" fill="none" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <div className="proof-text"><strong>Progressive Overload</strong>built into every program</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pain() {
  return (
    <section className="pain-section">
      <div className="pain-inner">
        <div className="pain-intro">You've been spinning your wheels at the gym. <span>Now it's time to make your training work for you.</span></div>
        <div className="pain-body">
          <p>You've been trying on your own to train consistently. With off and on again results. And if you're being honest — you've been winging it. Maybe you're following random YouTube programs, cycling through the same workouts, or just doing whatever feels right that day.</p>
          <p><strong>And things have stalled.</strong> You're not getting weaker, but you're not getting noticeably stronger either. You hit the gym, put in the work, and still feel like you're spinning your wheels.</p>
          <div className="pain-callout">
            <strong>Here's the thing:</strong> effort without structure only gets you so far. What separates lifters who keep progressing from those who plateau isn't how hard they work — it's <strong>how intelligently they train.</strong>
          </div>
          <p>That's where I come in. After close to 20 years in the gym and over a decade of coaching real people — in my gym and now online — I build programs that remove the guesswork entirely, so you can stop second-guessing and <strong>start making consistent, measurable progress.</strong></p>
        </div>
      </div>
    </section>
  )
}

const getCards = [
  { title: 'Smart, Periodized Programming', body: 'No random workouts. Every session builds on the last with intentional progressive overload — so your body is always adapting, never plateauing.', icon: <svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
  { title: 'Time Back in Your Day', body: "No more spending 20 minutes before each session figuring out what to do. Show up, follow the plan, train with purpose, and get on with your life.", icon: <svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: 'Real Coach Support', body: "You're not following an algorithm. Amy personally designs your programming and is available to answer questions, swap exercises, and adjust your plan as needed.", icon: <svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { title: 'Measurable Progress', body: "Every program is tracked and structured so you can see exactly how far you've come. Numbers go up. Lifts get heavier. Progress becomes impossible to ignore.", icon: <svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: 'Options to Adapt to Your Setup', body: "The program is customized to the equipment you actually have — not what's ideal in a perfect world.", icon: <svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> },
  { title: 'Daily Video Feedback', body: 'Amy reviews video of your lifts daily — catching form issues before they become injuries and giving you cues to lift more effectively and safely.', icon: <svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
]

function WhatYouGet() {
  return (
    <section className="light-alt">
      <div className="center">
        <div className="section-label">What You Get</div>
        <h2 className="section-title">More Than Just a Workout Plan</h2>
        <p className="section-sub">Every program is built to give you the clarity, structure, and support to actually move forward — not just stay busy.</p>
      </div>
      <div className="gets-grid">
        {getCards.map((c) => (
          <div className="get-card" key={c.title}>
            <div className="get-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="light" id="about">
      <div className="about-grid">
        <div className="about-photo"><img src={amyPhoto} alt="Amy Witt Strength Coach" /></div>
        <div className="about-text">
          <div className="section-label">About Amy</div>
          <h2 className="section-title">This Isn't My First Rep.</h2>
          <p>I spent years running a gym — watching what works, what doesn't, and what <strong>lifters specifically</strong> need to keep making progress. I've written programs and coached hundreds of clients, from beginners up to advanced lifters who needed a smarter path forward.</p>
          <p>When I sold my gym, I took everything I'd learned and built it into an online coaching model that gives you the same quality of programming <strong>without needing to step foot in my gym.</strong></p>
          <p>My programs aren't padded with filler — every exercise has purpose. They're designed for people who are serious about getting stronger and want a coach who's equally serious about their results.</p>
          <div className="credential-list">
            <div className="credential">
              <div className="cred-icon"><svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="cred-text"><strong>Former Gym Owner</strong>Coached hundreds of real clients, in person, for years</div>
            </div>
            <div className="credential">
              <div className="cred-icon"><svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="cred-text"><strong>Close to 20 Years of Experience</strong>Tested, refined, and proven across all fitness levels</div>
            </div>
            <div className="credential">
              <div className="cred-icon"><svg viewBox="0 0 24 24" stroke="#1A6EE8" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="cred-text"><strong>Evidence-Based Programming</strong>Rooted in exercise science and refined with 15 years of real-world coaching</div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-accent" />
          <div className="big-quote">"The gap between <span>spinning your wheels</span> and real progress isn't just about effort — it's also about <span>program quality</span> and having a smart plan."</div>
          <div className="quote-attr">— Amy Witt</div>
          <div className="mini-stats">
            <div className="mini-stat"><span className="num">20</span><span className="lbl">Years in the gym</span></div>
            <div className="mini-stat"><span className="num">100s</span><span className="lbl">Clients trained</span></div>
            <div className="mini-stat"><span className="num">3-4×</span><span className="lbl">Days per week</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section className="light-alt" id="offer">
      <div className="center">
        <div className="section-label">Program &amp; Pricing</div>
        <h2 className="section-title">One Program. Full Support.</h2>
        <p className="section-sub">Personalized strength programming with daily video feedback — built around you, your equipment, and your goals.</p>
      </div>
      <div className="offer-wrap">
        <div className="offer-card">
          <div className="offer-card-left">
            <div className="pkg-name">Personalized Strength Program</div>
            <div className="pkg-tagline">3-4x per week programming tailored to you, your equipment, and your training history — with daily video feedback from Amy.</div>
            <div className="pkg-price">
              <div className="price-amount">$67</div>
              <div className="price-period">per week</div>
            </div>
            <a href={STRIPE_LINK} className="pkg-cta pkg-cta-filled" target="_blank" rel="noreferrer">Get Started</a>
          </div>
          <div className="offer-card-right">
            <ul className="pkg-features">
              <li><span className="check" />Built from a smart, periodized framework and tailored directly to you</li>
              <li><span className="check" />Customized based on your equipment and previous training history</li>
              <li><span className="check" />3-4 days/week with built-in progressive overload</li>
              <li><span className="check" />Daily video feedback on your lifts and form</li>
              <li><span className="check" />Real-time load and volume adjustments</li>
              <li><span className="check" />Direct message access to Amy</li>
              <li><span className="check" />Highest level of accountability and coaching</li>
              <li><span className="check" />Cancel anytime — no refunds for unused weeks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ForYou() {
  return (
    <section className="light" id="for-you">
      <div className="for-grid">
        <div>
          <div className="section-label">Is This For You?</div>
          <h2 className="section-title">You're Ready If...</h2>
          <ul className="for-list">
            {[
              { n: '01', title: 'You already know the movements', body: "Squats, deadlifts, presses — you've got the basics. You just need a smarter plan to take things further." },
              { n: '02', title: "You've hit a plateau and want to break it", body: "Your progress has stalled and you know random programming is the reason. It's time for something structured." },
              { n: '03', title: 'You want to train smarter, not just harder', body: "You're done grinding without direction. You want programming that's designed to actually produce results." },
              { n: '04', title: 'You have specific equipment or constraints', body: 'Home gym, limited gear, unusual schedule — this program is built around your reality.' },
            ].map((item) => (
              <li className="for-item" key={item.n}>
                <span className="for-num">{item.n}</span>
                <div className="for-text"><strong>{item.title}</strong><span>{item.body}</span></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Simple Process. Serious Results.</h2>
          <div className="steps-list">
            {[
              { n: '1', title: 'Sign up', body: 'Click Get Started and complete your purchase.' },
              { n: '2', title: 'Receive your first program', body: 'Your program lands in your inbox within 48 hours, ready to go.' },
              { n: '3', title: 'Train, track, get stronger', body: 'Follow the plan, send Amy video of your lifts, and watch consistent progress replace the guesswork.' },
            ].map((s) => (
              <div className="step-item" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-body"><strong>{s.title}</strong><span>{s.body}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Is this suitable for all fitness levels?', a: "Yes — Amy has coached everyone from complete beginners to advanced lifters. Your program is built specifically around your experience level and goals." },
  { q: 'What if I only have a home gym or limited equipment?', a: 'No problem at all. Amy adapts every session to the equipment you actually have — no compromises, no filler exercises.' },
  { q: 'What does daily video feedback actually look like?', a: "You send short clips of your lifts — a phone propped up is totally fine. Amy reviews them daily and gives you specific, actionable coaching cues to improve your technique and make each session count." },
  { q: 'How quickly will I receive my first program?', a: "Within 48 hours of signing up. Amy reviews every intake personally before building your program — you'll always get something thoughtfully designed, not auto-generated." },
  { q: 'Can I cancel?', a: "Yes, you can cancel anytime. Please note no refunds are given for unused weeks." },
  { q: 'How is this different from following a program I find online?', a: "Free programs are written for a generic lifter. Amy's programs are written with context — your equipment, history, and goals. It's the difference between a template and a real training plan built for you." },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="light-alt">
      <div className="center">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Questions? Got You.</h2>
      </div>
      <div className="faq-wrap">
        {faqs.map((item, i) => (
          <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {item.q}<span className="icon">+</span>
            </button>
            {open === i && <div className="faq-a">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section className="cta-banner" id="contact">
      <h2>You're Putting in the Work. Your Program Should Too.</h2>
      <p>Expert programming from a coach who's spent close to 20 years in the gym — now available wherever you train.</p>
      <a href={STRIPE_LINK} className="btn-white" target="_blank" rel="noreferrer">Get Started</a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Amy <span>Witt</span> Coaching</div>
      <p>© 2026 Amy Witt. All rights reserved.</p>
      <p className="footer-sub">Online Strength Coaching</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Pain />
      <WhatYouGet />
      <About />
      <Offer />
      <ForYou />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  )
}
