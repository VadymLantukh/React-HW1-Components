import css from './TransactionHistory.module.css';
import clsx from 'clsx';

const TransactionHistory = ({ items }) => {
  return (
    <table cellSpacing={0} className={css.form}>
      <thead>
        <tr>
          <th
            className={clsx({ [css.boxTable]: true, [css.titleTable]: true })}
          >
            Type
          </th>
          <th
            className={clsx({ [css.boxTable]: true, [css.titleTable]: true })}
          >
            Amount
          </th>
          <th
            className={clsx({ [css.boxTable]: true, [css.titleTable]: true })}
          >
            Currency
          </th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={css.trTable}>
              <td
                className={clsx({
                  [css.boxTable]: true,
                  [css.typeTable]: true,
                })}
              >
                {item.type}
              </td>
              <td className={clsx({ [css.boxTable]: true })}>{item.amount}</td>
              <td className={clsx({ [css.boxTable]: true })}>
                {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
