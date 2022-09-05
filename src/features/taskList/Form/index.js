import { useState, useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { nanoid } from "@reduxjs/toolkit";
import { FormBody, Input, Button } from "./styled";
import { addTask } from "../taskListSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim()) {
      return;
    }
    dispatch(addTask({
      id: nanoid(),
      content: newTaskContent.trim(),
      status: false,
    }));
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <FormBody onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        autoFocus
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Button>Dodaj zadanie</Button>
    </FormBody>
  );
};
