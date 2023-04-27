import { useForm } from "react-hook-form";
import { useWeather } from "../context/WeatherContext";

function WeatherForm() {
  const { locationInfo, setSelectedLocation } = useWeather();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const city = [
    { value: "İstanbul", label: "İstanbul" },
    { value: "Ankara", label: "Ankara" },
    { value: "İzmir", label: "İzmir" },
    { value: "CurrentCity", label: "Your current city" },
  ];

  const submitFunc = (data) => {
    setSelectedLocation(data.city);
    console.log(locationInfo);
  };

  return (
    <div>
      <h2> WeatherForm</h2>
      <form onSubmit={handleSubmit(submitFunc)}>
        <label htmlFor="city">Select a city:</label>
        <select {...register("city")}>
          {city.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WeatherForm;
