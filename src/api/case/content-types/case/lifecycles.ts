import slugify from 'slugify';

module.exports = {
    async beforeCreate(event) {
        await generateSlug(event);
    },

    async beforeUpdate(event) {
        await generateSlug(event);
    },
};

async function generateSlug(event) {
    const { data } = event.params;

    if (!data || !data.case_informatie) {
        console.log('Geen case_informatie gevonden');
        return;
    }

    // Haal het ID van case_informatie op
    const caseInformatieId = data.case_informatie;

    // Haal de volledige case_informatie op om toegang te krijgen tot de title
    const caseInformatie = await strapi.db.query('api::case.case').findOne({
        where: { id: caseInformatieId },
        select: ['title'], // Vraag alleen het title veld op
    });

    if (caseInformatie && caseInformatie.title) {
        // Genereer de slug
        data.slug = slugify(caseInformatie.title);
    } else {
        console.log('Geen title gevonden in case_informatie');
    }
}
