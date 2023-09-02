import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

function Home() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>Home Page</h1>
    </>
  )
}

export default Home;
