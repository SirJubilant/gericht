import { chef, r_spoon, quote } from '../assets';
import { motion } from 'framer-motion';
import './chef.css';

const menuLeftVariants = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.25, 
            duration: 1,
            type: 'spring',
            stiffness: 300,
            ease: 'easeInOut'

        }
    }
}

const slideUpVariants = {
    initial: {
        y: -40, 
        opacity: 0,
        blur: 5
    },
    visible: {
        y: 0,
        opacity: 1,
        blur: 0,
        transition: {delay: 0.25, 
            duration: 1,
            type: 'spring',
            stiffness: 200,
            ease: 'easeInOut'
        }
    }
}

export default function Chef() {
  return (
    
    <section className="chef-section">

        <motion.aside className="img-container"
          variants={ menuLeftVariants }
            initial='initial'
            whileInView='visible'
            viewport={{ once: true}}>
            <img className="hero-img" src={ chef } alt="Chef's picture" />
        </motion.aside>

        <div className="section-wrapper">

        <motion.article className="chef__profile"
        variants={menuLeftVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true}}>
            <motion.h2 className="chef__profile-header"
            variants={ slideUpVariants } 
            initial="initial"
            whileInView="visible"
            viewport={{ once: true}}>
                chef's word
            </motion.h2>
           <motion.img src={ r_spoon } variants={ slideUpVariants } 
           />


            <motion.h3 className="chef__profile-bigHeader"
            variants={ slideUpVariants } 
            initial='initial'
            whileInView="visible"
            viewport={{ once: true}}>
                what we believe in
            </motion.h3>

            <motion.p className="chef__profile-message"
            variants={ slideUpVariants }
            initial='initial'
            whileInView='visible'
            viewport={{ once: true}}>
                <span className='quote'> <img src={ quote } alt="" /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto omnis, labore nihil mollitia tempore vitae temporibus sapiente ducimus blanditiis similique quis necessitatibus quas.
            </motion.p>

            <motion.div className="chef__profile-info">
                <h4>kevin luo</h4>
                <span>chef & founder</span>
            </motion.div>

           <motion.p className="chef__profile-sig">
            kevin luo 
           </motion.p>

        </motion.article>    
        </div>
    </section>
  )
}
