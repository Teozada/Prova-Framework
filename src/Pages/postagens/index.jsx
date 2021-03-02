import React, {useState,useEffect} from 'react';
import Header from '../../components/header';
import api from '../../services/api';
import {Table, Celula} from './styled';

const Postagens = () => {
    const [posts, setPosts] = useState([]);

    async function loadPosts() {
        await api.get("posts").then((res) => {
            setPosts(res.data);
        });
      } 
      useEffect(() => {
        loadPosts();
      }, []);
    return (
        <>
        <Header postagens={true}/>
        <Table>
        {posts.map((v, i) => (
          <Celula key={i}>
            <label>{v.title}</label>
          </Celula>
        ))}
        </Table>
        </>
    )
};

export default Postagens;