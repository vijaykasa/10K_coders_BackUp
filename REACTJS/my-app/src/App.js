import Navbar1 from "./function components/firstcomponent";
import HeaderPart from "./function components/secondcomponent";
import Link from "./function components/fifthcomponent";
import AsidePart from "./function components/thirdcomponent";
import Poster from "./function components/fourthcomponent";

import FooterPart from "./function components/sixthcomponent";
import HeaderPartclass from "./class components/thirdcomponet";
import HelloTag from "./class components/fifthcomponent";
import Sixthcomponent from "./class components/sixthcomponet";
import Seventhcomponent from "./class components/seventhcomponent"
import "./App.css";
function App() {
  return (
    <div>
      <h1>reatjs</h1>
      <h2>hello</h2>
      <HeaderPart />
      <Navbar1 />
      <Poster />
      <AsidePart />
      <Link />
      <FooterPart />
      <HeaderPartclass />
      <HelloTag />
      <Sixthcomponent />
      <Seventhcomponent />
    </div>
  );
}

export default App;
