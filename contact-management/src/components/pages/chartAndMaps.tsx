import React, { useEffect, useState } from "react";
import {
  fetchCountryData,
  fetchHistoricalData,
  fetchWorldData,
} from "../../utils/api";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../state";
import MapComponent from "../shared/map/map";
import LineChart from "../shared/linechart/linechart";

const ChartsAndMaps: React.FC = () => {
  const {
    data: worldData,
    isLoading: isLoadingWorld,
    error: worldError,
  } = useQuery("worldData", fetchWorldData);

  const {
    data: countryData,
    isLoading: isLoadingCountry,
    error: countryError,
  } = useQuery("countryData", fetchCountryData);

  const {
    data: historicalData,
    isLoading: isLoadingHistorical,
    error: historicalError,
  } = useQuery("historicalData", fetchHistoricalData);

  const [graphData, setGraphData] = useState({
    worldData: null,
    countryData: null,
    historicalData: null,
  });

  useEffect(() => {
    setGraphData({ worldData, countryData, historicalData });
  }, [worldData, countryData, historicalData]);

  if (isLoadingWorld || isLoadingCountry || isLoadingHistorical) {
    return <div>Loading...</div>;
  }

  if (worldError || countryError || historicalError) {
    const errorMessage =
      // (worldError || countryError || historicalError)?.message ||
      "An error occurred";
    return <div>Error occurred: {errorMessage}</div>;
  }

  return (
    <div className="h-full grid grid-rows-8 gap-1 ">
      <div className="row-span-8 border-[1px] border-gray-800 h-full rounded-lg p-4 ">
        <div className="overflow-auto h-full flex flex-col space-y-3">
          <h1 className="text-left font-bold">Covid Trends</h1>
          <div className="w-full h-[50%]">
            {graphData.historicalData && (
              <LineChart historicalData={graphData.historicalData}></LineChart>
            )}
          </div>
          <h1 className="text-left font-bold">Demographics</h1>
          <div className="w-full h-[50%] z-10">
            {graphData.countryData && (
              <MapComponent countries={graphData.countryData}></MapComponent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
