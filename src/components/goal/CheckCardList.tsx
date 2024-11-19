import { checkList } from '../../apis/mocks/checkList.ts';
import CheckCard from './CheckCard.tsx';
import styled from 'styled-components';
import CustomButton from '../common/CustomButton.tsx';

const CheckCardList = () => {
  return (
    <CheckCardListContainer>
      <CheckCardListWrapper>
        {checkList.map((check) => (
          <CheckCard key={check.id} content={check.content} />
        ))}
      </CheckCardListWrapper>
      <ButtonContainer>
        <CustomButton label='완료' isValid={true} />
      </ButtonContainer>
    </CheckCardListContainer>
  );
};

export default CheckCardList;

const CheckCardListContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 30px 30px 0 0;
  background-color: white;
`;

const CheckCardListWrapper = styled.div`
  padding: 46px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 32px;
`;
