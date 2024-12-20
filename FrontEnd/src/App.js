import { useEffect, useState } from "react";
import "./App.css";

import { getDataTodoList, deleteDataTodoList, addDataTodoList } from "./api/todoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTodoList(await getDataTodoList());
  };

  const handleDeleteTodo = async (id) => {
    if (window.confirm("do you want delete it ?")) {
      await deleteDataTodoList(id);
      window.location.reload();
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    let name = e.target[0].value
    await addDataTodoList({
      name: name
    });
    window.location.reload();
  }

  return (
    <div className="App">
      <main id="todolist">
        <h1>
          Danh sách
          <span>Việc hôm nay không để ngày mai.</span>
        </h1>
        {todoList ? (
          todoList?.map((item) => {
            return (
              <li className={item.isComplete ? "done" : ""} key={item.id}>
                <span className="label">{item.name}</span>
                <div className="actions">
                  <button className="btn-picto" type="button">
                    <i className="fas fa-edit" />
                  </button>
                  <button
                    className="btn-picto"
                    type="button"
                    aria-label="Delete"
                    title="Delete"
                    onClick={() => handleDeleteTodo(item.id)}
                  >
                    <i className="fas fa-trash" />
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <p>Danh sách nhiệm vụ trống.</p>
        )}
        {/* <li className="done">
          <span className="label">123</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i className="fas fa-edit" />
            </button>
            <button
              className="btn-picto"
              type="button"
              aria-label="Delete"
              title="Delete"
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </li>
        <li>
          <span className="label">123</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i className="fas fa-user-edit" />
            </button>
            <button
              className="btn-picto"
              type="button"
              aria-label="Delete"
              title="Delete"
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </li> */}
        <form onSubmit={handleAddTask}>
          <label id="name">Thêm nhiệm vụ mới</label>
          <input type="text" name="name" id="name" />
          <input type="text" name="id" id="id" />
          <button type="submit">Thêm mới</button>
        </form>
      </main>
    </div>
  );
}

export default App;
