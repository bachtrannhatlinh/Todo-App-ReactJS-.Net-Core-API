using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BackEnd_TodoList.Data
{
    public class TodoListDbContextFactory : IDesignTimeDbContextFactory<TodoListDBContext>
    {
        public TodoListDBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configurationRoot.GetConnectionString("DefaultConnection");

            var optionBuilder = new DbContextOptionsBuilder<TodoListDBContext>();
            optionBuilder.UseSqlServer(connectionString);

            return new TodoListDBContext(optionBuilder.Options);
        }
    }
}
