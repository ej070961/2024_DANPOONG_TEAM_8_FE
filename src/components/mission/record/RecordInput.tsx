import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';
import React, { useState } from 'react';

type FormValues = {
  mission?: string;
  feeling?: string;
};

interface TextInputProps {
  title: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error?: string;
}

const RecordInput = ({ title, register, name, error }: TextInputProps) => {
  const [length, setLength] = useState(0);
  console.log(error);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLength(event.target.value.length);
  };

  return (
    <TextInputContainer>
      <p>{title}</p>
      <InputArea
        placeholder='내용을 입력해주세요.'
        maxLength={200}
        {...register(name)}
        onChange={(event) => {
          register(name).onChange(event);
          handleChange(event);
        }}
      />
      <TextLength>{length}/200</TextLength>
    </TextInputContainer>
  );
};

export default RecordInput;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-left: 6px;
    font: ${({ theme }) => theme.fonts.body_sb_18px};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const InputArea = styled.textarea`
  height: 210px;
  margin-top: 12px;
  padding: 18px;
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 28px;
  background-color: white;
  resize: none;
  overflow-wrap: break-word;
  outline: none;
  color: ${({ theme }) => theme.colors.gray900};
  font: ${({ theme }) => theme.fonts.body_m_16px};
`;

const TextLength = styled.div`
  margin-top: 6px;
  font: ${({ theme }) => theme.fonts.body_m_14px};
  color: ${({ theme }) => theme.colors.gray300};
  align-self: flex-end;
  margin-right: 10px;
`;
