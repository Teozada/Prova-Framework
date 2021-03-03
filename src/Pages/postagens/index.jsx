import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Paginacao from "../../components/Paginacao";
import api from "../../services/api";
import { Table, Celula } from "./styled";

const Postagens = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    async function loadPosts() {
      await api.get(`posts?_start=${offset}&_limit=9`).then((res) => {
        setPosts(res.data);
      });
    }
    loadPosts();
  }, [offset]);
  return (
    <>
      <Header postagens={true} />
      <Table>
        {posts.map((v, i) => (
          <Celula key={i}>
            <label>{v.title}</label>
          </Celula>
        ))}
      </Table>
      <Paginacao limite={9} total={100} offset={offset} setOffSet={setOffSet} />
    </>
  );
};

export default Postagens;
