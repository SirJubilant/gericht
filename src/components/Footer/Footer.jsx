import { r_spoon, facebook, twitter, instagram, y_line } from '../assets';
import './footer.css';

import { motion } from 'framer-motion';

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

const menuLeftVariants = {
    initial: {
        x: 30,
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


export default function Footer() {
  return (
    <footer className='footer' id='footer'>

        <div className="scroll-up">
          <div>
            <img src={ y_line } height="30px" width="10px" />
            <a href='#hero-section'>Top</a>
          </div>
          </div>  
      <section className="footer__container">

         <motion.div className='contact'
         variants={ menuLeftVariants }
         initial='initial'
         whileInView='animate'
         viewport={{ once: true}}>
        <h3>contact us</h3>
        <p>9 W 53rd St. New York, NY 10019, USA</p>
          <div className="cell">
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
      </motion.div>

      <motion.div className='info'
      variants={ menuLeftVariants }
      initial='initial'
      whileInView='animate'
      viewport={{ once: true}}>
        <h2>ger<span>&iacute;</span>cht</h2>

        <p>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={ r_spoon } />

        <div className="socials">
          <img src={ facebook }/>
          <img src={ twitter }/>
          <img src={ instagram }/>
        </div>
         <p className='rights'>2021 Gericht. All Rights reserved.</p>
      </motion.div>

      <motion.div className='working-hrs' 
      variants={ menuRightVariants }
      initial='initial'
      whileInView='animate'
      viewport={{ once: true}}>
        <h3> working hours</h3>
        <div>
          <p>Monday-friday:</p>
        <p>08:00 am-12:00am</p>
        </div>
        <div>
          <p>Saturday-Sunday</p>
          <p>07:00am-11:00pm</p>
        </div>
      </motion.div>

      </section>
     
    </footer>
  )
}
