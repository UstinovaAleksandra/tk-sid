import { FC } from 'react'
import './Paragraph.css'

interface Props {
	title: string
	text: string
}

export const Paragraph: FC<Props> = ({ title, text }) => {
	return (
		<div className='paragraph'>
			<p className='paragraph__text'>
				<strong className='paragraph__title'>{title}</strong> - {text}
			</p>
		</div>
	)
}
