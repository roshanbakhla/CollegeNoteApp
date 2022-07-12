import React from "react";
import Header from "./components/header/header.jsx";
import NoteTheCard from "./components/noteTheCard/NoteTheCard.jsx";
import ShareAndCollaborate from "./components/shareAndCollaborate/ShareAndCollaborate.jsx";
import "./app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <NoteTheCard />
      <ShareAndCollaborate />
      <Footer />
    </div>
  );
}

export default App;
