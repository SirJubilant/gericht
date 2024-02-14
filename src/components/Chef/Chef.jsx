import { chef, r_spoon, quote } from '../assets';
import { motion } from 'framer-motion';
import './chef.css';

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

export default function Chef() {
  return (
    
    <section className="chef-section">

        <aside className="img-container">
            <img className="hero-img" src={ chef } alt="Chef's picture" />
        </aside>

        <div className="section-wrapper">

        <motion.article className="chef__profile"
        variants={hashVariants}
        initial="initial"
        animate="visible">
            <h2 className="chef__profile-header">
                chef's word
            </h2>
           <img src={ r_spoon } alt="" />


            <h3 className="chef__profile-bigHeader">
                what we believe in
            </h3>

            <p className="chef__profile-message">
                <span className='quote'> <img src={ quote } alt="" /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto omnis, labore nihil mollitia tempore vitae temporibus sapiente ducimus blanditiis similique quis necessitatibus quas.
            </p>

            <div className="chef__profile-info">
                <h4>kevin luo</h4>
                <span>chef & founder</span>
            </div>

           <p className="chef__profile-sig">
            kevin luo 
           </p>

        </motion.article>    
        </div>
    </section>
  )
}
