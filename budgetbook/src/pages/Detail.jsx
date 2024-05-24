import React from 'react';
import DetailPage from '../components/DetailPage';
// import { useNavigate } from 'react-router-dom';

const Detail = ({ itemList, setItemList }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  return <DetailPage itemList={itemList} setItemList={setItemList} />;
};

export default Detail;
