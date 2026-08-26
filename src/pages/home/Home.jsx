import homeStyles from "./home.module.css";
import Navbar from "../../component/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <Navbar />

      <div className={homeStyles.hero}>
        {/* LEFT CLOUD / WHITE SECTION */}
        <div className={homeStyles.heroCloud}>
          <div className={homeStyles.heroCloudDescription}>
            <h3>HELLO, I'M</h3>

            <div className={homeStyles.heroCloudDescriptionLine}></div>

            <h1 className={homeStyles.heroCloudDescriptionName}>
              Kesiena Jeje
            </h1>

            <h2 className={homeStyles.heroCloudDescriptionSub}>
              Furniture Installer & <br />
              Assembly Specialist
            </h2>

            <p className={homeStyles.heroCloudDescriptionInfo}>
              I help homes and businesses with professional furniture assembly,
              installation, repair and adjustments. I take pride in delivering
              quality workmanship, attention to detail and reliable service
              every time.
            </p>
          </div>

          {/* QUALITIES */}
          <div className={homeStyles.heroCloudMore}>
            <div className={homeStyles.heroCloudMoreCard}>
              <img src="/images/award-svg.svg" alt="Reliable service" />
              <p>
                Reliable <br />
                Service
              </p>
            </div>

            <div className={homeStyles.heroCloudMoreCard}>
              <img src="/images/detail-svg.svg" alt="Attention to detail" />
              <p>
                Attention to <br />
                Detail
              </p>
            </div>

            <div className={homeStyles.heroCloudMoreCard}>
              <img src="/images/settings-svg.svg" alt="Quality workmanship" />
              <p>
                Quality <br />
                Workmanship
              </p>
            </div>

            <div className={homeStyles.heroCloudMoreCard}>
              <img src="/images/emoji-smile-svg.svg" alt="Customer focused" />
              <p>
                Customer <br />
                Focused
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className={homeStyles.heroCloudBtns}>
            <Link to="/gallery" className={homeStyles.heroCloudBtnOne}>
              <span>→</span>
              <p>View My Work</p>
            </Link>

            <Link to="/contact-me" className={homeStyles.heroCloudBtnTwo}>
              <span>→</span>
              <p>Contact Me</p>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={homeStyles.heroImg}>
          <img
            src="/images/dad_working.jpeg"
            alt="Kesiena Jeje working on furniture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
