import atlas from '../../assets/companies/atlas.png'
import bonfiglioli from '../../assets/companies/bonfiglioli.png'
import brinkmannpumpsde from '../../assets/companies/brinkmannpumpsde.jpg'
import cameron from '../../assets/companies/cameron.png'
import caproni from '../../assets/companies/caproni.jpg'
import ebmpapst from '../../assets/companies/ebmpapst.png'
import heidenhain from '../../assets/companies/heidenhain.gif'
import hydraulic from '../../assets/companies/hydraulic.gif'
import moog from '../../assets/companies/moog.png'
import pepperlfuchs from '../../assets/companies/pepperlfuchs.jpg'
import sew from '../../assets/companies/sew.png'
import siemens from '../../assets/companies/siemens.jpg'
import stromag from '../../assets/companies/stromag.gif'
import vega from '../../assets/companies/vega.png'
import veljan from '../../assets/companies/veljan.png'
import waukesha from '../../assets/companies/waukesha.gif'
import './Companies.css'

const companies = [
	atlas,
	bonfiglioli,
	brinkmannpumpsde,
	cameron,
	caproni,
	ebmpapst,
	heidenhain,
	hydraulic,
	moog,
	pepperlfuchs,
	sew,
	siemens,
	stromag,
	vega,
	veljan,
	waukesha,
]

export const Companies = () => {
	return (
		<div className='companies' id='companies'>
			<div className='company__relations'>
				ТК "tk-sid" имеет постоянные партнёрские отношения с ведущими европейскими производителями промышленных
				комплектующих и является прямым импортером данной продукции. Такой подход обеспечивает гарантию оптимальных цен
				и качества представленных товаров.
			</div>
			<div className='companies__container'>
				{companies.map((company) => {
					return <img key={company} className='company__item' src={`${company}`} alt={`${company}`} />
				})}
			</div>
		</div>
	)
}
