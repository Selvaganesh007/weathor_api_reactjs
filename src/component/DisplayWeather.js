import React from "react";
import "./displayweather.css";
import { BsSunrise,BsSunset,BsWind, BsFillEyeFill } from 'react-icons/bs';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "link" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="container">
      {data.cod != 404 ? (

        <div>
          <div className="row w-50 m-auto">
            <div className="col mt-3">
              <h3 className="city">{data.name} , {data.sys.country}.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6 maindeg">
              <h2 className="temp mt-5 mx-auto fw-bold">{" "}{Math.floor(data.main.temp - 273.15)}<sup>o</sup></h2>
              <h5 className="fs-5 fw-bold min-max">Max: {Math.floor(data.main.temp_max - 273.15)} /
                Min: {Math.floor(data.main.temp_min - 273.15)}</h5>
            </div>
            <div className="col-6">
              <img className="weather-icon w-75" src={iconurl} alt="" srcset="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h3 className="fw-bold">{data.weather[0].main}</h3>
            </div>
            <div className="col-6">
              {" "}
              <h4 className="text-success">{data.weather[0].description}</h4>
            </div>
          </div>
          <div className="row ">
            <div className="col point">
              <h5><BsWind className="icon" />Wind</h5>
              <h4>{Math.floor((data.wind.speed * 18) / 5)} km/hr</h4>
            </div>
            <div className="col point">
              <h5><BsFillEyeFill className="icon" />Visibility</h5>
              <h4>{data.visibility / 1000} Km</h4>
            </div>
            <div className="col point">
              <h5><TiWeatherWindyCloudy className="icon" />Pressure : </h5>
              <h4>{data.main.pressure} hPa</h4>
            </div>
          </div>

          <div>

          </div>
          <div className="sun row my-3">
            <div className="col-6">
              <h5><BsSunrise className="icon" />Sunrise : {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</h5>
            </div>
            <div className="col-6">
            <h5><BsSunset className="icon" />Sunset : {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</h5>
            </div>
          </div>
        </div>


      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>


    // <div className="displayweather">
    //   {data.cod != 404 ? (
    //     <React.Fragment>
    //       <div className="maincard">
    //         <span className="cardtitle">
    //           {data.name} , {data.sys.country}. 
    //         </span>
    //         <h1>
    //           {" "}
    //           {Math.floor(data.main.temp - 273.15)}
    //           <sup>o</sup>
    //         </h1>
    //         <span className="weather-main">{data.weather[0].main}</span>
    //         <img className="weather-icon" src={iconurl} alt="" srcset="" />
    //         <span className="weather-description">
    //           {" "}
    //           {data.weather[0].description}
    //         </span>
    //       </div>
    //       <div className="weatherdetails">
    //         <div className="section">
    //           <table>
    //             <tr>
    //               <td>
    //                 <h4>High/Low</h4>
    //               </td>
    //               <td>
    //                 <span>
    //                   {Math.floor(data.main.temp_max - 273.15)}/
    //                   {Math.floor(data.main.temp_min - 273.15)}
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <h4>Humidity</h4>
    //               </td>
    //               <td>
    //                 <span>{data.main.humidity} %</span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <h4>Pressure</h4>
    //               </td>
    //               <td>
    //                 <span>{data.main.pressure} hPa</span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <h4>Visibility</h4>
    //               </td>
    //               <td>
    //                 <span>{data.visibility / 1000} Km</span>
    //               </td>
    //             </tr>
    //           </table>
    //         </div>
    //         <div className="section">
    //           <table>
    //             <tr>
    //               <td>
    //                 <h4>Wind</h4>
    //               </td>
    //               <td>
    //                 <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <h4>Wind Direction</h4>
    //               </td>
    //               <td>
    //                 <span>
    //                   {data.wind.deg}
    //                   <sup>o</sup> deg
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <h4>Sunrise</h4>
    //               </td>
    //               <td>
    //                 <span>
    //                   {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
    //                 </span>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <h4>Sunset</h4>
    //               </td>
    //               <td>
    //                 <span>
    //                   {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
    //                 </span>
    //               </td>
    //             </tr>
    //           </table>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   ) : (
    //     <div className="maincard">
    //       <h2>{data.message}</h2>
    //     </div>
    //   )}
    // </div>
  );
}

export default DisplayWeather;
