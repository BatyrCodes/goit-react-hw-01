import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.header}>Type</th>
            <th className={css.header}>Amount</th>
            <th className={css.header}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((res, index) => (
            <tr
              key={res.id}
              className={index % 2 === 0 ? css.evenRow : css.oddRow}
            >
              <td className={css.cell}>{res.type}</td>
              <td className={css.cell}>{res.amount}</td>
              <td className={css.cell}>{res.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
