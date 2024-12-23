import { useEffect, useState } from "react";
import "./App.css";

import {
  getDataTodoList,
  deleteDataTodoList,
  addDataTodoList,
  updateDataTodoList, 
} from "./api/todoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textBtn, setTextBtn] = useState("ADD NEW");
  const [editingTodo, setEditingTodo] = useState(null); // Lưu trạng thái chỉnh sửa

  useEffect(() => {
    fetchData();
  }, []);

  // Lấy danh sách nhiệm vụ
  const fetchData = async () => {
    setTodoList(await getDataTodoList());
  };

  // Xóa nhiệm vụ
  const handleDeleteTodo = async (id) => {
    if (window.confirm("Do you want to delete this task?")) {
      await deleteDataTodoList(id);
      fetchData(); // Cập nhật danh sách sau khi xóa
    }
  };

  // Thêm hoặc cập nhật nhiệm vụ
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (editingTodo.id) {
      // Cập nhật nhiệm vụ
      await updateDataTodoList(editingTodo.id, { id: editingTodo.id, name: editingTodo.name });
      setEditingTodo(null); // Xóa trạng thái chỉnh sửa
      setTextBtn("ADD NEW");
    } else {
      // Thêm nhiệm vụ mới
      let name = e.target[0].value;
      await addDataTodoList({ name });
      setEditingTodo("")
    }
    fetchData(); // Cập nhật danh sách
    e.target.reset(); // Reset form sau khi thêm hoặc cập nhật
  };

  // Chỉnh sửa nhiệm vụ
  const handleEditTodo = (todo) => {
    if (editingTodo?.id === todo.id) {
      // Nếu đang chỉnh sửa nhiệm vụ này, kết thúc chỉnh sửa
      setEditingTodo(null);
      setTextBtn("ADD NEW");
    } else {
      // Bắt đầu chỉnh sửa nhiệm vụ
      setEditingTodo(todo);
      setTextBtn("UPDATE");
    }
  };

  const handleCompleTask = async (item) => {
    await updateDataTodoList(item.id, { isCompleted: !item.isCompleted });
  }

  return (
    <div className="App">
      <main id="todolist">
        <h1>
          Danh sách
          <span>Việc hôm nay không để ngày mai.</span>
        </h1>
        {todoList?.length > 0 ? (
          todoList.map((item) => (
            <li className={item.isCompleted ? "done" : ""} key={item.id} onDoubleClick={() => handleCompleTask(item)}>
              <span className="label">{item.name}</span>
              <div className="actions">
                {/* Nút chỉnh sửa */}
                <button
                  className="btn-picto"
                  type="button"
                  onClick={() => handleEditTodo(item)}
                >
                  <i
                    className={
                      editingTodo?.id === item.id
                        ? "fas fa-user-edit"
                        : "fas fa-edit"
                    }
                  />
                </button>

                {/* Nút xóa */}
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
          ))
        ) : (
          <p>Danh sách nhiệm vụ trống.</p>
        )}

        {/* Form thêm hoặc cập nhật nhiệm vụ */}
        <form onSubmit={handleAddTask}>
          <label>Thêm nhiệm vụ mới</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Tên nhiệm vụ"
            value={editingTodo?.name || ""}
            onChange={(e) =>
              setEditingTodo({ ...editingTodo, name: e.target.value })
            }
          />
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Tên id"
            value={editingTodo?.id || ""}
            onChange={(e) =>
              setEditingTodo({ ...editingTodo, id: e.target.value })
            }
          />
          <button type="submit">{textBtn}</button>
        </form>
      </main>
    </div>
  );
}

export default App;
