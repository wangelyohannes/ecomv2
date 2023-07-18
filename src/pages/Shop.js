import React, { useState, useEffect } from "react";
import "./Shop.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/shop")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = filterProducts(products, priceFilter);
    const sorted = sortProducts(filtered, sortOption);
    setFilteredProducts(sorted);
  }, [products, priceFilter, sortOption]);

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSortOption = (event) => {
    setSortOption(event.target.value);
  };

  const filterProducts = (items, price) => {
    if (!price) {
      return items;
    }

    const filtered = items.filter((product) => {
      if (price === "9.99") {
        return product.price <= 9.99;
      } else if (price === "19.99") {
        return product.price > 9.99 && product.price <= 19.99;
      } else if (price === "29.99") {
        return product.price > 19.99 && product.price <= 29.99;
      } else if (price === "39.99") {
        return product.price > 29.99 && product.price <= 39.99;
      } else {
        return true;
      }
    });

    return filtered;
  };

  const sortProducts = (items, option) => {
    if (!option) {
      return items;
    }

    const sorted = [...items];

    switch (option) {
      case "nameAsc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceAsc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sorted;
  };

  const removeDuplicates = (items) => {
    const uniqueProducts = Array.from(new Set(items.map((item) => item.id))).map(
      (id) => {
        return items.find((item) => item.id === id);
      }
    );

    return uniqueProducts;
  };

  const uniqueFilteredProducts = removeDuplicates(filteredProducts);

  return (
    <div>
      <section id="hero" loading="lazy" alt="…" width="100%" height="100%">
        <div className="heroHolder">
          <div className="hero-box">
            <h1 className="hero-heading">
              Welcome to your one stop shop for ALL things Anime Funko Related!
            </h1>
            <p className="hero-desc">
              Quality so good you'd think were robbing the source.
            </p>
          </div>
        </div>
      </section>

      <main>
        <h1>Funko Anime Shop</h1>

        <section className="context-section">
          {/* Your context section content */}
        </section>

        <div className="filter-container">
          <label>Price Filter:</label>
          <select value={priceFilter} onChange={handlePriceFilter}>
            <option value="">All</option>
            <option value="9.99">9.99 or Less</option>
            <option value="19.99">19.99 or Less</option>
            <option value="29.99">29.99 or Less</option>
            <option value="39.99">39.99 or Less</option>
          </select>

          <label>Sort By:</label>
          <select value={sortOption} onChange={handleSortOption}>
            <option value="">None</option>
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
          </select>
        </div>

        <section className="product-grid">
          {uniqueFilteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <button>Add to Cart - {product.price}</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Products;
