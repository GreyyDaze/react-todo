import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const CreateTaskModal = ({ show, handleClose, saveTask }) => {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTaskForm({ ...taskForm, title: value });
    } else {
      setTaskForm({ ...taskForm, description: value });
    }
  };

  
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <Modal.Title className="flex-grow-1 text-center">
            Create Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the task title...."
                value={taskForm.title}
                onChange={handleChange}
                name="title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter the task description...."
                value={taskForm.description}
                onChange={handleChange}
                name="description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border border-0">
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              saveTask({
                title: taskForm.title,
                description: taskForm.description,
                completed: taskForm.completed,
              });
              setTaskForm({ title: "", description: "" });
            }}
          >
            Create
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CreateTaskModal;
