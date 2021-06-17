import React from "react";
import styled from "styled-components";

import { Section, Container } from "@components/global";

const Contact = () => (
  <Section id="contact">
    <Title>Contact</Title>
    <StyledContainer>
      <div>
        <p>
          Telefon: <a href="tel:+40724268197">0724 268 197</a>
        </p>
        <p>Email</p>
        <p>Adresa</p>
      </div>
      <div>
        <iframe
          title="Locatie Fin Consult Expert"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25849.863077013248!2d26.084936294299062!3d44.49880196345647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9822dc25445f50d!2sServiciile%20Publice%20Regim%20Permise%20Conducere%20Si%20Inmatricularea%20Vehiculelor%20Bucuresti!5e0!3m2!1sen!2sch!4v1623769748989!5m2!1sen!2sch"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </StyledContainer>
  </Section>
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  text-align: center;
`;

export default Contact;
