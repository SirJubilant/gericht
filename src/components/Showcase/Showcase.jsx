import Button from '../Button/Button';
import { hero_img, y_line } from '../assets';
import { motion } from 'framer-motion';
import './showcase.css';

const hashVariants = {
    initial: {
        y: -50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 0.5, 
            duration: 0.5,
            type: 'spring'
        }
    }
}

export default function Showcase() {
  return (
    
    <section className="hero-section" id='hero-section'>
        <motion.aside className="hashtags"
        variants ={hashVariants}
        initial="initial"
        animate="visible">
            <span>#Bar</span>
            <span>#Gericht</span>
        </motion.aside>

        <div className="section-wrapper">

        <motion.article className="hero__text"
        variants={hashVariants}
        initial="initial"
        animate="visible">
            <h2 className="hero__text-header">
                chase the new flavour
            </h2>
           <svg width="30" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z" fill="#DCCA87"/>
</svg>


            <h1 className="hero__text-bigHeader">
                the key to fine dining
            </h1>

            <p className="hero__text-content">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sapiente autem nobis veritatis quo corporis ipsum sed iure voluptatem!
            </p>

           <Button buttonText={ "explore more"} />
        </motion.article>

        <aside className="img-container">
            <img className="hero-img" src={ hero_img } alt="" />
            <span>01 - 02 03 04</span>
        </aside>
        </div>

        <div className="scroll">
            <img src={ y_line } height="30px" width="10px" />
            <a href='#footer'>scroll</a>
            </div>
    </section>
  )
}
