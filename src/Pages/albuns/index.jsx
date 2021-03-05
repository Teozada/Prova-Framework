import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import api from "../../services/api";
import Paginacao from "../../components/paginacao";
import Pesquisar from "../../components/pesquisar";
import { Table, Celula, DivPesquisa } from "./styled";

const Albuns = () => {
  const [album, setAlbum] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [search, setSearch] = useState("");
  const [length, setLength] = useState(0);

  useEffect(() => {
    async function loadAlbuns() {
      if (/=(\w+)/g.exec(search) != null) {
        await api.get(`albums?${search}`).then((res) => {
          setAlbum(res.data);
          setLength(res.data.length);
        });
      } else
        await api.get(`albums?_start=${offset}&_limit=9`).then((res) => {
          setAlbum(res.data);
          setLength(res.data.length);
          setSearch('')
        });
    }
    loadAlbuns();
  }, [offset, search]);
  return (
    <>
      <Header albuns={true} />
      <DivPesquisa>
        <Pesquisar setState={setSearch} />
        <label>Você filtrou {length} resultados</label>
      </DivPesquisa>
      <Table>
        {album.map((v, i) => (
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

export default Albuns;
