using BackEnd_TodoList.Models.TodoList;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_TodoList.Seeder
{
    public static class DatabaseSeeder
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoList>().HasData(
                new TodoList() { Id = 1, Name = "task 1", isCompleted = false },
                new TodoList() { Id = 2, Name = "task 2", isCompleted = false }
            );
        }
    }
}
