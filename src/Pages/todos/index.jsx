import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Paginacao from "../../components/paginacao";
import Pesquisar from "../../components/pesquisar";
import Filtro from "../../components/filtrotodo";
import Check from "../../assets/check.svg";
import Incomplete from "../../assets/remove.svg";
import api from "../../services/api";
import { Table, Celula, Div } from "./styled";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadTodos() {
      if (/=(\w+)/g.exec(search) != null) {
        await api
          .get(`todos?${search}`)
          .then((res) => {
            setTodos(res.data);
          })
      } else
        await api.get(`todos?_start=${offset}&_limit=9`).then((res) => {
          setTodos(res.data);
        });

    }
    loadTodos();
  }, [offset, search]);

  return (
    <>
      <Header todos={true} />
      <Div>
        <Pesquisar setState={setSearch} />
        <Filtro setState={setSearch} />
      </Div>
      <Table>
        {todos.map((v, i) => (
          <Celula key={i}>
              <div>
                <label>{v.userId}</label>
                <img src={v.completed ? Check : Incomplete} alt="mark" />
              </div>
            <section>
              <label>{v.title}</label>
            </section>
          </Celula>
        ))}
      </Table>
      {search === "" && (
        <Paginacao
          limite={9}
          total={200}
          offset={offset}
          setOffSet={setOffSet}
        />
      )}
    </>
  );
};

export default Todos;
