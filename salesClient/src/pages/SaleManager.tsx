import { RegularInput, Button } from "../styles/generalStyles";
import styled from "styled-components";
import ProductsSelector from "../components/ProductsSelector";
import ClientSelector from "../components/ClientSelector";
import SellerSelector from "../components/SellerSelector";
import ActualDateTime from "../components/ActualDateTime";
import { Colors } from "../styles/defaultProps";
import { useMyContext } from "../context/Context";
import SalesListView from "../components/SalesListView";
import { useEffect } from "react";

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  height: fit-content;
`;

const SalesPageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3.5rem;
`;

const SalesDataInfo = styled.div`
  border-left: 2px solid ${Colors.regularColor};

  padding: 0rem 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  flex-direction: column;
  height: 70vh;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DisplayButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

function SalesManager() {
  const {
    actualSale,
    setActualSale,
    productCount,
    actualProductObj,
    setProductCount

  } = useMyContext();

  useEffect(() => {
  
  }, [actualSale]);


  const getObjectById = (objs: any[], id: string): any | undefined =>{
    return objs.find(obj => obj.id.toString() === id);
  }

const generateProduct = (name: string, quantity: number, id: string) =>{
  console.log("Genereting obj", name, quantity, id)
    return({
        name: name,
        id: id,
        quantity: quantity
    })
}  


const addProduct = () =>{
  console.log("Adicionar produto", actualProductObj.id, productCount)
  console.log("actualProductObj", actualProductObj)

  let actualSaleRef = actualSale
  //Verify if a product alredy exist in the list
  let productObj = getObjectById(actualSaleRef,actualProductObj.id)

  console.log("Aqui estamos", actualSaleRef)
  if(productObj){
      const index = actualSaleRef.findIndex((obj: any) => obj == actualProductObj);
      console.log("index", index)
      actualSaleRef[index].quantity += productCount;
      console.log(actualSaleRef[index].quantity)
 
  }else{
      console.log("Produto ainda não existe")
      actualSaleRef.push(generateProduct( actualProductObj.name,  productCount, actualProductObj.id))
   
  }
  setActualSale(actualSaleRef);

}

useEffect(() => {
  console.log("product added")
}, [addProduct]);



  const handleProductCountChange = (event: { target: { value: any } }) => {
    setProductCount(event.target.value);
    console.log("Product changed", productCount )
  };
  return (
    <>
      <SalesPageBox>
        <div>
          <h2>Produtos</h2>
          <FormBox>
            <ProductsSelector />

            <InputBox>
              <label>Quantidade</label>
              <RegularInput
                type="number"
                name="quantity"
                onChange={handleProductCountChange}
                value={productCount}
                required
              />
            </InputBox>
            <ButtonBox>
              <Button onClick = {()=>{addProduct()}}>Adicionar</Button>
            </ButtonBox>
          </FormBox>
          <div><SalesListView/></div>
        </div>

        <SalesDataInfo>
          <h2>Dados da venda</h2>
          <div>
            {" "}
            <ActualDateTime />
            <SellerSelector />
            <ClientSelector />
          </div>

          <h3>Valor total da venda : 100,00</h3>
          <DisplayButtons>
            <ButtonBox>
              <Button>Cancelar</Button>
            </ButtonBox>
            <ButtonBox>
              <Button>Finalizar</Button>
            </ButtonBox>
          </DisplayButtons>
        </SalesDataInfo>
      </SalesPageBox>
    </>
  );
}

export default SalesManager;
