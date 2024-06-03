'use client'

import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '../Heading'
import Loader from '../Loader'

import ProductItem from './product-item/ProductItem'
import { GridColForPorductsView } from '@/utils/gridColForPorductsView'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<>
					<div className={GridColForPorductsView}>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</>
			) : (
				<div>Тут ничего нет...</div>
			)}
		</section>
	)
}

export default Catalog
