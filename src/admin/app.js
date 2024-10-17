const config = {
  locales: ["en", "nl"],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Codios",
    },
    nl: {
      "app.components.LeftMenu.navbrand.title": "Codios",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
