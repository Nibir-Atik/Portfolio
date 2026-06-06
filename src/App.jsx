import Navbar from "./components/navbar/navbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Skill from "./components/skill/skill.jsx";
import Work from "./components/Works/Work.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skill></Skill>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
