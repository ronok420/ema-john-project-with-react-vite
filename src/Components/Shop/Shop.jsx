import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [cart, setCart] = useState([]);
  const productLength = useLoaderData();
  // const intemPerPage = 10;
  const totalPage = Math.ceil(
    parseInt(productLength.total_products) / itemsPerPage);
  const pageNumbers = [...Array(totalPage).keys()];
  console.log(pageNumbers);

  console.log("total product length", productLength);
  useEffect(() => {
    // Fetch products based on the URL or any other state that represents the current page
    fetch(`http://localhost:7000/products?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);
  // useEffect(() => {
  //   fetch("http://localhost:7000/products")
  //     .then((rest) => rest.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const storedCartIds = Object.keys(storedCart)
    fetch('http://localhost:7000/productByIds', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(storedCartIds)
    })
    .then(res=>res.json())
    .then(cartProduct=>{
      console.log("loaded Id ", cartProduct);



      const savedCart = [];
    
    console.log(storedCart);
    for (const id in storedCart) {
      const addedProduct = cartProduct.find((pd) => pd._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
    })


    
  }, []);
//   useEffect(() => {
//     fetch(`http://localhost:7000/products?page=${currentPage}&size=${itemsPerPage}`)
//         .then(res => res.json())
//         .then(data => setProducts(data))
// }, [currentPage, itemsPerPage]);





  const handleCartToAdd = (product) => {
    // console.log(product);
    // const newCart=[...cart,product];

    // if exist product.quantity=1
    // if not  the product.quantity+=1;
    let newCart = [];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity += 1;
      const remaining = cart.filter((pd) => pd._id != product._id);
      newCart = [...remaining, exist];
    }

    addToDb(product._id);
    setCart(newCart);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleItemsPerPage = e => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
}

  return (
    <>
      <div className="shop-container">
        <div className="product-container">
          {/* <h2>product from here length id: {products.length}</h2> */}
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleCartToAdd={handleCartToAdd}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/order" className="link-text">
              <button className="btn-procced-cart2">
                Review Orders
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>{" "}
          </Cart>
        </div>
      </div>

      {/* pagination */}
      <div className="pagination">
        {
            pageNumbers.map(nb=><button style={{fontSize:"40px", margin:"20px"}}
            key={nb}  onClick={() => setCurrentPage(nb)} 
            className={currentPage === nb ? 'selected' : undefined}
            >{nb}</button>)
        }
            <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
      </div>
    </>
  );
};

export default Shop;
