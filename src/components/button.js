import styled from 'styled-components';
import { Button as BootStrapButton } from 'reactstrap'

export const Button = styled(BootStrapButton).attrs(() => ({
    block: true,
  }))`
    background-color: #0E6BA3 !important;
    text-transform: uppercase;

    :hover {
      background-color: #24A2B7 !important;
    }
  `;
