import {r_spoon, flask } from '../assets'
import Button from '../Button/Button';
import './menu.css';

export default function Menu() {
  return (
    <section className='menu'>
      <div className="menu__section">
          <div className="menu__section-header">
            <h4>menu that fits your palatte</h4>
            <img src={ r_spoon } alt="" />
            <h3>today's special</h3>
          </div>

          <div className="menu__section-main">

          <aside className='menu__section-wine'>
            <h2>wine & beer</h2>
            <ul>
            <li>
              <h3>chapel hill shiraz <span className='line'>56</span><span>$56</span></h3>
              <h6>AU | Bottle</h6>
            </li>
            <li>
              <h3>catena malbec <span className='line'></span><span>$59</span></h3>
              <h6>AR | Bottle</h6>
            </li>
            <li>
              <h3>la  vielle rose<span className='line'></span><span>$44</span></h3>
              <h6>Fr | 750 ml</h6>
            </li>
            <li>
              <h3>rhino pale ale <span className='line'></span><span>$31</span></h3>
              <h6>CA | 750ml</h6>
            </li>
            <li>
              <h3>irish guiness <span className='line'></span><span>$26</span></h3>
              <h6>IE | 750 ml</h6>
            </li>
            </ul>
          </aside>
          
          <div className="menu__section-img">
            <img src={ flask } alt="" />
          </div>

          <aside className='menu__section-cocktail'>
            <h2>cocktails</h2>
            <ul>
            <li>
              <h3>aperol spritz <span className='line'></span><span>$20</span></h3>
              <h6>aperol | villa marchesi prosecco | soda | 30 ml</h6>
            </li>
            <li>
              <h3>dark 'n' stormy <span className='line'></span><span>$16</span></h3>
              <h6>dark rum | ginger beer | slice of lime</h6>
            </li>
            <li>
              <h3>daiquiri<span className='line'></span><span>$10</span></h3>
              <h6>rum | citrus juice | sugar</h6>
            </li>
            <li>
              <h3>old fashioned<span className='line'></span><span>$31</span></h3>
              <h6>bourbon | brown sugar | angostura bitters</h6>
            </li>
            <li>
              <h3>negroni <span className='line'></span><span>$26</span></h3>
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
