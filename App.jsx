import "./styles.css";
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Notes from "./Notes"

function App(){
  return (
    <div>
      <Header />
      <Footer />
      <Notes />
      <Notes />
    </div>
  );
}
export default App;