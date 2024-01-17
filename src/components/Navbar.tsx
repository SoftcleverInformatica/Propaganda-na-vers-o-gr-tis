import { useEffect, useState } from 'react'
import LOGO from '../assets/logo.png'

export const Navbar = () => {
  const [countdown, setCountdown] = useState(10);
  const [showMessage, setShowMessage] = useState(true);
  const [linkEnabled, setLinkEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setShowMessage(false);
      setLinkEnabled(true);
    }
  }, [countdown]);

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
        <h1 className='text-4xl font-bold text-center py-12 text-white'>Sírius PDV</h1>

        <div className='flex flex-col-reverse justify-end items-end'>
          {showMessage && <p className='text-dark_indigo font-bold mr-2'>Você está no período de teste</p>}
          <a
            href='http://pdv.softclever.com.br:7001/'
            className={`flex text-white gap-2 w-fit bg-dark_indigo px-4 py-2 rounded-md ${!linkEnabled && 'opacity-50 cursor-not-allowed'}`}
            onClick={(e) => !linkEnabled && e.preventDefault()}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}
