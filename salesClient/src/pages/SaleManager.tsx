import { useState } from "react";
import { RegularInput } from "../styles/generalStyles";
import styled from "styled-components";
import { useMyContext } from "../context/Context";


function SalesManager() {



   const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormBox = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 1fr;
grid-column-gap: 1.5rem;
`;


const { isLoading, error } = useMyContext();

  return (
    <>
      <h1>Nova Venda</h1>

      <h2>
        Produtos
      </h2>
      <FormBox>

      <InputBox>
        <label>Buscar pelo código de barras ou descrição</label>
        <RegularInput
          type="text"
          placeholder="Buscar pelo código de barras ou descrição"
          name="productId"
          // onChange={handleChange}
          // value={formInputs.username}
          required
        />
      </InputBox>

      <InputBox>
        <label>aqui esta</label>
        <RegularInput
          type="text"
          placeholder="username"
          name="username"
          // onChange={handleChange}
          // value={formInputs.username}
          required
        />
      </InputBox>

      <div>Button here</div>

      </FormBox>


     
    </>
  );
}

export default SalesManager;
