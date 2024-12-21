using BackEnd_TodoList.Models.TodoList;
using BackEnd_TodoList.Service.TodoListApp;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEnd_TodoList.Controllers
{
    [Route("v1/api/todo_list")]
    [ApiController]
    public class Todo_ListController : ControllerBase
    {
        private readonly ITodoListService _todoListService;
        public Todo_ListController(ITodoListService todoListService)
        {
            _todoListService = todoListService;
        }
        // GET: api/<Todo_ListController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_todoListService.GetTodoList());
        }

        // GET api/<Todo_ListController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Todo_ListController>
        [HttpPost]
        public IActionResult Post(TodoList todoList)
        {
            return Ok(_todoListService.AddTodo(todoList));
        }

        // PUT api/<Todo_ListController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] TodoList todoList)
        {
            if (id != todoList.Id) // Kiểm tra ID trùng khớp
            {
                return BadRequest("ID mismatch.");
            }

            var result = _todoListService.UpdateTodo(todoList);
            if (result)
            {
                return Ok();
            }

            return NotFound();
        }


        // DELETE api/<Todo_ListController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_todoListService.DeleteTodo(id));
        }
    }
}
