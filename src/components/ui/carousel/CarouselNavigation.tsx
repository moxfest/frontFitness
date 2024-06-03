import { FC } from 'react'
import {
	BsArrowLeft, BsArrowLeftSquare, BsArrowRightCircle, BsArrowRightSquare,
	BsBorderLeft,
	BsCaretLeft,
	BsCaretLeftSquare,
	BsCaretRightSquare,
	BsChatLeft
} from 'react-icons/bs'

import { useActions } from '@/hooks/useActions'

import styles from './Carousel.module.scss'

const CarouselNavigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()

	return (
		<div className={styles.nav}>
			<button onClick={() => prevSlide()}>
				<BsArrowLeftSquare className={'scale-[2]'} />
			</button>
			<button  onClick={() => nextSlide({ carouselLength: 2 })}>
				<BsArrowRightSquare className={'scale-[2]'} />
			</button>
		</div>
	)
}

export default CarouselNavigation
