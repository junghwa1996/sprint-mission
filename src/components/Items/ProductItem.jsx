import FavoriteButton from "./FavoriteButton";

function ProductItem({ name, price, images, favoriteCount }) {
  return (
    <>
      <div className="product-images">
        <img src={images} alt={`${name} 이미지`} />
      </div>
      <p className="product-name">{name}</p>
      <span className="product-price">{price}원</span>
      <FavoriteButton favoriteCount={favoriteCount} />
    </>
  );
}

export default ProductItem;
