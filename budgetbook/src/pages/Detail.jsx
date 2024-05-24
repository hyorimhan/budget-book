import React from 'react';
import DetailPage from '../components/DetailPage';
// import { useNavigate } from 'react-router-dom';

const Detail = ({ itemList }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  return <DetailPage itemList={itemList} />;
};

export default Detail;
