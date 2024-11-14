import slugify from 'slugify';

module.exports = {
    async beforeCreate(event: { params: { data: { titel?: string; slug?: string } } }) {
        if (!event.params.data || !event.params.data.titel) {
            return;
        }

        // Generate slug from the "naam" field
        event.params.data.slug = slugify(event.params.data.titel);
    },

    async beforeUpdate(event: { params: { data: { titel?: string; slug?: string } } }) {
        if (!event.params.data || !event.params.data.titel) {
            return;
        }

        // Generate slug from the "naam" field
        event.params.data.slug = slugify(event.params.data.titel);
    },
};