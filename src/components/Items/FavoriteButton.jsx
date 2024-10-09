function FavoriteButton({ favoriteCount }) {
  return (
    <div className="favorite-area">
      <img className="favorite-icon" src="" alt="좋아요 아이콘" />
      <span className="favorite-number">{favoriteCount}</span>
    </div>
  );
}

export default FavoriteButton;
