import "./App.css";
import { useEffect, useState } from "react";

const Table = () => {
  const data = [
    { id: 1, name: "박재훈", title: "클래식피지크" },
    { id: 2, name: "크리스 범스테드", title: "클래식피지크" },
    { id: 3, name: "장성엽", title: "212" },
  ];
  const [mapData, setMapData] = useState("");

  useEffect(() => {
    setMapData(data);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {mapData &&
          data.map((item) => (
            // onClick 발생 시 handletableRowClick 실행
            <tr key={item.id} onClick={() => handleTableRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
