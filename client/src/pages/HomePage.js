import React, { useState, useEffect } from "react";
import Layout from "./../components/layout/layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch categories on load
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
    getAllProducts(); // Fetch all products on initial load
  }, []);

  // Get total count of products
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Get products based on page number
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Load more products
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts((prevProducts) => [...prevProducts, ...data?.products]); // Append new products
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Update products list when page changes
  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Handle filtering by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // Filter products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // Update products based on filters
  useEffect(() => {
    if (!checked.length && !radio.length) {
      getAllProducts();
    } else {
      filterProduct();
    }
  }, [checked, radio]);

  // Reset filters
  const resetFilters = () => {
    setChecked([]);
    setRadio([]);
    getAllProducts();
  };

  return (
    <Layout title={"All Products - Best offers "}>
      {/* banner image */}
      <div className="banner-container">
        <div className="banner-slider">
          <img src="/images/banner3.jpg" alt="banner image 1" />
        </div>
      </div>
      {/* banner image */}
      <div className="container-fluid row mt-3">
        <div className="col-md-2">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id + Math.random() * 4000}
                checked={checked.includes(c._id)}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id + Math.random() * 5000}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button className="btn btn-danger" onClick={resetFilters}>
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={p._id + Math.random() * 5000}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    Load More <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
