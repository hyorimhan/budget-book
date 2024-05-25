import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              saveMonth={saveMonth}
              setSaveMonth={setSaveMonth}
              itemList={itemList}
              setItemList={setItemList}
              MonthSaveFunc={MonthSaveFunc}
            />
          }
        />
        <Route
          path="/detail/:detailId"
          element={<Detail itemList={itemList} setItemList={setItemList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
