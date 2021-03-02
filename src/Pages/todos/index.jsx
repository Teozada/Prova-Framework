import React, {useState,useEffect} from 'react';
import Header from '../../components/header';
import api from '../../services/api';
import {Table, Celula} from './styled';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    async function loadTodos() {
        await api.get("todos").then((res) => {
            setTodos(res.data);
        });
      } 
      useEffect(() => {
        loadTodos();
      }, []);
    return (
        <>
        <Header todos={true}/>
        <Table>
        {todos.map((v, i) => (
          <Celula key={i}>
            <label>{v.title}</label>
          </Celula>
        ))}
        </Table>
        </>
    )
};

export default Todos;