import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: block;  
`;

export const NavigationListItem = styled.li`
      margin-left: 65px;  
`;

export const NavigationLink = styled(NavLink)`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.5;
  color: blueviolet;
  text-transform: uppercase;
  letter-spacing: 8px;
  &.active {
    color: orange;
  }
`;
