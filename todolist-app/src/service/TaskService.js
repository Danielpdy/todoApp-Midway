
import { apiRequest } from "../lib/httpClient";

export const AddTask = (task) => {
    return apiRequest("/api/tasks", {
        method: "POST",
        body: JSON.stringify(task)
    })
}

export const GetTasks = () => apiRequest("/api/tasks", { method: "GET" });

export const DeleteTask = (id) => {
    return apiRequest(`/api/tasks/${id}`, {
        method: "DELETE"
    })
}

export const UpdateTaskStatus = (id, status) => {
    return apiRequest(`/api/tasks/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ Status: status })
    })
}