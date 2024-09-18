import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { Image, StyleSheet, View } from "react-native";
import MapViewStyle from "@/constants/MapViewStyle.json";
import * as Location from "expo-location";
import { icons } from "@/constants";
import Header from "@/components/Header";
import { useLocalSearchParams } from "expo-router";
import ScrollList from "@/components/ScrollList";
import coordinates from "@/constants/markers";

export default function Home() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState(null);
  const { driverId } = useLocalSearchParams();
  const mapRef = useRef(null); // Reference to MapView
  const [route, setRoute] = useState([]); // State to store route coordinates

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      if (location) console.log(location);
      setLocation(location);
    })();
  }, []);

  // Function to animate map to a new region and set route
  const animateToRegion = (
    endLatitude,
    endLongitude,
    startLatitude,
    startLongitude
  ) => {
    // Check if mapRef exists and is not null
    if (mapRef.current) {
      // Animate to the start location
      mapRef.current.animateToRegion(
        {
          latitude: endLatitude,
          longitude: endLongitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        1000 // Duration of animation
      );

      // Set polyline route
      setRoute([
        { latitude: startLatitude, longitude: startLongitude }, // Start
        { latitude: endLatitude, longitude: endLongitude }, // End
      ]);
    } else {
      console.error("Map reference is null");
    }
  };

  return (
    <View style={styles.container}>
      <View className="z-10 absolute p-4 w-full">
        <Header driverId={driverId} />
      </View>
      <MapView
        ref={mapRef} // Attach the map reference
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        initialRegion={{
          latitude: 30.7133,
          longitude: 76.7594,
          latitudeDelta: 0.11,
          longitudeDelta: 0.11,
        }}
      >
        {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            }}
          >
            <Image source={icons.marker} />
          </Marker>
        ))}
        {/* Display the polyline route */}
        {route.length > 1 && (
          <Polyline coordinates={route} strokeWidth={4} strokeColor="blue" />
        )}
      </MapView>
      <View className="z-20 bottom-24 absolute">
        <ScrollList onSelect={animateToRegion} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
