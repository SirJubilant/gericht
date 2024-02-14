import { gal1, gal2, gal3, gal4, r_spoon } from '../assets';
import "./gallery.css";
import Button from '../Button/Button';

export default function Gallery() {
  return (
    <section className="gallery">
        <div className="gallery__info">
            <h4>instagram</h4>
            <img src={ r_spoon } alt="" />
            <h2>photo gallery</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis accusantium est fuga obcaecati ea harum ullam magnam animi aliquid?</p>
            
            <Button buttonText={ "view more" } />
        </div>

        <div className="gallery__images">
            <img src={ gal1 } />
            <img src={ gal2 } />
            <img src={gal3 } />
            <img src={ gal4 } />
        </div>
    </section>
  )
}
