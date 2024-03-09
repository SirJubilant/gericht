import Button from '../Button/Button';
import { r_spoon, knife } from '../assets';
import './about.css';
import {motion} from 'framer-motion'

const menuRightVariants = {
    initial: {
        y: -50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 0.25, 
            duration: 1,
            type: 'tween'
        }
    }
}

const menuLeftVariants = {
    initial: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 0.25, 
            duration: 1,
            type: 'spring'
        }
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
                    animate = 'visible'
                >
                    <h2>about us</h2>
                    <img src={ r_spoon } alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in eligendi aliquam, ipsum repudiandae voluptatibus recusandae cupiditate provident sunt fuga ab cum laborum corporis vel.</p>
                    <Button buttonText={ "explore more" } />

                </motion.article>

            <div className='about__section-img'>
                <img src={ knife } alt="" />
            </div>

                <motion.article
                variants = { menuRightVariants }
                    initial = 'initial'
                    animate = 'visible'
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
