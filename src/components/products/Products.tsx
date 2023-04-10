import './Products.css'
import { products } from '../../constants'
import { ProductCard } from './components/ProductCard'
import drive from '../../assets/drive.jpg'
import compressor from '../../assets/compressor.jpg'
import convcomps from '../../assets/convcomps.jpg'
import electronics from '../../assets/electronics.jpg'
import fan from '../../assets/fan.jpg'
import filter from '../../assets/filter.jpg'
import hidraulics from '../../assets/hidraulics.jpg'
import steelslice from '../../assets/steelslice.jpg'
import pump from '../../assets/pump.jpg'

const srcs: Record<string, string> = {
	drive,
	compressor,
	convcomps,
	electronics,
	fan,
	filter,
	hidraulics,
	steelslice,
	pump,
}

export const Products = () => {
	return (
		<div className='products' id='products'>
			<h2 className='products__title'>Поставляемая продукция</h2>
			<div className='products__container'>
				{products.map((product) => {
					return (
						<ProductCard key={product.src} src={srcs[product.src]} alt='' title={product.title} items={product.items} />
					)
				})}
			</div>
		</div>
	)
}
