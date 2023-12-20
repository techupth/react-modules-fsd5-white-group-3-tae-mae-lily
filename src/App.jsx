import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  Footer,
  FAQ,
} from "./components/Webpage";

import Button from "./components/common/Btn";
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
