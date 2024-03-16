import { r_spoon } from '../assets';
import './newsletter.css';

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
          type: 'spring',
          stiffness: 150, 
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export default function Newsletter() {
  return (
    <section className="newsletter"
    variants={slideUpVariants}
    initial='initial'
    whileInView='animate'
    viewport={{ once: true}}>
        <div className="newsletter__container">
        <motion.h3
          variants={slideUpVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true}}>newsletter</motion.h3>
        <motion.img src={ r_spoon } alt="" 
          variants={slideUpVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true}}/>
        <motion.h2
          variants={slideUpVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true}}>subscribe to our newsletter</motion.h2>
        <motion.p
          variants={slideUpVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true}}>And never miss latest updates</motion.p>

        <motion.form 
          variants={slideUpVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true}}>
            <input type="email" name="email" id="email" placeholder='Email Address' />    
            <input type="submit" value="Subscribe" />
        </motion.form>        
        </div>
    </section>
  )
}
