import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    setProducts(data);
    setFilteredProducts(data);
  };
  return products.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px" }}>
          <input type="text"  onChange={(e)=>{
            const value = e.target.value;
setSearchValue(value);
          }}  value={searchValue} />
          <button onClick={()=>{
            let newValue = products.filter((product)=>{
              return product.title.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredProducts(newValue);
          }}>Search</button>
        </div>
        <div style={{ padding: "10px" }} className="filter-section">
          <button
            onClick={() => {
              const result = products.filter(
                (product) => product.rating.rate >= 4.0
              );
              setFilteredProducts(result);
            }}
          >
            Top Rated Product
          </button>
        </div>
      </div>
      <div className="product">
        {filteredProducts.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
