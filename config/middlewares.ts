export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'https://codios-bucket-codios.s3.eu-north-1.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'https://codios-bucket-codios.s3.eu-north-1.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: (origin: string) => {
        // allow request from localhost and codios and from subdomains of vercel
        if (!origin) return false;
        const allowedOrigins = [
          'http://localhost:8080',
          'https://www.codios.nl',
          'https://codios.nl',
          'https://cms.codios.nl',
        ];
        return allowedOrigins.includes(origin) || origin.endsWith('.vercel.app');
      },
      headers: '*',
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
