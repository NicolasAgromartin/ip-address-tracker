// components
import Display from "./components/Display/Display.tsx";
import SearchBar from "./components/Input/SearchBar.tsx";
import Map from "./components/Map/Map.tsx";



export default function App() {

  return (
    <div className="app">
      <h1>IP Address Tracker</h1>
      <SearchBar />
      <Display />

      <div className="map-container">
        <Map />
      </div>
      
    </div>
  )
}

