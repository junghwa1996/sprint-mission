import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { getProductList } from "../../service/productAPI";

function ProductBestArea() {
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
        <h2>베스트 상품</h2>
      </div>
      <ProductList list={productList} />
    </div>
  );
}

export default ProductBestArea;
