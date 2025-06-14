import { Component } from "react";
import TodoItem from "../TodoItem";
import "./index.css";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

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
