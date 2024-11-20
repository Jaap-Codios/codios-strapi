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
      // origin: ['http://localhost:8080', 'https://www.codios.nl', 'https://codios.nl', 'https://cms.codios.nl'],
      origin: (ctx) => {
        const origin = ctx.request.header.origin;
        const allowedOrigins = [
          'http://localhost:8080',
          'https://www.codios.nl',
          'https://codios.nl',
          'https://cms.codios.nl',
        ];

        const allowedRegexOrigins = [/^https:\/\/.*\.vercel\.app$/]; // Vercel-subdomeinen toestaan

        // Controleer of origin in statische lijst staat of matcht met een regex
        if (
          allowedOrigins.includes(origin) ||
          allowedRegexOrigins.some((regex) => regex.test(origin))
        ) {
          return origin;
        }
        return false; // Blokkeer niet-goedgekeurde origins
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
