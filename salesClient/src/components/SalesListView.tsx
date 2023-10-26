import styled from "styled-components";
import { Colors } from "../styles/defaultProps";
import { useMyContext } from "../context/Context";
import { Key, useEffect } from "react";


const DisplayInfoBox = styled.div`
  padding: 1rem;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  border-radius: 1rem;
  text-align: center;
  font-size: 1rem;
`;

const TableBox = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: calc(100% - 8rem);
`;

const TABLE = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
  max-width: calc(100% - 0.5rem);
`;

const TR = styled.tr`
  padding: 1rem;
  &:nth-child(odd) {
    background-color: ${Colors.thirthBackground};
    input {
      background-color: ${Colors.secondBackround};
    }
  }
  color: ${Colors.secundaryfontColor};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TH = styled.th`
  padding: 0.5rem;
`;



const IconList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

const IconButton = styled.div`
  color: ${Colors.regularColor};
  cursor: pointer;
  :hover {
    color: ${Colors.secundaryfontColor};
  }
`;



const SalesListRow = ({name, id, quantity}: {name: string, id: string, quantity: number}) =>{
  return <><TH>{name}</TH><TH>{id}</TH><TH>{quantity}</TH></>

}

export default function SalesListView() {

  const {
    actualSale,
    setActualSale,
  } = useMyContext();

  console.log("Actual sale here", actualSale)



  return (
    <>

      {actualSale.length === 0 ? (
        <DisplayInfoBox>Sem informações para exibir </DisplayInfoBox>
      ) : (
        <TableBox>
          <TABLE>
            <tr>
              <TH>Produtos/Serviço</TH>
              <TH>Quantidade</TH>
              <TH>Preço unitário</TH>
              <TH>Total</TH>
              <TH></TH>
            </tr>
            {actualSale.map((sale: any, id: Key | null | undefined) => {
              return (
                <TR key={id}>
                  aaaa
                  <SalesListRow
                    name = {sale.name}
                    id = {sale.id}
                    quantity = {sale.quantity}
                  />
                </TR>
              );
            })}
          </TABLE>
        </TableBox>
      )}
    </>
  );
}
