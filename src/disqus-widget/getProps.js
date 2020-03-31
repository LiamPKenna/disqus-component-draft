import { Registry } from '@sightworks/catalog'

export default async (record, object, request) => {
   const pageUrl = Registry.getFullURL(object, request);
   const { websiteName, blockTitle, id } = record;
   return {
      module: '@sightworks/block/lib/special/disqus-widget/block',
      type: 'disqus-widget',
      id,
      pageUrl,
      websiteName,
      blockTitle
   };
};