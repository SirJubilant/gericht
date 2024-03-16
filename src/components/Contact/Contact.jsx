import { cocktail, r_spoon } from '../assets';
import { motion } from 'framer-motion';
import './contact.css';
import Button from '../Button/Button';

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

export default function Contact() {
  return (
    
    <section className="contact__section">


        <motion.article className="contact__info"
        variants={ menuRightVariants }
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}>
            <motion.h2 className="contact__info-header"
            variants={ slideUpVariants }>
                contact
            </motion.h2>
           <motion.img src={ r_spoon } 
           variants={ slideUpVariants }/>


            <motion.h3 className="contact__info-bigHeader"
            variants={ slideUpVariants }>
                find us
            </motion.h3>

            <motion.p className="contact__info-address"
            variants={ menuRightVariants }>
                lane ends bungalow, whatcroft hall lane, rudheath, CW9 75G
            </motion.p>

            <div className="contact__info-time">
                <motion.h4
                variants={ slideUpVariants }>opening hours</motion.h4>
                <motion.p
                variants={ menuRightVariants }>Mon - Fri: 10 am - 02:00am</motion.p>
                <motion.p
                variants={ menuRightVariants }>Sat - Sun: 10 am - 03:00am</motion.p>
            </div>

           <Button buttonText={ "visit us "} />

        </motion.article>    

         <motion.aside className="img-container"
         variants={ menuRightVariants }
         initial='initial'
         whileInView='animate'
         viewport={{ once: true }}>
            <img src={ cocktail } />
        </motion.aside>
    </section>
  )
}
