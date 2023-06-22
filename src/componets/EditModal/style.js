import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
`;

Wrapper.Title = styled.div`
  color: #0f172a;
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
`;

export const Forms = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

Forms.Item = styled.div`
  width: 432px;
  display: flex;
  gap: 24px;
`;

Wrapper.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  margin-top: 20px;
`;
