import { Paragraph } from './components/Paragraph'
import { paragraphs } from '../../constants'
import './Info.css'
import { RequestForm } from '../form/Form'

export const Info = () => {
	return (
		<div className='section' id='info'>
			<div className='section__info'>
				<h2 className='info__title'>o компании</h2>
				<div className='info__text'>
					<p>
						Производственное предприятие, сталкиваясь с необходимостью приобретения импортного оборудования, вынуждено
						прибегать к помощи профессионального Поставщика. Задача данного поставщика – МИНИМИЗИРОВАТЬ РИСКИ, при
						совершении сделки (в идеале – свести эти риски к нулю), а также избавить предприятие-заказчика от решения
						сопутствующих сделке задач (выбор поставщика, доставка и монтаж, сопроводительная документация и т.п.). При
						этом не секрет, что руководство предприятия ставит своей целью СОКРАЩЕНИЕ ИЗДЕРЖЕК. ТК "sid" готова
						предложить своим клиентам профессиональные услуги по закупке и доставке импортного оборудования и
						комплектующих.
					</p>
					{paragraphs.map((paragraph) => {
						return <Paragraph key={paragraph.title} title={paragraph.title} text={paragraph.text} />
					})}
				</div>
			</div>
			<div className='section__price'>
				<h2 className='price__title'>запрос цен</h2>
				<RequestForm vertical />
			</div>
		</div>
	)
}
