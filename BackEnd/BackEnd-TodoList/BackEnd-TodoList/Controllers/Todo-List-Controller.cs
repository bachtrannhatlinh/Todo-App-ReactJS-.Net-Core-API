using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEnd_TodoList.Controllers
{
    [Route("v1/api/todo_list")]
    [ApiController]
    public class Todo_ListController : ControllerBase
    {
        // GET: api/<Todo_ListController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<Todo_ListController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Todo_ListController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Todo_ListController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Todo_ListController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
