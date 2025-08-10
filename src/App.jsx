import "./App.css";
import { PageBoard } from "./components/PageBoard/PageBoard.jsx";
import data from "./data/recepts.json";
import { IoMdClock } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { GlobalStyle } from "./GlobalStyles.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageBoard
        recipes={data}
        icons={[
          <IoMdClock size="24px" fill="rgb(49, 57, 90)" />,
          <FaChartPie size="24px" fill="rgb(49, 57, 90)" />,
          <FaChartLine size="24px" fill="rgb(49, 57, 90)" />,
        ]}
      />
    </div>
  );
}

export default App;
