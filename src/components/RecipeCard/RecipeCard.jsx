import { Image } from 'minista';
import './RecipeCard.scss';
import Tags from '../Tags';

export default (props) => {

    const {
        title,
        tags,
        imgSrc,
    } = props

    return (
        <article
            className="recipe-card"
        >
            <a 
                href="/" 
                className="recipe-card__link"
            >
                <Image
                    className="recipe-card__image"
                    src={imgSrc}
                />
                <h3 className="recipe-card__title h4">
                    {title}
                </h3>
                <Tags 
                    className="recipe-card__tags"
                    items={tags} 
                />
            </a>
        </article>
    )
}