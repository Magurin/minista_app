import Categories from '@/sections/Categories'
import Hero from '@/sections/Hero'
import Recipes from '@/sections/Recipes'


export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
    </>
  )
}
