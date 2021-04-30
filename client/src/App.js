import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS } from "./redux/Types";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";

function App() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false); // загрузка items ?
  const [totalRow, setTotalRow] = useState(0); // всего строк
  const [quantityPages, setQuantityPages] = useState(0); // количество страниц
  const [currentPageNum, setCurrentPageNum] = useState(1); // номер страницы
  const limitRowsPerPage = 10; // количество строк на страницу
  const fetchItems = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/"
    );
    const itemsFromAPI = await response.json();
    itemsFromAPI.splice(0, 350);
    const itemsData = itemsFromAPI.map((item) => {
      return (item = {
        name: item.name,
        id: item.id,
        date: new Date().toLocaleDateString(),
        quantity: Math.floor(Math.random() * 50),
        distance: Math.floor(Math.random() * 1000),
      });
    });
    dispatch({ type: GET_ITEMS, payload: itemsData });
  };

  useEffect(() => {
    fetchItems();
    setIsLoaded(true);
    setTotalRow(items.length);
  }, [items.length]);

  const currentPageClick = (pg) => {
    setCurrentPageNum(pg); // функция клика на кнопки пагинации
  };

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    const getQuantityPages = Math.ceil(totalRow / limitRowsPerPage); // вычисление количества страниц
    setQuantityPages(getQuantityPages);
    currentPageClick();
  }, [isLoaded, totalRow]);

  const paginationsButton = [];
  for (let i = 1; i <= quantityPages; i++) {
    paginationsButton.push(i); // определение значений для кнопок пагинации
  }

  const endRow = currentPageNum * limitRowsPerPage; //  постраничная навигация
  const startRow = endRow - limitRowsPerPage;
  const itemsForShow = items.slice(startRow, endRow);

  return (
    <div className="container">
      <Header />
      <Table itemsForShow={itemsForShow} />
      <Pagination
        isLoaded={isLoaded}
        paginationsButton={paginationsButton}
        currentPageClick={currentPageClick}
      />
    </div>
  );
}

export default App;
