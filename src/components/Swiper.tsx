import { useEffect, useState } from 'react';
import { BsClipboardCheckFill, BsClipboardDataFill, BsFillFileCheckFill, BsFillPhoneFill } from 'react-icons/bs';
import { HiCash } from 'react-icons/hi';
import { IoReceiptSharp } from 'react-icons/io5';
import { MdLocalMall, MdOutlinePets, MdDeliveryDining } from 'react-icons/md';
import { PiCodepenLogoFill, PiSunglassesFill } from 'react-icons/pi';
import { SiIfood } from 'react-icons/si';
import { TbTruckDelivery, TbWorldCode } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './Card';

export const Slide = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    function updateSlidesPerView() {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 600) {
        setSlidesPerView(1);
      } else if (windowWidth <= 768) {
        setSlidesPerView(2);
      } else if (windowWidth <= 1280) {
        setSlidesPerView(3);
      }
    }

    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={100}
      slidesPerView={slidesPerView}
      className='sm:px-12'
    >
      <SwiperSlide>
        <Card title='NFE / NFS-e' description='Sua nota fiscal eletrônica rápida e fácil.' icon={IoReceiptSharp} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sirius SAT Fiscal' description='Emissor de Cupom Fiscal Eletrônico homologado na SEFAZ - SP.' icon={PiCodepenLogoFill} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sirius NFC-e Fiscal' description='Emissor de Cupom Fiscal Eletrônico homologado em todo o território nacional.' icon={BsClipboardDataFill} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius Pré-Venda Safira' description='Estoque, Controle de Caixa, Financeiro Pagar e Receber, Compras, Troca de Mercadorias, Relatórios Gerenciais e muito mais.' icon={HiCash} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius APP Pré-venda' description='Pedido de venda através do celular.' icon={BsFillPhoneFill} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius Comanda' description='Comanda de venda através do computador.' icon={BsClipboardCheckFill} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius APP Comanda' description='Comanda de venda através do celular.' icon={BsFillFileCheckFill} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius WEB lojas' description='Tenha o controle de uma ou mais lojas através da WEB.' icon={MdLocalMall} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius Delivery' description='Controle das entregas para comércio em geral.' icon={TbTruckDelivery} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Integração com iFood' description='Agilidade nas vendas por aplicativo.' icon={SiIfood} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius Óticas' description='Cadastro de laboratórios, oftalmologistas e afins.' icon={PiSunglassesFill} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius Pet Shop' description='Controle completo do Pet.' icon={MdOutlinePets} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius ERP' description='Sistema completo de gestão empresarial.' icon={TbWorldCode} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title='Sírius Cardápio Digital' description='Sistema de gerenciamento de restaurante com entrega de delivery' icon={MdDeliveryDining} />
      </SwiperSlide>
    </Swiper>
  );
};