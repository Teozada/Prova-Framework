import React from "react";
import { Ul, Button } from "./styled";

const maximo_itens =5;
const maximo_esquerda = 2;

const Paginacao = ({ limite, total, offset, setOffSet }) => {
  const pagina_atual = offset ? offset / limite + 1 : 1;
  const paginas = Math.ceil(total / limite);
  const primeiro_item =
    Math.max(pagina_atual - maximo_esquerda, 1) + 1 < paginas - maximo_esquerda
      ? Math.max(pagina_atual - maximo_esquerda, 1)
      : paginas - (maximo_itens - 1);

  return (
    <Ul>
      {Array.from({ length: maximo_itens })
        .map((v, i) => i + primeiro_item)
        .map((pagina) => (
          <li key={pagina}>
            <Button
              selecionado={pagina_atual === pagina}
              onClick={() => setOffSet((pagina - 1) * limite)}
            >
              {`${pagina}`.padStart(2, "0")}
            </Button>
          </li>
        ))}
    </Ul>
  );
};

export default Paginacao;
