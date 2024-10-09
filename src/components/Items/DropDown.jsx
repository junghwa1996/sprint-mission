function DropDown() {
  return (
    <div className="dropdown-area">
      <button className="dropdown-title">기본옵션값</button>
      <ul className="dropdown-menu">
        <li className="dropdown-option">
          <button>옵션값1</button>
        </li>
        <li className="dropdown-option">
          <button>옵션값2</button>
        </li>
        <li className="dropdown-option">
          <button>옵션값3</button>
        </li>
        <li className="dropdown-option">
          <button>옵션값4</button>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
