import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  /* padding: 2rem; */

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Container2 = styled.section`
  border: none;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 20px 0;
`;

const SaveBtn = styled.button`
  display: flex;

  height: 30px;
  border: none;
`;

const Input = styled.input`
  display: flex;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  width: 165px;
  height: 30px;
  margin-top: 5px;

  justify-content: center;
`;

const InputForm = () => {
  return (
    <Container>
      <Container2>
        <Form>
          <Box>
            <label htmlFor="date">날짜</label>
            <Input type="date" id="date" placeholder="YY-MM-DD" />
          </Box>
          <Box>
            <label htmlFor="item">항목</label>
            <Input type="text" id="item" placeholder="지출 항목" />
          </Box>
          <Box>
            <label htmlFor="amount">금액</label>
            <Input type="number" id="amount" placeholder="지출 금액" />
          </Box>
          <Box>
            <label htmlFor="description">내용</label>
            <Input type="text" id="description" placeholder="지출 내용" />
          </Box>
          <Box>
            <SaveBtn>저장</SaveBtn>
          </Box>
        </Form>
      </Container2>
    </Container>
  );
};

export default InputForm;
