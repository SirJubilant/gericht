import Button from "../Button/Button";
import "../Hero/hero.css";
import { r_spoon, hero_img } from "../assets";



export default function Hero() {
  return (
    <>

      <section className="hero">
        <article className="hero__content">
          <aside className="hero__content-left">
            
            <p className="hashes">
              <span>#Bar</span>
              <span>#Gericht</span>
            </p>

            <div className="left__content">
              <h1 className="left__content-header">
                chase the new flavour
                <img 
                src={ r_spoon }
                 alt="" />
              </h1>
              <h1 className="left__content-header2">
                  the key to fine dining
              </h1>

              <p className="left__content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sapiente autem nobis veritatis quo corporis ipsum sed iure voluptatem!
              </p>

            <Button buttonText={ "explore more" } />

            </div>
          </aside>
         
          <aside className="hero__content-right">
            <img className="hero-img" width={700} height={400} src={ hero_img } alt="" />
          </aside>

        </article>
      </section>
    </>
  );
}
