import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Section, Container } from "@components/global";
import Button from "@common/Button";

const Despre = () => (
  <StaticQuery
    query={graphql`
      query {
        cornel: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "Cornel" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="desprenoi" accent="secondary">
        <Title>Despre Noi</Title>
        <DespreContainer>
          <Text>
            <p>
              Echipa noastra de Contabilitate din Bucuresti si Ilfov se
              adreseaza clientilor ce activeaza in domenii precum: Comert cu
              amanuntul si distributie, Industrie alimentara, Intermedieri
              financiare(firme de brokeraj, S.S.I.F.-uri), Productie agricola,
              Constructii, Transporturi, Service auto, Restaurante, Turism, PFA
              prestatoare de servicii diverse.
            </p>
            <br />
            <h2>Valorile Fin Consult Expert</h2>
            <ServiceList>
              <ServiceListItem>
                <p>
                  Construim si mentinem relatii stabile si profitabile cu
                  clientii si partenerii nostri;
                </p>
              </ServiceListItem>
              <ServiceListItem>
                <p>
                  Avem contact permanent cu problemele clientilor nostri,
                  probleme pe care le anticipam si le rezolvam cu promptitudine;
                </p>
              </ServiceListItem>
              <ServiceListItem>
                <p>
                  Suntem profesionisti, competenti si onesti, si punem pasiune
                  in profesia noastra;
                </p>
              </ServiceListItem>
              <ServiceListItem>
                <p>Oferim intotdeuna numai servicii de calitate;</p>
              </ServiceListItem>
              <ServiceListItem>
                <p>
                  Ne focusam intotdeauna pe finalitatea serviciilor noastre,
                  astfel incat sa garatam, sa sustinem si sa crestem succesul si
                  performanta afacerilor dumneavoastra;
                </p>
              </ServiceListItem>
              <ServiceListItem>
                <p>
                  La noi toate problemele dumneavoastra gasesc intotdeauna
                  rezolvarea legala;
                </p>
              </ServiceListItem>
              <ServiceListItem>
                <p>
                  Prin echipa noastra de specialisti, intelegem mecanismele
                  pietei si anticipam trendurile acesteia.
                </p>
              </ServiceListItem>
            </ServiceList>
          </Text>
          <Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pellentesque congue massa, eu congue urna tristique eget.
              Suspendisse sodales pulvinar tortor, quis maximus elit volutpat
              non. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed convallis turpis ac libero
              dapibus congue. Maecenas semper urna in felis dignissim fringilla.
              Nulla sollicitudin nunc quam, vel faucibus mauris pulvinar
              dapibus. Nullam commodo ligula nec nulla vulputate maximus.
              Curabitur at justo ullamcorper, hendrerit orci non, mattis quam.
              Maecenas et augue erat.
            </p>
          </Text>
          <ImgContainer>
            <Image fluid={data.cornel.childImageSharp.fluid} />
          </ImgContainer>
          <Text>
            <p>
              Echipa noastra de specialisti este atent condusa si indrumata de
              dl. Anca Vasile – Managing Partner, acesta detinand o experienta
              profesionala relevanta, fiind membru al Corpului Expertilor
              Contabili si al Contabililor Autorizati din Romania (CECCAR), inca
              din anul 1986, expert contabil desemnat de Ministerul Finantelor.
            </p>
          </Text>
        </DespreContainer>
        <ButtonContainer>
          <Button href="#servicii">Serviciile Noastre</Button>
        </ButtonContainer>
      </Section>
    )}
  />
);

const DespreContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  > :nth-child(1) {
    width: 100%;
    text-align: center;
  }

  > :nth-child(4) {
    width: 100%;
    text-align: center;
  }
`;

const ImgContainer = styled.figure`
  max-width: 400px;
  width: 100%;
  margin: 20px;

  @media (min-width: ${props => props.theme.screen.sm}) {
    width: 44%;
  }
`;

const Image = styled(Img)`
  border-radius: 50%;
  transform: scaleX(-1);
`;

const Text = styled.div`
  margin: 20px;

  @media (min-width: ${props => props.theme.screen.sm}) {
    width: 44%;
  }
  @media (min-width: ${props => props.theme.screen.md}) {
    width: 50%;
  }
`;

const ServiceList = styled.ul`
  font-size: 20px;
  padding: 0;
`;

const ServiceListItem = styled.li`
  margin: 32px auto;
  list-style: none;
  width: 85%;
  border: 0.5rem #3a6ece;
  border-style: solid;
  border-top: none;
  border-left: none;
  border-radius: 12px;

  & p {
    padding: 0 6px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    /* max-width: 80%; */
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-size: 36px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export default Despre;
