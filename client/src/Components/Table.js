
const Table = ({itemsForShow}) => {
  return (
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
  );
};

export default Table;
