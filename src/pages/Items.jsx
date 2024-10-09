import { useEffect, useState } from "react";
import DropDown from "../components/Items/DropDown";
import ProductList from "../components/Items/ProductList";
import SearchInput from "../components/Items/SearchInput";
import { getProductList } from "../service/productAPI";

function Items() {
  const [productList, setProductList] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProductList();
    setProductList(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <h2>베스트 상품</h2>
      <ProductList list={productList} />
      <div>
        <h2>전체 상품</h2>
        <SearchInput />
        <a href="undefined">상품 등록하기</a>
        <DropDown />
      </div>
      <ProductList list={productList} />
    </>
  );
}

export default Items;
