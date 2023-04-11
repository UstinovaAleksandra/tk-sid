import logo from '../../assets/footerlogo.svg'
import { Navigation } from '../Navigation/Navigation'
import './Footer.css'

export const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='footer__logo'>
					<img src={`${logo}`} alt='' />
				</div>
				<div className='footer__panel'>
					<Navigation />
					<div className='panel__info'>
						<div className='info__contacts'>+7 (812) 679-66-69 info@tk-euroline.ru</div>
						<div className='info__adres'>Санкт-Петербург, ул. Курчатова, д. 10, лит А, помещение 13 Н</div>
					</div>
				</div>
			</footer>
			<div className='footer__copyright'>© Copyright 2020-2023 tk-sid.ru | ТК "SID"</div>
		</>
	)
}
