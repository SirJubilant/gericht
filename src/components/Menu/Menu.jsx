import {r_spoon, flask, h_line } from '../assets'
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
              <div className='item'>
              <h3>chapel hill shiraz</h3> 
                <span className='line'> <img src={ h_line } alt="" /></span>
                <span>$56</span>
              </div>
                
              <h6>AU | Bottle</h6>
            </li>
            <li>
              <div className="item">
              <h3>catena malbec</h3>
                <span className='line'><img src={ h_line } /></span>
                <span>$59</span>
              </div>
              <h6>AR | Bottle</h6>
            </li>
            <li>
              <div className="item"> 
              <h3>la  vielle rose</h3>
                <span className='line'> <img src={ h_line } /></span>
                <span>$44</span>
              </div>
              <h6>Fr | 750 ml</h6>
            </li>
            <li>
              <div className="item">
              <h3>rhino pale ale</h3> 
              <span className='line'> <img src={ h_line } /></span>
              <span>$31</span>
              </div>
              <h6>CA | 750ml</h6>
            </li>
            <li>
              <div className="item">
              <h3>irish guiness</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$26</span>
              </div>
              <h6>IE | 750 ml</h6>
            </li>
            </ul>
          </aside>
          
          <span className="menu__section-img">
            <img src={ flask } alt="" />
          </span>

          <aside className='menu__section-cocktail'>
            <h2>cocktails</h2>
            <ul>
            <li>
              <div className="item">
              <h3>aperol spritz</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$20</span>
              </div>
              <h6>aperol | villa marchesi prosecco | soda | 30 ml</h6>
            </li>
            <li>
              <div className="item">
              <h3>dark 'n' stormy</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$16</span>
              </div>
              <h6>dark rum | ginger beer | slice of lime</h6>
            </li>
            <li>
              <div className="item">
              <h3>daiquiri</h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$10</span>
              </div>
              <h6>rum | citrus juice | sugar</h6>
            </li>
            <li>
              <div className="item">
              <h3>old fashioned</h3>
                <span className='line'> <img src={ h_line } /></span>
                <span>$31</span>
              </div>
              <h6>bourbon | brown sugar | angostura bitters</h6>
            </li>
            <li>
              <div className="item">
              <h3>negroni </h3>
              <span className='line'> <img src={ h_line } /></span>
              <span>$26</span>
              </div>
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
