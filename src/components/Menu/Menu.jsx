import {r_spoon, flask, h_line } from '../assets'
import Button from '../Button/Button';
import './menu.css';

import { motion } from 'framer-motion';

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
            type: 'spring',
            stiffness: 200,
            ease: 'easeInOut'
        }
    }
}


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

export default function Menu() {
  return (
    <section className='menu'>
      <div className="menu__section">
          <motion.div className="menu__section-header"
          variants={ slideDownVariants }
          initial= 'initial'
          whileInView ='animate'>
            <h4>menu that fits your palatte</h4>
            <img src={ r_spoon } alt="" />
            <h3>today's special</h3>
          </motion.div>

          <div className="menu__section-main">

          <aside className='menu__section-wine'>
            <motion.h2
            variants={ slideDownVariants }
          initial= 'initial'
          whileInView ='animate'
          viewport={{ once: true,}}
                    >
            wine & beer</motion.h2>
            <ul>
            <li>
              <motion.div className="item"
              variants = { menuLeftVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>chapel hill shiraz</h3> 
                <span className='line'> <img src={ h_line } alt="" /></span>
                <span>$56</span>
              </motion.div>
                
              <h6>AU | Bottle</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuLeftVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>catena malbec</h3>
                <span className='line'><img src={ h_line } /></span>
                <span>$59</span>
              </motion.div>
              <h6>AR | Bottle</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuLeftVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    > 
              <h3>la  vielle rose</h3>
                <span className='line'> <img src={ h_line } /></span>
                <span>$44</span>
              </motion.div>
              <h6>Fr | 750 ml</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuLeftVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>rhino pale ale</h3> 
              <span className='line'> <img src={ h_line } /></span>
              <span>$31</span>
              </motion.div>
              <h6>CA | 750ml</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuLeftVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>irish guiness</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$26</span>
              </motion.div>
              <h6>IE | 750 ml</h6>
            </li>
            </ul>
          </aside>

          {/* Cocktail Srction starts */}
          
          <motion.span className="menu__section-img"
          variants={ slideDownVariants }
          initial= 'initial'
          whileInView ='animate'
          viewport={{ once: true,}}
                    >
            <img src={ flask } alt="" />
          </motion.span>

          <aside className='menu__section-cocktail'>
            <motion.h2
            variants={ slideDownVariants }
          initial= 'initial'
          whileInView ='animate'
          viewport={{ once: true,}}
                    >
            cocktails</motion.h2>
            <ul>
            <li>
              <motion.div className="item"
              variants = { menuRightVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>aperol spritz</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$20</span>
              </motion.div>
              <h6>aperol | villa marchesi prosecco | soda | 30 ml</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuRightVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>dark 'n' stormy</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$16</span>
              </motion.div>
              <h6>dark rum | ginger beer | slice of lime</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuRightVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>daiquiri</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$10</span>
              </motion.div>
              <h6>rum | citrus juice | sugar</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuRightVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>old fashioned</h3>
                <span className='line'> <img src={ h_line } /></span>
                <span>$31</span>
              </motion.div>
              <h6>bourbon | brown sugar | angostura bitters</h6>
            </li>
            <li>
              <motion.div className="item"
              variants = { menuRightVariants }
                    initial = 'initial'
                    whileInView = 'visible'
                    viewport={{ once: true,
                    }}
                    >
              <h3>negroni </h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$26</span>
              </motion.div>
              <h6>gin | sweet vermouth | campari | orange garnish</h6>
            </li>
            </ul>
          </aside>
          </div>

        <Button buttonText={"view more"}/>
      </div>



    </section>
  )
}
