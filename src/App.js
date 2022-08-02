
import "./styles.scss";
import Header from "./component/Header";
import Main from "./component/main";
import Footer from "./component/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./component/gallery";

function App() {
  return (
    <div className='App'>
    <div id='app'>
      <div className='position-relative hide-side'>

        <Header />
        <Main />
        <Footer />
<BrowserRouter>
<Routes>
  <Route path="/gallery" element={<Gallery/>} />
</Routes>
</BrowserRouter>

      </div>
    </div>
  
</div>
  )
}

export default App

 
 
