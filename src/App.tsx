import { Info } from './components/Info/Info'
import { Companies } from './components/companies/Companies'
import { Cooperations } from './components/cooperations/Cooperations'
import { Header } from './components/header/Header'
import { Products } from './components/products/Products'
import { Stock } from './components/stock/Stock'

export const App = () => {
	return (
		<div>
			<Header />
			<Info />
			<Stock />
			<Products />
			<Companies />
			<Cooperations />
		</div>
	)
}
