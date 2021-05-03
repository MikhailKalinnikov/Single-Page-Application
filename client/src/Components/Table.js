const Table = ({ sortItems, itemsForShow }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Date</th>
          <th
            onClick={() => {
              sortItems("name");
            }}
            scope="col"
          >
            Name
          </th>
          <th
            onClick={() => {
              sortItems("quantity");
            }}
            scope="col"
          >
            Quantity
          </th>
          <th
            onClick={() => {
              sortItems("distance");
            }}
            scope="col"
          >
            Distance
          </th>
        </tr>
      </thead>
      <tbody>
        {itemsForShow.map(({ name, id, date, quantity, distance, i }) => (
          <tr key={id}>
            <td>{i}</td>
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
