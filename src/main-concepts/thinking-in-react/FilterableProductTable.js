import React, { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }) {
  const [inputText, setInputText] = useState('');
  const [isInStock, setIsInStock] = useState(false);

  const handleInputTextChange = (inputText) => setInputText(inputText);
  const handleProductStatusChange = (isInStock) => setIsInStock(isInStock);

  return (
    <div>
      <SearchBar
        inputText={inputText}
        isInStock={isInStock}
        onInputTextChange={handleInputTextChange}
        onProductStatusChange={handleProductStatusChange}
      />
      <ProductTable
        products={products}
        inputText={inputText}
        isInStock={isInStock}
      />
    </div>
  );
}

export default FilterableProductTable;