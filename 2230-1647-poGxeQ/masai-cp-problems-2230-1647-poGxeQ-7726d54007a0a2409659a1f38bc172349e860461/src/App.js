import "./App.css";
import BillPage from "./Components/BillPage";
const App = () => {
  return (
    <div className="container">
      {/* Add title here in h1 tag */}
      SPLITTER
      <div>
        <BillPage />
        {/* Add BillPage component */}
      </div>
    </div>
  );
};

export default App;
