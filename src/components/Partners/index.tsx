import Image from 'next/image';
import { useEffect, useState } from 'react';
import { imagens } from './imagensParceiros';
import Slide from '../Clients/Slide/index';
import Link from 'next/link';

const Parceiros = () => {
    const [parceiros, setParceiros] = useState([]);
    async function carregarParceiros() {
      setParceiros(imagens);
    }

    useEffect(() => {
      carregarParceiros();
    }, []);


return (
  <div className='text-gray-600 body-font'>
    <div className='container py-24 mx-auto text-center'>
      <h1 className='title-font font-medium text-black sm:text-4xl mb-4'>Parceiros</h1>

      <p className='lg:w-2/3 mx-auto leading-relaxed mb-3'>
        Algumas das empresas que fazem integração com a Somasys.
      </p>
      <div className='px-8 py-8'>
        <Slide>
          {parceiros.map((parceiros, idx) => (       
            
            <div
              className='h-64 relative'
              key={idx}

            >
              <Image
                src={parceiros.image.src}
                alt={parceiros.image.alt}
                layout='fill'
                objectFit='contain'
              />
          </div>       
          ))}
        </Slide>
        <div className='position-absolute mt-6'>
            <Link href={'https://materiais.mercafacil.com/agendamento-parcerias-somasys'}>
                <a target='_blank' className='text-white bg-green-soma p-3 rounded-lg text-center'>Saiba Mais</a>
            </Link>
        </div>
      </div>
    </div>
  </div>
);
};

export default Parceiros;
