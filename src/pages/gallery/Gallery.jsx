import galleryStyles from "./gallery.module.css";
import Navbar from "../../component/navbar/Navbar";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/images/bed.jpeg",
      title: "Finished Bed Furniture",
      category: "Bedroom",
    },
    {
      src: "/images/tv-console.jpeg",
      title: "Finished TV Console",
      category: "Living Room",
    },
    {
      src: "/images/dinning-table.jpeg",
      title: "Dining Furniture",
      category: "Dining",
    },
    {
      src: "/images/kitchen-cabinet.jpeg",
      title: "Kitchen Cabinets",
      category: "Kitchen",
    },
    {
      src: "/images/wardrobe.jpeg",
      title: "Finished Wardrobe",
      category: "Bedroom",
    },
    {
      src: "/images/living-room.jpeg",
      title: "Living Room Furniture",
      category: "Living Room",
    },
    {
      src: "/images/chairs.jpeg",
      title: "Finished Sofas",
      category: "Seating",
    },
    {
      src: "/images/gallery/gallery-8.jpg",
      title: "Bedroom Setup",
      category: "Bedroom",
    },
    {
      src: "/images/sofa.jpeg",
      title: "Sofa",
      category: "Sofa",
    },
    {
      src: "/images/table.jpeg",
      title: "Table",
      category: "Table",
    },
    {
      src: "/images/gallery/gallery-11.jpg",
      title: "Finished Cabinet",
      category: "Storage",
    },
    {
      src: "/images/dinning-table.jpeg",
      title: "Dining Furniture",
      category: "Dining",
    },
  ];

  const galleryVideos = [
    {
      src: "/media/skill-vid2.mp4",
      title: "Finished Bedroom Furniture",
      description:
        "A completed bedroom furniture setup showcasing the finished design, fitting and overall workmanship.",
    },
    {
      src: "/media/living.mp4",
      title: "Finished TV Console & Chairs",
      description:
        "A completed TV console and chairs, showcasing the finished furniture pieces and attention to detail.",
    },
    {
      src: "/media/skill-vid4.mp4",
      title: "Finished Dining Table",
      description:
        "A completed dining table showcasing its finished design, structure and craftsmanship.",
    },
    {
      src: "/media/skill-vid5.mp4",
      title: "Finished Kitchen Cabinets",
      description:
        "A completed kitchen cabinet setup showcasing the finished look, fittings and details.",
    },
  ];

  return (
    <div className={galleryStyles.galleryPage}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={galleryStyles.galleryHero}>
        <div className={galleryStyles.heroContent}>
          <p className={galleryStyles.heroLabel}>OUR WORK</p>

          <h1>
            Crafted furniture.
            <br />
            <span>Beautifully finished.</span>
          </h1>

          <p className={galleryStyles.heroText}>
            Explore a collection of completed furniture projects, from bedrooms
            and living spaces to kitchens, dining areas and custom pieces.
          </p>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className={galleryStyles.featuredSection}>
        <div className={galleryStyles.sectionHeading}>
          <p>FEATURED WORK</p>

          <h2>
            A closer look at
            <br />
            the finished work.
          </h2>
        </div>

        <div className={galleryStyles.featuredGrid}>
          <div className={galleryStyles.featuredLarge}>
            <img src={galleryImages[0].src} alt={galleryImages[0].title} />

            <div className={galleryStyles.imageOverlay}>
              <span>{galleryImages[0].category}</span>
              <h3>{galleryImages[0].title}</h3>
            </div>
          </div>

          <div className={galleryStyles.featuredSmall}>
            <div className={galleryStyles.featuredImage}>
              <img src={galleryImages[1].src} alt={galleryImages[1].title} />

              <div className={galleryStyles.imageOverlay}>
                <span>{galleryImages[1].category}</span>
                <h3>{galleryImages[1].title}</h3>
              </div>
            </div>

            <div className={galleryStyles.featuredImage}>
              <img src={galleryImages[2].src} alt={galleryImages[2].title} />

              <div className={galleryStyles.imageOverlay}>
                <span>{galleryImages[2].category}</span>
                <h3>{galleryImages[2].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className={galleryStyles.photoGallery}>
        <div className={galleryStyles.galleryHeading}>
          <div>
            <p>THE COLLECTION</p>

            <h2>
              Finished pieces.
              <br />
              Real projects.
            </h2>
          </div>

          <p className={galleryStyles.galleryIntro}>
            A selection of completed furniture pieces and installations,
            showcasing different styles, spaces and projects.
          </p>
        </div>

        <div className={galleryStyles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div
              className={`${galleryStyles.galleryItem} ${
                index % 5 === 0 ? galleryStyles.tallItem : ""
              }`}
              key={index}
            >
              <img src={image.src} alt={image.title} />

              <div className={galleryStyles.galleryItemInfo}>
                <span>{image.category}</span>
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO SHOWCASE ================= */}
      <section className={galleryStyles.videoSection}>
        <div className={galleryStyles.videoHeading}>
          <p>VIDEO SHOWCASE</p>

          <h2>
            See the finished
            <br />
            work in detail.
          </h2>

          <p>
            Watch completed furniture projects and installations from different
            spaces.
          </p>
        </div>

        <div className={galleryStyles.videoGrid}>
          {galleryVideos.map((video, index) => (
            <div className={galleryStyles.videoCard} key={index}>
              <div className={galleryStyles.videoWrapper}>
                <video controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className={galleryStyles.videoInfo}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{video.title}</h3>

                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MORE WORK ================= */}
      <section className={galleryStyles.moreWork}>
        <div>
          <p>MORE PROJECTS</p>

          <h2>
            Every piece tells
            <br />
            its own story.
          </h2>
        </div>

        <p className={galleryStyles.moreWorkText}>
          From individual furniture pieces to complete room installations, every
          project is handled with care and attention to the finished result.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className={galleryStyles.galleryCTA}>
        <p>HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's create something
          <br />
          you'll love.
        </h2>

        <button>Contact Me&nbsp; →</button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={galleryStyles.footer}>
        <div>
          <h3>DJJS FURNITURE WORLD</h3>
          <p>Furniture Installation & Assembly</p>
        </div>

        <div className={galleryStyles.footerLinks}>
          <a href="/">Home</a>
          <a href="/about-me">About Me</a>
          <a href="/experience">Experience</a>
          <a href="/gallery">Gallery</a>
          <a href="/skills">Skills</a>
          <a href="/contact-me">Contact Me</a>
        </div>

        <p className={galleryStyles.copyright}>
          © 2026 DJJS Furniture World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Gallery;
