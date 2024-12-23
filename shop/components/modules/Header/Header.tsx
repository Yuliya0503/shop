'use client'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import Menu from './Menu'
import { openMenu, openSearchModal } from '@/context/modals'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import CartPopup from './CartPopup/CartPopup'

const Header = () => {
  const { lang, translations } = useLang()

  const handlerOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenToBody()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handlerOpenMenu}>
          {translations[lang].header.menu__btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              className='btn-reset header__links__item__btn header__links__item__btn--search'
              onClick={handleOpenSearchModal}
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favourites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <CartPopup />
          </li>
          <li className='header__links__item'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
