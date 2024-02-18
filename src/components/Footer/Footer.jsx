import { r_spoon, facebook, twitter, instagram } from '../assets';
import './footer.css'


export default function Footer() {
  return (
    <footer className='footer'>
      <section className="footer__container">

         <div className='contact'>
        <h3>contact us</h3>
        <p>9 W 53rd St. New York, NY 10019, USA</p>
          <div className="cell">
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
      </div>

      <div className='info'>
        <h2>ger<span>&iacute;</span>cht</h2>

        <p>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={ r_spoon } />

        <div className="socials">
          <img src={ facebook }/>
          <img src={ twitter }/>
          <img src={ instagram }/>
        </div>
         <p className='rights'>2021 Gericht. All Rights reserved.</p>
      </div>

      <div className='working-hrs' >
        <h3> working hours</h3>
        <div>
          <p>Monday-friday:</p>
        <p>08:00 am-12:00am</p>
        </div>
        <div>
          <p>Saturday-Sunday</p>
          <p>07:00am-11:00pm</p>
        </div>
      </div>

      </section>
     
    </footer>
  )
}
