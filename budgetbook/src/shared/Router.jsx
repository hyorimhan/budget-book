import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Router = () => {
  const [saveMonth, setSaveMonth] = useState(5);
  const [itemList, setItemList] = useState([]);
  console.log(itemList);
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
            />
          }
        />
        <Route
          path="/detail/:detailId"
          element={<Detail itemList={itemList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
