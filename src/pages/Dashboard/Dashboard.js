import { useState } from "react";
import dataPersistence from "./dataPersistence";
import { format, isToday, startOfDay } from "date-fns";
import "./Dashboard.css";

import { useNavigate } from "react-router-dom";

function CodeHard() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = dataPersistence("todo-items", []);
  if (!Array.isArray(todoList)) {
    setTodoList([]);
  }
  const [taskObject, setTaskObject] = dataPersistence("task-items", []);;

  const addItem = (e) => {
    e.preventDefault();
    const trimmedUserInput = userInput.trim();
    if (trimmedUserInput) {
      setTodoList((existingItems) => [
        ...existingItems,
        { name: trimmedUserInput, finished: false },
      ]);
      //the date thing
      setTaskObject((prevTaskObject) => {
        const date = new Date().toISOString().slice(0, 10);
        return {
          ...prevTaskObject,
          [date]: [
            ...(prevTaskObject[date] || []),
            { name: trimmedUserInput, finished: false },
          ],
        };
      });
      setUserInput("");
    }
  };

  const toggleTask = (index) => {
    setTodoList((existingItems) =>
      existingItems.map((item, i) =>
        index === i ? { ...item, finished: !item.finished } : item
      )
    );
    setTaskObject((existingObject) => {
      const taskDate = new Date().toLocaleDateString();
      const updatedTasks = {
        ...existingObject,
        [taskDate]: {
          ...(existingObject[taskDate] || {}),
          [index]: !existingObject[taskDate]?.[index]
        }
      };
      localStorage.setItem("task-object", JSON.stringify(updatedTasks));

      return updatedTasks;
    });
  };

  const deleteTask = (index) => {

    /*const updatedTaskObject = Object.fromEntries(
      Object.entries(taskObject).map(([date, tasks]) => [
        date,
        tasks.filter((task) => task !== existingItems.filter(item) => item.name  ),
      ])
    );*/
    setTodoList((existingItems) =>
      existingItems.filter((item, i) => index !== i)
    );
    
    // Update the state with the new taskObject
   // setTaskObject(updatedTaskObject);
  };

  // Calculate the number and percentage of completed tasks
  const completed = todoList.filter((item) => item.finished);
  const completedCount = completed.length;
  const completedPercentage = Math.round((completedCount / todoList.length) * 100
  );
    
  const navigate = useNavigate();
  const toLoginPage = () =>{
          navigate("/login");
  }

const toPastProductivityPage = () =>{
    navigate("/Past_productivty");
}

  return (
    <div className="App">
      <button className="logout-button" onClick={toLoginPage}>Logout</button>
      <button className="pastProductivity-button" onClick={toPastProductivityPage}>Past Productivity</button>
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
        <div>
        </div>
      </div>
    </div>
  );
}

export default CodeHard;