import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  LoadScript,
  GoogleMap,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";
import Layout from "@/components/Layout/Layout";

const libs = ["places"];
const defaultLocation = { lat: 45.516, lng: -73.56 };

const MapScreen = () => {
  const [googleApiKey, setGoogleApiKey] = useState("");
  const [center, setCenter] = useState(defaultLocation);
  const [location, setLocation] = useState(center);

  const router = useRouter()

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    setGoogleApiKey(process.env.GOOGLE_API_KEY);
    getUserCurrentLocation();
  }, []);
  

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onMarkerLoad = (marker) => {
    markerRef.current = marker;
  };

  const onLoadPlaces = (place) => {
    placeRef.current = place;
  };

  const onIdle = () => {
    setLocation({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const onPlacesChanged = () => {
    const place = placeRef.current.getPlaces()[0].geometry.location;
    setCenter({ lat: place.lat(), lng: place.lng() });
    setLocation({ lat: place.lat(), lng: place.lng() });
  };

  const onConfirm = () => {
    const places = placeRef.current.getPlaces();
    const result = window.confirm('Esta seguro de que esta es su direccion')
    if(result){
        console.log(location)
        alert('direcion guardada exitosamente')
        router.push('/perfil-form-3')
    }else{
        alert('presiona Ok para intenta de nuevo')
    }
    // if (places && places.length === 1) {
    //   console.log(location);
    // //   console.log(places);
    //   alert("correcto");
    // } else {
    //     console.log(location)
    //   alert("ingrese su direccion");
    // }
  };

  const getUserCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("gelocation not supported");
    } else {

      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });


    }
  };

  return googleApiKey ? (
    <Layout>

      <div className="full-container">
        <LoadScript libraries={libs} googleMapsApiKey={googleApiKey}>
          <GoogleMap
            id="sample-map"
            mapContainerStyle={{ height: "100%", width: "100%" }}
            center={center}
            zoom={15}      
            onLoad={onLoad}
            onIdle={onIdle}
          >
            <StandaloneSearchBox
              onLoad={onLoadPlaces}
              onPlacesChanged={onPlacesChanged}
            >
              <div className="map-input-box">
                <input type="text"  placeholder="ingrese ciudad y pais"></input>
                <button type="button" className="primary btn btn-primary" onClick={onConfirm}>
                  confirm
                </button>
              </div>
            </StandaloneSearchBox>

            <Marker position={location} onLoad={onMarkerLoad}></Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    </Layout>
  ) : (
    <div>loading</div>
  );
};

export default MapScreen;
