import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Paginacao from "../../components/paginacao";
import Pesquisar from '../../components/pesquisar';
import api from "../../services/api";
import { Table, Celula } from "./styled";

const Postagens = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadPosts() {
      if (/=(\w+)/g.exec(search) != null) {
        await api.get(`posts?${search}`).then((res) => {
          setPosts(res.data);
        });
      } else
        await api.get(`posts?_start=${offset}&_limit=9`).then((res) => {
          setPosts(res.data);
        });
    }
    loadPosts();
  }, [offset, search]);

  return (
    <>
      <Header postagens={true} />
      <Pesquisar setState={setSearch} />
      <Table>
        {posts.map((v, i) => (
          <Celula key={i}>
            <label>{v.title}</label>
          </Celula>
        ))}
      </Table>
      {search === "" && (
        <Paginacao
          limite={9}
          total={100}
          offset={offset}
          setOffSet={setOffSet}
        />
      )}
    </>
  );
};

export default Postagens;
