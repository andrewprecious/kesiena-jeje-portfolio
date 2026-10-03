import React from "react";
import { Link } from "react-router-dom";
import skillsStyles from "./skills.module.css";
import Navbar from "../../component/navbar/Navbar";

const Skills = () => {
  const practiceVideos = [
    {
      src: "/media/skill-vid6.mp4",
      number: "01",
      category: "INTERIOR DOORS",
      title: "Working on Wooden Door",
      description:
        "A look at practical work involving wooden door, from fitting components to ensuring a neat finished result.",
    },
    {
      src: "/media/skill-vid8.mp4",
      number: "02",
      category: "INTERIOR DOORS",
      title: "Working on Wooden an Interior Door",
      description:
        "Practical work involving wooden interior doors, with attention to fitting, alignment and a clean finished look.",
    },
    {
      src: "/media/bed-frame.mp4",
      number: "03",
      category: "BEDROOM",
      title: "Working on Bed Frame",
      description:
        "Practical furniture work involving bed frame and related components, with attention to the final details.",
    },
    {
      src: "/media/skill-vid9.mp4",
      number: "04",
      category: "KITCHEN FURNITURE",
      title: "Working on Kitchen Cabinets",
      description:
        "A look at kitchen cabinet work, including fitting components and achieving a properly aligned finish.",
    },
  ];

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
            attention to detail developed through practical furniture work,
            upholstery, sewing and installation.
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

      {/* ================= UPHOLSTERY SPECIALIZATION ================= */}
      <section className={skillsStyles.upholsterySection}>
        <div className={skillsStyles.upholsteryIntro}>
          <p className={skillsStyles.upholsteryLabel}>
            UPHOLSTERY SPECIALIZATION
          </p>

          <h2>
            Crafting comfort.
            <br />
            <span>Restoring furniture.</span>
          </h2>

          <p>
            Upholstery is an important part of my furniture work. From sewing
            upholstery fabrics to preparing and covering furniture, I pay
            attention to the details that contribute to a neat and comfortable
            finish.
          </p>
        </div>

        <div className={skillsStyles.upholsteryGrid}>
          <div className={skillsStyles.upholsteryImage}>
            <img
              src="/images/sewing-machine.jpeg"
              alt="Industrial sewing machine used for upholstery work"
              loading="lazy"
            />

            <div className={skillsStyles.upholsteryImageCaption}>
              <span>01</span>
              <h3>Industrial Sewing Equipment</h3>
              <p>Equipment used for upholstery stitching and fabric work.</p>
            </div>
          </div>

          <div className={skillsStyles.upholsteryImage}>
            <img
              src="/images/dad-pic.jpeg"
              alt="Furniture upholsterer sewing upholstery fabric"
              loading="lazy"
            />

            <div className={skillsStyles.upholsteryImageCaption}>
              <span>02</span>
              <h3>Upholstery Sewing</h3>
              <p>Working carefully with fabrics, seams and stitching.</p>
            </div>
          </div>

          <div className={skillsStyles.upholsteryImage}>
            <img
              src="/images/half-made.jpeg"
              alt="Upholstery work in progress"
              loading="lazy"
            />

            <div className={skillsStyles.upholsteryImageCaption}>
              <span>03</span>
              <h3>Furniture Upholstery</h3>
              <p>Preparing and fitting materials for upholstered furniture.</p>
            </div>
          </div>
        </div>

        <div className={skillsStyles.upholsteryServices}>
          <div>
            <span>01</span>
            <h3>Upholstery Sewing</h3>
            <p>
              Sewing upholstery fabrics and preparing materials for furniture
              covering.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Fabric Preparation</h3>
            <p>
              Measuring, cutting and preparing materials to suit the furniture
              being worked on.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Furniture Finishing</h3>
            <p>
              Paying attention to the final appearance, alignment and detailing
              of upholstered furniture.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS IN PRACTICE ================= */}
      <section className={skillsStyles.skillsPractice}>
        <div className={skillsStyles.practiceHeading}>
          <p>WORK IN ACTION</p>

          <h2>
            Different projects.
            <br />
            <span>Practical craftsmanship.</span>
          </h2>

          <p className={skillsStyles.practiceIntro}>
            Explore my practical furniture work across different projects,
            including bedroom furniture, living room pieces, dining furniture
            and kitchen installations. Each project reflects the care and
            attention involved in furniture making, assembly and finishing.
          </p>
        </div>

        <div className={skillsStyles.videoGrid}>
          {practiceVideos.map((video) => (
            <div className={skillsStyles.videoCard} key={video.number}>
              <div className={skillsStyles.videoWrapper}>
                <video controls muted preload="metadata" playsInline>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className={skillsStyles.videoInfo}>
                <span>
                  {video.number} — {video.category}
                </span>

                <h3>{video.title}</h3>

                <p>{video.description}</p>
              </div>
            </div>
          ))}
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
                Using appropriate hand tools, equipment and sewing machinery for
                furniture construction, upholstery and installation.
              </p>
            </div>
          </div>

          <div className={skillsStyles.technicalItem}>
            <span>03</span>

            <div>
              <h3>Fabric Handling & Sewing</h3>
              <p>
                Working with upholstery materials and paying attention to
                stitching, seams and fabric preparation.
              </p>
            </div>
          </div>

          <div className={skillsStyles.technicalItem}>
            <span>04</span>

            <div>
              <h3>Problem Solving</h3>
              <p>
                Identifying fitting, alignment and material-related problems and
                finding practical solutions.
              </p>
            </div>
          </div>

          <div className={skillsStyles.technicalItem}>
            <span>05</span>

            <div>
              <h3>Attention to Detail</h3>
              <p>
                Checking fittings, stitching, alignment and finishing details to
                achieve a clean final result.
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
              Taking care with measurements, fittings, stitching, alignment and
              finishing.
            </p>
          </div>

          <div>
            <h3>Problem Solving</h3>
            <p>
              Finding practical solutions when unexpected issues arise during
              furniture and upholstery work.
            </p>
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
        <p>LOOKING FOR A FURNITURE PROFESSIONAL?</p>

        <h2>
          Let's talk about
          <br />
          your next project.
        </h2>

        <Link to="/contact-me" className={skillsStyles.ctaButton}>
          Contact Me&nbsp; →
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={skillsStyles.footer}>
        <div>
          <h3>DJJS FURNITURE WORLD</h3>
          <p>Furniture Installation, Assembly & Upholstery</p>
        </div>

        <div className={skillsStyles.footerLinks}>
          <Link to="/">Home</Link>
          <Link to="/about-me">About Me</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact-me">Contact Me</Link>
        </div>

        <p className={skillsStyles.copyright}>
          © 2026 DJJS Furniture World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Skills;
