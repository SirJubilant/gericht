import "./Button.css"

export default function button({ buttonText }) {
  return (
    <a href='#'
     className='cta'> 
      { buttonText }
    </a>
  )
}
