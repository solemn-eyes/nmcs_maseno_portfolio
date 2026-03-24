import img1 from "../assets/gallery/img_1.jpg"
import img2 from "../assets/gallery/img_1.jpg"
import img3 from "../assets/gallery/OPEN_Holy-Family-College-YCS.jpg"

function Gallery() {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={img1} alt="event" />
        <img src={img2} alt="event" />
        <img src={img3} alt="event" />
      </div>
    </section>
  )
}

export default Gallery

