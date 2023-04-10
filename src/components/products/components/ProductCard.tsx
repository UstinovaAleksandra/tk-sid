import { FC } from 'react'
import './ProductCard.css'

interface Props {
	src: string
	alt: string
	title: string
	items: string[]
}

export const ProductCard: FC<Props> = ({ src, alt, title, items }) => {
	return (
		<div className='product-card'>
			<div className='product-card__img-container'>
				<img className='product-card__img' src={src} alt={alt} />
			</div>
			<div className='product-card__title'>{title}</div>
			<div className='product-card__container'>
				{items.map((item) => {
					return (
						<div key={item} className='container__item'>
							{item}
						</div>
					)
				})}
			</div>
		</div>
	)
}
