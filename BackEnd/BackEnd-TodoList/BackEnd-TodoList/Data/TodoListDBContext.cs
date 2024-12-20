using BackEnd_TodoList.Configuration;
using BackEnd_TodoList.Models.TodoList;
using BackEnd_TodoList.Seeder;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_TodoList.Data
{
    public class TodoListDBContext : DbContext
    {
        public TodoListDBContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TodoConfiguration());

            modelBuilder.Seed();
        }

        public DbSet<TodoList> TodoLists { get; set; }
    }
}
