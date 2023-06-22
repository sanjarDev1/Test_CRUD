import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Wrapper.Title = styled.div`
  color: #0f172a;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
`;

Wrapper.Status = styled.div`
  width: 49px;
  height: 29px;
  background: ${({ admin }) => (admin == 'Administrator' ? '#0EA5E9' : '#E2E8F0')};
  border-radius: 4px;
`;

