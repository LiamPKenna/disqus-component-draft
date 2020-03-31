import React from "react";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";

const DisqusDiv = styled.div`
  padding: 1rem;
  font-family: ${props => props.theme.typography.fontFamily};
  a {
    color: ${props =>
      props.theme.palette.secondary[props.dark ? "light" : "dark"]};
  }
`;

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
    <DisqusDiv theme={theme} dark={theme.palette.type === "dark"}>
      <DiscussionEmbed shortname={websiteName} config={disqusConfig} />;
    </DisqusDiv>
  );
};

export default DisqusEmbed;
