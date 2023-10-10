import { LayoutCards } from "./components/Card";
import Navbar from "./components/Navbar";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";
import Hero from "./components/Hero";
import About from "./components/About";
import More from "./components/More";


const App = () => {
  return (
    <div className="container-main">
      <Navbar/>
      <Title />
      <Hero/>
      <About/>
      <LayoutCards />
      <More/>
    </div>
  )
}
export default App
