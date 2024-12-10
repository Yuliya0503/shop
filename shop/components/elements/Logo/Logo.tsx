import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img
      className='logo_img'
      src='/img/header/logo.svg'
      alt='Rostelecom Logo'
    />
  </Link>
)
export default Logo

/**можно исправить
 *import Image from 'next/image'
 * {
  "rules": {
    "@next/next/no-img-element": "off"
  }
}
  или вот так
  <Image
  className='logo_img'
  src='/img/header/logo.svg'
  alt='Rostelecom Logo'
  layout='intrinsic'
/> - посчитаются размеры автоматически или вот так,
тогда размеры применяться как указано
  <Image
      className='logo_img'
      src='/img/header/logo.svg'
      alt='Rostelecom Logo'
      width={100} // укажите ширину изображения
      height={50} // укажите высоту изображения
    />
 */
