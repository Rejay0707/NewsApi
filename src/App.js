import Header from "./Components/Header";

import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import { Outlet } from "react-router-dom";
import TopNews from "./Components/TopNews";
import GetData from "./Components/GetData";




const headerSection = () => {
  return (
    // <header>
    // <div>NewsApi Org</div>
    // </header>
    <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    
    
    </>
  )
}


export default headerSection
