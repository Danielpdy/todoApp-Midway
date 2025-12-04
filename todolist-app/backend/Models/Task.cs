
public class Task
{
    public int Id { get; set; }
    public string Name { get; set;} = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Priority { get; set; } = string.Empty;
    public DateOnly CreatedAt { get; set; }
    public string Status { get; set; } = "pending";
}