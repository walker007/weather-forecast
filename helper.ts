const API_KEY = "4debdea3c3e3f50655a5fe5319ca66ec";

export const getOpenWeaherLink = (cidade: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${API_KEY}&lang=pt_br`;
};



export const weatherClassification = (weather: "Clear"|"Clouds"|"Mist"|"Rain"|"Snow") => {
  const imagens = {
    Clear: require("./assets/clear.png"),
    Clouds: require("./assets/cloud.png"),
    Mist: require("./assets/mist.png"),
    Rain: require("./assets/rain.png"),
    Snow: require("./assets/snow.png"),
  };

  return imagens[weather] ? imagens[weather] : imagens['Clouds']
};
