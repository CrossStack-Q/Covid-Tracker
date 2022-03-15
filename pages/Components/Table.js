import React from "react";
import styles from "../../styles/Table.module.css";

const Table = ({ countries }) => {
  return (
    <div>
      <div className={styles.table}>
        {countries.map(({ country, cases }) => (
          <tr>
            <td>{country}</td>
            <td>
              <strong>{cases}</strong>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Table;
