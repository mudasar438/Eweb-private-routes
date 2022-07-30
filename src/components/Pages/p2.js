import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
function HomePage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div className="text-center">
      <nav>
        <h1> Ecommerce App</h1>
      </nav>
      <br />
      <div className="grid grid-cols-3 container mx-auto py-5 space-x-5 space-y-5">
        {currentProduct.map((item, id) => (
          <>
            <article key={id} className="article">
              <Link to={`/section/${item.id}`}>
                <h1 className="title">{item.title}</h1>
              </Link>
              <img
                src={item.images}
                width={300}
                alt="item.title"
                className="image"
              />
            </article>
          </>
        ))}
      </div>
      <div className="flex justify-center">
        <Stack>
          {data.length > 8 && (
            <Pagination
              count={Math.ceil(data.length / productsPerPage)}
              page={currentPage}
              defaultPage={1}
              onChange={paginate}
              color="primary"
              variant="outlined"
              shape="rounded"
              size="large"
            />
          )}
        </Stack>
      </div>
    </div>
  );
}
export default HomePage;