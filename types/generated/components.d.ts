import type { Struct, Schema } from '@strapi/strapi';

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    telefoonnummers: Schema.Attribute.Component<'buttons.telefoonnummer', true>;
    adres: Schema.Attribute.Blocks & Schema.Attribute.Required;
    socials: Schema.Attribute.Component<'buttons.social-media-button', true>;
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

export interface ButtonsTelefoonnummer extends Struct.ComponentSchema {
  collectionName: 'components_buttons_telefoonnummers';
  info: {
    displayName: 'Telefoonnummer';
    icon: 'phone';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    telefoonnummer: Schema.Attribute.String & Schema.Attribute.Required;
    emailadressen: Schema.Attribute.Component<'buttons.email', true>;
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
      'footer.contact': FooterContact;
      'footer.call-to-action': FooterCallToAction;
      'buttons.telefoonnummer': ButtonsTelefoonnummer;
      'buttons.tekstknop': ButtonsTekstknop;
      'buttons.social-media-button': ButtonsSocialMediaButton;
      'buttons.primaire-knop': ButtonsPrimaireKnop;
      'buttons.email': ButtonsEmail;
    }
  }
}
