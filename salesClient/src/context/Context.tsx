import React, { createContext, useContext, useState, ReactNode } from "react";
import { AxiosError } from "axios";
import { GetData } from "../services/requests";

//Quantidade por pagina
//Pagina
//Requisição data, loading error é refresh
//Lingua
//Navegador
//Filtros
//EasyApply
//Actual_ID

interface MyContextType {
  product: number;
  setProduct: React.Dispatch<React.SetStateAction<number>>;
  productCount: number;
  setProductCount: React.Dispatch<React.SetStateAction<number>>;
  client: number;
  setClient: React.Dispatch<React.SetStateAction<number>>;
  seller: number;
  setSeller: React.Dispatch<React.SetStateAction<number>>;

  productData: any | null;
  productError: AxiosError | null;
  productIsLoading: boolean;
  productRefetchData: Promise<void>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode; // Use ReactNode for children
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [product, setProduct] = useState<number>(0); // product id
  const [productCount, setProductCount] = useState<number>(0);
  const [client, setClient] = useState<number>(0); //client id
  const [seller, setSeller] = useState<number>(0); //seller id

  //Requisição dos posts aqui

  // trunk-ignore(eslint/@typescript-eslint/no-explicit-any)
  const { data: productData, error: productError, isLoading : productIsLoading, refetchData: productRefetchData } = GetData<any>({
    url: `http://127.0.0.1:8000/api/product/`,
  });

  return (
    <MyContext.Provider
      value={{
        product,
        setProduct,
        productCount,
        setProductCount,
        client,
        setClient,
        seller,
        setSeller,
        productData,
        productError,
        productIsLoading,
        productRefetchData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
