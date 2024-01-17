import { AiFillInstagram } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { Navbar } from '../components/Navbar';
import { Slide } from '../components/Swiper';

export function Home() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden sm:h-full'>

      <Navbar />

      <div className='flex flex-col pt-4 gap-8 sm:px-2 2sm:px-4'>
        <div className='2lg:mx-auto 2lg:max-w-[1000px]'>

          <div className='flex'>
            <div>
              <h2 className='text-2xl text-center py-4 font-medium text-gray-700'>
                Conheça outros recursos que a Soft Clever desenvolveu para o seu negócio.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Slide */}
      <div className='py-8 sm:px-2 2sm:px-4'>
        <div className='2lg:mx-auto 2lg:max-w-[1000px]'>

          <div>
            <Slide />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-2 text-zinc-50 px-4 text-center mx-auto 2lg:max-w-[1000px]
      font-bold'>
        <p className='flex bg-dark_indigo rounded p-2 gap-2'>
          <BsFillCheckSquareFill className="text-3xl" />
          Mais de 12000 usuários atendidos.
        </p>
        <p className='flex bg-dark_indigo rounded p-2 gap-2'>
          <BsFillCheckSquareFill className="text-3xl" />
          Há quase 30 anos desenvolvendo soluções
        </p>
        <p className='flex bg-dark_indigo rounded p-2 gap-2'>
          <BsFillCheckSquareFill className="text-3xl" />
          Somos indicados por centenas de contadores.
        </p>
        <p className='flex bg-dark_indigo rounded p-2 gap-2'>
          <BsFillCheckSquareFill className="text-3xl" />
          Temos sistemas para micro, pequena e média empresa.
        </p>
      </div>

      <div className='absolute bottom-0 bg-dark w-full h-[20%] text-white p-1
      sm:relative
      lg:absolute
      2lg:h-[15%]'>
        <div className='flex justify-between mx-auto max-w-[1000px]'>
          <div className='flex flex-col gap-12 2lg:gap-1'>
            <h3 className='text-2xl font-medium sm:text-xl 2lg:text-xl 2lg:font-bold'>Soft Clever Informática</h3>
            <h3>R. João Alves Pimenta, 876 - São Paulo - SP, 02967-000</h3>
            <div className='flex gap-10 text-xl'>
              <a href="https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw?view_as=subscriber" target='_blank'><IoLogoYoutube /></a>
              <a href="https://www.facebook.com/softcleverinformatica" target='_blank'><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/soft.clever/" target='_blank'><AiFillInstagram /></a>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8 
          2lg:gap-1 2lg:text-sm'>
            <a href='https://softclever.com.br' className='flex items-center gap-2 col-span-2 text-2xl font-medium sm:text-xl 2lg:text-xl 2lg:font-bold'>
              <BiWorld />
              softclever.com.br
            </a>
            <p>Fixo: (11) 3991-3923</p>
            <p>Fixo: (11) 2361-8334</p>
            <p className='flex items-center gap-2'><span className='text-xl text-green-500'><RiWhatsappFill /> </span>(11) 9 9281-0253</p>
          </div>
        </div>
      </div>
    </div>
  )
}