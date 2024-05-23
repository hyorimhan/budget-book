import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Container2 = styled.section`
  border: none;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
`;

const Box2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Button = styled.button`
  display: flex;
  border: none;
  padding: 20px;
  background-color: rgb(246, 247, 250);
  font-size: 18px;

  width: calc(100% / 6 - 10px);
  margin: 5px;

  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Box3 = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Month = () => {
  let [SaveMonth, setMonth] = useState('');

  function MonthSaveFunc(month) {
    setMonth(month);
  }
  return (
    <Container>
      <Container2>
        <Box2>
          {months.map((month, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  MonthSaveFunc(month);
                }}
              >
                {month}월
              </Button>
            );
          })}
        </Box2>
      </Container2>
      <Container2>
        <Box3>{SaveMonth}월 총 지출:</Box3>
      </Container2>
    </Container>
  );
};

export default Month;
