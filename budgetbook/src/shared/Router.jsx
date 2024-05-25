import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import { BudgetContext } from '../context/BudgetContext';

const Router = () => {
  const MonthSaveFunc = (month) => {
    setSaveMonth(month);
    localStorage.setItem('month', month);
  };
  function lastMonth() {
    let last = localStorage.getItem('month');
    return last ? Number(last) : 5;
  }

  const [saveMonth, setSaveMonth] = useState(lastMonth);
  const [itemList, setItemList] = useState([]);

  return (
    <BudgetContext.Provider
      value={{
        saveMonth,
        setSaveMonth,
        itemList,
        setItemList,
        MonthSaveFunc,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </BudgetContext.Provider>
  );
};
export default Router;
