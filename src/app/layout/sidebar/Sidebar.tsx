'use client'

import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { FiLogIn, FiLogOut } from 'react-icons/fi'

import Loader from '@/ui/Loader'

import { useCategories } from '@/hooks/queries/useCategories'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import { ADMIN_MENU } from './admin-menu.data'
import { convertToMenuItems } from './convert-to-menu-items'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()

	const { user } = useAuth()
	const { logout } = useActions()

	const { isAdminPanel, pathname } = useIsAdminPanel()
	const [shadow, useShadow]=useState(true)

	return (
		<aside
			className='bg-black text-white z-10 border-8 max-h-[100px] flex items-center '
			style={{
				minHeight: 'calc(100% - 91px)',
				height: 'calc(100vh - 91px)'
			}}
		>
			<div className={'flex'}>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl px-layout'>
							{isAdminPanel ? 'Меню: ' : 'Категории: '}
						</div>
						<ul className={'flex items-center'}>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								(item,index) => (
									<li key={item.href}>
										<Link
											className={cn(
												'text-lg my-3 px-5 text-white hover:text-primary transition-colors duration-200',
												pathname === item.href ? 'text-white' : 'text-white'
											)}
											href={item.href}
										>

											{item.label}
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div> Категории не обнаружены</div>
				)}
			</div>


		</aside>
	)
}

export default Sidebar
