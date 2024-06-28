import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksComponent1 extends Schema.Component {
  collectionName: 'components_blocks_component_1s';
  info: {
    displayName: 'component 1';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.component-1': BlocksComponent1;
    }
  }
}
