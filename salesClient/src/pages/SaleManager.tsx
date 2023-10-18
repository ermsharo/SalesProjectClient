import { useState } from "react";
import { RegularInput, Button } from "../styles/generalStyles";
import styled from "styled-components";
import { useMyContext } from "../context/Context";
import ProductsSelector from "../components/ProductsSelector";

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


const ButtonBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

  return (
    <>
      <h1>Nova Venda</h1>

      <h2>Produtos</h2>
      <FormBox>
<ProductsSelector/>

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
<ButtonBox>   <Button>Button here</Button></ButtonBox>
     
      </FormBox>
    </>
  );
}

export default SalesManager;
