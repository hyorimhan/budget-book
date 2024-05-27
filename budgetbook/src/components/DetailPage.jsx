import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemList } from '../store/slices/budgetSlice';

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

const Box = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0;
  width: 750px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: flex;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  width: 750px;
  height: 38px;

  margin: 0 auto;

  justify-content: center;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 10px auto;
  height: 30px;
  border: none;
  border-radius: 4px;
  gap: 10px;
`;

const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  border: none;
  border-radius: 4px;

  background-color: rgb(0, 123, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  &:hover {
    background-color: rgb(40, 144, 255);
  }
`;

const DelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  border: none;
  border-radius: 4px;

  background-color: rgb(255, 77, 77);
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 96, 96);
  }
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: rgb(108, 117, 125);
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover {
    background-color: rgb(122, 128, 133);
  }
`;

const DetailPage = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.budget.itemList);

  const { detailId } = useParams();

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  console.log(dateRef);
  const navigate = useNavigate();

  const filterId = itemList.find((item) => {
    return item.id === detailId;
  });

  function editClickBtn() {
    const editInput = {
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      id: detailId,
    };

    const updated = itemList.map((item) =>
      item.id === detailId ? editInput : item
    );

    dispatch(setItemList(updated));
    navigate('/');
  }
  function delClickBtn() {
    if (confirm('이 값을 삭제하시겠습니까?')) {
      const delFilter = itemList.filter((item) => {
        return item.id !== detailId;
      });
      dispatch(setItemList(delFilter));
      navigate('/');
    }
  }
  function backClickBtn() {
    navigate('/');
  }
  return (
    <Container>
      <Container2>
        <Box>
          <label htmlFor="date">날짜</label>
          <Input
            type="date"
            id="date"
            defaultValue={filterId.date}
            ref={dateRef}
          />
        </Box>
        <Box>
          <label htmlFor="item">항목</label>
          <Input
            type="text"
            id="item"
            placeholder="항목"
            defaultValue={filterId.item}
            ref={itemRef}
          />
        </Box>
        <Box>
          <label htmlFor="amount">금액</label>
          <Input
            type="number"
            id="amount"
            placeholder="금액"
            defaultValue={filterId.amount}
            ref={amountRef}
          />
        </Box>
        <Box>
          <label htmlFor="description">내용</label>
          <Input
            type="text"
            id="description"
            placeholder="지출 내용"
            defaultValue={filterId.description}
            ref={descriptionRef}
          />
        </Box>

        <BtnBox>
          <EditBtn onClick={editClickBtn}>수정</EditBtn>
          <DelBtn onClick={delClickBtn}>삭제</DelBtn>
          <BackBtn onClick={backClickBtn}>뒤로 가기</BackBtn>
        </BtnBox>
      </Container2>
    </Container>
  );
};

export default DetailPage;
