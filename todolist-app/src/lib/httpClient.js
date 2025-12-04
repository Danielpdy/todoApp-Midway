
export async function apiRequest(path, options = {}) {
    const response = await fetch(`http://localhost:5234${path}`, {
        ...options,
        headers: {
            ...(options.headers || {}),
            "Content-Type": "application/json",
        },
    });

    if(!response.ok){
        const message = await response.text();
        throw new Error (`Request failed: ${response.status} ${message}`);
    }

    if (response.status === 204) {
        return null;
    }

    try{
        return await response.json();
    } catch {
        return null;
    }
}