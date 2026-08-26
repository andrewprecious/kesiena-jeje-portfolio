import experienceStyles from "./experience.module.css";
import Navbar from "../../component/navbar/Navbar";

const Experience = () => {
  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={experienceStyles.experienceHero}>
        <div className={experienceStyles.heroInner}>
          <div className={experienceStyles.breadcrumb}>
            Home <span>›</span> Experience
          </div>

          <p className={experienceStyles.heroLabel}>PROFESSIONAL EXPERIENCE</p>

          <h1>
            Experience built
            <br />
            through <span>practical work.</span>
          </h1>

          <p className={experienceStyles.heroText}>
            Years of hands-on experience making, assembling, installing,
            repairing, and adjusting furniture, with a focus on quality,
            precision, and professional workmanship.
          </p>
        </div>
      </section>

      {/* ================= EXPERIENCE OVERVIEW ================= */}
      <section className={experienceStyles.overview}>
        <div className={experienceStyles.sectionHeading}>
          <p>MY EXPERIENCE</p>
          <h2>Hands-on knowledge you can rely on.</h2>
        </div>

        <div className={experienceStyles.overviewGrid}>
          <div className={experienceStyles.overviewText}>
            <p>
              My experience has been built through practical, hands-on furniture
              work, from constructing furniture from individual materials to
              assembling, installing, repairing and adjusting finished pieces.
            </p>

            <p>
              From assembling new furniture to repairing damaged fittings and
              making adjustments, I approach each job carefully and pay
              attention to the small details that make a difference to the
              finished result.
            </p>

            <p>
              I am comfortable working independently, managing tools and
              materials, and completing work in a clean and professional manner.
            </p>
          </div>

          <div className={experienceStyles.experienceStats}>
            <div className={experienceStyles.stat}>
              <span>01</span>
              <h3>Furniture Making</h3>
              <p>
                Constructing and finishing furniture from individual materials
                and components.
              </p>
            </div>

            <div className={experienceStyles.stat}>
              <span>02</span>
              <h3>Furniture Assembly</h3>
              <p>Flat-pack and larger furniture pieces.</p>
            </div>

            <div className={experienceStyles.stat}>
              <span>03</span>
              <h3>Furniture Installation</h3>
              <p>Professional fitting and installation.</p>
            </div>

            <div className={experienceStyles.stat}>
              <span>04</span>
              <h3>Furniture Repairs</h3>
              <p>Fixing damaged and loose components.</p>
            </div>

            <div
              className={`${experienceStyles.stat} ${experienceStyles.unique}`}
            >
              <span>05</span>
              <h3>Furniture Adjustments</h3>
              <p>Alignment, hinges, fittings and positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK EXPERIENCE ================= */}
      <section className={experienceStyles.workExperience}>
        <div className={experienceStyles.sectionHeading}>
          <p>WHAT I HAVE WORKED ON</p>
          <h2>Practical experience across different furniture projects.</h2>
        </div>

        <div className={experienceStyles.timeline}>
          {/* EXPERIENCE 01 */}
          <div className={experienceStyles.timelineItem}>
            <div className={experienceStyles.timelineNumber}>01</div>

            <div className={experienceStyles.timelineContent}>
              <p className={experienceStyles.timelineLabel}>
                FURNITURE MAKING & CONSTRUCTION
              </p>

              <h3>Making and constructing furniture from the ground up</h3>

              <p>
                Practical experience designing, constructing and finishing
                furniture pieces from individual materials and components. This
                includes measuring, cutting, joining, assembling and finishing
                furniture to achieve a strong, functional and well-finished
                result.
              </p>

              <div className={experienceStyles.tags}>
                <span>Furniture Construction</span>
                <span>Measuring & Cutting</span>
                <span>Cabinets</span>
                <span>Tables</span>
                <span>Wardrobes</span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE 02 */}
          <div className={experienceStyles.timelineItem}>
            <div className={experienceStyles.timelineNumber}>02</div>

            <div className={experienceStyles.timelineContent}>
              <p className={experienceStyles.timelineLabel}>
                FURNITURE ASSEMBLY
              </p>

              <h3>Assembling furniture from individual components</h3>

              <p>
                Experience assembling wardrobes, beds, tables, chairs, cabinets,
                shelving units and other furniture pieces. Work involves
                following assembly instructions, identifying components
                correctly and ensuring that the finished furniture is stable and
                properly fitted.
              </p>

              <div className={experienceStyles.tags}>
                <span>Wardrobes</span>
                <span>Beds</span>
                <span>Tables</span>
                <span>Cabinets</span>
                <span>Chairs</span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE 03 */}
          <div className={experienceStyles.timelineItem}>
            <div className={experienceStyles.timelineNumber}>03</div>

            <div className={experienceStyles.timelineContent}>
              <p className={experienceStyles.timelineLabel}>INSTALLATION</p>

              <h3>Installing and positioning furniture</h3>

              <p>
                Practical experience installing furniture and making sure pieces
                are correctly positioned, secured and functioning as intended.
                This includes working carefully around existing rooms, walls and
                other household fittings.
              </p>

              <div className={experienceStyles.tags}>
                <span>Cabinets</span>
                <span>TV Units</span>
                <span>Shelving</span>
                <span>Wardrobes</span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE 04 */}
          <div className={experienceStyles.timelineItem}>
            <div className={experienceStyles.timelineNumber}>04</div>

            <div className={experienceStyles.timelineContent}>
              <p className={experienceStyles.timelineLabel}>REPAIRS</p>

              <h3>Identifying and fixing furniture problems</h3>

              <p>
                Experience dealing with loose fittings, damaged components,
                loose joints, doors, drawers and other common furniture
                problems. I assess the issue and work towards a practical and
                lasting solution.
              </p>

              <div className={experienceStyles.tags}>
                <span>Loose fittings</span>
                <span>Doors</span>
                <span>Drawers</span>
                <span>Joints</span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE 05 */}
          <div className={experienceStyles.timelineItem}>
            <div className={experienceStyles.timelineNumber}>05</div>

            <div className={experienceStyles.timelineContent}>
              <p className={experienceStyles.timelineLabel}>
                ADJUSTMENTS & FINISHING
              </p>

              <h3>Making sure furniture works and looks right</h3>

              <p>
                Experience making final adjustments to furniture, including door
                alignment, hinges, drawer positioning, fittings and other small
                details. The aim is always to leave the finished piece
                functioning properly and looking neat.
              </p>

              <div className={experienceStyles.tags}>
                <span>Alignment</span>
                <span>Hinges</span>
                <span>Drawers</span>
                <span>Fittings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKING APPROACH ================= */}
      <section className={experienceStyles.approach}>
        <div className={experienceStyles.approachImage}>
          <img
            src="/images/dad_working.jpeg"
            alt="Furniture work in progress"
          />
        </div>

        <div className={experienceStyles.approachContent}>
          <p className={experienceStyles.sectionLabel}>MY APPROACH TO WORK</p>

          <h2>
            Careful work.
            <br />
            Proper results.
          </h2>

          <p>
            Good furniture work is not only about putting pieces together. It is
            about understanding the furniture, working carefully and making sure
            everything is properly finished.
          </p>

          <div className={experienceStyles.approachList}>
            <div>
              <span>01</span>
              <div>
                <h3>Attention to detail</h3>
                <p>
                  I take care with measurements, fittings, alignment and
                  finishing.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>Practical problem solving</h3>
                <p>
                  I look for practical solutions when furniture does not fit or
                  function as expected.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Clean and professional work</h3>
                <p>
                  I aim to complete each job carefully and leave the working
                  area tidy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={experienceStyles.experienceCTA}>
        <p>LOOKING FOR A SKILLED FURNITURE PROFESSIONAL?</p>

        <h2>
          Let's talk about
          <br />
          your next project.
        </h2>

        <p className={experienceStyles.ctaText}>
          Get in touch to discuss the work you need and how I can help.
        </p>

        <button>Contact Me&nbsp; →</button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={experienceStyles.footer}>
        <div>
          <h3>DJJS FURNITURE WORLD</h3>
          <p>Furniture Installation & Assembly</p>
        </div>

        <div className={experienceStyles.footerLinks}>
          <a href="/">Home</a>
          <a href="/experience">Experience</a>
          <a href="/gallery">Gallery</a>
          <a href="/skills">Skills</a>
          <a href="/contact-me">Contact Me</a>
        </div>

        <p className={experienceStyles.copyright}>
          © 2026 DJJS Furniture World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Experience;
