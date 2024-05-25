// import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  /* padding: 1rem; */

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Container2 = styled.section`
  border: none;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
  /* margin-top: 20px; */
  padding: 20px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const Span = styled.span`
  margin: 1px;
`;
// 누적 값 합계 표시
const SumValue = ({ saveMonth }) => {
  return (
    <Container>
      <Container2>
        <Box>
          <Span>{saveMonth}</Span>
          <Span>월 총 지출:</Span>
        </Box>
      </Container2>
    </Container>
  );
};

export default SumValue;
