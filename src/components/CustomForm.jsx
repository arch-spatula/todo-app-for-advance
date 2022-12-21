import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoThunk } from "../redux/modules/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const CustomForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnChangeTitle = (e) => setTitle(e.target.value);
  const handleOnChangeContent = (e) => setContent(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodoThunk({
        id: nanoid(),
        title,
        content,
        kind: "Working",
      })
    );

    setTitle("");
    setContent("");
  };

  const canSave = [title, content].every(Boolean);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleOnChangeTitle}
        />
        <label htmlFor="content">content</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={handleOnChangeContent}
        />
        <button disabled={!canSave}>추가</button>
      </form>
    </div>
  );
};

export default CustomForm;
