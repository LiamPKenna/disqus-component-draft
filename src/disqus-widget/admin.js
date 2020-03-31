import Browser from './browser';
import description from './description';

export default {
   ...Browser,
   description,
   async title(block) {
      return `Disqus Widget: ${block.url}`
   },
   section: 'Specialty',
   async itemTitle(block) {
      return block.url;
   }
};