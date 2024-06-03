'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { logout } from '@/store/user/user.actions'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className='bg-secondary w-full py-6 px-layout grid grid-cols-[1fr,3fr] xl:grid-cols-[1fr,3fr,1.2fr] flex items-center '

		>
			<Link href='/'>
				{isAdminPanel ? (
					<h2 className='text-3xl text-black font-semibold '>Admin Panel</h2>
				) : (
					<Image
						priority
						width={180}
						className={'h-[100px]'}
						height={100}
						src='/images/logo.png'
						alt='logo'
					/>
				)}
			</Link>
			<Search  />
			<div className='flex items-center justify-end gap-10 block max-xl:hidden'>
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href='/admin'

						className='hover:text-primary transition-colors duration-200 text-black inline-block text-lg'
					>
						<MdOutlineAdminPanelSettings size={29} />
					</Link>
				)}
				<Link href='/favorites' className='text-black'>
					<AiOutlineHeart size={28}  title="Избранное" />

				</Link>
				<HeaderCart />
				<HeaderProfile />
				{user? (
					<button
						className='text-black flex items-center ml-10  hover:text-primary transition-colors duration-200 '
						onClick={() => logout()}
					>
						<FiLogOut className={'scale-150'} />
						<span className='ml-2'>Выйти из аккаунта</span>
					</button>
				): (<Link className={'text-black flex items-center ml-10  hover:text-primary transition-colors duration-200'}
									href={'/auth'}
				>
					<FiLogIn className={'scale-150'}/>
					<span className='ml-2'>Войти/Зарегистрироваться</span>
				</Link>)}
			</div>
		</header>
	)
}

export default Header
