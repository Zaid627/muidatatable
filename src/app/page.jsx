import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./pages/posts";
import { Tooltip } from "@mui/material";



export default function Home() {
  return (
    <Tooltip >
     <Posts/>

    </Tooltip>
    
  );
}
