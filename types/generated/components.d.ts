import type { Schema, Struct } from '@strapi/strapi';

export interface FirmsCardsAboutCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_about_cards';
  info: {
    displayName: 'About-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsAccountModelsCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_account_models_cards';
  info: {
    displayName: 'account_models_card';
  };
  attributes: {
    color: Schema.Attribute.String;
    footer: Schema.Attribute.String;
    headers: Schema.Attribute.JSON;
    rows: Schema.Attribute.Component<'firms-items.account-models-rows', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsAssetsCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_assets_cards';
  info: {
    displayName: 'assets-card';
  };
  attributes: {
    rows: Schema.Attribute.Component<'firms-items.assets-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsEconomicsScalingCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_economics_scaling_cards';
  info: {
    displayName: 'economics_scaling_card';
  };
  attributes: {
    assets_card: Schema.Attribute.Component<'firms-cards.assets-card', false>;
    fee_card: Schema.Attribute.Component<'firms-cards.fee-card', false>;
    scaling_card: Schema.Attribute.Component<'firms-cards.scaling-card', false>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_faq_cards';
  info: {
    displayName: 'faq-card';
    icon: 'clock';
  };
  attributes: {
    badge: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'firms-items.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsFeeCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_fee_cards';
  info: {
    displayName: 'fee-card';
  };
  attributes: {
    rows: Schema.Attribute.Component<'firms-items.fee-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsFundingProgramsCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_funding_programs_cards';
  info: {
    displayName: 'funding_programs_card';
  };
  attributes: {
    color: Schema.Attribute.String;
    headers: Schema.Attribute.JSON;
    rows: Schema.Attribute.Component<'firms-items.funding-programs-rows', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsPaymentsPayoutsCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_payments_payouts_cards';
  info: {
    displayName: 'payments_payouts_card';
  };
  attributes: {
    inbound: Schema.Attribute.Component<'firms-items.inbound', false>;
    payout: Schema.Attribute.Component<'firms-items.payout', false>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsProsConsCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_pros_cons_cards';
  info: {
    displayName: 'pros-cons-card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cons: Schema.Attribute.Component<'firms-items.pros-cons-item', false>;
    pros: Schema.Attribute.Component<'firms-items.pros-cons-item', false>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsRiskManagementCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_risk_management_cards';
  info: {
    displayName: 'risk_management_card';
  };
  attributes: {
    rows: Schema.Attribute.Component<
      'firms-items.trading-flexibility-rows',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsScalingCard extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_scaling_cards';
  info: {
    displayName: 'scaling-card';
  };
  attributes: {
    rows: Schema.Attribute.Component<'firms-items.fee-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsTradingFlexibilityCard
  extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_trading_flexibility_cards';
  info: {
    displayName: 'trading_flexibility_card';
  };
  attributes: {
    rows: Schema.Attribute.Component<
      'firms-items.trading-flexibility-rows',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface FirmsCardsTradingTechnologyCard
  extends Struct.ComponentSchema {
  collectionName: 'components_firms_cards_trading_technology_cards';
  info: {
    displayName: 'trading_technology_card';
  };
  attributes: {
    footer: Schema.Attribute.String;
    headers: Schema.Attribute.JSON;
    rows: Schema.Attribute.Component<
      'firms-items.trading-technology-rows',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface FirmsItemsAccountModelsRows extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_account_models_rows';
  info: {
    displayName: 'account-models-rows';
  };
  attributes: {
    account: Schema.Attribute.String;
    risk: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface FirmsItemsAssetsItems extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_assets_items';
  info: {
    displayName: 'assets-items';
  };
  attributes: {
    type: Schema.Attribute.String;
    value: Schema.Attribute.JSON;
  };
}

export interface FirmsItemsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface FirmsItemsFeeItem extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_fee_items';
  info: {
    displayName: 'fee-item';
  };
  attributes: {
    type: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface FirmsItemsFundingProgramsRows extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_funding_programs_rows';
  info: {
    displayName: 'funding-programs-rows';
  };
  attributes: {
    price: Schema.Attribute.String;
    Program: Schema.Attribute.String;
    size: Schema.Attribute.String;
  };
}

export interface FirmsItemsInbound extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_inbounds';
  info: {
    displayName: ' Inbound';
  };
  attributes: {
    rows: Schema.Attribute.Component<'firms-items.fee-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsItemsPayout extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_payouts';
  info: {
    displayName: 'Payout';
  };
  attributes: {
    rows: Schema.Attribute.Component<'firms-items.assets-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface FirmsItemsProsConsItem extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_pros_cons_items';
  info: {
    displayName: 'pros-cons-item';
  };
  attributes: {
    pros: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface FirmsItemsTradingFlexibilityRows
  extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_trading_flexibility_rows';
  info: {
    displayName: 'Trading_Flexibility_rows';
  };
  attributes: {
    type: Schema.Attribute.String;
    value: Schema.Attribute.Boolean;
  };
}

export interface FirmsItemsTradingTechnologyRows
  extends Struct.ComponentSchema {
  collectionName: 'components_firms_items_trading_technology_rows';
  info: {
    displayName: 'Trading_Technology_rows';
  };
  attributes: {
    Access: Schema.Attribute.String;
    category: Schema.Attribute.String;
    Systems: Schema.Attribute.String;
  };
}

export interface FirmsSharedBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_firms_shared_banner_sections';
  info: {
    displayName: 'banner_section';
  };
  attributes: {
    ceo: Schema.Attribute.String;
    coupons_count: Schema.Attribute.String;
    established: Schema.Attribute.String;
    founded: Schema.Attribute.String;
    location: Schema.Attribute.String;
    media: Schema.Attribute.Component<'firms-shared.media-links', false>;
    rating_count: Schema.Attribute.Integer;
    rating_score: Schema.Attribute.Decimal;
  };
}

export interface FirmsSharedMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_firms_shared_media_links';
  info: {
    displayName: 'media-links';
    icon: 'attachment';
  };
  attributes: {
    discord: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface FirmsSharedSeoFields extends Struct.ComponentSchema {
  collectionName: 'components_firms_shared_seo_fields';
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
      'firms-cards.about-card': FirmsCardsAboutCard;
      'firms-cards.account-models-card': FirmsCardsAccountModelsCard;
      'firms-cards.assets-card': FirmsCardsAssetsCard;
      'firms-cards.economics-scaling-card': FirmsCardsEconomicsScalingCard;
      'firms-cards.faq-card': FirmsCardsFaqCard;
      'firms-cards.fee-card': FirmsCardsFeeCard;
      'firms-cards.funding-programs-card': FirmsCardsFundingProgramsCard;
      'firms-cards.payments-payouts-card': FirmsCardsPaymentsPayoutsCard;
      'firms-cards.pros-cons-card': FirmsCardsProsConsCard;
      'firms-cards.risk-management-card': FirmsCardsRiskManagementCard;
      'firms-cards.scaling-card': FirmsCardsScalingCard;
      'firms-cards.trading-flexibility-card': FirmsCardsTradingFlexibilityCard;
      'firms-cards.trading-technology-card': FirmsCardsTradingTechnologyCard;
      'firms-items.account-models-rows': FirmsItemsAccountModelsRows;
      'firms-items.assets-items': FirmsItemsAssetsItems;
      'firms-items.faq-item': FirmsItemsFaqItem;
      'firms-items.fee-item': FirmsItemsFeeItem;
      'firms-items.funding-programs-rows': FirmsItemsFundingProgramsRows;
      'firms-items.inbound': FirmsItemsInbound;
      'firms-items.payout': FirmsItemsPayout;
      'firms-items.pros-cons-item': FirmsItemsProsConsItem;
      'firms-items.trading-flexibility-rows': FirmsItemsTradingFlexibilityRows;
      'firms-items.trading-technology-rows': FirmsItemsTradingTechnologyRows;
      'firms-shared.banner-section': FirmsSharedBannerSection;
      'firms-shared.media-links': FirmsSharedMediaLinks;
      'firms-shared.seo-fields': FirmsSharedSeoFields;
    }
  }
}
