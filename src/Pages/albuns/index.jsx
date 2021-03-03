import React, {useState,useEffect} from 'react';
import Header from '../../components/header';
import api from '../../services/api';
import Paginacao from '../../components/Paginacao';
import {Table, Celula} from './styled';

const Albuns = () => {
    const [album, setAlbum] = useState([]);
    const [offset, setOffSet] = useState(0);

    async function loadAlbum() {
        await api.get(`albums?_start=${offset}&_limit=9`).then((res) => {
            setAlbum(res.data);
        });
      } 
      useEffect(() => {
        loadAlbum();
      }, [offset]);
    return (
        <>
        <Header albuns={true}/>
        <Table>
        {album.map((v, i) => (
          <Celula key={i}>
            <label>{v.title}</label>
          </Celula>
        ))}
        </Table>
        <Paginacao 
        limite={9} 
        total={100} 
        offset={offset} 
        setOffSet={setOffSet}
        />
        </>
    )
};

export default Albuns;