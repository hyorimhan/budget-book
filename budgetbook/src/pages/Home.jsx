import InputForm from '../components/InputForm';
import MonthBtn from '../components/MonthBtn';
import InputList from '../components/InputList';
import { useState } from 'react';
import SumValue from '../components/SumValue';

const Home = ({ setItemList, setSaveMonth, saveMonth, itemList }) => {
  const MonthSaveFunc = (month) => {
    setSaveMonth(month);
    // localStorage.setItem('month', month);
  };
  // const navigate = useNavigate();

  return (
    <>
      <InputForm
        setItemList={setItemList}
        MonthSaveFunc={MonthSaveFunc}
        saveMonth={saveMonth}
      />
      <MonthBtn
        setSaveMonth={setSaveMonth}
        saveMonth={saveMonth}
        MonthSaveFunc={MonthSaveFunc}
      />
      <SumValue saveMonth={saveMonth} />
      <InputList
        itemList={itemList}
        saveMonth={saveMonth}
        setSaveMonth={setSaveMonth}
      />
    </>
  );
};

export default Home;
