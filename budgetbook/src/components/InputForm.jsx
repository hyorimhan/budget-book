import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { setSaveMonth, setItemList } from '../store/slices/budgetSlice';

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
  /* align-items: center; */
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  justify-content: flex-end;
  padding: 20px 0;
`;

const SaveBtn = styled.button`
  padding: 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  justify-self: flex-end;
  align-self: flex-end;
  &:hover {
    background-color: #2ec4b6;
    color: rgb(255, 255, 255);
  }
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
// 인풋 입력값 저장

const InputForm = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.budget.itemList);

  const [dateValue, setDateValue] = useState('');
  const [itemValue, setItemValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const inputDatefunc = (e) => {
    setDateValue(e.target.value);
  };
  const inputItemfunc = (e) => {
    setItemValue(e.target.value);
  };
  const inputAmountfunc = (e) => {
    setAmountValue(e.target.value);
  };
  const inputDescriptionfunc = (e) => {
    setDescriptionValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newItem = {
      date: dateValue,
      item: itemValue,
      amount: amountValue,
      description: descriptionValue,
      id: uuidv4(),
    };

    const date = parseInt(newItem.date.slice(6, 7));

    dispatch(setSaveMonth(date));

    if (dateValue && itemValue && amountValue && descriptionValue !== '') {
      dispatch(setItemList([...itemList, newItem]));
      setDateValue('');
      setItemValue('');
      setAmountValue('');
      setDescriptionValue('');
    } else {
      alert('값을 모두 입력해주세요');
    }
  };

  return (
    <>
      <Container>
        <Container2>
          <Form onSubmit={submitForm}>
            <Box>
              <label htmlFor="date">날짜</label>
              <Input
                type="date"
                id="date"
                onChange={inputDatefunc}
                value={dateValue}
              />
            </Box>
            <Box>
              <label htmlFor="item">항목</label>
              <Input
                type="text"
                id="item"
                placeholder="지출 항목"
                onChange={inputItemfunc}
                value={itemValue}
              />
            </Box>
            <Box>
              <label htmlFor="amount">금액</label>
              <Input
                type="number"
                id="amount"
                placeholder="지출 금액"
                onChange={inputAmountfunc}
                value={amountValue}
              />
            </Box>
            <Box>
              <label htmlFor="description">내용</label>
              <Input
                type="text"
                id="description"
                placeholder="지출 내용"
                onChange={inputDescriptionfunc}
                value={descriptionValue}
              />
            </Box>
            <Box>
              <SaveBtn type="submit">저장</SaveBtn>
            </Box>
          </Form>
        </Container2>
      </Container>
    </>
  );
};

export default InputForm;
