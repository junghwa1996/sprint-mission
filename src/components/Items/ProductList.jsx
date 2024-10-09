import ProductItem from "./ProductItem";

function ProductList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <ProductItem
            name={item.name}
            price={item.price}
            images={item.images}
            favoriteCount={item.favoriteCount}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
