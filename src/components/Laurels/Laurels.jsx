import { logo, r_spoon, badge1, badge2, badge3, badge4, chicken, g } from "../assets";
import "./laurels.css";

import { motion } from 'framer-motion'


const slideDownVariants = {
    initial: {
        y: 60, 
        opacity: 0,
        blur: 5
    },
    animate: {
        y: 0,
        opacity: 1,
        blur: 0,
        transition: {delay: 0.25, 
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


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
            ease: 'easeInOut'

        }
    }
}

const menuRightVariants = {
    initial: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.3, 
            type: 'spring',
            stiffness: 200,
            duration: 1,
            ease: 'easeInOut'

        }
    }
}

export default function Laurels() {
  return (
    <section className='section'>
        <motion.aside className="logo"
        variants={ slideDownVariants }
        initial='initial'
        whileInView='animate'
        viewport = {{ once: true}}>
            <img src={ logo } alt="" />
        </motion.aside>

        <div className="section__content">
            <h4>awards & recognition</h4>
            <img src={ r_spoon } alt="" />
            <h2>our laurels</h2>

        <ul className="section__content-list">
            <motion.li
                variants = { menuLeftVariants }
                initial = 'initial'
                whileInView = 'visible'
                viewport = {{ once: true}}>
                <img src={ badge2 }/>
                <div className="laurel">
                    <h5>bib gourmond</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </motion.li>
          
          <motion.li
                variants = { menuLeftVariants }
                initial = 'initial'
                whileInView = 'visible'
                viewport = {{ once: true}}>
                <img src={ badge1 }/>
                <div className="laurel">
                    <h5>rising star</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </motion.li>

           <motion.li
                variants = { menuLeftVariants }
                initial = 'initial'
                whileInView = 'visible'
                viewport = {{ once: true}}>
                <img src={ badge4 }/>
                <div className="laurel">
                    <h5>AA Hospitality</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </motion.li>

            <motion.li
                variants = { menuLeftVariants }
                initial = 'initial'
                whileInView = 'visible'
                viewport = {{ once: true}}>
                <img src={ badge3 }/>
                <div className="laurel">
                    <h5>outstanding chef</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </motion.li>
        </ul>
        </div>

        <div className="section__img">
            <motion.img className="chicken" src={ chicken }
            variants={ menuRightVariants}
            initial='initial'
            whileInView='visible'
            viewport = {{ once: true}}
            />
            <img className="g" src={ g }/>
        </div>
    </section>
  )
}
