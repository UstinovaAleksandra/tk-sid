import { RequestForm } from '../form/Form'
import './Request.css'

export const Request = () => {
	return (
		<div className='request'>
			<div className='request__title'>Отправить запрос</div>
			<div className='request__form'>{window.innerWidth <= 320 ? <RequestForm vertical /> : <RequestForm />}</div>
		</div>
	)
}
