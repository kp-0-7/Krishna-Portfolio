import './App.css'
import me from './assets/me.jpg'
import bengaluruElevation from './assets/bengaluru-elevation.png'

import { useState } from 'react';

function App() {
  const [showEnglishProject, setShowEnglishProject] = useState(false);
  return (
    <main>

      {/* =================================================
          CURTAIN INTRO
      ================================================= */}

      <div className="curtain-intro">

        {/* LEFT CURTAIN */}
        <div className="curtain curtain-left">

          <div className="curtain-stars">
            <span>✦</span>
            <span>✧</span>
            <span>·</span>
            <span>✦</span>
            <span>✧</span>
            <span>·</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
          </div>

        </div>


        {/* RIGHT CURTAIN */}
        <div className="curtain curtain-right">

          <div className="curtain-stars">
            <span>✧</span>
            <span>·</span>
            <span>✦</span>
            <span>✧</span>
            <span>·</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
            <span>✦</span>
            <span>·</span>
            <span>✧</span>
            <span>✦</span>
          </div>

        </div>

      </div>

      {/* =================================================
          BACKGROUND STARS
      ================================================= */}

      <div className="background-stars">

        <span>✦</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>✦</span>

        <span>·</span>
        <span>✧</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>✦</span>
        <span>·</span>

        <span>✧</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>✦</span>
      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav>

        <h2>Krish.</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* =================================================
          DECORATIVE CLOUDS
      ================================================= */}

      <div className="cloud cloud-left-top">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cloud cloud-left-bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cloud cloud-right-top">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cloud cloud-right-bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">

        {/* -----------------------------------------------
            LEFT SIDE — TEXT
        ----------------------------------------------- */}

        <div className="hero-content">

          <p className="hello">
            Hi, I'm
          </p>

          <h1>
            Krishnapriya
            <br />
            Singh
          </h1>

          <h2>
            First-year developer & builder.
          </h2>

          <p className="hero-description">
            I'm learning, experimenting, and building things
            that I'm genuinely excited about.
          </p>

          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Projects
          </button>

        </div>


        {/* -----------------------------------------------
            RIGHT SIDE — PLANET
        ----------------------------------------------- */}

        <div className="planet-container">

          <div className="planet-glow"></div>

          <div className="planet">

            {/* Atmosphere */}
            <div className="planet-atmosphere"></div>

            {/* Surface lighting */}
            <div className="planet-light"></div>

            {/* Subtle surface clouds */}
            <div className="surface-cloud surface-cloud-one"></div>
            <div className="surface-cloud surface-cloud-two"></div>
            <div className="surface-cloud surface-cloud-three"></div>

          </div>


          {/* =================================================
              SATURN STYLE RINGS
          ================================================= */}

          <div className="saturn-ring ring-1"></div>
<div className="saturn-ring ring-2"></div>
<div className="saturn-ring ring-3"></div>
<div className="saturn-ring ring-4"></div>
<div className="saturn-ring ring-5"></div>
        </div>

      </section>


      {/* =================================================
          ABOUT
      ================================================= */}
<section id="about">
  <h2>About Me</h2>

  <div className="about-content">

    <div className="about-text">
      <p>
        I'm a first-year student at VIT Vellore studying CSE Core,
        and I'm interested in technology, development, and building
        cool projects :D.
      </p>

      <p>
        I love learning new things, experimenting with ideas,
        and turning those ideas into something I can actually build.
      </p>
    </div>

    <div className="about-photo">
      <img src={me} alt="Krishnapriya" />
    </div>

  </div>
</section>


      {/* =================================================
          SKILLS
      ================================================= */}

      <section id="skills" className="content-section">

        <h2>
          Skills
        </h2>

        <div className="skill-list">

          <span>Python</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git</span>
          <span>QGIS</span>

          <span>Drawing</span>
          <span>Storytelling</span>
          <span>StoryWriting</span>
          <span>Dancing</span>
          <span>Singing</span>

        </div>

      </section>


      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      <section id="achievements" className="content-section">

        <h2>
          Achievements
        </h2>

        <div className="achievement-card">

          <h3>40+ Awards</h3>

          <p>
            Over 10 years at St Thomas Central School
            in Art and Literary Competitions.
          </p>

        </div>

        <div className="achievement-card">

          <h3>20+ Awards</h3>

          <p>
            Over 11 years participating in Hindi Pakhwada.
          </p>

        </div>

<div className="achievement-card">

          <h3>2 A grades</h3>

          <p>
            In south zone sahodaya 2023-24 for Hindi Recitation and English Recitation.
          </p>

        </div>

        <div className="achievement-card">

          <h3>3rd prize </h3>

          <p>
            For drawing competition held by SIP in Trivandrum in 2023-24.
          </p>

        </div>
<div className="achievement-card">

          <h3>1st Place — Girls' Kho-Kho Interclass Competition </h3>

          <p>
            Secured 1st place with my class team in Classes 9 and 10.
          </p>

        </div>

        <div className="achievement-card">

          <h3>10 Years of Bharatanatyam Training </h3>

          <p>
            Trained in Bharatanatyam for over 10 years, developing discipline, performance skills, and artistic expression.
          </p>

        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

<section id="projects" className="content-section projects-section">

  <h2>
    Projects
  </h2>

  {/* 3D ELEVATION PROJECT */}

  <div
    className="project-card english-project"
    onClick={() => setShowEnglishProject(!showEnglishProject)}
  >

    <h3>
  2D Map of Bangalore Drainage System
</h3>

    <span>
      {showEnglishProject ? "Hide Project ↑" : "View Project ↓"}
    </span>

    {showEnglishProject && (
      <div className="english-project-preview">

        <img
          src={bengaluruElevation}
          alt="3D elevation map of Bengaluru"
        />

      </div>
    )}

  </div>


  {/* DRAINAGE PROJECT */}

  <div className="project-card">
    <h3>
    Developed a 3D elevation map of Bengaluru using geospatial data to visualize variations in terrain and elevation
  </h3>

    <span>
      Completed
    </span>
  </div>


  {/* FPGA PROJECTS */}

  <div className="project-card">
    <h3>
      FPGA-Based Traffic Light Controller
    </h3>

    <span>
      Ongoing
    </span>
  </div>

  <div className="project-card">
    <h3>
      FPGA-Based Digital Stopwatch
    </h3>

    <span>
      Ongoing
    </span>
  </div>

  <div className="project-card">
    <h3>
      FPGA-Based Automatic Elevator Controller
    </h3>

    <span>
      Ongoing
    </span>
  </div>

  <div className="project-card">
    <h3>
      FPGA-Based Vending Machine Controller
    </h3>

    <span>
      Ongoing
    </span>
  </div>

  <div className="project-card">
    <h3>
      FPGA-Based Intelligent Traffic Management System
    </h3>

    <span>
      Ongoing
    </span>
  </div>

</section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section id="contact" className="content-section contact-section">

        <h2>
          Contact
        </h2>

        <p className="email">
          krishnapriya.singh2026@vitstudent.ac.in
        </p>

        <p>
          +91 62382 03638
        </p>

        <p className="connect">
          Let's connect!
        </p>

      </section>

    </main>
  )
}

export default App