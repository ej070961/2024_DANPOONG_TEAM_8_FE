import styled from 'styled-components';
import slime from '../../../assets/images/small-slime.png';

const mockComment = `미션 수행 후 뿌듯한 기분이 드셨군요!\n뿌듯한 순간들이 쌓여 단풍님에게\n긍정적인 변화를 가져왔으면 좋겠어요!`;

const Comment = () => {
  return (
    <CommentContainer>
      <Tag>버디의 코멘트</Tag>
      <Image src={slime} />
      <Content>{mockComment}</Content>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 18px 18px 24px 18px;
  border: none;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.gray50};
`;

const Tag = styled.span`
  position: absolute;
  margin-top: 18px;
  margin-left: 18px;
  top: 0;
  left: 0;
  padding: 7px 16px;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.fonts.body_m_14px};
  color: 'white;
`;

const Image = styled.img`
  width: 151px;
  height: 122px;
`;

const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray900};
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
  // width: 100%;
  // max-width: 480px;
`;
