import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보임
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태정보가 들어감
// 3. 5개의 버튼 있음(1개는 현재위치, 4개는 다른도시)
// 4. 도시 버튼을 클릭할 때 마다 도시별 날씨가 나옴
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 데이터를 돌고오는 동안 로딩 스피너가 돈다

function App() {

  const [weather, setWeather] = useState(null);

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon= position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0252dcb54d0c04d9d81ac75312df1393&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div>
      <div class="container">
        <WeatherBox weather={weather}/>
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
