import React from "react";
import { DiscussionEmbed } from "disqus-react";

const DisqusEmbed = props => {
  const { websiteName, pageUrl, blockTitle } = props;

  const disqusConfig = {
    url: pageUrl,
    identifier: websiteName,
    title: blockTitle
  };

  return <DiscussionEmbed shortname={websiteName} config={disqusConfig} />;
};

export default DisqusEmbed;
