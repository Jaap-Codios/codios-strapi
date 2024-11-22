import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsEmail extends Struct.ComponentSchema {
  collectionName: 'components_buttons_emails';
  info: {
    displayName: 'Email';
    icon: 'envelop';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ButtonsPrimaireKnop extends Struct.ComponentSchema {
  collectionName: 'components_buttons_primaire_knops';
  info: {
    displayName: 'Primaire knop';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ButtonsSocialMediaButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_social_media_buttons';
  info: {
    displayName: 'Social media button';
    icon: 'paperPlane';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ButtonsTekstknop extends Struct.ComponentSchema {
  collectionName: 'components_buttons_tekstknops';
  info: {
    displayName: 'Tekstknop';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ButtonsTelefoonnummer extends Struct.ComponentSchema {
  collectionName: 'components_buttons_telefoonnummers';
  info: {
    description: '';
    displayName: 'Telefoonnummer';
    icon: 'phone';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    telefoonnummer: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCaseInformatie extends Struct.ComponentSchema {
  collectionName: 'components_components_case_informaties';
  info: {
    description: '';
    displayName: 'Case informatie';
    icon: 'bulletList';
  };
  attributes: {
    hero_achtergrond_foto: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    informatie_blok: Schema.Attribute.Component<
      'components.informatieblok',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface ComponentsClient extends Struct.ComponentSchema {
  collectionName: 'components_components_clients';
  info: {
    displayName: 'client';
    icon: 'bulletList';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    naam: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHobby extends Struct.ComponentSchema {
  collectionName: 'components_components_hobbies';
  info: {
    description: '';
    displayName: 'Hobby';
    icon: 'bulletList';
  };
  attributes: {
    illustratie: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tekst: Schema.Attribute.String;
  };
}

export interface ComponentsHomescreenShowcase extends Struct.ComponentSchema {
  collectionName: 'components_components_homescreen_showcases';
  info: {
    description: '';
    displayName: 'Showcase homescreen content';
    icon: 'bulletList';
  };
  attributes: {
    laptop: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ondertitel: Schema.Attribute.Text & Schema.Attribute.Required;
    tablet: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsInformatieblok extends Struct.ComponentSchema {
  collectionName: 'components_components_informatiebloks';
  info: {
    description: '';
    displayName: 'Informatieblok';
    icon: 'bulletList';
  };
  attributes: {
    informatie: Schema.Attribute.String & Schema.Attribute.Required;
    omschrijving: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsKoffieStatistiek extends Struct.ComponentSchema {
  collectionName: 'components_components_koffie_statistieks';
  info: {
    displayName: 'Koffie statistiek';
    icon: 'bulletList';
  };
  attributes: {
    codios_startdatum: Schema.Attribute.DateTime & Schema.Attribute.Required;
    koffie_per_dag: Schema.Attribute.Decimal;
  };
}

export interface ComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Service';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ComponentsSpotifyMinuten extends Struct.ComponentSchema {
  collectionName: 'components_components_spotify_minutens';
  info: {
    description: '';
    displayName: 'Spotify minuten';
    icon: 'bulletList';
  };
  attributes: {
    minuten_per_dag: Schema.Attribute.String;
    persoon: Schema.Attribute.String;
  };
}

export interface FooterCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_footer_call_to_actions';
  info: {
    displayName: 'Call to action';
    icon: 'cursor';
  };
  attributes: {
    knop: Schema.Attribute.Component<'buttons.primaire-knop', false>;
    ondertitel: Schema.Attribute.Text & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    description: '';
    displayName: 'contact';
    icon: 'envelop';
  };
  attributes: {
    adres: Schema.Attribute.Text;
    emailaddressen: Schema.Attribute.Component<'buttons.email', true>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    socials: Schema.Attribute.Component<'buttons.social-media-button', true>;
    telefoonnummers: Schema.Attribute.Component<'buttons.telefoonnummer', true>;
  };
}

export interface HomeCasesSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_cases_secties';
  info: {
    displayName: 'Cases sectie';
    icon: 'bulletList';
  };
  attributes: {
    aapje_tekst: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 13;
      }> &
      Schema.Attribute.DefaultTo<'Apetrots!'>;
    cases: Schema.Attribute.Relation<'oneToMany', 'api::case.case'>;
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Hier zijn we trots op!'>;
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cases'>;
  };
}

export interface HomeClientsSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_clients_secties';
  info: {
    displayName: 'Clients sectie';
    icon: 'bulletList';
  };
  attributes: {
    clients: Schema.Attribute.Component<'components.client', true>;
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Deze bedrijven gingen je al voor!'>;
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Clients'>;
  };
}

export interface HomeHeroSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_secties';
  info: {
    description: '';
    displayName: 'Hero sectie';
    icon: 'bulletList';
  };
  attributes: {
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Onze missie is om met plezier en transparantie innovatie web en app omgevingen te bouwen.'>;
    primaire_knop: Schema.Attribute.Component<'buttons.primaire-knop', false> &
      Schema.Attribute.Required;
    tekst_knop: Schema.Attribute.Component<'buttons.tekstknop', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    titel: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface HomeLeaderboardSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_leaderboard_secties';
  info: {
    description: '';
    displayName: 'Leaderboard sectie';
    icon: 'bulletList';
  };
  attributes: {
    aantal_meetings: Schema.Attribute.String & Schema.Attribute.Required;
    grappenmaker: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Giovanni'>;
    koffie: Schema.Attribute.Component<'components.koffie-statistiek', false> &
      Schema.Attribute.Required;
    meeste_koekjes_persoon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Jaap'>;
    regels_code: Schema.Attribute.String & Schema.Attribute.Required;
    spotify: Schema.Attribute.Component<'components.spotify-minuten', false> &
      Schema.Attribute.Required;
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Onze leaderboards'>;
  };
}

export interface HomeServicesSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_services_secties';
  info: {
    description: '';
    displayName: 'Services sectie';
    icon: 'bulletList';
  };
  attributes: {
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Onze grootste expertises'>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Services'>;
    uitleg: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Ieder heeft zo zijn specialiteiten, wij ook. Met een duidelijk beeld voor user experience, user interface design en de nieuwste technologie\u00EBn maken wij jouw product samen tot een succes.'>;
  };
}

export interface SectiesCallToActionGecentreerd extends Struct.ComponentSchema {
  collectionName: 'components_secties_call_to_action_gecentreerds';
  info: {
    displayName: 'Call to action gecentreerd';
    icon: 'bulletList';
  };
  attributes: {
    knop: Schema.Attribute.Component<'buttons.primaire-knop', false>;
    tekst: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectiesDubbeleFotoSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_dubbele_foto_secties';
  info: {
    description: '';
    displayName: 'Dubbele foto sectie';
    icon: 'bulletList';
  };
  attributes: {
    foto_1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    foto_2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectiesFotoSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_foto_secties';
  info: {
    displayName: 'Foto sectie';
    icon: 'bulletList';
  };
  attributes: {
    fotos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SectiesHeroSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_hero_secties';
  info: {
    displayName: 'Hero sectie';
    icon: 'bulletList';
  };
  attributes: {
    achtergrond_foto: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectiesTeamSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_team_secties';
  info: {
    description: '';
    displayName: 'Team sectie';
    icon: 'bulletList';
  };
  attributes: {
    team: Schema.Attribute.Relation<'oneToMany', 'api::team-lid.team-lid'>;
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ons team'>;
  };
}

export interface SectiesTekstMetFotoHorizontaal extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_foto_horizontaals';
  info: {
    description: '';
    displayName: 'Tekst met foto horizontaal sectie';
    icon: 'bulletList';
  };
  attributes: {
    foto: Schema.Attribute.Media<'images'>;
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectiesTekstMetFotoVerticaal extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_foto_verticaals';
  info: {
    description: '';
    displayName: 'Tekst met foto verticaal sectie';
    icon: 'bulletList';
  };
  attributes: {
    foto: Schema.Attribute.Media<'images'>;
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectiesTekstMetTitelLinks extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_titel_links';
  info: {
    displayName: 'Tekst met titel links';
    icon: 'bulletList';
  };
  attributes: {
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectiesTekstMetTitelRechts extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_titel_rechts';
  info: {
    displayName: 'Tekst met titel rechts';
    icon: 'bulletList';
  };
  attributes: {
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectiesTekstSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_secties';
  info: {
    displayName: 'Tekst sectie';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.email': ButtonsEmail;
      'buttons.primaire-knop': ButtonsPrimaireKnop;
      'buttons.social-media-button': ButtonsSocialMediaButton;
      'buttons.tekstknop': ButtonsTekstknop;
      'buttons.telefoonnummer': ButtonsTelefoonnummer;
      'components.case-informatie': ComponentsCaseInformatie;
      'components.client': ComponentsClient;
      'components.hobby': ComponentsHobby;
      'components.homescreen-showcase': ComponentsHomescreenShowcase;
      'components.informatieblok': ComponentsInformatieblok;
      'components.koffie-statistiek': ComponentsKoffieStatistiek;
      'components.service': ComponentsService;
      'components.spotify-minuten': ComponentsSpotifyMinuten;
      'footer.call-to-action': FooterCallToAction;
      'footer.contact': FooterContact;
      'home.cases-sectie': HomeCasesSectie;
      'home.clients-sectie': HomeClientsSectie;
      'home.hero-sectie': HomeHeroSectie;
      'home.leaderboard-sectie': HomeLeaderboardSectie;
      'home.services-sectie': HomeServicesSectie;
      'secties.call-to-action-gecentreerd': SectiesCallToActionGecentreerd;
      'secties.dubbele-foto-sectie': SectiesDubbeleFotoSectie;
      'secties.foto-sectie': SectiesFotoSectie;
      'secties.hero-sectie': SectiesHeroSectie;
      'secties.team-sectie': SectiesTeamSectie;
      'secties.tekst-met-foto-horizontaal': SectiesTekstMetFotoHorizontaal;
      'secties.tekst-met-foto-verticaal': SectiesTekstMetFotoVerticaal;
      'secties.tekst-met-titel-links': SectiesTekstMetTitelLinks;
      'secties.tekst-met-titel-rechts': SectiesTekstMetTitelRechts;
      'secties.tekst-sectie': SectiesTekstSectie;
      'shared.seo': SharedSeo;
    }
  }
}
