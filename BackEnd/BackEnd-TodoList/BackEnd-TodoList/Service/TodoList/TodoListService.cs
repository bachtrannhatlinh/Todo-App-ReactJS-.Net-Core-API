using BackEnd_TodoList.Data;
using BackEnd_TodoList.Models.TodoList;
using BackEnd_TodoList.Service.TodoListApp;

namespace BackEnd_TodoList.Service.TodoListService
{
    public class TodoListService : ITodoListService
    {
        private readonly TodoListDBContext _todoListDBContext;

        public TodoListService(TodoListDBContext todoListDBContext)
        {
            _todoListDBContext = todoListDBContext;
        }

        public bool AddTodo(TodoList todoList)
        {
            _todoListDBContext.TodoLists.Add(todoList);
            _todoListDBContext.SaveChanges();
            return true;
        }

        public bool DeleteTodo(int id)
        {
            TodoList foundId = _todoListDBContext.TodoLists.Find(id);
            _todoListDBContext.TodoLists.Remove(foundId);
            _todoListDBContext.SaveChanges();
            return true;
        }

        public List<TodoList> GetTodoList()
        {
            return _todoListDBContext.TodoLists.OrderByDescending(x => x.Id).ToList();
        }

        public bool UpdateTodo(TodoList todoList)
        {
            throw new NotImplementedException();
        }
    }
}
