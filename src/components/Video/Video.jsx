import { vid, play } from '../assets';
import "./video.css";

export default function Video() {
  return (
    <section className="section__wrapper">
        <div className="section__wrapper-img">
        <img src={ vid } />
        </div>

        <div className="section__wrapper-play">
            <img src={ play }/>
        </div>
    </section>
  )
}
