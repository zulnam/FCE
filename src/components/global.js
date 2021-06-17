import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 58px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;
