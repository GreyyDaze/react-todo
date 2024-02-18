import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import CreateTaskModal from "./CreateTaskModal";
import TaskCard from "./TaskCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const Tasks = JSON.parse(localStorage.getItem("TaskList"));
console.log("Tasks", Tasks);
const TodoList = ({ mode, setMode }) => {
  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState(Tasks || []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const saveTask = (taskObj) => {
    setTaskList([...taskList, taskObj]);
    localStorage.setItem("TaskList", JSON.stringify([...taskList, taskObj]));
  };

  const deleteTask = (title) => {
    const newTaskList = taskList.filter((item) => item.title !== title);
    console.log(newTaskList);
    setTaskList(newTaskList);
    localStorage.setItem("TaskList", JSON.stringify(newTaskList));
  };
  const editTask = (task, index) => {
    const newTaskList = [...taskList];
    newTaskList[index] = task;
    setTaskList(newTaskList);
    localStorage.setItem("TaskList", JSON.stringify(newTaskList));
  };

  const markComplete = (task, index) => {
    console.log(task);
    const newTaskList = [...taskList];
    newTaskList[index] = task;
    setTaskList(newTaskList);
    localStorage.setItem("TaskList", JSON.stringify(newTaskList));
  };

  const clearAll = () => {
    setTaskList([]);
    localStorage.setItem("TaskList", JSON.stringify([]));
  };
  const bgColor = mode === "light" ? "#f8f9fa" : "#212529";
  console.log(bgColor);

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center header"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <h3 className={mode === "light" ? "text-dark" : "text-light"}>
          Todo List
        </h3>
        <div className="mt-3">
          <Button variant="success" className="me-4" onClick={handleShow}>
            Create Task
          </Button>
          <Button variant="danger" onClick={clearAll}>
            Clear All
          </Button>
        </div>
      </div>
      <div className="mt-5 content">
        <Container className="d-flex justify-content-end mb-5">
          {mode === "light" ? (
            <a onClick={() => setMode("dark")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-moon-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
              </svg>
            </a>
          ) : (
            <a onClick={() => setMode("light")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-moon"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg>
            </a>
          )}
        </Container>
        <Container>
          <Row>
            {taskList &&
              taskList.map((task, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                  <TaskCard
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    markComplete={markComplete}
                  />
                </Col>
              ))}
            <div className="mt-4 mb-5 d-flex justify-content-center">
              <Card>
                <Card.Body className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-emoji-smile-fill mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                  </svg>
                  <Card.Title>
                    No Task Created Yet. Create Task to see it here
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
      <footer className="mt-5 bg-dark text-white pt-3 pb-2 position-relative bottom-0">
        <p className="text-center font-weight-bold">
          Made by Aminah &copy; 2024
        </p>
      </footer>
      <CreateTaskModal
        show={show}
        handleClose={handleClose}
        saveTask={saveTask}
      />
    </>
  );
};
export default TodoList;
