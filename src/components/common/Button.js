import styled from "styled-components";

const Button = styled.a`
  margin-top: 32px;
  border: none;
  border-radius: 300px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 15px 30px;
  color: #fff;
  background-color: #427ae1;
  text-decoration: none;
  transition: all 0.35s;

  &:hover {
    background-color: #3a6ece;
  }
`;

export default Button;
