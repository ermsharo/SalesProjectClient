import { Key, useState } from "react";
import { SelectInput } from "../styles/generalStyles";
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

  const { productData ,productError ,productIsLoading} = useMyContext();



  const [selectedProduct, setSelectedProduct] = useState("");
  const colorOptions = ["Red", "Green", "Blue", "Yellow"];
  const handleProductChange = (event: { target: { value: any } }) => {
    setSelectedProduct(event.target.value);
  };



   if(productIsLoading){
    return(<div>Loading...</div>)
   }
   if(productData){

    console.log("Product Data", productData)
    return (
      <>
        <InputBox>
          <label>Buscar pelo código de barras ou descrição</label>
          <SelectInput value={selectedProduct} onChange={handleProductChange}>
            <option value="">Selecione seu produto</option>
            {productData.map((product: any, index: Key | null | undefined) => (
              <option key={product.id} value={product.name}>
                {product.id} - {product.name}
              </option>
            ))}
          </SelectInput>
        </InputBox>
      </>
    );
   }


}

export default SalesManager;
