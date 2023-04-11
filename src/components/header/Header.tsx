import logo from '../../assets/logo.svg'
import img from '../../assets/main.jpg'
import './Header.css'

export const Header = () => {
	return (
		<header className='header' id='header'>
			<img className='header__img' src={`${img}`} alt='main' />
			<div className='header__logo'>
				<div className='logo__img'>
					<img src={`${logo}`} alt='logo' />
				</div>
				<div className='logo__title'>
					<div>комплексные поставки</div>
					<div>импортного промышленного оборудования</div>
				</div>
				<div className='logo__underline'></div>
				<p>Профессиональные услуги по закупке и доставке импортного оборудования и комплектующих.</p>
				<p>+7 (812) 679-66-69 // info-tk-sid@yandex.ru</p>
			</div>
		</header>
	)
}
