import ClienteModel from '../../model/cliente';

export const imagens: ClienteModel[] = [
  new ClienteModel(1, 'Baggio', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954983/site/MIX_500x500_askc2e.png',
    alt: 'Supermercado Baggio',
  }),

  new ClienteModel(2, 'Marin', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1638186078/site/logo_MARIN_500x500_fb_uqyauv.png',
    alt: 'Supermercado Marin',
  }),
  new ClienteModel(3, 'Janh', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/Logo_jahn_x5ibxa.png',
    alt: 'Supermercado Jahn',
  }),
  new ClienteModel(4, 'Trez', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/LOGOMARCA_trez_500x500_glhbmm.png',
    alt: 'Supermercado Trez',
  }),
  new ClienteModel(5, 'Maccari', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/maccari_500x500_xchdkf.png',
    alt: 'Supermercado Maccari',
  }),
  new ClienteModel(6, 'Central', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/logo_central_nova_xxqnry.png',
    alt: 'Supermercado Central',
  }),
  new ClienteModel(7, 'Locatelli', {
    src: 'https://imagens-six.vercel.app/locatelli.jpg',
    alt: 'Supermercado Locatelli',
  }),
  new ClienteModel(8, 'Parobe', {
    src: 'https://imagens-six.vercel.app/Parob%C3%A9%20Santa%20Marta-500x500.jpg',
    alt: 'Parobe Santa Marta',
  }),
  new ClienteModel(9, 'Rizzi', {
    src: 'https://imagens-six.vercel.app/Rizzi%20Ca%C3%A7a%20e%20pesca%20500x500.jpg',
    alt: 'Rizzi Caca e Pesca',
  }),
  new ClienteModel(10, 'Mais',{
    src: 'https://imagens-six.vercel.app/logo%20mais%20atacado%20500x500.jpg',
    alt: 'Mais Atacado (Marin)'
  })
];
