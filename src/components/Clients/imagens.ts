import ClienteModel from '../../model/cliente';

export const imagens: ClienteModel[] = [
  new ClienteModel(1, 'Baggio', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954983/site/MIX_500x500_askc2e.png',
    alt: 'Supermercado Baggio',
  }),
  new ClienteModel(2, 'Wagner', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/logotipo_hiper_Wagner_500x500_fb_m4rxzz.png',
    alt: 'Supermercado Wagner',
  }),
  new ClienteModel(3, 'Marin', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1638186078/site/logo_MARIN_500x500_fb_uqyauv.png',
    alt: 'Supermercado Marin',
  }),
  new ClienteModel(4, 'Janh', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/Logo_jahn_x5ibxa.png',
    alt: 'Supermercado Jahn',
  }),
  new ClienteModel(5, 'Trez', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/LOGOMARCA_trez_500x500_glhbmm.png',
    alt: 'Supermercado Trez',
  }),
  new ClienteModel(6, 'Maccari', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/maccari_500x500_xchdkf.png',
    alt: 'Supermercado Maccari',
  }),
  new ClienteModel(7, 'Central', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/logo_central_nova_xxqnry.png',
    alt: 'Supermercado Central',
  }),
];
