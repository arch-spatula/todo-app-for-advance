import { useState } from "react";

const CustomForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnChangeTitle = (e) => setTitle(e.target.value);
  const handleOnChangeContent = (e) => setContent(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
  };

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
        <button>추가</button>
      </form>
    </div>
  );
};

export default CustomForm;
