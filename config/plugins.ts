export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    'strapi-v5-plugin-populate-deep': {
        config: {
        defaultDepth: 8,
        maxDepth: 10, 
        }
    },
    navigation: {
        enabled: true,
    },
    ezforms:{
        config:{
          captchaProvider: {
            name: 'recaptcha',
          },
          config: {
            secretKey: '6LcYJVoqAAAAACjl8lEm_7LXQHeqevzryZQpl3sM',
            minimumScore: 0.5
          },
          notificationProviders: []
        }
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
            },
            region: env('AWS_REGION'),
            params: {
              ACL: 'private',
              Bucket: env('AWS_BUCKET'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
});

