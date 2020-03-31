import { BlockType } from '@sightworks/datastore';

export default () => {
   const Block = new BlockType('disqus-widget', 'Disqus Widget Embed')
      .addSingleLineText('Website Name (shortname)', 'websiteName')
      .addSingleLineText('Title', 'blockTitle')
   return Block;
};