import styled from 'styled-components';

export const CastListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: -5px;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  max-width: 80px;
  margin: 4px;
  flex-grow: 1;
`;

export const CastListPoster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

export const CastListName = styled.p`
  display: block;
  text-align: center;
  font-size: 12px;
  color: gray;
`;
