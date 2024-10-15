
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// const Posts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products/");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         i <= rating ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
//       );
//     }
//     return stars;
//   };

//   if (loading) {
//     return <Typography variant="h6">Loading...</Typography>;
//   }

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Product List
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Image</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Category</TableCell>
//               <TableCell>Rating</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell>
//                   <a
//                     href={product.image}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </a>
//                 </TableCell>
//                 <TableCell>{product.title}</TableCell>
//                 <TableCell>${product.price.toFixed(2)}</TableCell>
//                 <TableCell>{product.category}</TableCell>
//                 <TableCell>{renderStars(product.rating)}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default Posts;







//main code
"use client";
// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
//   Link,
//   Box,
// } from "@mui/material";
// import Grid from '@mui/material/Grid2';

// import axios from "axios";

// import { Rating } from "@mui/material";

// const Posts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products/");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

 

//   if (loading) {
//     return <Typography variant="h6">Loading...</Typography>;
//   }

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Product List
//       </Typography>
//       <Grid container spacing={2}>
//         {products.map((product:any) => (
//           <Grid size={{xs:12, sm:6, md:4}}  key={product.id}>
//             <Card sx={{ height: 500 }}>
//               <Link href={product.image} target="_blank">
//                 <CardMedia
//                   sx={{
//                     height: 200,
//                     width: 200,
//                     margin: "auto",
//                     objectFit: "contain",
//                   }}
//                   component="img"
//                   height="140"
//                   width="140"
//                   image={product.image}
//                   alt={product.title}
//                 />
//               </Link>
//               <CardContent>
//                 <Typography variant="h6">{product.title}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   ${product.price.toFixed(2)}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary">
//                   {product.category}
//                 </Typography>
//                 <Box>
//                   <Typography noWrap variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                 </Box>
                
//                 <Rating value={product.rating.rate} />
//               </CardContent>
              
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Posts;
//main code





"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { Rating,Link } from "@mui/material";

const Posts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      width: 100,
      renderCell: (params) => (
        <Link href={params.value} target="_blank" sx={{width: 80, height: 80}}>
        <img 
          src={params.value}
          alt="Product"
          style={{ width: 80, objectFit: 'contain',height:"100%" }} 
                               
        />
        </Link>
      ),
      
    },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'price', headerName: 'Price', width: 120 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'rating',
      headerName: 'Rating',
      renderCell: (params) => (
        <Rating value={params.value.rate} readOnly />
      ),
      width: 140,
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    image: product.image,
    title: product.title,
    price: `$${product.price.toFixed(2)}`,
    category: product.category,
    description: product.description,
    rating: product.rating,
  }));

  return (
    <Container sx={{background:'white'}}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Box sx={{   width: '100%',  }}>
        <DataGrid sx={{padding:'20', ".MuiDataGrid-row":{ height: "35px"}}}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          rowHeight={100} // Adjust row height
          disableSelectionOnClick
        />
      </Box>
    </Container>
  );
};

export default Posts;






