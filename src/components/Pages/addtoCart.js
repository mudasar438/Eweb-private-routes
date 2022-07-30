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
  var productData = JSON.parse(localStorage.getItem("cartmudasar"));
  console.log("productData", productData);
  const totalBill = productData.reduce((sum, product) => {
    sum += product.price;
    return sum;
  }, 0);
  console.log("totalBill", totalBill);
  const checkout = () => {
    localStorage.removeItem("cartmudasar");
  };
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
                         <img src={row.images[0]} alt="product" className="w-[80px] rounded-lg" />
                        </TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell align="center">{row.qty}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
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
                  Total Amount : {totalBill}
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