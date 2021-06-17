import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
// import Img from 'gatsby-image';
import BackgroundImage from "gatsby-background-image";
import Button from "@common/Button";

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        header: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "header" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper Tag="section" fluid={data.header.childImageSharp.fluid}>
        <OpacityContainer />
        <Content>
          <h1>Contabilitate si Solutii Financiare</h1>
          <p>
            Fondata in 2006, Fin Consult Expert va ofera servicii de
            contabilitate, servicii de salarizare si de personal, servicii de
            audit, servicii de consultanta fiscala, servicii de consultanta
            pentru obtinerea de fonduri nerambursabile in zona Bucuresti si
            Ilfov.
          </p>
          <Button href="#desprenoi">Afla mai multe</Button>
        </Content>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled(BackgroundImage)`
  padding-top: 86px;
  width: 100%;
  margin: 0;
  padding: 0;
  opacity: 0.5;
  height: 100vh;
`;

const OpacityContainer = styled.div`
  width: 100%;
  height: inherit;
  background-color: #3c8fd8;
  opacity: 0.7;
`;

const Content = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  padding: 0 25px;
  color: white;

  p > {
    color: white !important;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    padding: 100px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 200px;
  }
`;

export default Header;
