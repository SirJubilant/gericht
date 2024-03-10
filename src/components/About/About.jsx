import Button from '../Button/Button';
import { r_spoon, knife } from '../assets';
import './about.css';
import {motion} from 'framer-motion'

const menuRightVariants = {
    initial: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.25, 
            duration: 1,
            type: 'spring',
            stiffness: 100,
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
            type: 'spring',
            stiffness: 300,
            ease: 'easeInOut'

        }
    }
}

const imgVariants = {
    initial: {
        opacity: 0,
        y: -5
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

export default function About() {
  return (
    <section className="about__section">
        <div className="about__section-wrapper">
            <div className="about__section-content">
                <motion.article 
                    variants = { menuLeftVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                >
                    <h2>about us</h2>
                    <img src={ r_spoon } alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in eligendi aliquam, ipsum repudiandae voluptatibus recusandae cupiditate provident sunt fuga ab cum laborum corporis vel.</p>
                    <Button buttonText={ "explore more" } />

                </motion.article>

            <div className='about__section-img'>
                <motion.img
                 src={ knife } alt="" 
                 variants={ imgVariants }
                 initial= 'initial'
                 whileInView='animate'/>
            </div>

                <motion.article
                variants = { menuRightVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                >
                    <h2>our history</h2>
                    <img src={ r_spoon } alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in eligendi aliquam, ipsum repudiandae voluptatibus recusandae cupiditate provident sunt fuga ab cum laborum corporis vel.</p>
                    <Button buttonText={ "explore more" } />
                    
                </motion.article>
            </div>
        </div>
    </section>
  )
}
