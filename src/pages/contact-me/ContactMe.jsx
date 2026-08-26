import contactStyles from "./contactme.module.css";
import Navbar from "../../component/navbar/Navbar";

const ContactMe = () => {
  return (
    <div className={contactStyles.contactPage}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={contactStyles.contactHero}>
        <div className={contactStyles.heroContent}>
          <p className={contactStyles.heroLabel}>CONTACT ME</p>

          <h1>
            Let's talk about
            <br />
            <span>the next opportunity.</span>
          </h1>

          <p className={contactStyles.heroText}>
            I am available for opportunities in furniture installation, assembly
            and related practical work. If you are looking for someone with
            hands-on experience and strong attention to detail, I would be happy
            to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className={contactStyles.contactSection}>
        {/* ================= CONTACT INFORMATION ================= */}
        <div className={contactStyles.contactInfo}>
          <p className={contactStyles.sectionLabel}>GET IN TOUCH</p>

          <h2>
            I would be happy
            <br />
            to hear from you.
          </h2>

          <p className={contactStyles.introText}>
            Whether you are an employer, contractor or company looking for an
            experienced furniture professional, feel free to get in touch to
            discuss an available position or opportunity.
          </p>

          {/* CONTACT DETAILS */}
          <div className={contactStyles.contactDetails}>
            {/* PHONE */}
            <div className={contactStyles.contactItem}>
              <span>01</span>

              <div>
                <h3>Phone</h3>

                <a href="tel:+2348114015805">+234 811 401 5805</a>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className={contactStyles.contactItem}>
              <span>02</span>

              <div>
                <h3>WhatsApp</h3>

                <a
                  href="https://wa.me/2348104124252"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send a WhatsApp message
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className={contactStyles.contactItem}>
              <span>03</span>

              <div>
                <h3>Email</h3>

                <a href="mailto:kessyafricana@gmail.com@gmail.com">
                  kessyafricana@gmail.com@gmail.com
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className={contactStyles.contactItem}>
              <span>04</span>

              <div>
                <h3>Location</h3>

                <p>Delta State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MESSAGE FORM ================= */}
        <div className={contactStyles.formContainer}>
          <div className={contactStyles.formHeading}>
            <p>SEND A MESSAGE</p>

            <h3>I'd be happy to hear from you.</h3>
          </div>

          {/* ================= WORKING FORM ================= */}
          <form
            action="https://formsubmit.co/kessyafricana@gmail.com"
            method="POST"
          >
            {/* NAME */}
            <div className={contactStyles.formGroup}>
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* COMPANY */}
            <div className={contactStyles.formGroup}>
              <label htmlFor="company">Company / Organization</label>

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter company or organization"
              />
            </div>

            {/* PHONE + EMAIL */}
            <div className={contactStyles.formRow}>
              {/* PHONE */}
              <div className={contactStyles.formGroup}>
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className={contactStyles.formGroup}>
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>

            {/* POSITION */}
            <div className={contactStyles.formGroup}>
              <label htmlFor="position">Position / Opportunity</label>

              <input
                type="text"
                id="position"
                name="position"
                placeholder="e.g. Furniture Installer"
              />
            </div>

            {/* MESSAGE */}
            <div className={contactStyles.formGroup}>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about the opportunity..."
                required
              ></textarea>
            </div>

            {/* ================= FORMSUBMIT SETTINGS ================= */}

            {/* Email subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Job Opportunity - DJJS Furniture World"
            />

            {/*Don't Disable captcha */}
            <input
              type="hidden"
              name="_captcha"
              value="New Job Opportunity - DJJS Furniture World"
            />

            {/* Email layout */}
            <input type="hidden" name="_template" value="table" />

            {/* ================= SUBMIT ================= */}

            <button type="submit">Send Message&nbsp; →</button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={contactStyles.footer}>
        <div>
          <h3>DJJS FURNITURE WORLD</h3>

          <p>Furniture Installation & Assembly</p>
        </div>

        <div className={contactStyles.footerLinks}>
          <a href="/">Home</a>

          <a href="/about-me">About Me</a>

          <a href="/experience">Experience</a>

          <a href="/gallery">Gallery</a>

          <a href="/skills">Skills</a>

          <a href="/contact-me">Contact Me</a>
        </div>

        <p className={contactStyles.copyright}>
          © 2026 DJJS Furniture World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactMe;
