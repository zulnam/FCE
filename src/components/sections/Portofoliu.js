import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Section, Container } from "@components/global";
import ExternalLink from "@common/ExternalLink";

// import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
// import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
// import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
// import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
// import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
// import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

// const LOGOS = [
//   {
//     logo: DiTrade,
//     link: 'https://airbnb.io',
//   },
//   {
//     logo: Edessa,
//     link: 'https://www.apple.com/in/music/',
//   },
//   {
//     logo: fireDeco,
//     link: 'https://coca-cola.com',
//   },
//   {
//     logo: morex,
//     link: 'https://nodejs.org',
//   },
//   {
//     logo: norisushi,
//     link: 'https://nike.com',
//   },
//   {
//     logo: supratherm,
//     link: 'https://instagram.com',
//   },
// ];

const Portofoliu = () => (
  <StaticQuery
    query={graphql`
      query {
        logo_DItrade: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_DItrade" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        logo_morex: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_morex" }
        ) {
          childImageSharp {
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        logo_edessa: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_edessa" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        logo_fireDeco: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_fireDeco" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        logo_norisushi: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_norisushi" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        logo_supratherm: file(
          sourceInstanceName: { eq: "logos" }
          name: { eq: "logo_supratherm" }
        ) {
          childImageSharp {
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="portofoliu" accent>
        <StyledContainer>
          <div>
            <TextContainer>
              <h2>Portofoliul Nostru</h2>
              <p>
                O mica parte din cele peste NSPE MII de firme pe care le asistam
              </p>
            </TextContainer>
            <LogoGrid>
              <ImgContainer>
                <Img fluid={data.logo_supratherm.childImageSharp.fluid} />
              </ImgContainer>
              <ImgContainer>
                <Img fluid={data.logo_morex.childImageSharp.fluid} />
              </ImgContainer>
              <ImgContainer resize>
                <Img fluid={data.logo_edessa.childImageSharp.fluid} />
              </ImgContainer>
              <ImgContainer resize>
                <Img fluid={data.logo_fireDeco.childImageSharp.fluid} />
              </ImgContainer>
              <ImgContainer resize>
                <Img fluid={data.logo_norisushi.childImageSharp.fluid} />
              </ImgContainer>
              <ImgContainer resize>
                <Img fluid={data.logo_DItrade.childImageSharp.fluid} />
              </ImgContainer>
              {/* {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))} */}
            </LogoGrid>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.figure`
  max-width: 400px;
  width: 100%;
  margin: 12px;

  @media (min-width: ${props => props.theme.screen.sm}) {
    margin: 32px;
    width: ${props => (props.resize ? "50%" : "100%")};
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TextContainer = styled.span`
  text-align: center;

  > h2,
  p {
    color: white;
  }

  > p {
    font-style: italic;
  }
`;

export default Portofoliu;
