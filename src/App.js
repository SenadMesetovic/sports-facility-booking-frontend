import "./App.css";
import Nav from "./components/Nav/Nav.js";
import ItemsNearbyList from "./components/ItemsNearbyList/ItemsNearbyList.js";
import SearchContainer from "./components/SearchContainer/SearchContainer.js";
import ExploreItemsContainer from "./components/ExploreItemsContainer/ExploreItemsContainer.js";
function App() {
  return (
    <div className="App">
      <Nav />
      <SearchContainer />
      <ItemsNearbyList />
      <ExploreItemsContainer />
    </div>
  );
}


export default App;
