import aboutStyles from "./aboutMe.module.css";
import Navbar from "../../component/navbar/Navbar";

const AboutMe = () => {
  return (
    <div className={aboutStyles.aboutPage}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={aboutStyles.aboutHero}>
        <div className={aboutStyles.heroContent}>
          <p className={aboutStyles.heroLabel}>ABOUT ME</p>

          <h1>
            Practical skills.
            <br />
            <span>Quality workmanship.</span>
          </h1>

          <p className={aboutStyles.heroText}>
            A furniture professional with hands-on experience in making,
            assembling, installing, repairing and adjusting furniture.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className={aboutStyles.introduction}>
        <div className={aboutStyles.introImage}>
          <img
            src="/images/dad_working.jpeg"
            alt="Kesiena Jeje working on furniture"
          />
        </div>

        <div className={aboutStyles.introContent}>
          <p className={aboutStyles.sectionLabel}>WHO I AM</p>

          <h2>
            I take pride in
            <br />
            <span>doing things properly.</span>
          </h2>

          <p>
            My name is Kesiena Jeje, and I am a furniture maker, installer and
            assembly specialist with practical experience working with different
            types of furniture.
          </p>

          <p>
            My work involves more than simply putting furniture together. I
            understand how furniture pieces are constructed, how different
            components work together and how to achieve a strong, functional and
            neat finished result.
          </p>

          <p>
            I approach every project with patience and attention to detail,
            making sure the work is completed properly and to a good standard.
          </p>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className={aboutStyles.whatIDo}>
        <div className={aboutStyles.sectionHeading}>
          <p>WHAT I DO</p>

          <h2>
            From making furniture
            <br />
            to getting it ready for use.
          </h2>
        </div>

        <div className={aboutStyles.skillsGrid}>
          <div className={aboutStyles.skillCard}>
            <span>01</span>
            <h3>Furniture Making</h3>
            <p>
              Constructing furniture from individual materials and components,
              with attention to strength, measurements and finishing.
            </p>
          </div>

          <div className={aboutStyles.skillCard}>
            <span>02</span>
            <h3>Furniture Assembly</h3>
            <p>
              Carefully assembling wardrobes, beds, tables, chairs, cabinets and
              other furniture pieces.
            </p>
          </div>

          <div className={aboutStyles.skillCard}>
            <span>03</span>
            <h3>Furniture Installation</h3>
            <p>
              Installing and positioning furniture so that it is secure,
              functional and properly fitted.
            </p>
          </div>

          <div className={aboutStyles.skillCard}>
            <span>04</span>
            <h3>Furniture Repairs</h3>
            <p>
              Identifying furniture problems and carrying out practical repairs
              to damaged or loose components.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WORKING VALUES ================= */}
      <section className={aboutStyles.values}>
        <div className={aboutStyles.valuesContent}>
          <p className={aboutStyles.sectionLabel}>HOW I WORK</p>

          <h2>
            Good work is in
            <br />
            <span>the details.</span>
          </h2>

          <p>
            I believe quality furniture work requires patience, accuracy and
            practical problem-solving. I take the time to understand the job
            before starting and aim to leave every piece properly finished.
          </p>
        </div>

        <div className={aboutStyles.valuesList}>
          <div className={aboutStyles.value}>
            <span>01</span>
            <div>
              <h3>Attention to Detail</h3>
              <p>Careful measurements, fittings, alignment and finishing.</p>
            </div>
          </div>

          <div className={aboutStyles.value}>
            <span>02</span>
            <div>
              <h3>Reliability</h3>
              <p>
                Taking responsibility for the work and completing jobs properly.
              </p>
            </div>
          </div>

          <div className={aboutStyles.value}>
            <span>03</span>
            <div>
              <h3>Practical Problem Solving</h3>
              <p>
                Finding sensible solutions when furniture does not fit, function
                or align as expected.
              </p>
            </div>
          </div>

          <div className={aboutStyles.value}>
            <span>04</span>
            <div>
              <h3>Professional Workmanship</h3>
              <p>
                Working carefully and keeping the finished result clean and
                presentable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL STATEMENT ================= */}
      <section className={aboutStyles.statement}>
        <div>
          <p>MY APPROACH</p>

          <h2>
            I don't just want to
            <br />
            <span>complete the job.</span>
          </h2>

          <p className={aboutStyles.statementText}>
            I want the finished furniture to be strong, functional, properly
            fitted and something the customer can be happy with.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={aboutStyles.aboutCTA}>
        <p>WORKING WITH ME</p>

        <h2>
          Have a furniture
          <br />
          project in mind?
        </h2>

        <p>Get in touch to discuss your requirements and the work you need.</p>

        <button>Contact Me&nbsp; →</button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={aboutStyles.footer}>
        <div>
          <h3>DJJS FURNITURE WORLD</h3>
          <p>Furniture Making, Installation & Assembly</p>
        </div>

        <div className={aboutStyles.footerLinks}>
          <a href="/">Home</a>
          <a href="/about-me">About Me</a>
          <a href="/experience">Experience</a>
          <a href="/gallery">Gallery</a>
          <a href="/skills">Skills</a>
          <a href="/contact-me">Contact Me</a>
        </div>

        <p className={aboutStyles.copyright}>
          © 2026 DJJS Furniture World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutMe;
