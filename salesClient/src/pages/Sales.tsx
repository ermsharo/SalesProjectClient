import { useState } from "react";
import SalesListView from "../components/SalesListView";

function Sales() {
  return (
    <>
      <div>
        <h1>Vendas Realizadas</h1>
        <SalesListView />
      </div>
    </>
  );
}

export default Sales;
