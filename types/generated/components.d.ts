import type { Schema, Struct } from '@strapi/strapi';

export interface CardsAboutCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_about_cards';
  info: {
    displayName: 'about-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CardsConsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_cons_cards';
  info: {
    displayName: 'cons-card';
  };
  attributes: {
    cons: Schema.Attribute.Component<'items.cons-item', false>;
    title: Schema.Attribute.String;
  };
}

export interface CardsFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_faq_cards';
  info: {
    displayName: 'faq-card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'items.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface CardsProsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_pros_cards';
  info: {
    displayName: 'pros-card';
  };
  attributes: {
    pros: Schema.Attribute.Component<'items.pros-item', false>;
    title: Schema.Attribute.String;
  };
}

export interface CardsQuickStatsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_quick_stats_cards';
  info: {
    displayName: 'quick-Stats-card';
  };
  attributes: {
    active_coupons: Schema.Attribute.String;
    coupons_count: Schema.Attribute.String;
    last_verified: Schema.Attribute.String;
    rating_count: Schema.Attribute.Integer;
    rating_score: Schema.Attribute.Decimal;
    status: Schema.Attribute.String;
    success_rate: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ItemsConsItem extends Struct.ComponentSchema {
  collectionName: 'components_items_cons_items';
  info: {
    displayName: 'cons-item';
  };
  attributes: {
    pros: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ItemsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_items_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ItemsProsItem extends Struct.ComponentSchema {
  collectionName: 'components_items_pros_items';
  info: {
    displayName: 'pros-item';
  };
  attributes: {
    pros: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ItemsSimilarStoresItems extends Struct.ComponentSchema {
  collectionName: 'components_items_similar_stores_items';
  info: {
    displayName: 'similar_stores_items';
  };
  attributes: {};
}

export interface SharedBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_sections';
  info: {
    displayName: 'banner-section';
  };
  attributes: {
    ceo: Schema.Attribute.String;
    coupons_count: Schema.Attribute.String;
    established: Schema.Attribute.String;
    founded: Schema.Attribute.String;
    location: Schema.Attribute.String;
    media: Schema.Attribute.Component<'shared.media-links', false>;
    rating_count: Schema.Attribute.Integer;
    rating_score: Schema.Attribute.Decimal;
  };
}

export interface SharedMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_links';
  info: {
    displayName: 'media-links';
  };
  attributes: {
    discord: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface SharedSeoFields extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_fields';
  info: {
    displayName: 'seo-fields';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    h1_title: Schema.Attribute.String;
    keywords: Schema.Attribute.JSON;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_description: Schema.Attribute.Text;
    og_image: Schema.Attribute.String;
    og_title: Schema.Attribute.String;
    og_type: Schema.Attribute.String;
    og_url: Schema.Attribute.String;
    robots: Schema.Attribute.String;
    schema_markup: Schema.Attribute.JSON;
    twitter_card: Schema.Attribute.String;
    twitter_description: Schema.Attribute.Text;
    twitter_image: Schema.Attribute.String;
    twitter_site: Schema.Attribute.String;
    twitter_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.about-card': CardsAboutCard;
      'cards.cons-card': CardsConsCard;
      'cards.faq-card': CardsFaqCard;
      'cards.pros-card': CardsProsCard;
      'cards.quick-stats-card': CardsQuickStatsCard;
      'items.cons-item': ItemsConsItem;
      'items.faq-item': ItemsFaqItem;
      'items.pros-item': ItemsProsItem;
      'items.similar-stores-items': ItemsSimilarStoresItems;
      'shared.banner-section': SharedBannerSection;
      'shared.media-links': SharedMediaLinks;
      'shared.seo-fields': SharedSeoFields;
    }
  }
}
