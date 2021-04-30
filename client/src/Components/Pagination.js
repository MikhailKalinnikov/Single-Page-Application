import { Link } from "react-router-dom";

const Pagination = ({ paginationsButton, currentPageClick, isLoaded }) => {
  return ( 
    <ul id="pagination" className="pagination justify-content-center">
    <li className="page-item disabled">
      <Link to="#" className="page-link" tabIndex="-1" aria-disabled="true">
        Предыдущая
      </Link>
    </li>
    {isLoaded && paginationsButton.map((p, tabIndex) => {
      return (
        <li key={tabIndex} className="page-item">
          <Link
            to="#"
            className="page-link"
            onClick={() => {
              currentPageClick(p);
            }}
          >
            {p}
          </Link>
        </li>
      );
    })}
    <li className="page-item">
      <Link to="#" className="page-link">
        Следующая
      </Link>
    </li>
  </ul>

   );
}
 
export default Pagination; 
