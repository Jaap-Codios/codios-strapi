import slugify from 'slugify';

module.exports = {
    async beforeCreate(event) {
        await generateSlug(event);
    },

    async beforeUpdate(event) {
        await generateSlug(event);
    },
};

async function generateSlug(event: { params: { data: any; }; }) {
    console.log(event);
    const { data } = event.params;
    if (!data || !data.naam) {
        console.log('Geen naam gevonden');
        return;
    }
    event.params.data.slug = slugify(data.naam, {
        lower: true,
    });

}
