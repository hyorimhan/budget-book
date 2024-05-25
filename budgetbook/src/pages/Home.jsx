import InputForm from '../components/InputForm';
import MonthBtn from '../components/MonthBtn';
import InputList from '../components/InputList';

import SumValue from '../components/SumValue';

const Home = ({ setItemList, saveMonth, itemList, MonthSaveFunc }) => {
  return (
    <>
      <InputForm setItemList={setItemList} MonthSaveFunc={MonthSaveFunc} />
      <MonthBtn MonthSaveFunc={MonthSaveFunc} />
      <SumValue saveMonth={saveMonth} />
      <InputList itemList={itemList} saveMonth={saveMonth} />
    </>
  );
};

export default Home;
