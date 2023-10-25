export default class Consts {
  public static category: { [key: string]: ICategory } = {
    slider: {
      name: 'Slider',
      code: 'slider',
      asset:
        'https://viveo-suprimentos.nyc3.digitaloceanspaces.com/assets/img/ImageBackgroundIntroduction.png',
      page: '',
    },
    button: {
      name: 'Botão',
      code: 'button',
      asset: '',
      page: '',
    },
    input: {
      name: 'Campo de Texto',
      code: 'input',
      asset: '',
      page: '',
    },
    animation: {
      name: 'Animações',
      code: 'animation',
      asset: '',
      page: '',
    },
    accordion: {
      name: 'Accordion',
      code: 'accordion',
      asset: '',
      page: '',
    },
    loader: {
      name: 'Loaders',
      code: 'loader',
      asset: '',
      page: '',
    },
  };
  public static userAdminProfileCode = 0;
  public static userClientProfileCode = 1;
}
interface ICategory {
  name: string;
  code: string;
  asset: string;
  page: string;
}
