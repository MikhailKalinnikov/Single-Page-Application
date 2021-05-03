import { Link } from "react-router-dom";

const Pagination = ({ buttonsPagesShow, currentPageClick, isLoaded }) => {
  return (
    <div className="container">
      <ul id="pagination" className="pagination justify-content-start">
        <li className="page-item disabled">
          <Link to="#" className="page-link" tabIndex="-1" aria-disabled="true">
            Предыдущая
          </Link>
        </li>
        {isLoaded ? (
          buttonsPagesShow.map((p, tabIndex) => (
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
          ))
        ) : (
          <li></li>
        )}
        <li className="page-item">
          <Link to="#" className="page-link">
            Следующая
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
