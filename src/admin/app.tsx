import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'nl',
      'en',
    ],
    theme: {
      light: {
        colors: {
          alternative100: '#f6ecfc',
          alternative200: '#e0c1f4',
          alternative500: '#ac73e6',
          alternative600: '#9736e8',
          alternative700: '#8312d1',
          buttonNeutral0: '#ffffff',
          
          buttonPrimary500: '#00D07D',
          buttonPrimary600: '#00B56C',
         
          danger100: '#FFEEEC',
          danger200: '#FFDEDA',
          danger500: '#F04848',
          danger600: '#D13D3D',
          danger700: '#B23333',
          
          neutral0: '#ffffff',
          neutral100: '#f6f6f9',
          neutral1000: '#181826',
          neutral150: '#E1E1E1',
          neutral200: '#dcdce4',
          neutral300: '#D1D1D1',
          neutral400: '#a5a5ba',
          neutral500: '#6A736F',
          neutral600: '#404644',
          neutral700: '#4a4a6a',
          neutral800: '#0F232A',
          neutral900: '#0F232A',

          primary100: '#EEFBF2',
          primary200: '#CAF2D8',
          primary500: '#00D07D',
          primary600: '#00B56C',
          primary700: '#00804B',

          secondary100: '#ECF8F0',
          secondary200: '#D9F1E1',
          secondary500: '#00B76E',
          secondary600: '#009F5F',
          secondary700: '#008750',
          
          success100: '#eafbe7',
          success200: '#c6f0c2',
          success500: '#5cb176',
          success600: '#328048',
          success700: '#2f6846',
          
          warning100: '#fdf4dc',
          warning200: '#fae7b9',
          warning500: '#f29d41',
          warning600: '#d9822f',
          warning700: '#be5d01',
        }
      },
      dark: {
        colors: {
          alternative100: '#181826',
          alternative200: '#4a4a6a',
          alternative500: '#ac73e6',
          alternative600: '#ac73e6',
          alternative700: '#e0c1f4',

          buttonNeutral0: '#0F232A',
          buttonPrimary500: '#00D07D',
          buttonPrimary600: '#05DC86',

          danger100: '#140202',
          danger200: '#2A0606',
          danger500: '#F04848',
          danger600: '#D13D3D',
          danger700: '#B23333',

          neutral0: '#0F232A',
          neutral100: '#0C1C22',
          neutral1000: '#0F232A',
          neutral150: '#1F343B',
          neutral200: '#2C4954',
          neutral300: '#427181',
          neutral400: '#a5a5ba',
          neutral500: '#D1D1D1',
          neutral600: '#a5a5ba',
          neutral700: '#eaeaef',
          neutral800: '#ffffff',
          neutral900: '#ffffff',

          primary100: '#1E4636',
          primary200: '#26664C',
          primary500: '#00D07D',
          primary600: '#05DC86',
          primary700: '#04E088',
          
          secondary100: '#181826',
          secondary200: '#4a4a6a',
          secondary500: '#66b7f1',
          secondary600: '#66b7f1',
          secondary700: '#b8e1ff',
          
          success100: '#181826',
          success200: '#4a4a6a',
          success500: '#5cb176',
          success600: '#5cb176',
          success700: '#c6f0c2',
          
          warning100: '#181826',
          warning200: '#4a4a6a',
          warning500: '#f29d41',
          warning600: '#f29d41',
          warning700: '#fae7b9',
        },
      },
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
  
};
