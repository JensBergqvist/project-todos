import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import todos from "reducers/todos";

const AddTodo = () => {
  const [inputValue, setInputvalue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uniqid(),
      Todo: inputValue,
      isDone: false,
    };

    dispatch(todos.actions.addItem(newTodo));
    setInputvalue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New things to do : &nbsp;
        <input
          type="text"
          required
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
      </label>
      <button type="submit">Add thing to do</button>
    </form>
  );
};

export default AddTodo;
