using BackEnd_TodoList.Models.TodoList;

namespace BackEnd_TodoList.Service.TodoListApp
{
    public interface ITodoListService
    {
        List<TodoList> GetTodoList();
        Boolean AddTodo(TodoList todoList);
        Boolean DeleteTodo(int id);
        Boolean UpdateTodo(TodoList todoList);
    }

}
