// import React from 'react';
import { Block } from 'payload';

export const cloudMedia: Block = {
  slug: 'cloudMedia',
  fields: [
    {
      label: 'Metadata',
      type: 'collapsible',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        },
      ],
    },
    {
      label: 'Gyazo API Infomation',
      type: 'collapsible',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image_id',
          type: 'text',
          label: 'Image ID',
        },
        {
          name: 'permalink_url',
          type: 'text',
          label: 'Permalink URL',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ]
    },
  ],
};
