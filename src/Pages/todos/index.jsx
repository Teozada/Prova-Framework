import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Paginacao from "../../components/Paginacao";
import api from "../../services/api";
import { Table, Celula } from "./styled";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    async function loadTodos() {
      await api.get(`todos?_start=${offset}&_limit=9`).then((res) => {
        setTodos(res.data);
      });
    }
    loadTodos();
  }, [offset]);
  return (
    <>
      <Header todos={true} />
      <Table>
        {todos.map((v, i) => (
          <Celula key={i}>
            <label>{v.title}</label>
          </Celula>
        ))}
      </Table>
      <Paginacao limite={9} total={200} offset={offset} setOffSet={setOffSet} />
    </>
  );
};

export default Todos;
