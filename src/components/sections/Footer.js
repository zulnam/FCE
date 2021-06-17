import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Container } from "@components/global";
import ExternalLink from "@common/ExternalLink";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        logo_ceccar: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_ceccar" }
        ) {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <ImageContainer>
                <Img fluid={data.logo_ceccar.childImageSharp.fluid} />
              </ImageContainer>
              <h2>Fin Consult Expert</h2>
              <span>
                Creat de
                {` `}
                <ExternalLink href="https://twitter.com/diana_valeanu">
                  Valentin Necsescu
                </ExternalLink>
              </span>
            </Copyright>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 20px 16px;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 1s;

    &:hover {
      color: red;
      transition: color 1s;
    }
  }
`;

const ImageContainer = styled.figure`
  width: 64px;
  margin: 12px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
