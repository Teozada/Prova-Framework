import React, {useState,useEffect} from 'react';
import Header from '../../components/header';
import api from '../../services/api';
import {Table, Celula} from './styled';

const Albuns = () => {
    const [album, setAlbum] = useState([]);

    async function loadAlbum() {
        await api.get("albums").then((res) => {
            setAlbum(res.data);
        });
      } 
      useEffect(() => {
        loadAlbum();
      }, []);
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
        </>
    )
};

export default Albuns;