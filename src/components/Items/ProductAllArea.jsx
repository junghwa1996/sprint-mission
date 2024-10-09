import ProductList from "./ProductList";
import DropDown from "./DropDown";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import { getProductList } from "../../service/productAPI";

function ProductAllArea() {
  const [productList, setProductList] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProductList();
    setProductList(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="product-area">
      <div className="product-title">
        <h2>전체 상품</h2>
        <SearchInput />
        <a href="undefined">상품 등록하기</a>
        <DropDown />
      </div>
      <ProductList list={productList} />
    </div>
  );
}

export default ProductAllArea;
