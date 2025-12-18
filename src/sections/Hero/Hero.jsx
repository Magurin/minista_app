import HeroCard from '@/components/HeroCard'
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
            <HeroCard  
              category={{
                imgSrc: '/src/assets/images/recipe.jpg',
                label: 'Hot Recipes',
              }}
              title="Spicy delicious chicken wings"
              TitleTag="h1"
              description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
              tags={[
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Chicken',
                },
              ]}
              author={{
                imgSrc: '/src/assets/images/man.jpg',
                name: 'John Smith',
                date: {
                  dateTime: '2022-03-15',
                  label: '15 March 2022',
                }
              }}
              imgSrc="/src/assets/images/chicken.jpg"
            />
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
