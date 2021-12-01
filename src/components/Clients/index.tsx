import Image from 'next/image';
import { useEffect, useState } from 'react';
import { imagens } from './imagens';
import Slide from './Slide/index';

const Clients = () => {
  const [clientes, setClientes] = useState([]);
  async function carregarClientes() {
    setClientes(imagens);
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <div className='text-gray-600 body-font'>
      <div className='container py-24 mx-auto text-center'>
        <h1 className='title-font font-medium text-black sm:text-4xl mb-4'>PARCEIROS</h1>

        <p className='lg:w-2/3 mx-auto leading-relaxed mb-3'>
          Algumas das empresas que confiam na Somasys.
        </p>
        <div className='px-8 py-8'>
          <Slide>
            {clientes.map((cliente, idx) => (
              <div
                className='h-64 relative'
                key={idx}
              >
                <Image
                  src={cliente.image.src}
                  alt={cliente.image.src}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Clients;
