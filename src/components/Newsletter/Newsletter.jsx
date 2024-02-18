import { r_spoon } from '../assets';
import './newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
        <div className="newsletter__container">
        <h3>newsletter</h3>
        <img src={ r_spoon } alt="" />
        <h2>subscribe to our newsletter</h2>
        <p>And never miss latest updates</p>

        <form >
            <input type="email" name="email" id="email" placeholder='Email Address' />    
            <input type="submit" value="Subscribe" />
        </form>        
        </div>
    </section>
  )
}
