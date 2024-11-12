import slugify from 'slugify';

module.exports = {
    async beforeCreate(event: { params: { data: { naam?: string; slug?: string } } }) {
        if (!event.params.data || !event.params.data.naam) {
            return;
        }

        // Generate slug from the "naam" field
        event.params.data.slug = slugify(event.params.data.naam);
    },

    async beforeUpdate(event: { params: { data: { naam?: string; slug?: string } } }) {
        if (!event.params.data || !event.params.data.naam) {
            return;
        }

        // Generate slug from the "naam" field
        event.params.data.slug = slugify(event.params.data.naam);
    },
};