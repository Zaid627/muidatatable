import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./pages/posts";
import { Pagination, Tooltip } from "@mui/material";



export default function Home() {
  return (
      
      <Tooltip enterTouchDelay={5000} onDoubleClickCapture={Posts}>
     <Posts/>

    </Tooltip>
    
   
    
    
  );
}
