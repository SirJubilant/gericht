import Button from '../Button/Button';
import { r_spoon, knife } from '../assets';

import './about.css';

export default function About() {
  return (
    <section className="about__section">
        <div className="about__section-wrapper">
            <div className="about__section-content">
                <article>
                    <h2>about us</h2>
                    <img src={ r_spoon } alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in eligendi aliquam, ipsum repudiandae voluptatibus recusandae cupiditate provident sunt fuga ab cum laborum corporis vel.</p>
                    <Button buttonText={ "explore more" } />

                </article>

            <div className='about__section-img'>
                <img src={ knife } alt="" />
            </div>

                <article>
                    <h2>our history</h2>
                    <img src={ r_spoon } alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in eligendi aliquam, ipsum repudiandae voluptatibus recusandae cupiditate provident sunt fuga ab cum laborum corporis vel.</p>
                    <Button buttonText={ "explore more" } />
                    
                </article>
            </div>
        </div>
    </section>
  )
}
