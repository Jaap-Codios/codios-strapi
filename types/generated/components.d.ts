import type { Struct, Schema } from '@strapi/strapi';

export interface SectiesTekstMetTitelRechts extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_titel_rechts';
  info: {
    displayName: 'Tekst met titel rechts';
    icon: 'bulletList';
  };
  attributes: {
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectiesTekstMetTitelLinks extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_titel_links';
  info: {
    displayName: 'Tekst met titel links';
    icon: 'bulletList';
  };
  attributes: {
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectiesTekstMetFotoVerticaal extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_foto_verticaals';
  info: {
    displayName: 'Tekst met foto verticaal sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
    foto: Schema.Attribute.Media<'images'>;
  };
}

export interface SectiesTekstMetFotoHorizontaal extends Struct.ComponentSchema {
  collectionName: 'components_secties_tekst_met_foto_horizontaals';
  info: {
    displayName: 'Tekst met foto horizontaal sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    tekst: Schema.Attribute.Text & Schema.Attribute.Required;
    foto: Schema.Attribute.Media<'images'>;
  };
}

export interface SectiesTeamSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_team_secties';
  info: {
    displayName: 'Team sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ons team'>;
    team: Schema.Attribute.Relation<'oneToMany', 'api::team-lid.team-lid'>;
  };
}

export interface SectiesHeroSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_hero_secties';
  info: {
    displayName: 'Hero sectie';
    icon: 'bulletList';
  };
  attributes: {
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    achtergrond_foto: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
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

export interface SectiesDubbeleFotoSectie extends Struct.ComponentSchema {
  collectionName: 'components_secties_dubbele_foto_secties';
  info: {
    displayName: 'Dubbele foto sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    foto_1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    foto_2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectiesCallToActionGecentreerd extends Struct.ComponentSchema {
  collectionName: 'components_secties_call_to_action_gecentreerds';
  info: {
    displayName: 'Call to action gecentreerd';
    icon: 'bulletList';
  };
  attributes: {
    tekst: Schema.Attribute.String & Schema.Attribute.Required;
    knop: Schema.Attribute.Component<'buttons.primaire-knop', false>;
  };
}

export interface HomeServicesSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_services_secties';
  info: {
    displayName: 'Services sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Services'>;
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Onze grootste expertises'>;
    uitleg: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Ieder heeft zo zijn specialiteiten, wij ook. Met een duidelijk beeld voor user experience, user interface design en de nieuwste technologie\u00EBn maken wij jouw product samen tot een succes.'>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface HomeLeaderboardSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_leaderboard_secties';
  info: {
    displayName: 'Leaderboard sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Onze leaderboards'>;
    meeste_koekjes_persoon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Jaap'>;
    regels_code: Schema.Attribute.String & Schema.Attribute.Required;
    spotify: Schema.Attribute.Component<'components.spotify-minuten', false> &
      Schema.Attribute.Required;
    grappenmaker: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Giovanni'>;
    aantal_meetings: Schema.Attribute.String & Schema.Attribute.Required;
    koffie: Schema.Attribute.Component<'components.koffie-statistiek', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeHeroSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_secties';
  info: {
    displayName: 'Hero sectie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Onze missie is om met plezier en transparantie innovatie web en app omgevingen te bouwen.'>;
    titel: Schema.Attribute.RichText & Schema.Attribute.Required;
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
  };
}

export interface HomeClientsSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_clients_secties';
  info: {
    displayName: 'Clients sectie';
    icon: 'bulletList';
  };
  attributes: {
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Clients'>;
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Deze bedrijven gingen je al voor!'>;
    clients: Schema.Attribute.Component<'components.client', true>;
  };
}

export interface HomeCasesSectie extends Struct.ComponentSchema {
  collectionName: 'components_home_cases_secties';
  info: {
    displayName: 'Cases sectie';
    icon: 'bulletList';
  };
  attributes: {
    titel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cases'>;
    ondertitel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Hier zijn we trots op!'>;
    aapje_tekst: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 13;
      }> &
      Schema.Attribute.DefaultTo<'Apetrots!'>;
    cases: Schema.Attribute.Relation<'oneToMany', 'api::case.case'>;
  };
}

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    telefoonnummers: Schema.Attribute.Component<'buttons.telefoonnummer', true>;
    socials: Schema.Attribute.Component<'buttons.social-media-button', true>;
    emailaddressen: Schema.Attribute.Component<'buttons.email', true>;
    adres: Schema.Attribute.Text;
  };
}

export interface FooterCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_footer_call_to_actions';
  info: {
    displayName: 'Call to action';
    icon: 'cursor';
  };
  attributes: {
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    ondertitel: Schema.Attribute.Text & Schema.Attribute.Required;
    knop: Schema.Attribute.Component<'buttons.primaire-knop', false>;
  };
}

export interface ComponentsSpotifyMinuten extends Struct.ComponentSchema {
  collectionName: 'components_components_spotify_minutens';
  info: {
    displayName: 'Spotify minuten';
    icon: 'bulletList';
  };
  attributes: {
    minuten: Schema.Attribute.String;
    persoon: Schema.Attribute.String;
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

export interface ComponentsInformatieblok extends Struct.ComponentSchema {
  collectionName: 'components_components_informatiebloks';
  info: {
    displayName: 'Informatieblok';
    icon: 'bulletList';
  };
  attributes: {
    Omschrijving: Schema.Attribute.String & Schema.Attribute.Required;
    informatie: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHomescreenShowcase extends Struct.ComponentSchema {
  collectionName: 'components_components_homescreen_showcases';
  info: {
    displayName: 'Showcase homescreen content';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    mobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tablet: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    laptop: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    ondertitel: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ComponentsHobby extends Struct.ComponentSchema {
  collectionName: 'components_components_hobbies';
  info: {
    displayName: 'Hobby';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    tekst: Schema.Attribute.String;
    illustratie: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsClient extends Struct.ComponentSchema {
  collectionName: 'components_components_clients';
  info: {
    displayName: 'client';
    icon: 'bulletList';
  };
  attributes: {
    naam: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsCaseInformatie extends Struct.ComponentSchema {
  collectionName: 'components_components_case_informaties';
  info: {
    displayName: 'Case informatie';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    naam: Schema.Attribute.String & Schema.Attribute.Required;
    slogan: Schema.Attribute.String & Schema.Attribute.Required;
    hero_achtergrond_foto: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    informatie_blok: Schema.Attribute.Component<
      'components.informatieblok',
      true
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String;
    ondertitel: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ButtonsTelefoonnummer extends Struct.ComponentSchema {
  collectionName: 'components_buttons_telefoonnummers';
  info: {
    displayName: 'Telefoonnummer';
    icon: 'phone';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    telefoonnummer: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ButtonsEmail extends Struct.ComponentSchema {
  collectionName: 'components_buttons_emails';
  info: {
    displayName: 'Email';
    icon: 'envelop';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'secties.tekst-met-titel-rechts': SectiesTekstMetTitelRechts;
      'secties.tekst-met-titel-links': SectiesTekstMetTitelLinks;
      'secties.tekst-met-foto-verticaal': SectiesTekstMetFotoVerticaal;
      'secties.tekst-met-foto-horizontaal': SectiesTekstMetFotoHorizontaal;
      'secties.team-sectie': SectiesTeamSectie;
      'secties.hero-sectie': SectiesHeroSectie;
      'secties.foto-sectie': SectiesFotoSectie;
      'secties.dubbele-foto-sectie': SectiesDubbeleFotoSectie;
      'secties.call-to-action-gecentreerd': SectiesCallToActionGecentreerd;
      'home.services-sectie': HomeServicesSectie;
      'home.leaderboard-sectie': HomeLeaderboardSectie;
      'home.hero-sectie': HomeHeroSectie;
      'home.clients-sectie': HomeClientsSectie;
      'home.cases-sectie': HomeCasesSectie;
      'footer.contact': FooterContact;
      'footer.call-to-action': FooterCallToAction;
      'components.spotify-minuten': ComponentsSpotifyMinuten;
      'components.service': ComponentsService;
      'components.koffie-statistiek': ComponentsKoffieStatistiek;
      'components.informatieblok': ComponentsInformatieblok;
      'components.homescreen-showcase': ComponentsHomescreenShowcase;
      'components.hobby': ComponentsHobby;
      'components.client': ComponentsClient;
      'components.case-informatie': ComponentsCaseInformatie;
      'buttons.telefoonnummer': ButtonsTelefoonnummer;
      'buttons.tekstknop': ButtonsTekstknop;
      'buttons.social-media-button': ButtonsSocialMediaButton;
      'buttons.primaire-knop': ButtonsPrimaireKnop;
      'buttons.email': ButtonsEmail;
    }
  }
}
