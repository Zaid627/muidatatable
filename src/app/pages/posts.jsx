"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { Rating, Link } from "@mui/material";

const Posts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5); // Number of products to show

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 120,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" sx={{ width: 80, height: 80 }}>
          <img 
            src={params.value}
            alt="Product"
            style={{ width: 80, objectFit: 'contain', height: "100%" }} 
          />
        </Link>
      ),
    },
    { field: 'title', headerName: 'Title', width: 120 },
    { field: 'price', headerName: 'Price', width: 120 },
    { field: 'category', headerName: 'Category', width: 120 },
    { field: 'description', headerName: 'Description', width: "500" },
    {
      field: 'rating',
      headerName: 'Rating',
      renderCell: (params) => (
        <Rating value={params.value.rate} readOnly />
      ),
      width: '140',
    },
  ];

  const rows = products.slice(0, visibleCount).map((product) => ({
    id: product.id,
    image: product.image,
    title: product.title,
    price: `$${product.price.toFixed(2)}`,
    category: product.category,
    description: product.description,
    rating: product.rating,
  }));

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, products.length)); // Load 5 more products
  };

  return (
    <Container sx={{ background: 'white' }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Box sx={{ width: '100%' }}>
        <DataGrid
          sx={{ padding: '20', ".MuiDataGrid-row": { height: "35px", } }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          rowHeight={100}
          disableSelectionOnClick
        />
      </Box>
      {visibleCount < products.length && (
        <Button 
          variant="contained" 
          onClick={handleLoadMore} 
          sx={{ marginTop: 2 }}
        >
          Load More
        </Button>
      )}
    </Container>
  );
};

export default Posts;







