import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Table = ({ paginationsButton, currentPageClick, itemsForShow }) => {
  // const items = useSelector((state) => state.items);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody>
          {itemsForShow.map(({ name, id, date, quantity, distance }) => (
            <tr key={id}>
              <td>{date}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul id="pagination" className="pagination justify-content-center">
      <li className="page-item disabled">
      <Link to="#" className="page-link" tabIndex="-1" aria-disabled="true">Предыдущая</Link>
    </li>
        {paginationsButton.map((p, tabIndex) => {
         return <li key={tabIndex} className="page-item">
            <Link to="#" className="page-link" onClick={() => {currentPageClick(p)}}>
              {p}
            </Link>
          </li>;
        })}
        <li className="page-item">
      <Link to="#" className="page-link">Следующая</Link>
    </li>
      </ul>
    </>
  );
};

export default Table;
