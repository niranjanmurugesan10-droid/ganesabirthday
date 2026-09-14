import React, { useEffect, useState } from "react";
import "./index.css";
import vinayagarImage from "../vinayagar.png";

const modaks = [
  { x: 8, y: 15, d: 0.2 },
  { x: 23, y: 9, d: 0.8 },
  { x: 40, y: 16, d: 0.4 },
  { x: 58, y: 10, d: 1.1 },
  { x: 76, y: 17, d: 0.6 },
  { x: 91, y: 11, d: 1.2 },

  { x: 15, y: 32, d: 1.3 },
  { x: 34, y: 29, d: 0.1 },
  { x: 52, y: 35, d: 0.9 },
  { x: 70, y: 29, d: 1.5 },
  { x: 88, y: 35, d: 0.7 },

  { x: 7, y: 52, d: 0.8 },
  { x: 25, y: 48, d: 1.7 },
  { x: 44, y: 53, d: 0.3 },
  { x: 63, y: 48, d: 1.2 },
  { x: 82, y: 54, d: 0.5 },
  { x: 95, y: 49, d: 1.4 },

  { x: 17, y: 70, d: 1.6 },
  { x: 37, y: 66, d: 0.9 },
  { x: 57, y: 72, d: 0.4 },
  { x: 76, y: 67, d: 1.4 },
  { x: 91, y: 74, d: 0.6 }
];

const wishes = [
  {
    title: "தடைகள் நீங்கட்டும்",
    text: "விநாயகரின் அருளால் உங்கள் வாழ்வில் இருக்கும் அனைத்து தடைகளும் நீங்கி, புதிய பாதைகள் திறக்கட்டும்."
  },
  {
    title: "வெற்றி பெருகட்டும்",
    text: "நீங்கள் தொடங்கும் ஒவ்வொரு புதிய முயற்சியும் வெற்றியாகி, உங்கள் கனவுகள் அனைத்தும் நனவாகட்டும்."
  },
  {
    title: "மகிழ்ச்சி நிறையட்டும்",
    text: "உங்கள் குடும்பத்தில் என்றும் அன்பும், அமைதியும், மகிழ்ச்சியும் நிறைந்திருக்கட்டும்."
  },
  {
    title: "வளம் பெருகட்டும்",
    text: "ஆரோக்கியம், செல்வம், வளம் மற்றும் நல்ல வாய்ப்புகள் உங்கள் வாழ்க்கையில் தொடர்ந்து பெருகட்டும்."
  },
  {
    title: "புதிய தொடக்கம்",
    text: "இந்த விநாயகர் சதுர்த்தி உங்கள் வாழ்க்கையில் ஒரு அழகான புதிய தொடக்கத்தை கொண்டு வரட்டும்."
  },
  {
    title: "கனவுகள் நனவாகட்டும்",
    text: "நீங்கள் நினைக்கும் நல்ல காரியங்கள் அனைத்தும் தடையின்றி நிறைவேற விநாயகர் அருள் கிடைக்கட்டும்."
  }
];

const services = [
  {
    number: "01",
    title: "Website Development",
    text: "Business மற்றும் personal brand-க்கு modern, responsive websites உருவாக்குகிறோம்."
  },
  {
    number: "02",
    title: "Digital Invitations",
    text: "Wedding, birthday மற்றும் special events-க்கு interactive digital invitation websites."
  },
  {
    number: "03",
    title: "Business Solutions",
    text: "உங்கள் business workflow-க்கு தேவையான custom web applications உருவாக்குகிறோம்."
  },
  {
    number: "04",
    title: "Custom Web Apps",
    text: "உங்கள் idea-வை ஒரு complete digital product-ஆக மாற்றுகிறோம்."
  }
];

/* ================= MODAK ================= */

function Modak({ style, selected, onClick }) {
  return (
    <button
      className={`modak-btn ${selected ? "selected" : ""}`}
      style={style}
      onClick={onClick}
      aria-label="Choose kolukkattai"
    >
      <span className="modak">
        <span className="modak-ridge r1" />
        <span className="modak-ridge r2" />
        <span className="modak-ridge r3" />
        <span className="modak-ridge r4" />
        <span className="modak-tip" />
      </span>
    </button>
  );
}

/* ================= RAT ================= */

function Rat({ run, index, target }) {
  const positions = [
    { x: -6, y: 0, delay: 0 },
    { x: -2, y: -4, delay: 0.2 },
    { x: 3, y: 2, delay: 0.4 },
    { x: 8, y: -3, delay: 0.6 },
    { x: 12, y: 3, delay: 0.8 },
    { x: 16, y: -2, delay: 1 }
  ];

  const p = positions[index % positions.length];

  return (
    <div
      className={`rat-wrap rat-${index} ${run ? "rat-run" : ""}`}
      style={
        run && target
          ? {
              "--tx": `${target.x + p.x}vw`,
              "--ty": `${target.y + p.y}vh`,
              "--delay": `${p.delay}s`
            }
          : {}
      }
    >
      <svg className="rat" viewBox="0 0 180 100">
        <ellipse cx="82" cy="63" rx="55" ry="25" fill="#594138" />
        <ellipse cx="125" cy="51" rx="28" ry="25" fill="#684a3b" />

        <circle cx="138" cy="38" r="13" fill="#806052" />
        <circle cx="158" cy="53" r="4" fill="#111" />
        <circle cx="143" cy="31" r="3" fill="#111" />

        <circle cx="134" cy="26" r="7" fill="#c78d87" />

        <path
          d="M151 69 C177 82 177 28 151 24"
          fill="none"
          stroke="#9b7460"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <ellipse cx="57" cy="76" rx="16" ry="7" fill="#3e2e28" />
        <ellipse cx="109" cy="76" rx="16" ry="7" fill="#3e2e28" />

        <path
          d="M166 58 L178 56 M166 62 L179 65 M166 54 L177 48"
          stroke="#3b2b25"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

/* ================= VINAYAGAR IMAGE ================= */

function Vinayagar() {
  return (
    <img
      className="vinayagar"
      src={vinayagarImage}
      alt="Vinayagar"
    />
  );
}

/* ================= BALLOON ================= */

function Balloon({ index }) {
  return (
    <span
      className="balloon"
      style={{
        left: `${(index * 8.1) % 100}%`,
        animationDelay: `${(index % 8) * 0.8}s`,
        animationDuration: `${9 + (index % 5)}s`
      }}
    >
      <i />
    </span>
  );
}

/* ================= SOUND ================= */

function playCelebration() {
  const AudioCtx =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioCtx) return;

  const ctx = new AudioCtx();

  const master = ctx.createGain();
  master.gain.value = 0.045;
  master.connect(ctx.destination);

  const notes = [
    523.25,
    659.25,
    783.99,
    1046.5,
    880,
    783.99,
    659.25,
    783.99,
    523.25,
    659.25,
    880,
    1046.5,
    1174.66,
    1046.5,
    880,
    783.99
  ];

  let step = 0;

  const playStep = () => {
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.value = notes[step % notes.length];

    gain.gain.setValueAtTime(0.0001, now);

    gain.gain.exponentialRampToValueAtTime(
      0.25,
      now + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 0.4
    );

    osc.connect(gain).connect(master);

    osc.start(now);
    osc.stop(now + 0.45);

    step++;
  };

  playStep();

  const timer = window.setInterval(
    playStep,
    430
  );

  window.setTimeout(() => {
    clearInterval(timer);
  }, 30000);
}

/* ================= APP ================= */

function App() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [eating, setEating] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (page === 2) {
      setPetals(
        Array.from({ length: 40 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 6,
          duration: 5 + Math.random() * 6
        }))
      );

      playCelebration();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [page]);

  const chooseModak = (m, i) => {
    if (eating) return;

    setSelected(i);
    setEating(true);

    setTimeout(() => {
      setPage(2);
    }, 3300);
  };

  return (
    <main
      className={
        page === 1
          ? "app page-one"
          : "app page-two"
      }
    >

      {/* ================= PAGE 1 ================= */}

      {page === 1 && (
        <section className="welcome">

          <div className="ambient a1" />
          <div className="ambient a2" />

          <div className="top-brand">
            XYRON
            <span>WEBTECH</span>
          </div>

          <div className="intro">

            <div className="small">
              ஒரு இனிய திருவிழா அனுபவம்
            </div>

            <h1>
              இனிய விநாயகர்
              <br />
              <strong>சதுர்த்தி</strong>
            </h1>

            <p>
              ஒரு கொழுக்கட்டையை தேர்வு செய்யுங்கள்
            </p>

          </div>

          <div className="modak-field">

            {modaks.map((m, i) => (
              <Modak
                key={i}
                selected={selected === i}
                onClick={() =>
                  chooseModak(m, i)
                }
                style={{
                  left: `${m.x}%`,
                  top: `${m.y}%`,
                  animationDelay: `${m.d}s`
                }}
              />
            ))}

          </div>

          {Array.from({ length: 6 }).map(
            (_, i) => (
              <Rat
                key={i}
                index={i}
                run={eating}
                target={
                  selected !== null
                    ? modaks[selected]
                    : null
                }
              />
            )
          )}

          {!eating && (
            <button
              className="start-btn"
              onClick={() =>
                chooseModak(modaks[8], 8)
              }
            >
              <span>
                ஒரு கொழுக்கட்டை தேர்வு செய்
              </span>

              <b>+</b>
            </button>
          )}

          {eating && (
            <div className="eating-text">

              <span>
                விநாயகருக்காக ஒரு இனிப்பு...
              </span>

              <strong>
                கொழுக்கட்டைகளை சாப்பிட
                <br />
                எலிகள் கூட்டமாக வருகிறது!
              </strong>

            </div>
          )}

        </section>
      )}

      {/* ================= PAGE 2 ================= */}

      {page === 2 && (
        <section className="festival-site">

          <div className="festival-bg" />

          <div className="balloon-field">

            {Array.from({ length: 18 }).map(
              (_, i) => (
                <Balloon
                  key={i}
                  index={i}
                />
              )
            )}

          </div>

          {petals.map((petal) => (
            <span
              key={petal.id}
              className="petal"
              style={{
                left: `${petal.left}%`,
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`
              }}
            />
          ))}

          {/* NAVBAR */}

          <nav className="festival-nav">

            <div className="nav-logo">
              XYRON
              <span>WEBTECH</span>
            </div>

            <div className="nav-links">

              <a href="#home">
                Home
              </a>

              <a href="#wishes">
                Wishes
              </a>

              <a href="#vibes">
                Vibes
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

          </nav>

          {/* HERO */}

          <section
            id="home"
            className="festival-hero"
          >

            <div className="hero-text">

              <div className="hero-small">
                A FESTIVAL OF NEW BEGINNINGS
              </div>

              <h1>
                இனிய
                <br />
                <strong>
                  விநாயகர் சதுர்த்தி
                </strong>
              </h1>

              <p>
                வேழமுகன் அருள் துணையுடன்
                <br />
                உங்கள் வாழ்வில் புதிய தொடக்கங்கள்
                <br />
                மலரட்டும்.
              </p>

              <button
                className="explore-btn"
                onClick={() =>
                  document
                    .getElementById("wishes")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
              >
                நல்வாழ்த்துகளை காண
              </button>

            </div>

            {/* 🟢 YOUR PNG IMAGE */}

            <div className="hero-vinayagar">
              <Vinayagar />
            </div>

          </section>

          {/* BLESSING STRIP */}

          <section className="blessing-strip">

            <div>
              <span>01</span>
              தடைகள் நீங்கட்டும்
            </div>

            <div>
              <span>02</span>
              வெற்றி பெருகட்டும்
            </div>

            <div>
              <span>03</span>
              மகிழ்ச்சி நிறையட்டும்
            </div>

            <div>
              <span>04</span>
              வளம் பெருகட்டும்
            </div>

          </section>

          {/* WISHES */}

          <section
            id="wishes"
            className="content-section wishes-section"
          >

            <div className="section-heading">

              <span>
                OUR BLESSINGS
              </span>

              <h2>
                நல்லவை
                <strong>நடக்கட்டும்</strong>
              </h2>

              <p>
                விநாயகரின் அருள் உங்கள்
                வாழ்க்கையின் ஒவ்வொரு
                நாளையும் அழகாக்கட்டும்.
              </p>

            </div>

            <div className="wish-grid">

              {wishes.map(
                (wish, index) => (
                  <article
                    className="wish-card-item"
                    key={index}
                  >

                    <div className="card-number">
                      0{index + 1}
                    </div>

                    <div className="card-symbol">
                      +
                    </div>

                    <h3>
                      {wish.title}
                    </h3>

                    <p>
                      {wish.text}
                    </p>

                    <div className="card-line" />

                  </article>
                )
              )}

            </div>

          </section>

          {/* VIBES */}

          <section
            id="vibes"
            className="vibes-section"
          >

            <div className="vibes-title">

              <span>
                FESTIVAL VIBES
              </span>

              <h2>
                ஒரு இனிய
                <strong>
                  திருவிழா தருணம்
                </strong>
              </h2>

            </div>

            <div className="rising-cards">

              <div className="rising-card card-a">
                <small>TRADITION</small>

                <h3>
                  பாரம்பரியம்
                </h3>

                <p>
                  நம் கலாச்சாரத்தின்
                  அழகையும் ஆன்மீகத்தின்
                  அமைதியையும் கொண்டாடும் நாள்.
                </p>
              </div>

              <div className="rising-card card-b">
                <small>DEVOTION</small>

                <h3>
                  பக்தி
                </h3>

                <p>
                  விநாயகரை நினைத்து நல்ல
                  எண்ணங்களுடன் ஒரு புதிய
                  தொடக்கத்தை வரவேற்போம்.
                </p>
              </div>

              <div className="rising-card card-c">
                <small>HAPPINESS</small>

                <h3>
                  மகிழ்ச்சி
                </h3>

                <p>
                  குடும்பத்துடன் இணைந்து
                  பகிர்ந்து கொள்ளும் இனிய
                  தருணங்கள் என்றும் நினைவாகட்டும்.
                </p>
              </div>

              <div className="rising-card card-d">
                <small>NEW BEGINNING</small>

                <h3>
                  புதிய தொடக்கம்
                </h3>

                <p>
                  ஒவ்வொரு முடிவிற்குப்
                  பின்னாலும் ஒரு புதிய
                  பாதை தொடங்குகிறது.
                </p>
              </div>

              <div className="rising-card card-e">
                <small>BLESSINGS</small>

                <h3>
                  அருள்
                </h3>

                <p>
                  விநாயகரின் அருள் உங்கள்
                  பயணத்தில் என்றும் துணையாக
                  இருக்கட்டும்.
                </p>
              </div>

            </div>

          </section>

          {/* ABOUT */}

          <section className="about-section">

            <div className="about-visual">

              <div className="about-circle">
                <Vinayagar />
              </div>

            </div>

            <div className="about-content">

              <span>
                THE FESTIVAL
              </span>

              <h2>
                தடைகளை
                <br />
                <strong>வெல்வோம்.</strong>
              </h2>

              <p>
                விநாயகர் சதுர்த்தி என்பது
                விநாயகரை வணங்கி, புதிய
                தொடக்கங்களையும் நல்ல
                எண்ணங்களையும் வரவேற்கும்
                ஒரு அழகான திருநாள்.
              </p>

              <p>
                இந்த இனிய நாளில் உங்கள்
                குடும்பத்திற்கும் நண்பர்களுக்கும்
                எங்களின் மனமார்ந்த
                நல்வாழ்த்துகளை தெரிவிக்கிறோம்.
              </p>

              <div className="about-sign">
                WITH BLESSINGS
                <strong>
                  XYRON WEBTECH
                </strong>
              </div>

            </div>

          </section>

          {/* SERVICES */}

          <section
            id="services"
            className="services-section"
          >

            <div className="section-heading">

              <span>
                BUILT BY XYRON WEBTECH
              </span>

              <h2>
                Digital
                <strong>
                  Experiences
                </strong>
              </h2>

              <p>
                இந்த interactive experience
                போல, உங்கள் brand-க்கும்
                unique digital experiences
                உருவாக்கலாம்.
              </p>

            </div>

            <div className="service-grid">

              {services.map(
                (service) => (
                  <article
                    className="service-card"
                    key={service.number}
                  >

                    <span>
                      {service.number}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.text}
                    </p>

                    <div className="service-arrow">
                      →
                    </div>

                  </article>
                )
              )}

            </div>

          </section>

          {/* FINAL CTA */}

          <section
            id="contact"
            className="final-section"
          >

            <div className="final-glow" />

            <div className="final-content">

              <span>
                A NEW BEGINNING
              </span>

              <h2>
                உங்கள்
                <br />
                <strong>
                  கனவுகளுக்கும்
                </strong>
                <br />
                ஒரு digital வடிவம்.
              </h2>

              <p>
                உங்கள் business, event அல்லது
                special occasion-க்கு memorable
                digital experience உருவாக்க
                XYRON WEBTECH-ஐ தொடர்பு
                கொள்ளுங்கள்.
              </p>

              <a
                className="contact-btn"
                href="mailto:xyronwebtechnology@gmail.com"
              >
                START A PROJECT
              </a>

            </div>

          </section>

          {/* FOOTER */}

          <footer className="site-footer">

            <div className="footer-brand">
              XYRON
              <span>WEBTECH</span>
            </div>

            <p>
              Turning Your Vision into
              Next-Generation Digital Solutions
            </p>

            <div className="footer-contact">

              <span>
                xyronwebtechnology@gmail.com
              </span>

              <span>
                xyronwebtech.com
              </span>

            </div>

            <div className="footer-bottom">

              © 2026 XYRON WEBTECH

              <span>
                HAPPY VINAYAGAR CHATURTHI
              </span>

            </div>

          </footer>

        </section>
      )}

    </main>
  );
}

export default App;