import Section from "@/layouts/Section"
import Grid from "@/components/Grid"
import RecipeBanner from "@/components/RecipeBanner"
import RecipeCard from "@/components/RecipeCard"

export default () => {
    const recipes = [
        {
            type: 'recipe',
            title: 'Big and Juicy Wagyu Beef Cheeseburger',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Snack',
                },
            ],
            imgSrc: 'src/assets/images/recipes/1.jpg',
            isLiked: true,
        },
        {
            type: 'recipe',
            title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Fish',
                },
            ],
            imgSrc: 'src/assets/images/recipes/2.jpg',
        },
        {
            type: 'recipe',
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Breakfast',
                },
            ],
            imgSrc: 'src/assets/images/recipes/3.jpg',
        },
        {
            type: 'recipe',
            title: 'Fresh and Healthy Mixed Mayonnaise Salad',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Healthy',
                },
            ],
            imgSrc: 'src/assets/images/recipes/4.jpg',
        },
        {
            type: 'recipe',
            title: 'Chicken Meatballs with Cream Cheese',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Meat',
                },
            ],
            imgSrc: 'src/assets/images/recipes/5.jpg',
        },
        {
            type: 'banner',
            bannerComponent: <RecipeBanner />,
        },
        {
            type: 'recipe',
            title: 'Fruity Pancake with Orange & Blueberry',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Sweet',
                },
            ],
            imgSrc: 'src/assets/images/recipes/6.jpg',
        },
        {
            type: 'recipe',
            title: 'The Best Easy One Pot Chicken and Rice',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Healthy',
                },
            ],
            imgSrc: 'src/assets/images/recipes/7.jpg',
        },
        {
            type: 'recipe',
            title: 'The Creamiest Creamy Chicken and Bacon Pasta',
            tags: [
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Noodles',
                },
            ],
            imgSrc: 'src/assets/images/recipes/8.jpg',
        },
    ]

    return (
        <Section
            title="Simple and tasty recipes"
            titleId="recipes"
            description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        >
            <Grid columns={3}>
                { recipes.map((recipe, index) => {
                    const { type, ...rest } = recipe;

                    if (type === 'banner') {
                        return {...recipe.bannerComponent, key: recipe.id || `banner-${index}`};
                    }

                    return (
                        <RecipeCard {...rest} key={recipe.title} />
                    )
                })}
            </Grid>
        </Section>
    )
}