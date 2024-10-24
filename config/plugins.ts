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
    }
    // upload: {
    //     config: {
    //         provider: 'cloudinary',
    //         providerOptions: {
    //             cloud_name: env('CLOUDINARY_NAME'),
    //             api_key: env('CLOUDINARY_KEY'),
    //             api_secret: env('CLOUDINARY_SECRET'),
    //         },
    //         actionOptions: {
    //             upload: {},
    //             uploadStream: {},
    //             delete: {},
    //         },
    //     },
    // },
});

