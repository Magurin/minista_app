import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">

      <div 
        className="hero__slider swiper" 
        data-js-slider={JSON.stringify({
          spaceBetween: 40,
          slidesPerView: 1.0625,
          centeredSlides: true,
        })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">
              1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim beatae cupiditate exercitationem animi aspernatur laboriosam vel eos veritatis neque saepe deleniti eligendi quae earum, at aliquid ut culpa! Amet.
            </div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">
              2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim beatae cupiditate exercitationem animi aspernatur laboriosam vel eos veritatis neque saepe deleniti eligendi quae earum, at aliquid ut culpa! Amet.
            </div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">
              3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim beatae cupiditate exercitationem animi aspernatur laboriosam vel eos veritatis neque saepe deleniti eligendi quae earum, at aliquid ut culpa! Amet.
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}
