import { useState, useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { nanoid } from "@reduxjs/toolkit";
import { FormBody, Button } from "./styled";
import { Input } from "../styled";
import { addTask } from "../taskListSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const setFocus = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim()) {
      setFocus();
      return;
    }
    dispatch(
      addTask({
        id: nanoid(),
        content: newTaskContent.trim(),
        status: false,
      })
    );
    setNewTaskContent("");
    setFocus();
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
