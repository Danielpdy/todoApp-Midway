# Todo List Application

## Overview
This is a full-stack todo list application built with React (frontend) and ASP.NET Core (backend). The app allows users to create, view, delete, and track the status of their tasks with a clean, responsive interface.

## Backend Technologies
The backend is built with **.NET 9** and **ASP.NET Core Web API**, using **Entity Framework Core** for database operations with **PostgreSQL/Supabase** as the database. It implements three REST API endpoints: GET for retrieving all tasks, POST for creating new tasks, and DELETE for removing tasks. Additionally, a PATCH endpoint updates task status between "pending" and "done". CORS is configured to allow communication with the React frontend running on localhost.

## Frontend Features
The frontend is built with **React** and **Vite**, featuring a responsive grid-based layout that works across desktop and mobile devices. Users can add tasks with properties (name, type, priority, created date), delete tasks with optimistic UI updates, and mark tasks as done or pending using a custom-styled dropdown menu. The interface uses CSS Grid for perfect column alignment and includes smooth animations and purple accent colors throughout. The design is fully responsive with optimized layouts for tablets and mobile screens.

## Project Structure
The backend is located in `todolist-app/backend/` with controllers in `Controllers/TasksController.cs` and the data model in `Models/Task.cs`. The frontend lives in `todolist-app/src/` with the main component in `App.jsx`, task list rendering in `TaskList.jsx`, and API services in `service/TaskService.js`. The application uses optimistic updates for a responsive user experience, with automatic rollback on errors.
