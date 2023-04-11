import './Navigation.css'

export const Navigation = () => {
	return (
		<nav className='navigation'>
			<ul className='navigation__links'>
				<li
					className='links__item'
					onClick={() => {
						const header = document.getElementById('header')

						console.log(header)
						if (!header) {
							return
						}

						header.scrollIntoView({ behavior: 'smooth', block: 'start' })
					}}
				>
					<a>B начало</a>
				</li>
				<li
					className='links__item'
					onClick={() => {
						const info = document.getElementById('info')

						console.log(info)
						if (!info) {
							return
						}

						info.scrollIntoView({ behavior: 'smooth', block: 'start' })
					}}
				>
					<a>O компании</a>
				</li>
				<li
					className='links__item'
					onClick={() => {
						const products = document.getElementById('products')

						console.log(products)
						if (!products) {
							return
						}

						products.scrollIntoView({ behavior: 'smooth', block: 'start' })
					}}
				>
					<a>Поставляемая продукция</a>
				</li>
				<li
					className='links__item'
					onClick={() => {
						const coop = document.getElementById('coop')

						console.log(coop)
						if (!coop) {
							return
						}

						coop.scrollIntoView({ behavior: 'smooth', block: 'start' })
					}}
				>
					<a>Отрасли сотрудничества</a>
				</li>
				<li
					className='links__item'
					onClick={() => {
						const products = document.getElementById('products')

						console.log(products)
						if (!products) {
							return
						}

						products.scrollIntoView({ behavior: 'smooth', block: 'start' })
					}}
				>
					<a>Контакты</a>
				</li>
			</ul>
		</nav>
	)
}
