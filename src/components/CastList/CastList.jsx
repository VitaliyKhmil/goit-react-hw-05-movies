import { BASE_IMG_URL } from '../../constants/apiConstants';
import {
  CastListStyled,
  CastListItem,
  CastListPoster,
  CastListName,
} from './CastList.styled';
export const CastList = ({ credits }) => {
  return (
    <div>
      <CastListStyled>
        {credits.map(credit => {
          return (
            <CastListItem key={credit.credit_id}>
              {
                <CastListPoster
                  src={BASE_IMG_URL + '/w500' + credit.profile_path}
                  alt=""
                />}

              <CastListName>{credit.name}</CastListName>
            </CastListItem>
          );
        })}
      </CastListStyled>
    </div>
  );
};
