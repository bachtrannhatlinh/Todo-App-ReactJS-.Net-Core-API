using BackEnd_TodoList.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackEnd_TodoList.Configuration
{
    public class TodoConfiguration : IEntityTypeConfiguration<TodoList>
    {
        public void Configure(EntityTypeBuilder<TodoList> builder)
        {
            builder.ToTable("todoList");
            builder.HasKey(t => t.Id);
            builder.Property(t => t.isCompleted).IsRequired().HasDefaultValue(false);
        }
    }
}
