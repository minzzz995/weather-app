import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보임
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태정보가 들어감
// 3. 5개의 버튼 있음(1개는 현재위치, 4개는 다른도시)
// 4. 도시 버튼을 클릭할 때 마다 도시별 날씨가 나옴
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 데이터를 돌고오는 동안 로딩 스피너가 돈다

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  
  const cities=["Barcelona", "Rome", "tokyo", "seoul"];

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon= position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  }
  
  useEffect(()=>{
    if(city=="") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  },[city]);

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0252dcb54d0c04d9d81ac75312df1393&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    setSelectedCity('');
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0252dcb54d0c04d9d81ac75312df1393&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  // useEffect는 UI가 처음에 그려졌을 때, 배열에 있는 state값이 바뀔 때마다 호출
  // useEffect(()=>{
  //   getWeatherByCity();
  // }, [city])

  return (
    <div>
      {loading ? (
        <div class="container">  
          <ClipLoader color="#4B89DC" loading={loading} size={150} />
        </div>
      ) : (
        <div class="container">       
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      </div>
      )}
    </div>
  );
}

export default App;
