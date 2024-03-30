import { gal1, gal2, gal3, gal4, instagram, r_spoon } from '../assets';
import "./gallery.css";
import Button from '../Button/Button';

import { motion } from 'framer-motion';

const slideUpVariants = {
    initial: {
        y: 30, 
        opacity: 0,
        blur: 5
    },
    animate: {
        y: 0,
        opacity: 1,
        blur: 0,
        transition: {delay: 0.25, 
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

const menuRightVariants = {
    initial: {
        x: -30,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.4, 
            type: 'spring',
            stiffness: 100,
            duration: 1,
            ease: 'easeInOut'

        }
    }
}


export default function Gallery() {
  return (
    <section className="gallery">
        <div className="gallery__info">
            <motion.h4
            variants={ slideUpVariants}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}>instagram</motion.h4>
            <motion.img src={ r_spoon } 
            variants={ slideUpVariants }
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}/>
            <motion.h2
            variants={ slideUpVariants }
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}>photo gallery</motion.h2>
            <motion.p
            variants={ menuRightVariants }
            initial='initial'
            whileInView='animate'viewport={{once: true}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis accusantium est fuga obcaecati ea harum ullam magnam animi aliquid?</motion.p>
            
            <Button buttonText={ "view more" } />
        </div>

        <aside className="gallery__images">
            <div className='img-container'>
                 <img src={ gal1 } />
                <div className="insta">
                    <img src={instagram} />
                </div>
            </div>
           

           <div className='img-container'>
                 <img src={ gal2 } />
                <div className="insta">
                    <img src={instagram} />
                </div>
            </div>

            <div className='img-container'>
                 <img src={ gal3 } />
                <div className="insta">
                    <img src={instagram} />
                </div>
            </div>

            <div className='img-container'>
                 <img src={ gal4 } />
                <div className="insta">
                    <img src={instagram} />
                </div>
            </div>
        </aside>
    </section>
  )
}
