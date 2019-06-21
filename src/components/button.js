import styled from "styled-components";
import { Button as BootStrapButton } from "reactstrap";

export const Button = styled(BootStrapButton).attrs(() => ({}))`
  background-color: #0e6ba3 !important;
  text-transform: uppercase;
  border-radius: 0 !important;
  border-color: #0e6ba3 !important;
  :hover {
    background-color: #24a2b7 !important;
    border: 1px, solid white !important;
  }
`;
