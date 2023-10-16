import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sales from "./pages/Sales";
import SalesManager from "./pages/SaleManager";
import SalesReport from "./pages/SalesReport";
import { Board, InfoArea } from "./styles/generalStyles";
import GlobalStyle from "./styles/globalStyles";
import SideMenu from "./components/SideMenu";

function App() {
  const [page, setPage] = useState(1);

  const RenderPage = () => {
    switch (page) {
      case 0:
        return <Sales />;
      case 1:
        return <SalesManager />;
      case 2:
        return <SalesReport />;
      default:
        return <Sales />;
    }
  };

  return (
    <>
      <Header />
      <>
        <GlobalStyle />
        <Board>
          <InfoArea>
            {" "}
            <RenderPage />
          </InfoArea>
        </Board>
      </>
    </>
  );
}

export default App;
