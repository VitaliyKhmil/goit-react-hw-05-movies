import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const GalleryItem = styled.li`
  cursor: pointer;
  margin: 10px;
  margin-bottom: 20px;
  width: 290px;
  height: 450px;
`;

const Images = styled.img`
  width: 100%;
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: black;

`;

export const Item = ({ id, title, src }) => {
  const location = useLocation();

  return (
    <GalleryItem key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Images src={`https://image.tmdb.org/t/p/w500` + src} alt={title} />
      </Link>
      <Title>{title}</Title>
    </GalleryItem>
  );
};
