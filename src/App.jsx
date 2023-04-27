import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
function App() {
  return (
    <WeatherProvider>
      <WeatherForm></WeatherForm>
      <WeatherList></WeatherList>
    </WeatherProvider>
  );
}

export default App;
