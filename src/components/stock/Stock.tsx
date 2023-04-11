import flag from '../../assets/flag.svg'
import manager from '../../assets/manager.svg'
import messages from '../../assets/messages.svg'
import shield from '../../assets/shield.svg'
import img from '../../assets/stock.jpg'
import './Stock.css'

export const Stock = () => {
	return (
		<div className='stock' id='stock'>
			<div className='stock__items-container'>
				<div className='item'>
					<div className='items-container__img'>
						<img src={`${flag}`} alt='' />
					</div>
					<h2 className='items-container__title'>Бесплатная доставка до вашего склада</h2>
				</div>
				<div className='item'>
					<div className='items-container__img'>
						<img src={`${manager}`} alt='' />
					</div>
					<h2 className='items-container__title'>Персональный менеджер на всё время сотрудничества</h2>
				</div>
				<div className='item'>
					<div className='items-container__img'>
						<img src={`${messages}`} alt='' />
					</div>
					<h2 className='items-container__title'>Индивидуальные условия сотрудничества с каждым клиентом</h2>
				</div>
				<div className='item'>
					<div className='items-container__img'>
						<img src={`${shield}`} alt='' />
					</div>
					<h2 className='items-container__title'>Гарантия на всю поставляемую продукцию от 1-го года</h2>
				</div>
			</div>
			<div className='stock__imgage-container'>
				<img className='stock__img' src={`${img}`} alt='stock' />
			</div>
		</div>
	)
}
