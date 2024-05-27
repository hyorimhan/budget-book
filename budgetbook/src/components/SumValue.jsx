import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSaveMonth } from '../store/slices/budgetSlice';

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
const SumValue = () => {
  const dispatch = useDispatch();
  const saveMonth = useSelector((state) => state.budget.saveMonth);
  const itemList = useSelector((state) => state.budget.itemList);

  useEffect(() => {
    localStorage.setItem('month', saveMonth);
  }, [saveMonth]);

  useEffect(() => {
    const storeSaveMonth = Number(localStorage.getItem('month'));
    if (storeSaveMonth) {
      dispatch(setSaveMonth(storeSaveMonth));
    }
  }, [dispatch]);

  const sum = itemList.filter((item) => {
    const date = parseInt(item.date.slice(6, 7));
    return date === saveMonth;
  });

  const monthTotal = sum.reduce((total, item) => {
    return Number(total) + Number(item.amount);
  }, 0);

  if (Number.isNaN(saveMonth)) {
    dispatch(setSaveMonth(5));
  }

  return (
    <Container>
      <Container2>
        <Box>
          <Span>
            {saveMonth}월 총 지출: {monthTotal}원
          </Span>
        </Box>
      </Container2>
    </Container>
  );
};

export default SumValue;
