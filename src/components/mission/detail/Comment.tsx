import styled from 'styled-components';
import slime from '../../../assets/images/small-slime.png';

interface CommentProps {
  content: string;
  completed: boolean;
}

const Comment = ({ content, completed }: CommentProps) => {
  return (
    <CommentContainer $completed={completed}>
      <Tag>버디의 코멘트</Tag>
      <Image src={slime} />
      <Content>{content}</Content>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div<{ $completed: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 18px 30px 18px;
  border: ${({ $completed, theme }) => $completed ? `2px solid ${theme.colors.gray200}` : 'none'};
  border-radius: 28px;
  background-color: ${({ $completed, theme }) => $completed ? 'white' : theme.colors.gray100};
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
  color: 'white';
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
