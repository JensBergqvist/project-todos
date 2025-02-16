import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";

const HeaderList = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  const items = useSelector((store) => store.todos.items);
  const uncomplete = items.length;
  const complete = items.filter((item) => item.isDone).length;

  return (
    <HeaderList>
      <h1> Stuff I need to do</h1>
      <h2>But probably don't want to</h2>
      <h5>{moment().format("dddd, Do MMMM")}</h5>
      <h5>
        {complete} / {uncomplete} complete{" "}
      </h5>
    </HeaderList>
  );
};

export default Header;
