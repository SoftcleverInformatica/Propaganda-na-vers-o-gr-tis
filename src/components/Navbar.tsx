import LOGO from '../assets/logo.png'

export const Navbar = () => {
  return (
    <nav
      className='bg-dark sticky top-0 z-10 px-4'>
      <div
        className='
        flex justify-between w-full items-center py-4 mx-auto
        sm:flex-col
        lg:flex-row
        2lg:max-w-[1000px] 2lg:h-[15vh]'>
        <img src={LOGO} className='w-64' />
        <h1 className='text-4xl font-bold text-center py-12 text-white'>Sírius PDV - Versão Simplificada</h1>

        <a href='http://177.131.142.37:7001/' className='flex text-white gap-2 items-center bg-dark_indigo px-4 py-2 rounded-md'>
          Login
        </a>

      </div>
    </nav>
  )
}
