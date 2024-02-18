import Card from "react-bootstrap/Card";
import EditTaskModal from "./EditTaskModal";
import { useState } from "react";

const TaskCard = ({
  task,
  index,
  deleteTask,
  editTask,
  markComplete,
  mode,
}) => {
  const colors = [
    {
      light: "#94a3b8",
      dark: "#334155",
    },
    {
      light: "#a8a29e",
      dark: "#44403c",
    },
    {
      light: "#fca5a5",
      dark: "#b91c1c",
    },
    {
      light: "#facc15",
      dark: "#a16207",
    },
    {
      light: "#fb923c",
      dark: "#c2410c",
    },
    {
      light: "#60a5fa",
      dark: "#1d4ed8",
    },
    {
      light: "#a78bfa",
      dark: "#6d28d9",
    },
    {
      light: "#f472b6",
      dark: "#be185d",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const decoration = task.completed ? "line-through" : "none";

  return (
    <Card className="border-top-0 shadow rounded-0 rounded-bottom mb-4">
      <Card.Header
        className="card_header"
        style={{ backgroundColor: colors[index % 8].dark }}
      />
      <Card.Body className="mt-2">
        <Card.Title>
          <span
            className="rounded-1 card_title py-1 px-4 shadow-sm"
            style={{ backgroundColor: colors[index % 8].light }}
          >
            {task.title}
          </span>
        </Card.Title>
        <Card.Text className="mt-4">
          <span className="card_desc" style={{ textDecoration: decoration }}>
            {task.description}
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="mt-5 justify-content-end d-flex border-0 bg-transparent mb-3">
        <a
          onClick={() => {
            handleShow();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            className="bi bi-pen me-3"
            style={{
              color: mode === "light" ? colors[index % 8].dark : "white",
              cursor: "pointer",
            }}
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
          </svg>
        </a>
        <a onClick={() => deleteTask(task.title)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            className="bi bi-trash me-3"
            style={{
              color: mode === "light" ? colors[index % 8].dark : "white",
              cursor: "pointer",
            }}
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </a>
        <a
          onClick={() =>
            markComplete({ ...task, completed: !task.completed }, index)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-check2-circle me-2 font-bold"
            viewBox="0 0 16 16"
            style={{
              color: task.completed === true ? "#65a30d" : "#dc2626",
              cursor: "pointer",
              boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
          </svg>
        </a>
      </Card.Footer>
      <EditTaskModal
        show={show}
        handleClose={handleClose}
        editTask={editTask}
        editableTask={task}
        index={index}
      />
    </Card>
  );
};
export default TaskCard;
