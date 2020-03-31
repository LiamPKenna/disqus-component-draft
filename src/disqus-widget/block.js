import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { StyleLoader, ThemeLoader } from '@sightworks/theme';

const DisqusEmbed = props => {
   const { websiteName, pageUrl, blockTitle, objectId } = props;

   const disqusConfig = {
      url: pageUrl,
      identifier: objectId,
      title: blockTitle,
   };

   return <DiscussionEmbed shortname={websiteName} config={disqusConfig} />;
};

export default ThemeLoader(
   StyleLoader(DisqusEmbed, theme => ({
      root: {
         padding: theme.spacing(1),
         fontFamily: theme.typography.fontFamily,
         '& a': { color: theme.palette.secondary[theme.palette.type === 'dark' ? 'light' : 'dark'] },
      },
   }))
);
