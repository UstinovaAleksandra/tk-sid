import { Field, Form, Formik } from 'formik'
import './Form.css'
import { FC } from 'react'

interface Props {
	vertical?: boolean
}

export const RequestForm: FC<Props> = ({ vertical }) => {
	return (
		<Formik
			initialValues={{
				name: '',
				phone: '',
				email: '',
				request: '',
				toggle: false,
			}}
			onSubmit={(values) => console.log(values)}
		>
			<Form className={`form${vertical ? '--vertical' : ''}`}>
				<div className={`form__line-fields${vertical ? '--vertical' : ''}`}>
					<div className='line-field__field'>
						<label htmlFor='name'>Имя:</label>
						<Field className='field' id='name' name='name' type='text' placeholder='Имя' />
					</div>
					<div className='line-field__field'>
						<label htmlFor='phone'>Сотовый телефон:</label>
						<Field className='field' id='phone' name='phone' type='tel' placeholder='Телефон' />
					</div>
					<div className='line-field__field'>
						<label htmlFor='email'>Электронная почта</label>
						<Field className='field' id='email' name='email' type='email' placeholder='Email' />
					</div>
				</div>

				<div className='form__textarea'>
					<label htmlFor='request'>Запрос</label>
					<Field
						className='form__textarea field'
						as='textarea'
						rows='6'
						id='request'
						name='request'
						placeholder='Запрос'
					/>
				</div>

				<div className='form__checkbox'>
					<Field type='checkbox' name='toggle' />
					<label htmlFor='toggle'>Я согласен(-на) с политикой конфиденциальности *</label>
				</div>
				<button className='form__button' type='submit'>
					Отправить
				</button>
			</Form>
		</Formik>
	)
}
