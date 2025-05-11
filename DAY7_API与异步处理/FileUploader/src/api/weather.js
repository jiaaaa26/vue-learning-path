import api from "../services/api";

// 建议将API_KEY放在环境变量或单独常量中
const AMAP_API_KEY = "538e14cde96de60ab6aadd0264d715d8";

// 查询实时天气
export const getWeatherByCity = async (city) => {
  const data = await api.get(
    "https://restapi.amap.com/v3/weather/weatherInfo",
    {
      params: {
        city,
        key: AMAP_API_KEY,
        extensions: "base", //base为实时天气，all为预报天气
      },
    }
  );
  return data.lives && data.lives[0];
};
