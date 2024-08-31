import express from "express";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";

const getPresentAndFutureDate = (daysAhead = 15) => {
  const currentDate = new Date();
  const yearNow = currentDate.getFullYear();
  const monthNow = String(currentDate.getMonth() + 1).padStart(2, "0");
  const dayNow = String(currentDate.getDate()).padStart(2, "0");
  const formattedCurrentDate = `${yearNow}-${monthNow}-${dayNow}`;

  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + daysAhead);

  const yearFuture = futureDate.getFullYear();
  const monthFuture = String(futureDate.getMonth() + 1).padStart(2, "0");
  const dayFuture = String(futureDate.getDate()).padStart(2, "0");
  const formattedFutureDate = `${yearFuture}-${monthFuture}-${dayFuture}`;

  return {
    currentDate: formattedCurrentDate,
    futureDate: formattedFutureDate,
  };
};

const getWeather = asyncHandler(async (req, res, next) => {
  //For 24 hours
  const { currentDate, futureDate } = getPresentAndFutureDate();
  const response_hour = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi/${currentDate}/${futureDate}?unitGroup=metric&key=${process.env.VISUAL_CROSSING_KEY}&contentType=json`
  );
  const data = response_hour.data;
  // console.log(data.days[0].hours);
  const data_hour = data.days[0].hours;
  const selectedParameters = [
    "temp",
    "humidity",
    "feelslike",
    "dew",
    "cloudcover",
    "visibility",
    "windspeed",
    "windgust",
  ];
  const selectedData = data_hour.map((hour) => [
    hour.temp,
    hour.humidity,
    hour.feelslike,
    hour.dew,
    hour.cloudcover,
    hour.visibility,
    hour.windspeed,
    hour.windgust,
  ]);
  const ml24 = await axios.post(
    `http://127.0.0.1:8000/predict_day`,
    selectedData,
    { headers: { "Content-Type": "application/json" } }
  );
  const mlData24 = ml24.data;
  console.log(mlData24);

  //For current weather
  const response_current = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi/${currentDate}/${currentDate}?unitGroup=metric&key=${process.env.VISUAL_CROSSING_KEY}&contentType=json&include=current`
  );
  const data_current = response_current.data;
  const current = data_current.currentConditions;
  // console.log(current);

  if (current.windgust === undefined) {
    current.windgust = 14.687219263718454;
  }
  const mldid = [
    current.temp,
    current.humidity,
    current.feelslike,
    current.dew,
    current.cloudcover,
    current.visibility,
    current.windspeed,
    5,
  ];
  // console.log(mldid);

  const mlModel = await axios.post(`http://127.0.0.1:8000/predict`, mldid, {
    headers: { "Content-Type": "application/json" },
  });
  const mlData = mlModel.data;
  console.log(mlData);

  res.send(
    new ApiResponse(
      200,
      { mlData, mlData24, current },
      "Data recieved Successfully!"
    )
  );
});

export { getWeather };
