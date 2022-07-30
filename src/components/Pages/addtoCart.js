import { Box, Grid, Typography, Button, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function Cart() {
  const [value, setValue] = useState(1);
  const [productData,setProductData] = useState(JSON.parse(localStorage.getItem("cartmudasar")));
  console.log("productData", productData);
  const totalBill = productData.reduce((sum, product) => {
    sum += product.price * value;
    return sum;
  }, 0);
  console.log("totalBill", totalBill);
  const checkout = () => {
    localStorage.removeItem("cartmudasar");
  };

  const increement = (id,value) => {
    const productData = JSON.parse(localStorage.getItem("cartmudasar"));
    console.log("productData", productData);
    const newProductData = productData.map((product) => {
      if (product.id === id) {
        product.quantity += value;
      }
    
      return product;
    });
    localStorage.setItem("cartmudasar", JSON.stringify(newProductData));
    const updatedProducts = JSON.parse(localStorage.getItem("cartmudasar"));
    setProductData(updatedProducts);

  };
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  console.log("prodeuct", productData.price);
  console.log("value", value);
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box style={{ marginTop: "8%" }}>
          <Typography
            variant="h4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            My Cart
          </Typography>
          <Grid container>
            <Grid item>
              <TableContainer component={Paper} sx={{ my: 4 }}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Product</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Qauntity</TableCell>
                      <TableCell align="center">Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="">
                    {productData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.title}
                          <img
                            src={row.image}
                            alt="product"
                            className="w-[80px] rounded-lg"
                          />
                        </TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell
                          align="center"
                          className=" border border-blue-500"
                        >
                          <button
                            className="text-xl bg-green-500 px-2 rounded-sm mr-1"
                            onClick={() => increement(row.id,-1)}
                          >
                            -{" "}
                          </button>
                          {row.quantity}
                          <button
                            className="text-xl bg-green-500 px-2 rounded-sm ml-1"
                            onClick={() => increement(row.id,1)}
                          >
                            +
                          </button>{" "}
                        </TableCell>
                        <TableCell align="center">
                          {row.price * row.quantity}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "15px",
                  }}
                >
                  Total Amount : {
                    // calculate total amount
                    productData.reduce((sum, product) => {
                      sum += product.price * product.quantity;
                      return sum;
                    }
                    , 0)

                  }
                </Typography>
              </TableContainer>
            </Grid>
          </Grid>
          <Box>
            <Link to="/dashboard">
              <Button variant="contained" onClick={checkout}>
                CheckOut
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Cart;
