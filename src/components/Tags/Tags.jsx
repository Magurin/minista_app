import './Tags.scss'
import clsx from 'clsx'
import Icon from '../Icon'

export default (props) => {
    const { className, items } = props
    
    return (
        <div className={clsx('tags', className)}>
            <ul className="tags__list">
                {items.map(({ iconName, label }, index) => (
                    <li className="tags__item" key={index}>
                        <Icon 
                            name={iconName}
                            hasFill
                        />
                        <span className="tags__label">{label}</span>
                    </li>
                ))}
            
            </ul>
        </div>
    )
}