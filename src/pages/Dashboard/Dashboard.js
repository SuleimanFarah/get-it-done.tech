import { useState } from "react";
import dataPersistence from "./dataPersistence";
import "./Dashboard.css";

function CodeHard() {
  const [userInput, setUserInput] = useState("");

  const [todoList, setTodoList] = dataPersistence("todo-items", []);

  const addItem = (e) => {
    e.preventDefault();
    const trimmedUserInput = userInput.trim();
    if (trimmedUserInput) {
      setTodoList((existingItems) => [
        ...existingItems,
        { name: trimmedUserInput, finished: false },
      ]);
      setUserInput("");
    }
  };

  const toggleTask = (index) => {
    setTodoList((existingItems) =>
      existingItems.map((item, i) =>
        index === i ? { ...item, finished: !item.finished } : item
      )
    );
  };

  const deleteTask = (index) => {
    setTodoList((existingItems) =>
      existingItems.filter((item, i) => index !== i)
    );
  };

  // Calculate the number and percentage of completed tasks
  const completed = todoList.filter((item) => item.finished);
  const completedCount = completed.length;
  const completedPercentage = Math.round((completedCount / todoList.length) * 100
  );


  return (
    <div className="App">
      <div className="card">
        <h2 className="heading">To-do List</h2>
        <form onSubmit={addItem}>
          <div className="input-wrapper">
            <input
              className="input"
              placeholder="Add a task..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </div>
        </form>
        <div className="items-list">
          {todoList.map((item, index) => (
            <label
              className="tag"
              key={index + item.name}
              htmlFor={`checkbox-${index + item.name}`}
            >
              <input
                id={`checkbox-${index + item.name}`}
                type="checkbox"
                checked={item.finished}
                onChange={() => toggleTask(index)}
              />
              <span className={`label ${item.finished ? "finished" : ""}`}>
                {item.name}
              </span>
              <button className="remove-btn" onClick={() => deleteTask(index)}>
                <span>+</span>
              </button>
            </label>
          ))}
        </div>
        <div className="stats">
          <p>
            You have completed {completedCount} out of {todoList.length} tasks,{" "}
            which is {completedPercentage}%.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodeHard;