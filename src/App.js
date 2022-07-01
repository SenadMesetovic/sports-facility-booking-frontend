import "./App.css";
import Nav from "./components/Nav/Nav.js";
import ItemsNearbyList from "./components/ItemsNearbyList/ItemsNearbyList.js";
import SearchContainer from "./components/SearchContainer/SearchContainer.js";
import ExploreItem from "./components/ExploreItem/ExploreItem";
function App() {
  return (
    <div className="App">
      <Nav />
      <SearchContainer />
      <ItemsNearbyList />
      <div className="flex-item">
        <ExploreItem img="/images/fullsize/sarajevo.jpg" title="SARAJEVO" />
        <ExploreItem img="/images/fullsize/mostar.jpg" title="MOSTAR" />
        <ExploreItem img="/images/fullsize/banjaluka.jpg" title="BANJA LUKA" />
      </div>
    </div>
  );
}

export default App;
