function SearchBar({ inputText, isInStock, onInputTextChange, onProductStatusChange}) {
  const handleInputChange = (e) => onInputTextChange(e.target.value);
  const handleProductStatusChange = (e) => onProductStatusChange(e.target.checked);
  return (
    <form>
      <input type="text" placeholder="Search..." value={inputText} onChange={handleInputChange} />
      <p><input type="checkbox" checked={isInStock} onChange={handleProductStatusChange} />&nbsp;Only show products in stock</p>
    </form>
  );
}

export default SearchBar;