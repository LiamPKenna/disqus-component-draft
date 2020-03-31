import { BlockType } from '@sightworks/datastore';

export default () => {
   const Block = new BlockType('disqus-widget', 'Disqus Widget Embed');
   Block.addSingleLineText('URL', 'url');
   return Block;
};