import { ISelectItem } from '@/ui/select/select.interface'

import { EnumProductSort } from '@/services/product/product.types'

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.HIGH_PRICE,
		label: 'По убыванию цены'
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: 'По возврастанию цены'
	},
	{
		key: EnumProductSort.NEWEST,
		label: 'Новее'
	},
	{
		key: EnumProductSort.OLDEST,
		label: 'Старее'
	}
]
