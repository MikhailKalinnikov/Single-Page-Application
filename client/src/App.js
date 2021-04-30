import "./App.css";
import Table from "./Components/Table";
import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS } from "./redux/Types";
import { useEffect, useState } from "react";

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
  }, []);

  useEffect(() => {
    if (totalRow > 0) {
      const getQuantityPages = Math.ceil(totalRow / limitRowsPerPage); // вычисление количества страниц
      setQuantityPages(getQuantityPages);
    }
  }, [totalRow]);

  const paginationsButton = [];
  for (let i = 1; i <= quantityPages; i++) {
    paginationsButton.push(i);
  }
  const currentPageClick = (pg) => {
    setCurrentPageNum(pg);
  };
  const endRow = currentPageNum * limitRowsPerPage;
  const startRow = endRow - limitRowsPerPage
  const itemsForShow = items.slice(startRow, endRow);
  console.log(items[0], "0");
  console.log(items[9], "9");
  console.log(items[19], "19");

  return (
    <div className="container">
      <Header />
      <Table
        paginationsButton={paginationsButton}
        currentPageClick={currentPageClick}
        itemsForShow={itemsForShow}
      />
    </div>
  );
}

export default App;
