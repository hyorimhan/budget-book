import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

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
  align-items: flex-start;

  padding: 20px 0;
`;

const Input = styled.input`
  display: flex;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  width: 770px;
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
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;

  height: 30px;
  border: none;
  border-radius: 4px;

  background-color: rgb(0, 123, 255);
  color: rgb(255, 255, 255);
`;

const DelBtn = styled.button`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;

  height: 30px;
  border: none;
  border-radius: 4px;

  background-color: rgb(255, 77, 77);
  color: rgb(255, 255, 255);
`;

const BackBtn = styled.button`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;

  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: rgb(108, 117, 125);
  color: rgb(255, 255, 255);
`;

const DetailPage = ({ itemList, setItemList }) => {
  const { detailId } = useParams();
  const navigate = useNavigate();

  const filterId = itemList.find((item) => {
    return item.id === detailId;
  });

  const [dateValue, setDateValue] = useState(filterId.date);
  const [itemValue, setItemValue] = useState(filterId.item);
  const [amountValue, setAmountValue] = useState(filterId.amount);
  const [descriptionValue, setDescriptionValue] = useState(
    filterId.description
  );

  function inputDatefunc(e) {
    setDateValue(e.target.value);
  }

  function inputItemfunc(e) {
    setItemValue(e.target.value);
  }

  function inputAmountfunc(e) {
    setAmountValue(e.target.value);
  }

  function inputDescriptionfunc(e) {
    setDescriptionValue(e.target.value);
  }

  function editClickBtn() {
    const editInput = {
      date: dateValue,
      item: itemValue,
      amount: amountValue,
      description: descriptionValue,
      id: detailId,
    };

    setItemList((prev) =>
      prev.map((item) => (item.id === detailId ? editInput : item))
    );
    navigate('/');
  }
  function delClickBtn() {
    if (confirm('이 값을 삭제하시겠습니까?')) {
      const delFilter = itemList.filter((item) => {
        return item.id !== detailId;
      });
      setItemList(delFilter);
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
            onChange={inputDatefunc}
            value={dateValue}
          />
        </Box>
        <Box>
          <label htmlFor="item">항목</label>
          <Input
            type="text"
            id="item"
            placeholder="항목"
            onChange={inputItemfunc}
            value={itemValue}
          />
        </Box>
        <Box>
          <label htmlFor="amount">금액</label>
          <Input
            type="number"
            id="amount"
            placeholder="금액"
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
