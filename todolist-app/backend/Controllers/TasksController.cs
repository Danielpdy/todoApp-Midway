
using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/tasks")]
    [ApiController]

    public class TasksController : ControllerBase
    {
        private readonly TodoListDbContext _context;

        public TasksController(TodoListDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Task>> GetTasks()
        {
            var tasks = await _context.Tasks
                .ToListAsync();

            return Ok(tasks);
        }

        [HttpPost]
        public async Task<ActionResult<Task>> AddNewTask([FromBody] Task newTask)
        {
            if (newTask == null)
            {
                return BadRequest();
            }

            _context.Tasks.Add(newTask);
            await _context.SaveChangesAsync();

            return Ok(newTask);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPatch("{id}/status")]
        public async Task<ActionResult> UpdateTaskStatus(int id, [FromBody] StatusUpdate statusUpdate)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            task.Status = statusUpdate.Status;
            await _context.SaveChangesAsync();

            return Ok(task);
        }
    }

    public class StatusUpdate
    {
        public string Status { get; set; } = string.Empty;
    }
}