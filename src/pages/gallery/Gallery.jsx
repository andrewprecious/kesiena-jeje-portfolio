import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import galleryStyles from "./gallery.module.css";
import Navbar from "../../component/navbar/Navbar";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================================================
     GENERAL FURNITURE GALLERY
  ========================================================= */

  const galleryImages = [
    {
      src: "/images/bed.jpeg",
      title: "Finished Bed Furniture",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/tv-console.jpeg",
      title: "Finished TV Console",
      category: "living",
      label: "LIVING ROOM",
    },
    {
      src: "/images/dinning-table.jpeg",
      title: "Dining Furniture",
      category: "dining",
      label: "DINING",
    },
    {
      src: "/images/kitchen-cabinet.jpeg",
      title: "Kitchen Cabinets",
      category: "kitchen",
      label: "KITCHEN",
    },
    {
      src: "/images/wardrobe.jpeg",
      title: "Finished Wardrobe",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/living-room.jpeg",
      title: "Living Room Furniture",
      category: "living",
      label: "LIVING ROOM",
    },
    {
      src: "/images/chairs.jpeg",
      title: "Sofas & Chairs",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/couch.jpeg",
      title: "L-shaped sectional couch",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/marble-table.jpeg",
      title: "Marble Top Table",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/m-table.jpeg",
      title: "Marble Top Table",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/marble-t-two.jpeg",
      title: "Marble Top Table",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/wardrobe-two.jpeg",
      title: "Wardrobe",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/wardrobe-three.jpeg",
      title: "Wardrobe",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/vanity-mirror.jpeg",
      title: "Vanity Mirror",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/bed-drawer.jpeg",
      title: "Bed Drawer",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/wardrobe-four.jpeg",
      title: "Wardrobe",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/wardrobe-five.jpeg",
      title: "Wardrobe",
      category: "bedroom",
      label: "BEDROOM",
    },
    {
      src: "/images/sofa.jpeg",
      title: "Finished Sofa",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/table.jpeg",
      title: "Finished Table",
      category: "dining",
      label: "DINING",
    },
    {
      src: "/images/sofa_two.jpeg",
      title: "Finished Sofa",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/sofa-three.jpeg",
      title: "Finished Sofa",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/chair-two.jpeg",
      title: "Sofas & Chairs",
      category: "living",
      label: "SEATING",
    },
    {
      src: "/images/after-t.jpeg",
      title: "Finished Office Furiture",
      category: "office",
      label: "OFFICE",
    },
    {
      src: "/images/beauty-workstation.jpeg",
      title: "Finished Vanity Mirror",
      category: "office",
      label: "OFFICE",
    },
    {
      src: "/images/tv-console-two.jpeg",
      title: "Finished TV Console",
      category: "living",
      label: "LIVING ROOM",
    },
    {
      src: "/images/door.jpeg",
      title: "Finished Interior Wooden Door",
      category: "door",
      label: "DOOR",
    },
    {
      src: "/images/door-two.jpeg",
      title: "Finished Interior Wooden Door",
      category: "door",
      label: "DOOR",
    },
    {
      src: "/images/door-three.jpeg",
      title: "Finished Interior Wooden Door",
      category: "door",
      label: "DOOR",
    },
  ];

  /* =========================================================
     HOTEL PROJECT
  ========================================================= */

  const hotelWorkVideos = [
    {
      src: "/media/room3.mp4",
      title: "Furniture Work on Site",
      description:
        "A look at the practical furniture work carried out during the hotel project.",
    },
    {
      src: "/media/hotel-room-three.mp4",
      title: "Working on Hotel Furniture",
      description:
        "Furniture being worked on and prepared as part of the hotel project.",
    },
    {
      src: "/media/gares-hotel.mp4",
      title: "Working on Hotel Furniture",
      description:
        "Furniture being worked on and prepared as part of the hotel project.",
    },
    {
      src: "/media/room2.mp4",
      title: "Hotel Furniture Installation",
      description: "Furniture installation and fitting carried out on site.",
    },
    {
      src: "/media/room4.mp4",
      title: "Hotel Furniture Work",
      description:
        "Practical work involved in preparing and fitting the hotel furniture.",
    },
    {
      src: "/media/room-boy.mp4",
      title: "Working on Hotel Furniture",
      description:
        "Furniture being worked on and prepared as part of the hotel project.",
    },
  ];

  /* =========================================================
     BEFORE & AFTER
  ========================================================= */

  const beforeAfterProjects = [
    {
      before: "/images/before-chair.jpeg",
      after: "/images/sofa-three.jpeg",
      title: "Chairs",
      description:
        "From the furniture-making stage to the completed finished chair.",
    },
    {
      before: "/images/before-t.jpeg",
      after: "/images/after-t.jpeg",
      title: "Office Furniture",
      description:
        "A look at the work before completion and the finished office furniture.",
    },
    {
      before: "/images/before-c.jpeg",
      after: "/images/sofa_two.jpeg",
      title: "Sofa",
      description:
        "Living Room furniture from the working stage through to the finished installation.",
    },
    {
      before: "/images/hotel-before.jpeg",
      after: "/images/hotel-after.jpeg",
      title: "Hotel Tables",
      description:
        "The furniture during production compared with the completed piece.",
    },
  ];

  /* =========================================================
     OTHER FURNITURE PROJECTS — NOT GARES HOTEL
  ========================================================= */

  const otherFurnitureVideos = [
    {
      src: "/media/bed.mp4",
      title: "Completed Bedroom Furniture",
      description:
        "A look at the completed bedroom furniture, showcasing the finished work and attention to detail.",
    },
    {
      src: "/media/living.mp4",
      title: "Finished TV Console & Chairs",
      description:
        "Completed living room furniture, showing the finished TV console and seating.",
    },
    {
      src: "/media/skill-vid4.mp4",
      title: "Finished Dining Table",
      description:
        "A completed dining table, highlighting the final appearance of the furniture.",
    },
    {
      src: "/media/skill-vid5.mp4",
      title: "Finished Kitchen Cabinets",
      description:
        "A look at completed kitchen cabinets from another furniture project.",
    },
    {
      src: "/media/lots-of-chairs.mp4",
      title: "Finished Chairs",
      description:
        "A look at completed chairs, showcasing the finished design and attention to detail.",
    },
    {
      src: "/media/office-stuff-two.mp4",
      title: "Finished Office Furniture",
      description:
        "A look at completed office furniture, showcasing clean design, practical functionality and attention to detail.",
    },
    {
      src: "/media/wardrobe-three.mp4",
      title: "Completed Bedroom Furniture",
      description:
        "A look at the completed bedroom furniture, showcasing the finished work and attention to detail.",
    },
    {
      src: "/media/tv-console-two.mp4",
      title: "Finished TV Console & Chairs",
      description:
        "Completed living room furniture, showing the finished TV console and seating.",
    },
    {
      src: "/media/dad_own.mp4",
      title: "Finished Office Furniture",
      description:
        "A look at completed office furniture, showcasing clean design, practical functionality and attention to detail.",
    },
  ];

  /* =========================================================
     FILTERS
  ========================================================= */

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Bedroom", value: "bedroom" },
    { label: "Living Room", value: "living" },
    { label: "Dining", value: "dining" },
    { label: "Kitchen", value: "kitchen" },
    { label: "office", value: "office" },
    { label: "door", value: "door" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  /* =========================================================
     LIGHTBOX
  ========================================================= */

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const showNextImage = () => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (image) =>
        image.src === selectedImage.src && image.title === selectedImage.title
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const showPreviousImage = () => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (image) =>
        image.src === selectedImage.src && image.title === selectedImage.title
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();

      if (event.key === "ArrowRight") {
        showNextImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, filteredImages]);

  /* =========================================================
     LIMIT VIDEOS TO 20 SECONDS
  ========================================================= */

  const limitVideoPlayback = (event) => {
    if (event.currentTarget.currentTime >= 20) {
      event.currentTarget.pause();
      event.currentTarget.currentTime = 20;
    }
  };

  return (
    <div className={galleryStyles.galleryPage}>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={galleryStyles.hero} id="home">
          <div className={galleryStyles.heroBackground} />
          <div className={galleryStyles.heroOverlay} />

          <div className={galleryStyles.heroContent}>
            <p className={`${galleryStyles.eyebrow} ${galleryStyles.light}`}>
              DJJS FURNITURE WORLD · OUR PORTFOLIO
            </p>

            <h1>
              Crafted furniture.
              <br />
              <span>Beautifully finished.</span>
            </h1>

            <p className={galleryStyles.heroDescription}>
              Explore completed furniture projects, practical workmanship,
              installations and finished spaces delivered with care and
              attention to detail.
            </p>

            <div className={galleryStyles.heroActions}>
              <a href="#featured" className={galleryStyles.btnLight}>
                Explore Our Work <span>↘</span>
              </a>

              <a href="#hotel" className={galleryStyles.textLink}>
                View Hotel Project <span>→</span>
              </a>
            </div>
          </div>

          <div className={galleryStyles.heroBottom}>
            <span>FURNITURE · INSTALLATION · FINISHING</span>
            <span>01 / PORTFOLIO</span>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className={galleryStyles.introSection}>
          <div className={galleryStyles.introLabel}>
            <span className={galleryStyles.smallLine} />
            <p>MADE WITH ATTENTION TO DETAIL</p>
          </div>

          <div className={galleryStyles.introContent}>
            <h2>
              Good furniture.
              <br />
              <span>Exceptional finishing.</span>
            </h2>

            <p>
              Every completed project reflects practical craftsmanship, careful
              fitting and attention to the final result. Explore furniture made,
              assembled and installed across different spaces.
            </p>
          </div>

          <div className={galleryStyles.introNumber}>
            <span>DJJS</span>
            <p>
              FURNITURE
              <br />
              PORTFOLIO
            </p>
          </div>
        </section>

        {/* =====================================================
            FEATURED PROJECTS
        ===================================================== */}

        <section className={galleryStyles.featuredSection} id="featured">
          <div className={galleryStyles.sectionTop}>
            <div>
              <p className={galleryStyles.eyebrow}>SELECTED PROJECTS</p>

              <h2>
                Work worth
                <br />
                <span>looking closer at.</span>
              </h2>
            </div>

            <p className={galleryStyles.sectionDescription}>
              A selection of completed furniture projects, installations and
              finished interior pieces.
            </p>
          </div>

          <div className={galleryStyles.featuredGrid}>
            <button
              type="button"
              className={`${galleryStyles.featuredCard} ${galleryStyles.featuredMain}`}
              onClick={() => openImage(galleryImages[0])}
            >
              <img src="/images/bed.jpeg" alt="Completed bedroom furniture" />

              <div className={galleryStyles.featuredOverlay}>
                <span>01 / BEDROOM</span>
                <h3>Designed for everyday living.</h3>
                <p>Completed bedroom furniture</p>
              </div>
            </button>

            <div className={galleryStyles.featuredSide}>
              <button
                type="button"
                className={galleryStyles.featuredCard}
                onClick={() => openImage(galleryImages[1])}
              >
                <img src="/images/tv-console.jpeg" alt="Finished TV console" />

                <div className={galleryStyles.featuredOverlay}>
                  <span>02 / LIVING ROOM</span>
                  <h3>Clean lines. Refined details.</h3>
                  <p>Finished TV console</p>
                </div>
              </button>

              <button
                type="button"
                className={galleryStyles.featuredCard}
                onClick={() => openImage(galleryImages[2])}
              >
                <img
                  src="/images/dinning-table.jpeg"
                  alt="Finished dining furniture"
                />

                <div className={galleryStyles.featuredOverlay}>
                  <span>03 / DINING</span>
                  <h3>Made for gathering.</h3>
                  <p>Finished dining furniture</p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            GENERAL PHOTO GALLERY
        ===================================================== */}

        <section className={galleryStyles.gallerySection} id="gallery">
          <div className={galleryStyles.sectionTop}>
            <div>
              <p className={galleryStyles.eyebrow}>THE COLLECTION</p>

              <h2>
                Completed pieces.
                <br />
                <span>Real projects.</span>
              </h2>
            </div>

            <p className={galleryStyles.sectionDescription}>
              Browse completed furniture projects by room and explore the
              finished results.
            </p>
          </div>

          <div className={galleryStyles.filterBar}>
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={`${galleryStyles.filterBtn} ${
                  activeFilter === filter.value
                    ? galleryStyles.filterActive
                    : ""
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={galleryStyles.galleryGrid}>
            {filteredImages.map((image, index) => (
              <article
                className={`${galleryStyles.galleryCard} ${
                  index % 5 === 0 ? galleryStyles.tall : ""
                }`}
                key={`${image.src}-${index}`}
              >
                <button
                  type="button"
                  className={galleryStyles.imageButton}
                  onClick={() => openImage(image)}
                >
                  <img src={image.src} alt={image.title} loading="lazy" />

                  <span className={galleryStyles.imageView}>↗</span>
                </button>

                <div className={galleryStyles.cardCaption}>
                  <div>
                    <span>{image.label}</span>
                    <h3>{image.title}</h3>
                  </div>

                  <span className={galleryStyles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            GARES HOTEL PROJECT
        ===================================================== */}

        <section className={galleryStyles.hotelSection} id="hotel">
          {/* HOTEL INTRO */}

          <div className={galleryStyles.hotelIntro}>
            <div className={galleryStyles.hotelIntroLabel}>
              <span>02 / FEATURED PROJECT</span>
              <span>GARes HOTEL</span>
            </div>

            <div className={galleryStyles.hotelIntroContent}>
              <p className={galleryStyles.eyebrow}>
                A COMPLETE FURNITURE PROJECT
              </p>

              <h2>
                Gares Hotel.
                <br />
                <span>From workshop to finished spaces.</span>
              </h2>

              <p>
                A major furniture project completed for Gares Hotel, involving
                practical furniture work, installation and finishing across
                hotel spaces, guest rooms and kitchens.
              </p>
            </div>
          </div>

          {/* HOTEL PROJECT STATS */}

          <div className={galleryStyles.hotelStats}>
            <div>
              <strong>01</strong>
              <span>HOTEL PROJECT</span>
            </div>

            <div>
              <strong>ROOMS</strong>
              <span>GUEST SPACES</span>
            </div>

            <div>
              <strong>KITCHEN</strong>
              <span>FITTED FURNITURE</span>
            </div>

            <div>
              <strong>DJJS</strong>
              <span>FURNITURE WORK</span>
            </div>
          </div>

          {/* =================================================
              HOTEL WORK IN ACTION
          ================================================= */}

          <div className={galleryStyles.hotelWorkSection}>
            <div className={galleryStyles.hotelSectionHeading}>
              <div>
                <p className={galleryStyles.hotelEyebrow}>01 / ON SITE</p>

                <h3>
                  The work behind
                  <br />
                  <span>the finished result.</span>
                </h3>
              </div>

              <p>
                These videos show the practical work carried out during the
                Gares Hotel project, from furniture work to installation and
                fitting.
              </p>
            </div>

            <div className={galleryStyles.hotelVideoGrid}>
              {hotelWorkVideos.map((video, index) => (
                <article
                  className={galleryStyles.hotelVideoCard}
                  key={video.src}
                >
                  <div className={galleryStyles.hotelVideoWrapper}>
                    <video
                      controls
                      muted
                      preload="metadata"
                      playsInline
                      onTimeUpdate={limitVideoPlayback}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support this video.
                    </video>

                    <span className={galleryStyles.videoNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={galleryStyles.hotelVideoInfo}>
                    <span>GARes HOTEL · ON SITE</span>

                    <h4>{video.title}</h4>

                    <p>{video.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =================================================
              BEFORE & AFTER
          ================================================= */}

          <div className={galleryStyles.beforeAfterSection}>
            <div className={galleryStyles.hotelSectionHeading}>
              <div>
                <p className={galleryStyles.hotelEyebrow}>
                  02 / BEFORE & AFTER
                </p>

                <h3>
                  From the work
                  <br />
                  <span>to the finished piece.</span>
                </h3>
              </div>

              <p>
                See selected furniture pieces from their working stage through
                to their completed and finished form.
              </p>
            </div>

            <div className={galleryStyles.beforeAfterGrid}>
              {beforeAfterProjects.map((project) => (
                <article
                  className={galleryStyles.beforeAfterCard}
                  key={project.title}
                >
                  <div className={galleryStyles.beforeAfterImages}>
                    <button
                      type="button"
                      onClick={() =>
                        openImage({
                          src: project.before,
                          title: `${project.title} — Before`,
                        })
                      }
                    >
                      <img
                        src={project.before}
                        alt={`${project.title} before`}
                      />

                      <span>BEFORE</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        openImage({
                          src: project.after,
                          title: `${project.title} — After`,
                        })
                      }
                    >
                      <img src={project.after} alt={`${project.title} after`} />

                      <span>AFTER</span>
                    </button>
                  </div>

                  <div className={galleryStyles.beforeAfterInfo}>
                    <h4>{project.title}</h4>

                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =================================================
              END OF GARES HOTEL PROJECT
          ================================================= */}

          {/* HOTEL CLOSING */}

          <div className={galleryStyles.hotelClosing}>
            <p className={galleryStyles.hotelEyebrow}>GARES HOTEL</p>

            <h3>
              From practical work
              <br />
              <span>to finished spaces.</span>
            </h3>

            <p>
              A project bringing together furniture work, installation,
              finishing and attention to detail across different hotel spaces.
            </p>
          </div>
        </section>

        {/* =====================================================
            OTHER FURNITURE PROJECTS — DIFFERENT LOCATIONS
        ===================================================== */}

        <section
          className={galleryStyles.hotelFinishedSection}
          id="other-furniture-videos"
        >
          <div className={galleryStyles.hotelSectionHeading}>
            <div>
              <p className={galleryStyles.hotelEyebrow}>OTHER PROJECTS</p>

              <h3>
                Furniture from
                <br />
                <span>other projects.</span>
              </h3>
            </div>

            <p>
              Beyond the Gares Hotel project, explore other furniture completed
              by my dad at different locations. These videos showcase his
              finished furniture work across a variety of projects.
            </p>
          </div>

          <div className={galleryStyles.finishedVideoGrid}>
            {otherFurnitureVideos.map((video, index) => (
              <article
                className={galleryStyles.finishedVideoCard}
                key={video.src}
              >
                <div className={galleryStyles.finishedVideoWrapper}>
                  <video
                    controls
                    muted
                    preload="metadata"
                    playsInline
                    onTimeUpdate={limitVideoPlayback}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                </div>

                <div>
                  <span>
                    OTHER PROJECTS · {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4>{video.title}</h4>

                  <p>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            STATEMENT
        ===================================================== */}

        <section className={galleryStyles.statementSection}>
          <div className={galleryStyles.statementNumber}>DJJS / 2026</div>

          <div className={galleryStyles.statementHeading}>
            <p className={galleryStyles.eyebrow}>
              FROM INDIVIDUAL PIECES TO COMPLETE SPACES
            </p>

            <h2>
              Every piece has
              <br />
              <span>a place and a purpose.</span>
            </h2>
          </div>

          <p className={galleryStyles.statementDescription}>
            Furniture installation, assembly and finishing work brought together
            through practical experience, careful fitting and attention to
            detail.
          </p>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section className={galleryStyles.contactSection} id="contact">
          <p className={`${galleryStyles.eyebrow} ${galleryStyles.light}`}>
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let&apos;s create something
            <br />
            <span>you&apos;ll love.</span>
          </h2>

          <p>
            Get in touch to discuss your furniture installation, assembly or
            custom furniture needs.
          </p>

          <Link to="/contact-me" className={galleryStyles.btnLight}>
            Contact Us <span>↗</span>
          </Link>
        </section>
      </main>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className={galleryStyles.lightbox}
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={galleryStyles.lightboxClose}
            onClick={closeImage}
          >
            &times;
          </button>

          {filteredImages.length > 1 && (
            <button
              type="button"
              className={galleryStyles.lightboxPrev}
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
            >
              &#8592;
            </button>
          )}

          <div
            className={galleryStyles.lightboxContent}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.title} />

            <p>{selectedImage.title}</p>
          </div>

          {filteredImages.length > 1 && (
            <button
              type="button"
              className={galleryStyles.lightboxNext}
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
            >
              &#8594;
            </button>
          )}
        </div>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className={galleryStyles.footer}>
        <div className={galleryStyles.footerTop}>
          <Link to="/" className={galleryStyles.brand}>
            <span className={galleryStyles.brandName}>DJJS</span>

            <span className={galleryStyles.brandSubtitle}>FURNITURE WORLD</span>
          </Link>

          <p>Furniture Installation & Assembly</p>
        </div>

        <div className={galleryStyles.footerBottom}>
          <p>© 2026 DJJS Furniture World. All rights reserved.</p>

          <div className={galleryStyles.footerLinks}>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <a href="#hotel">Hotel Project</a>
            <Link to="/contact-me">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
