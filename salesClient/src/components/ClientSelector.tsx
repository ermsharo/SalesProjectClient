import { Key, useState } from "react";
import { SelectInput } from "../styles/generalStyles";
import styled from "styled-components";
import { useMyContext } from "../context/Context";
const InputBox = styled.div`
display: flex;
flex-direction: column;
`;
function SalesManager() {


  const { productData, productIsLoading } = useMyContext();

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductChange = (event: { target: { value: any } }) => {
    setSelectedProduct(event.target.value);
  };

  if (productIsLoading) {
    return <div>Loading...</div>;
  }
  if (productData) {
    console.log("Product Data", productData);
    return (
      <>
        <InputBox>
          <label>Escolha um cliente</label>
          <SelectInput value={selectedProduct} onChange={handleProductChange}>
            <option value="">Selecione o nome</option>
            {productData.map((product: any) => (
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
