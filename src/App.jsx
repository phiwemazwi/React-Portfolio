import About from "./components/bodySection/About";
import Gridlayout from "./components/bodySection/Gridlayout";
import Header from "./components/Introduction/Header";
import Intro from "./components/Introduction/Intro";
import SpacingGrid from "./components/footer/Contact"



const App = () => {
  return <div>
    <Header/>
    <Intro/>
    <About/>
    <Gridlayout/>
    <SpacingGrid/>
    
    

  </div>;
};

export default App;