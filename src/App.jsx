import Details from "./Components/Details";
import GoogleMap from "./Components/GoogleMap";
import Header from "./Components/Header";
export default function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-2">
        <Details />
        <GoogleMap />
      </div>
    </div>
  );
}
