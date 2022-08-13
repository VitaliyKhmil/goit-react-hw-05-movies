import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-bottom: 30px;
  margin-left: 30px;
  padding: 4px;
  color: black;
  background-color: #dde1e7;
  border-radius: 2px;
  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
  transition: color 250ms ease-in-out;
  :hover {
    color: orange;
  }
`;

export const BackLinkIcon = styled(TiArrowBackOutline)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
