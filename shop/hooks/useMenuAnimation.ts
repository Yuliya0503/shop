import { useEffect, useState } from 'react'

export const useMenuAnimation = (zInddex: number, popupIsOpen: boolean) => {
  const [popupZIndex, setPopupZIndex] = useState<string | number>(0)

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  }

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  }

  useEffect(() => {
    if (popupIsOpen) {
      setPopupZIndex(zInddex)
      return
    }
    const timerId = setTimeout(() => setPopupZIndex('-1'), 1000)
    return () => clearTimeout(timerId)
  }, [popupIsOpen, zInddex])

  return { popupZIndex, itemVariants, sideVariants }
}
