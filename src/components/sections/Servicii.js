import React from "react";
import styled from "styled-components";

import { Section, Container } from "@components/global";

const Servicii = () => (
  <Section id="servicii">
    <Container>
      <Grid>
        <div>
          <Title>
            <i class="fas fa-calculator " />
            <h1>Contabilitate</h1>
            <i class="fas fa-calculator " />
          </Title>
          <ServiceList>
            <ServiceListItem>
              <span>Administrăm</span> documentele justificativ contabile în
              format fizic (și la cerere electronic prin scanarea documentelor)
            </ServiceListItem>
            <ServiceListItem>
              <span>Procesăm</span> documentele lunare prin înregistrarea
              fiecărei tranzacții contabile
            </ServiceListItem>
            <ServiceListItem>
              <span>Oferim</span> asistență în ceea ce privește inventarierea
              anuală sau periodică a activelor companiei
            </ServiceListItem>
            <ServiceListItem>
              <span>Gestionăm</span> tranzacțiile între companii din cadrul
              grupului
            </ServiceListItem>
            <ServiceListItem>
              <span>Oferim</span> asistență în pregătirea și implementarea de
              proceduri anuale de inventariere a patrimoniului la nivel de
              companie
            </ServiceListItem>
            <ServiceListItem>
              <span>Comunicăm</span> regulat cu terții și părțile implicate.
            </ServiceListItem>
          </ServiceList>
        </div>
        <IconContainer>
          <i class="fas fa-calculator fa-10x"></i>
        </IconContainer>
      </Grid>
      <Grid inverse>
        <IconContainer>
          <i class="fas fa-chart-line fa-10x"></i>
        </IconContainer>
        <div>
          <Title>
            <i class="fas fa-chart-line" />
            <h1>Consultanță și asistență fiscală</h1>
            <i class="fas fa-chart-line" />
          </Title>
          <ServiceList>
            <ServiceListItem>
              <span>Analizăm</span> implicațiile fiscale ale deciziilor tale de
              business
            </ServiceListItem>
            <ServiceListItem>
              <span>Oferim</span> asistență pe durata inspecției fiscale
            </ServiceListItem>
            <ServiceListItem>
              <span>Optimizăm</span> afacerea ta din punct de vedere fiscal
            </ServiceListItem>
            <ServiceListItem>
              <span>Întocmim</span> și depunem declarații lunare obligatorii
            </ServiceListItem>
            <ServiceListItem>
              <span>Completăm</span> și depunem Declarația de impozit pe profit,
              Declarația de TA, Declarația de impozit cu reținere la sursă și
              Declarațiile privind taxele locale
            </ServiceListItem>
          </ServiceList>
        </div>
      </Grid>
      <Grid>
        <div>
          <Title>
            <i class="fas fa-file-invoice" />
            <h1>Raportare financiară și statistică</h1>
            <i class="fas fa-file-invoice" />
          </Title>
          <ServiceList>
            <ServiceListItem>
              <span>Întocmim</span> Registrele și Jurnalele Contabile
            </ServiceListItem>
            <ServiceListItem>
              <span>Întocmim</span> balanța lunară de verificare
            </ServiceListItem>
            <ServiceListItem>
              <span>Pregătim</span> situațiile financiare anuale și le depunem
              la organele abilitate
            </ServiceListItem>
            <ServiceListItem>
              <span>Calculăm</span> și depunem Declarația de impozit pe profit,
              plus alte rapoarte ad-hoc solicitate de către autoritățile locale
            </ServiceListItem>
            <ServiceListItem>
              <span>Elaborăm</span> rapoartele financiare necesare pentru
              obținerea de credite sau leasing
            </ServiceListItem>
          </ServiceList>
        </div>
        <IconContainer>
          <i class="fas fa-file-invoice fa-10x"></i>
        </IconContainer>
      </Grid>
      <Grid inverse>
        <IconContainer>
          <i class="fas fa-coins fa-10x"></i>
        </IconContainer>
        <div>
          <Title>
            <i class="fas fa-coins" />
            <h1>Salarizare și HR</h1>
            <i class="fas fa-coins" />
          </Title>
          <ServiceList>
            <ServiceListItem>
              <span>Gestionăm</span> dosarele de personal
            </ServiceListItem>
            <ServiceListItem>
              <span>Întocmim</span> și înregistrăm ștatele de plată
            </ServiceListItem>
            <ServiceListItem>
              <span>Ne ocupăm</span> și de REVISAL
            </ServiceListItem>
            <ServiceListItem>
              <span>Recrutăm</span> pentru tine specialiști în domeniul
              financiar-contabil
            </ServiceListItem>
          </ServiceList>
        </div>
      </Grid>
      <Grid>
        <div>
          <Title>
            <i class="fas fa-edit" />
            <h1>Revizie fiscală și contabilă</h1>
            <i class="fas fa-edit" />
          </Title>
          <ServiceList>
            <ServiceListItem>
              <span>Verificăm</span> dacă tranzacțiile înregistrate în baza
              documentelor contabile existente sunt corecte
            </ServiceListItem>
            <ServiceListItem>
              <span>Verificăm</span>, de asemenea, corectitudinea rapoartelor
              contabile și declarațiilor întocmite
            </ServiceListItem>
            <ServiceListItem>
              <span>Identificăm</span> și eliminăm posibilele zone de risc
              fiscal
            </ServiceListItem>
            <ServiceListItem>
              <span>Recomandăm</span> practici fiscale și contabile adecvate
              aplicabile pentru tine sau compania ta
            </ServiceListItem>
          </ServiceList>
        </div>
        <IconContainer>
          <i class="fas fa-edit fa-10x"></i>
        </IconContainer>
      </Grid>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 32px;
  text-align: center;
  
  align-items: center;
  justify-items: center;
  margin: 24px 16px;

  ${props =>
    props.inverse &&
    `
    grid-template-columns: 1fr 3fr;
  `}

  @media (min-width: ${props => props.theme.screen.sm}) {

    >:nth-child(${props => (props.inverse ? "2" : "1")}) {
      text-align: justify;
      width: 100%;
      padding-left: ${props => (props.inverse ? "0" : "60px")};  
      }

    }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
    margin-bottom: 38px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${IconContainer} {
          order: 2;
        }
    `}
  }
`;

const IconContainer = styled.div`
  @media (min-width: ${props => props.theme.screen.md}) {
    width: 250px;
    height: 250px;
    background-color: rgba(60, 143, 216, 0.8);
    border-radius: 50%;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    > svg {
      display: none;
    }
  }

  > svg {
    width: 250px;
    height: 250px;
  }
`;
const ServiceList = styled.ul`
  font-size: 20px;
  padding: 0;
`;

const ServiceListItem = styled.li`
  margin: 6px 0;

  @media (max-width: ${props => props.theme.screen.sm}) {
    list-style: none;
    margin: 12px 0;
  }

  /* > span {
      border-bottom: 1px solid;
    } */
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 16px;
  font-size: 38px;
  justify-content: space-around;
  align-items: center;

  > h1 {
    font-size: 28px;
    line-height: 1.25;
  }

  @media (min-width: ${props => props.theme.screen.xs}) {
    > svg {
      display: none;
    }

    > h1 {
      font-size: 38px;
    }
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: block;
  }
`;

export default Servicii;
