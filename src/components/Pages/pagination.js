import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Stack, Box, Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FetchApi.css";
function FetchApi() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 20, behavior: "smooth" });
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
  const handleSubmit = (data) => {
    const storageData = JSON.parse(localStorage.getItem("cart"));
    console.log("Storage", storageData);
    localStorage.setItem("cart", JSON.stringify([...storageData, data]));
  };
  return (
    <div className="main">
      <nav>
        <h1> Ecommerce Products</h1>
      </nav>
      <br />
      <Container>
        <Grid container spacing={3} style={{ display: "flex" }}>
          {currentProduct.map((item, id) => (
            <>
              <Grid item md={4} lg={4}>
                <Box display="flex">
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.images}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box display="flex" justifyContent="space-between">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => {
                            handleSubmit(item);
                          }}
                        >
                          Add To Cart
                        </Button>
                        <Box display="flex" ml={10}>
                          <Typography variant="h5">${item.price}</Typography>
                        </Box>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
      <Stack my={10}>
        {data.length > 12 && (
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
  );
}
export default FetchApi;