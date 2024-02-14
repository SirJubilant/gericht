import { cocktail, r_spoon } from '../assets';
import { motion } from 'framer-motion';
import './contact.css';
import Button from '../Button/Button';

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

export default function Contact() {
  return (
    
    <section className="contact__section">


        <motion.article className="contact__info"
        variants={hashVariants}
        initial="initial"
        animate="visible">
            <h2 className="contact__info-header">
                contact
            </h2>
           <img src={ r_spoon } alt="" />


            <h3 className="contact__info-bigHeader">
                find us
            </h3>

            <p className="contact__info-address">
                lane ends bungalow, whatcroft hall lane, rudheath, CW9 75G
            </p>

            <div className="contact__info-time">
                <h4>opening hours</h4>
                <p>Mon - Fri: 10 am - 02:00am</p>
                <p>Sat - Sun: 10 am - 03:00am</p>
            </div>

           <Button buttonText={ "visit us "} />

        </motion.article>    

         <aside className="img-container">
            <img src={ cocktail } />
        </aside>
    </section>
  )
}
