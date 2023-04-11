import StickyBox from 'react-sticky-box'
import './App.css'
import { Info } from './components/Info/Info'
import { Navigation } from './components/Navigation/Navigation'
import { Companies } from './components/companies/Companies'
import { Cooperations } from './components/cooperations/Cooperations'
import { Header } from './components/header/Header'
import { Products } from './components/products/Products'
import { Stock } from './components/stock/Stock'
import { Request } from './components/request/Request'
import { Footer } from './components/footer/Footer'

export const App = () => {
	return (
		<div className='app'>
			<Header />
			<StickyBox>
				<Navigation />
			</StickyBox>
			<Info />
			<Stock />
			<Products />
			<Companies />
			<Cooperations />
			<Request />
			<Footer />
		</div>
	)
}
