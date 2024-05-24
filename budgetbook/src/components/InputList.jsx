import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-top: 20px;
  padding: 20px;
`;

const Box = styled.div`
  background-color: rgb(233, 236, 239);
  margin: 20px;
  font-size: 18px;
  border-radius: 16px;
  height: 65px;
`;

const Box2 = styled.div`
  padding: 10px;
`;

const Box3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 인풋값 가져와서 맞는 달에 뿌리기

const InputList = ({ itemList, saveMonth }) => {
  const filterList = itemList.filter((item) => {
    const date = parseInt(item.date.slice(6, 7));
    return date === saveMonth;
  });
  // const navigate = useNavigate();

  return (
    <Container>
      <Container2>
        {filterList.map((item) => {
          return (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <Box>
                <Box2>
                  {item.date} {item.item}
                </Box2>
                <Box3>
                  {item.description} {item.amount}원
                </Box3>
              </Box>
            </Link>
          );
        })}
      </Container2>
    </Container>
  );
};

export default InputList;
