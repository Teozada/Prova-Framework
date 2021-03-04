import React from "react";
import {FilterT} from './styled';

const FilterTodo = ({setState}) => {
  const filter = (e) =>{
    setState(e.target.value === "" ? "" : `completed=${e.target.value}`);
  }
    

  return (
    <FilterT onChange={(e) => filter(e)}>
      <option value="">Todas</option>
      <option value="true">Completas</option>
      <option value="false">Não completas</option>
    </FilterT>
  );
};

export default FilterTodo;