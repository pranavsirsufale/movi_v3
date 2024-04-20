import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { useContext } from "react";
import Loading from "./Loading";

function Home() {
  const { products } = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setFilterProducts] = useState(null);

  const getProductsCatgegory = () => {
    const parsedData = JSON.parse(localStorage.getItem("products"));
    let filteredData = parsedData.filter((prduc) => prduc.category == category);
    setFilterProducts(filteredData);
  };

  useEffect(() => {
    if (!filterProducts || category == "undefined") setFilterProducts(products);
    if (category != "undefined") {
      getProductsCatgegory();
    }
  }, [category, products]);

  return (
    <>
      <Nav />
      <div className="p-10 w-[80%] flex flex-wrap overhid overflow-y-auto">
        {/* card here  */}

        {!filterProducts ? (
          <Loading />
        ) : (
          filterProducts.map((product) => (
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="mr-3 mb-3 card w-[18%] h-[30vh] p-5 border flex justify-center flex-col items-center shadow rounded overflow-hidden"
            >
              <div
                className="hover:scale-110 transition-all ease-linear mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center min-h-[40%]"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300 cursor-pointer overflow-y-auto hide-scroll overflow-x-hidden hide-scrollbar pl-5">
                {product.title}
              </h1>
            </Link>
          ))
        )}

        {/* card end here   */}
      </div>
    </>
  );
}

export default Home;
