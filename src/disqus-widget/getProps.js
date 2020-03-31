export default async (record, object, request) => {
   return {
      module: '@sightworks/block/lib/special/disqus-widget/block',
      type: 'disqus-widget',
      id: record.id,
      url: record.url
   };
};