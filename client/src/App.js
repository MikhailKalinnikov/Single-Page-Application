import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS } from "./redux/Types";
import { useCallback, useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import Filtrations from "./Components/Filtrations";

function App() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false); // загрузка items ?
  const [totalRows, setTotalRows] = useState(0); // всего строк
  const [quantityPages, setQuantityPages] = useState(0); // количество страниц
  const [currentPageNum, setCurrentPageNum] = useState(1); // номер страницы
  const [itemsForShow, setItemsForShow] = useState([]);
  const [buttonsPagesShow, setButtonsPagesShow] = useState([]);
  const limitRowsPerPage = 10; // количество строк на страницу

  const fetchItems = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/"
    );
    const itemsFromAPI = await response.json();
    itemsFromAPI.splice(0, 350);
    const itemsData = itemsFromAPI.map((item, i) => {
      return (item = {
        i: i + 1,
        name: item.name,
        id: item.id,
        date: new Date().toLocaleDateString(),
        quantity: Math.floor(Math.random() * 50),
        distance: Math.floor(Math.random() * 1000),
      });
    });
    dispatch({ type: GET_ITEMS, payload: itemsData });
  }, [dispatch]);

  useEffect(() => {
    fetchItems();
    setIsLoaded(true);
  }, [fetchItems]);

  const getQuantityPages = Math.ceil(totalRows / limitRowsPerPage); // вычисление количества страниц
  const endRow = currentPageNum * limitRowsPerPage; //  постраничная навигация
  const startRow = endRow - limitRowsPerPage;

  const currentPageClick = (pg) => {
    setCurrentPageNum(pg); // функция клика на кнопки пагинации
  };

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    setTotalRows(items.length); // получаем общее количество строк
    setQuantityPages(getQuantityPages); // получаем   количество страниц
    const itemsOnPage = items.slice(startRow, endRow); // получаем данные для  страницы (по дефолту - первой)
    setItemsForShow(itemsOnPage); // передаем их для отображения
    const paginationsButton = []; // массив кнопок пагинации
    for (let i = 1; i <= quantityPages; i++) {
      paginationsButton.push(i); // определение значений для кнопок пагинации
    }
    setButtonsPagesShow(paginationsButton); // передаем кнопки для отображения
  }, [getQuantityPages, isLoaded, items, quantityPages, startRow, endRow]);

  const sortItems = (field) => {
    const copyItems = itemsForShow.concat();
    const sortItems = copyItems.sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    setItemsForShow(sortItems);
  };
  return (
    <div className="container">
      <Header />
      <Filtrations sortItems={sortItems} />
      <Table sortItems={sortItems} itemsForShow={itemsForShow} />
      <Pagination
        isLoaded={isLoaded}
        buttonsPagesShow={buttonsPagesShow}
        currentPageClick={currentPageClick}
      />
    </div>
  );
}

export default App;
