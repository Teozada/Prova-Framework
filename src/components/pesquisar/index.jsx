import React from "react";
import { useForm } from "react-hook-form";
import {Form} from './styled';

const Pesquisar = ({ setState }) => {
  const { handleSubmit, register } = useForm();
  const search = (data) => {
    setState(`userId=${data.search}`);
  };

  return (
    <Form onSubmit={handleSubmit(search)}>
      <input ref={register()} name="search" placeholder="Digite um userId" />
      <button type="submit">Pesquisar</button>
    </Form>
  );
};

export default Pesquisar;
