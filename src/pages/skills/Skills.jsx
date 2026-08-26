import skillsStyles from "./skills.module.css";
import Navbar from "../../component/navbar/Navbar";

const Skills = () => {
  return (
    <div className={skillsStyles.skillsPage}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={skillsStyles.skillsHero}>
        <div className={skillsStyles.heroContent}>
          <p className={skillsStyles.heroLabel}>MY SKILLS</p>

          <h1>
            Practical skills.
            <br />
            <span>Quality workmanship.</span>
          </h1>

          <p className={skillsStyles.heroText}>
            A combination of hands-on experience, technical ability and
            attention to detail developed through practical furniture work.
          </p>
        </div>
      </section>

      {/* ================= CORE SKILLS ================= */}
      <section className={skillsStyles.coreSkills}>
        <div className={skillsStyles.sectionHeading}>
          <p>CORE SKILLS</p>

          <h2>
            Skills developed
            <br />
            through practical work.
          </h2>
        </div>

        <div className={skillsStyles.skillsGrid}>
          <div className={skillsStyles.skillCard}>
            <span>01</span>
            <h3>Furniture Making</h3>
            <p>
              Constructing furniture from individual materials and components,
              with attention to measurements, structure and finishing.
            </p>
          </div>

          <div className={skillsStyles.skillCard}>
            <span>02</span>
            <h3>Furniture Assembly</h3>
            <p>
              Assembling different types of furniture accurately and ensuring
              that each component is properly fitted.
            </p>
          </div>

          <div className={skillsStyles.skillCard}>
            <span>03</span>
            <h3>Furniture Installation</h3>
            <p>
              Installing and positioning furniture securely while making sure it
              functions correctly within its space.
            </p>
          </div>

          <div className={skillsStyles.skillCard}>
            <span>04</span>
            <h3>Furniture Repairs</h3>
            <p>
              Identifying furniture problems and carrying out practical repairs
              to damaged, loose or broken components.
            </p>
          </div>

          <div className={skillsStyles.skillCard}>
            <span>05</span>
            <h3>Furniture Adjustments</h3>
            <p>
              Making adjustments to doors, hinges, drawers, fittings and other
              components to improve their function.
            </p>
          </div>

          <div className={skillsStyles.skillCard}>
            <span>06</span>
            <h3>Furniture Finishing</h3>
            <p>
              Paying attention to the final details, alignment and overall
              appearance of completed furniture.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS IN PRACTICE ================= */}
      <section className={skillsStyles.skillsPractice}>
        <div className={skillsStyles.practiceHeading}>
          <p>SKILLS IN PRACTICE</p>

          <h2>
            See the work
            <br />
            in action.
          </h2>

          <p className={skillsStyles.practiceIntro}>
            Real examples of furniture work completed through practical hands-on
            experience.
          </p>
        </div>

        <div className={skillsStyles.videoGrid}>
          {/* VIDEO 1 */}
          <div className={skillsStyles.videoCard}>
            <div className={skillsStyles.videoWrapper}>
              <video controls preload="metadata">
                <source src="/media/skill-vid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={skillsStyles.videoInfo}>
              <span>01</span>
              <h3> Completed Bedroom Furniture</h3>
              <p>
                A look at completed bedroom furniture, highlighting the finished
                appearance, fitting and overall workmanship.
              </p>
            </div>
          </div>

          {/* VIDEO 2 */}
          <div className={skillsStyles.videoCard}>
            <div className={skillsStyles.videoWrapper}>
              <video controls preload="metadata">
                <source src="/media/skill-vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={skillsStyles.videoInfo}>
              <span>02</span>
              <h3>Assembling a TV Console & Sofas</h3>
              <p>
                Putting together TV consoles and sofas, carefully fitting the
                individual components to create sturdy, properly finished
                furniture.
              </p>
            </div>
          </div>

          {/* VIDEO 3 */}
          <div className={skillsStyles.videoCard}>
            <div className={skillsStyles.videoWrapper}>
              <video controls preload="metadata">
                <source src="/media/skill-vid4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={skillsStyles.videoInfo}>
              <span>03</span>
              <h3>Finished Dining Table</h3>
              <p>
                A completed dining table showcasing the finished design,
                structure and attention to detail.
              </p>
            </div>
          </div>

          {/* VIDEO 4 */}
          <div className={skillsStyles.videoCard}>
            <div className={skillsStyles.videoWrapper}>
              <video controls preload="metadata">
                <source src="/media/skill-vid5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={skillsStyles.videoInfo}>
              <span>04</span>
              <h3>Finished Kitchen Cabinets</h3>
              <p>
                A completed kitchen cabinet setup, showcasing the finished look
                and details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SKILLS ================= */}
      <section className={skillsStyles.technicalSkills}>
        <div className={skillsStyles.technicalIntro}>
          <p>TECHNICAL ABILITIES</p>

          <h2>
            More than just
            <br />
            putting furniture together.
          </h2>
        </div>

        <div className={skillsStyles.technicalList}>
          <div className={skillsStyles.technicalItem}>
            <span>01</span>

            <div>
              <h3>Measurement & Accuracy</h3>
              <p>
                Taking measurements carefully and checking dimensions before and
                during furniture work.
              </p>
            </div>
          </div>

          <div className={skillsStyles.technicalItem}>
            <span>02</span>

            <div>
              <h3>Tool Handling</h3>
              <p>
                Confident use of appropriate hand tools and equipment for
                furniture construction, assembly and installation.
              </p>
            </div>
          </div>

          <div className={skillsStyles.technicalItem}>
            <span>03</span>

            <div>
              <h3>Problem Solving</h3>
              <p>
                Identifying fitting and alignment problems and finding practical
                solutions.
              </p>
            </div>
          </div>

          <div className={skillsStyles.technicalItem}>
            <span>04</span>

            <div>
              <h3>Attention to Detail</h3>
              <p>
                Checking fittings, alignment and finishing details to achieve a
                clean final result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROFESSIONAL SKILLS ================= */}
      <section className={skillsStyles.professionalSkills}>
        <div className={skillsStyles.professionalHeading}>
          <p>PROFESSIONAL SKILLS</p>

          <h2>
            How I approach
            <br />
            every project.
          </h2>
        </div>

        <div className={skillsStyles.professionalGrid}>
          <div>
            <h3>Reliability</h3>
            <p>
              Taking responsibility for the work and completing jobs properly.
            </p>
          </div>

          <div>
            <h3>Attention to Detail</h3>
            <p>
              Taking care with measurements, fittings, alignment and finishing.
            </p>
          </div>

          <div>
            <h3>Problem Solving</h3>
            <p>Finding practical solutions when unexpected issues arise.</p>
          </div>

          <div>
            <h3>Clean Workmanship</h3>
            <p>
              Working carefully and aiming to leave a clean and professional
              finished result.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={skillsStyles.skillsCTA}>
        <p>LOOKING FOR A SKILLED FURNITURE PROFESSIONAL?</p>

        <h2>
          Let's talk about
          <br />
          your next project.
        </h2>

        <button>Contact Me&nbsp; →</button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={skillsStyles.footer}>
        <div>
          <h3>DJJS FURNITURE WORLD</h3>
          <p>Furniture Installation & Assembly</p>
        </div>

        <div className={skillsStyles.footerLinks}>
          <a href="/">Home</a>
          <a href="/about-me">About Me</a>
          <a href="/experience">Experience</a>
          <a href="/contact-me">Gallery</a>
          <a href="/skills">Skills</a>
          <a href="/contact-me">Contact Me</a>
        </div>

        <p className={skillsStyles.copyright}>
          © 2026 DJJS Furniture World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Skills;
