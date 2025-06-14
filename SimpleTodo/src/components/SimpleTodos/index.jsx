import { Component } from "react";
import TodoItem from "../TodoItem";
import "./index.css";

const initialTodosList = [
  {
    id: 1,
    title: "Set up MongoDB schema for user authentication",
  },
  {
    id: 2,
    title: "Build Express.js middleware for JWT verification",
  },
  {
    id: 3,
    title: "Create reusable form components in React",
  },
  {
    id: 4,
    title: "Connect frontend to backend using Axios",
  },
  {
    id: 5,
    title: "Deploy app on Render and test API routes",
  },
  {
    id: 6,
    title: "Fix CORS issue between frontend and backend",
  },
  {
    id: 7,
    title: "Write custom hooks for input handling in React",
  },
  {
    id: 8,
    title: "Document backend routes with Postman",
  },
]


class SimpleTodos extends Component {
  state = {
    TodosList: initialTodosList,
  };

  onDelete = (id) => {
    const updatedList = this.state.TodosList.filter(
      (eachItem) => eachItem.id !== id
    );
    this.setState({
      TodosList: updatedList,
    });
  };

  render() {
    const { TodosList } = this.state;
    return (
      <div className="main-cnt">
        <div className="todo-cnt">
          <h1>Simple Todos</h1>
          <ul>
            {TodosList.map((eachItem) => (
              <TodoItem
                list={eachItem}
                onDelete={this.onDelete}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SimpleTodos;
