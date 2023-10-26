import { Key, useState } from "react";
import { SelectInput } from "../styles/generalStyles";
import styled from "styled-components";
import { useMyContext } from "../context/Context";

const InputBox = styled.div`
display: flex;
flex-direction: column;
`;


function SalesManager() {

  const { productData, productIsLoading, setActualProductObj } = useMyContext();

  const [selectedProduct, setSelectedProduct] = useState("");

  if (productIsLoading) {
    return <div>Loading...</div>;
  }
  if (productData) {

    const getObjectById = (objs: any[], id: string): any | undefined =>{
      return objs.find(obj => obj.id.toString() === id);
    }

    const handleProductChange = (event: { target: { value: string } }) => {
      setSelectedProduct(event.target.value);
      console.log("Selected Product ID:", event.target.value);
      // Ensure productData is defined and has the expected structure
      console.log("Product Data:", productData);
      let id = event.target.value;
      console.log("Type of ID:", typeof id);
      // Check if the getObjectById function works as expected
      const product = getObjectById(productData, id);
      console.log("Product filtered:", product);
      setActualProductObj(product)
    };
    return (
      <>
        <InputBox>
          <label>Buscar pelo código de barras ou descrição</label>
          <SelectInput value={selectedProduct} onChange={handleProductChange}>
            <option value="">Selecione seu produto</option>
            {productData.map((product: any) => (
              <option key={product.id} value={product.id}>
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
