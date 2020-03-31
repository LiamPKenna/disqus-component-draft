import React from "react";
import { DiscussionEmbed } from "disqus-react";
import { useTheme, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const DisqusDiv = styled(Box)({
  padding: "1rem",
  maxWidth: "60rem",
  margin: "0 auto",
  fontFamily: props => props.theme.typography.fontFamily,
  "& a": {
    color: props =>
      props.theme.palette.secondary[props.type === "dark" ? "light" : "dark"]
  }
});

const DisqusEmbed = props => {
  const { websiteName, pageUrl, blockTitle } = props;
  const theme = useTheme();
  console.log(theme);

  const disqusConfig = {
    url: pageUrl,
    identifier: websiteName,
    title: blockTitle
  };

  return (
    <DisqusDiv theme={theme} type={theme.palette.type}>
      <DiscussionEmbed shortname={websiteName} config={disqusConfig} />
    </DisqusDiv>
  );
};

export default DisqusEmbed;
