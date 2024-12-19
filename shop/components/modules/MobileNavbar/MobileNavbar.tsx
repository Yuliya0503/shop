'use client'
import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import Link from 'next/link'

const MobileNavbar = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody()
    openCatalogMenu()
    closeMenu()
  }

  return (
    <div className='mobile-navbar'>
      <Link href='/' className='mobile-navbar__btn'>
        {translations[lang].breadcrumbs.main}
      </Link>
      <button
        className='btn-reset mobile-navbar__btn'
        onClick={handleOpenCatalogMenu}
      >
        {translations[lang].breadcrumbs.catalog}
      </button>
      <Link href='/favorites' className='btn-reset mobile-navbar__btn'>
        {translations[lang].breadcrumbs.favorites}
      </Link>
      <Link href='/cart' className='btn-reset mobile-navbar__btn'>
        {translations[lang].breadcrumbs.cart}
      </Link>
      <button className='btn-reset mobile-navbar__btn' onClick={handleOpenMenu}>
        {translations[lang].common.more}
      </button>
    </div>
  )
}

export default MobileNavbar
