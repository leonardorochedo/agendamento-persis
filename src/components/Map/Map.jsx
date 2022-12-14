import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
  InfoBox,
} from "@react-google-maps/api";

import "./Map.css";

export function Map({ ...props }) {
  const [clientCoord, setClientCoord] = useState({
    lat: -0,
    lng: -0,
  });

  // Maps Properthy
  const APIKey = "AIzaSyAdBoUyPOSs38DpDX7l4INc_jF5kfKbsj4";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIKey,
  });

  const containerStyle = {
    width: "50rem",
    height: "32rem",
  };

  const cityPosition = {
    lat: -23.3197,
    lng: -51.1662,
  };

  const clientPosition = {
    lat: clientCoord.lat,
    lng: clientCoord.lng,
  };

  const address = props.address;

  // Mudança de endereço
  useEffect(() => {
    console.log(`Endereço buscado: ${address}`);

    fetch(
      `https://maps.google.com/maps/api/geocode/json?key=${APIKey}&address=${address}&sensor=false`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200 || data.status === "OK") {
          console.log("OK");
          const element = document.querySelector(".elem");
          element.style.opacity = "0";
          setClientCoord({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          });
        } else if (data.status === "ZERO_RESULTS") {
          console.log("BAD REQUEST");
          const element = document.querySelector(".elem");
          element.style.opacity = "1";
        }
      });
  }, [address]);

  // Polygon
  const zonaSulLeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.1592102, lat: -23.3810226 },
    { lng: -51.1513138, lat: -23.3813378 },
    { lng: -51.123333, lat: -23.375035 },
    { lng: -51.1217022, lat: -23.371332 },
    { lng: -51.1206722, lat: -23.368338 },
    { lng: -51.123333, lat: -23.3632953 },
    { lng: -51.1255646, lat: -23.359986 },
    { lng: -51.1254787, lat: -23.3569129 },
    { lng: -51.1248779, lat: -23.3544702 },
    { lng: -51.1211014, lat: -23.3547066 },
    { lng: -51.1183548, lat: -23.3532882 },
    { lng: -51.1183548, lat: -23.3474569 },
    { lng: -51.1168098, lat: -23.3424923 },
    { lng: -51.1149216, lat: -23.3384337 },
    { lng: -51.1127758, lat: -23.3362271 },
    { lng: -51.1066818, lat: -23.3353207 },
    { lng: -51.1024332, lat: -23.3352419 },
    { lng: -51.0990429, lat: -23.3339022 },
    { lng: -51.0956955, lat: -23.3318531 },
    { lng: -51.0922623, lat: -23.3255479 },
    { lng: -51.0941505, lat: -23.3162474 },
    { lng: -51.0853958, lat: -23.3116757 },
    { lng: -51.1592102, lat: -23.3116757 },
  ];

  const optionsZSL = {
    fillColor: "blue",
    strokeColor: "blue",
    fillOpacity: 0.3,
    strokeOpacity: 0.3,
  };

  const zonaSulOeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.1592102, lat: -23.3810226 },
    { lng: -51.1786079, lat: -23.3789743 },
    { lng: -51.188221, lat: -23.375035 },
    { lng: -51.2010956, lat: -23.372829 },
    { lng: -51.2122536, lat: -23.3676289 },
    { lng: -51.2223816, lat: -23.3640045 },
    { lng: -51.2234116, lat: -23.3577009 },
    { lng: -51.2240982, lat: -23.3523426 },
    { lng: -51.2263298, lat: -23.3461961 },
    { lng: -51.2278748, lat: -23.3395764 },
    { lng: -51.2261581, lat: -23.3361088 },
    { lng: -51.2330246, lat: -23.3285429 },
    { lng: -51.2345695, lat: -23.3236564 },
    { lng: -51.2338829, lat: -23.3184543 },
    { lng: -51.2313938, lat: -23.314198 },
    { lng: -51.2289047, lat: -23.3116757 },
  ];

  const optionsZSO = {
    fillColor: "red",
    strokeColor: "red",
    fillOpacity: 0.3,
    strokeOpacity: 0.3,
  };

  const zonaNorteOeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.2289047, lat: -23.3116757 },
    { lng: -51.223315, lat: -23.3046256 },
    { lng: -51.225788, lat: -23.3018075 },
    { lng: -51.2270647, lat: -23.3004034 },
    { lng: -51.2283468, lat: -23.2992307 },
    { lng: -51.2302566, lat: -23.297664 },
    { lng: -51.2273169, lat: -23.2948752 },
    { lng: -51.2303102, lat: -23.2905689 },
    { lng: -51.2290335, lat: -23.2864792 },
    { lng: -51.2268448, lat: -23.2815615 },
    { lng: -51.2230682, lat: -23.2769097 },
    { lng: -51.210537, lat: -23.2759636 },
    { lng: -51.2088203, lat: -23.2743078 },
    { lng: -51.2083054, lat: -23.2595628 },
    { lng: -51.2017822, lat: -23.2577491 },
    { lng: -51.1966324, lat: -23.2568029 },
    { lng: -51.1944008, lat: -23.248917 },
    { lng: -51.19277, lat: -23.2415827 },
    { lng: -51.1843586, lat: -23.2409518 },
    { lng: -51.1712265, lat: -23.2415038 },
    { lng: -51.1592102, lat: -23.2415038 },
  ];

  const optionsZNO = {
    fillColor: "yellow",
    strokeColor: "yellow",
    fillOpacity: 0.3,
    strokeOpacity: 0.3,
  };

  const zonaNorteLeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.0853958, lat: -23.3116757 },
    { lng: -51.0874987, lat: -23.2973979 },
    { lng: -51.0876274, lat: -23.2845969 },
    { lng: -51.0970688, lat: -23.2847151 },
    { lng: -51.0987854, lat: -23.2806154 },
    { lng: -51.101017, lat: -23.275254 },
    { lng: -51.1117029, lat: -23.2695376 },
    { lng: -51.1120462, lat: -23.2657528 },
    { lng: -51.1121321, lat: -23.2631507 },
    { lng: -51.1120892, lat: -23.2568817 },
    { lng: -51.1315727, lat: -23.2542794 },
    { lng: -51.1322594, lat: -23.2397688 },
    { lng: -51.1592102, lat: -23.2369296 },
  ];

  const optionsZNL = {
    fillColor: "black",
    strokeColor: "black",
    fillOpacity: 0.3,
    strokeOpacity: 0.3,
  };

  // Others
  const area2HR = [
    [
      { lng: -50.9739017, lat: -23.2735194 },
      { lng: -50.9758329, lat: -23.2690251 },
      { lng: -50.9783649, lat: -23.266423 },
      { lng: -50.9806395, lat: -23.2643729 },
      { lng: -50.9816694, lat: -23.261613 },
      { lng: -50.9864759, lat: -23.2568423 },
      { lng: -50.9875488, lat: -23.253412 },
      { lng: -50.9835148, lat: -23.252032 },
      { lng: -50.9799957, lat: -23.2498239 },
      { lng: -50.9755754, lat: -23.2472609 },
      { lng: -50.9719276, lat: -23.2444218 },
      { lng: -50.9696531, lat: -23.2426868 },
      { lng: -50.9652758, lat: -23.2476946 },
      { lng: -50.9614992, lat: -23.2480495 },
      { lng: -50.9611559, lat: -23.252308 },
      { lng: -50.9614563, lat: -23.2545554 },
      { lng: -50.9567356, lat: -23.2568817 },
      { lng: -50.9577227, lat: -23.2599177 },
      { lng: -50.9586239, lat: -23.2660288 },
      { lng: -50.9575939, lat: -23.2691039 },
      { lng: -50.969696, lat: -23.2746232 },
      { lng: -50.9727859, lat: -23.2763184 },
    ],
    [
      { lng: -51.3213444, lat: -23.2985705 },
      { lng: -51.3169885, lat: -23.3049754 },
      { lng: -51.3124394, lat: -23.3072023 },
      { lng: -51.3072467, lat: -23.300088 },
      { lng: -51.309135, lat: -23.2986986 },
      { lng: -51.3110876, lat: -23.2974866 },
      { lng: -51.3082981, lat: -23.2941559 },
      { lng: -51.3090706, lat: -23.2918894 },
      { lng: -51.3205934, lat: -23.2944121 },
    ],
    [
      { lng: -51.1513138, lat: -23.3813378 },
      { lng: -51.1418724, lat: -23.3892158 },
      { lng: -51.1420441, lat: -23.395833 },
      { lng: -51.1377525, lat: -23.3985113 },
      { lng: -51.1216164, lat: -23.399299 },
      { lng: -51.1114883, lat: -23.397566 },
      { lng: -51.1077118, lat: -23.3928395 },
      { lng: -51.111145, lat: -23.3876402 },
      { lng: -51.122303, lat: -23.3802348 },
      { lng: -51.123333, lat: -23.375035 },
    ],
    [
      { lng: -51.2289047, lat: -23.3116757 },
      { lng: -51.223315, lat: -23.3046256 },
      { lng: -51.225788, lat: -23.3018075 },
      { lng: -51.2270647, lat: -23.3004034 },
      { lng: -51.2283468, lat: -23.2992307 },
      { lng: -51.2302566, lat: -23.297664 },
      { lng: -51.2273169, lat: -23.2948752 },
      { lng: -51.2303102, lat: -23.2905689 },
      { lng: -51.2290335, lat: -23.2864792 },
      { lng: -51.2268448, lat: -23.2815615 },
      { lng: -51.2230682, lat: -23.2769097 },
      { lng: -51.2248921, lat: -23.2766338 },
      { lng: -51.2392902, lat: -23.2725732 },
      { lng: -51.2445259, lat: -23.2709174 },
      { lng: -51.2481308, lat: -23.2670538 },
      { lng: -51.2482166, lat: -23.253964 },
      { lng: -51.2526798, lat: -23.2510462 },
      { lng: -51.2556839, lat: -23.2527023 },
      { lng: -51.257658, lat: -23.2583011 },
      { lng: -51.2603188, lat: -23.2613765 },
      { lng: -51.2727642, lat: -23.2608245 },
      { lng: -51.2721634, lat: -23.2571183 },
      { lng: -51.2932777, lat: -23.2559354 },
      { lng: -51.2943077, lat: -23.2620861 },
      { lng: -51.2973976, lat: -23.2649248 },
      { lng: -51.2993717, lat: -23.2671327 },
      { lng: -51.2980843, lat: -23.2768309 },
      { lng: -51.2950802, lat: -23.2820345 },
      { lng: -51.2955952, lat: -23.2866861 },
      { lng: -51.2973976, lat: -23.2907068 },
      { lng: -51.2943077, lat: -23.2974078 },
      { lng: -51.2859821, lat: -23.2973289 },
      { lng: -51.279974, lat: -23.2996939 },
      { lng: -51.2767124, lat: -23.3035565 },
      { lng: -51.2694168, lat: -23.3044237 },
      { lng: -51.2595463, lat: -23.3087591 },
      { lng: -51.2545681, lat: -23.3127792 },
      { lng: -51.2426376, lat: -23.3166415 },
      { lng: -51.237402, lat: -23.3175085 },
      { lng: -51.2338829, lat: -23.3184543 },
      { lng: -51.2313938, lat: -23.314198 },
      { lng: -51.2289047, lat: -23.3116757 },
    ],
  ];

  const options2HR = {
    fillColor: "purple",
    strokeColor: "purple",
    fillOpacity: 0.3,
    strokeOpacity: 0.3,
  };

  const ibipora = [
    { lng: -51.0874987, lat: -23.2936237 },
    { lng: -51.0876274, lat: -23.2757271 },
    { lng: -51.0870695, lat: -23.272179 },
    { lng: -51.0774136, lat: -23.2672115 },
    { lng: -51.0775852, lat: -23.2609822 },
    { lng: -51.0626507, lat: -23.253412 },
    { lng: -51.0484886, lat: -23.2462357 },
    { lng: -51.0397339, lat: -23.2493902 },
    { lng: -51.0302925, lat: -23.2472609 },
    { lng: -51.0241127, lat: -23.2533331 },
    { lng: -51.0254002, lat: -23.2609822 },
    { lng: -51.0279751, lat: -23.2666596 },
    { lng: -51.0268593, lat: -23.2682366 },
    { lng: -51.0217094, lat: -23.2681577 },
    { lng: -51.0164738, lat: -23.2709174 },
    { lng: -51.0123539, lat: -23.2776193 },
    { lng: -51.0078049, lat: -23.2858189 },
    { lng: -51.0169888, lat: -23.2912587 },
    { lng: -51.0344982, lat: -23.2851882 },
    { lng: -51.0415363, lat: -23.2816403 },
    { lng: -51.0466003, lat: -23.2843209 },
    { lng: -51.0575867, lat: -23.2873957 },
  ];

  const optionsIBI = {
    fillColor: "orange",
    strokeColor: "orange",
    fillOpacity: 0.3,
    strokeOpacity: 0.3,
  };

  const uniaoPos = { lat: -23.3843315, lng: -51.1348343}, greenVillagePos = { lat: -23.298945, lng: -51.3202715}

  return (
    <>
      <h1 className="elem">ENDEREÇO INVÁLIDO!!</h1>
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={cityPosition}
            zoom={12}
          >
            <Marker
              position={clientPosition}
              options={{
                label: {
                  text: "Cliente",
                  className: "marker",
                },
              }}
            />

            <InfoBox
                options={{closeBoxURL: ''}}
                position={uniaoPos}
            >
                  <span className="bshow-text">União</span>
            </InfoBox>

            <InfoBox
                options={{closeBoxURL: ''}}
                position={greenVillagePos}
            >
                  <span className="bshow-text">Green Village</span>
            </InfoBox>
            
            <Polygon paths={zonaSulLeste} options={optionsZSL} />
            <Polygon paths={zonaSulOeste} options={optionsZSO} />
            <Polygon paths={zonaNorteOeste} options={optionsZNO} />
            <Polygon paths={zonaNorteLeste} options={optionsZNL} />
            <Polygon paths={area2HR} options={options2HR} />
            <Polygon paths={ibipora} options={optionsIBI} />
          </GoogleMap>
        ) : (
          <>
            <p>ERRO DE REQUISIÇÃO!</p>
          </>
        )}
      </div>
    </>
  );
}
