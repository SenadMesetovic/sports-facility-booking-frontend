import "./App.css";
import Nav from "./components/Nav/Nav.js";
import ItemsNearbyList from "./components/ItemsNearbyList/ItemsNearbyList.js";
import SearchContainer from "./components/SearchContainer/SearchContainer.js";
function App() {
  return (
    <div className="App">
      <Nav />
      <SearchContainer />
      <ItemsNearbyList />
    </div>
  );
}

export default App;
