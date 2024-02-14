import { logo, r_spoon, badge1, badge2, badge3, chicken, g } from "../assets";
import "./laurels.css";

export default function Laurels() {
  return (
    <section className='section'>
        <aside className="logo">
            <img src={ logo } alt="" />
        </aside>

        <div className="section__content">
            <h4>awards & recognition</h4>
            <img src={ r_spoon } alt="" />
            <h2>our laurels</h2>

        <ul className="section__content-list">
            <li>
                <img src={ badge2 }/>
                <div className="laurel">
                    <h5>bib gourmond</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </li>
          
          <li>
                <img src={ badge1 }/>
                <div className="laurel">
                    <h5>rising star</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </li>

            <li>
                <img src={ badge3 }/>
                <div className="laurel">
                    <h5>AA hospitality</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </li>

            <li>
                <img src={ badge3 }/>
                <div className="laurel">
                    <h5>outstanding chef</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </li>
        </ul>
        </div>

        <div className="section__img">
            <img className="chicken" src={ chicken } />
            <img className="g" src={ g } />
        </div>
    </section>
  )
}
