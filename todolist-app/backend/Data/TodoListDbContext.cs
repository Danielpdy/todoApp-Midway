
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class TodoListDbContext : DbContext
    {
        public TodoListDbContext(DbContextOptions<TodoListDbContext> options) 
            : base(options)
        {  
        }

        public DbSet<Task> Tasks { get; set; }

    }
}