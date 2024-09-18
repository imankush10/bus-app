import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ridesData from "@/constants/rides";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const ScrollList = ({ onSelect }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {ridesData.map((ride, index) => (
        <TouchableOpacity
          key={ride.id}
          onPress={() => {
            // Ensure both startLocation and endLocation exist
            if (ride.startLocation && ride.endLocation) {
              onSelect(
                ride.endLocation.latitude,
                ride.endLocation.longitude,
                ride.startLocation.latitude,
                ride.startLocation.longitude,
              );
            } else {
              console.error("Locations missing for the ride:", ride.place);
            }
          }}
        >
          <View style={styles.categoryCard}>
            <View style={styles.imageContainer}>
              <Image source={ride.placeImage} style={styles.image} />
              <LinearGradient
                colors={["#ffffff", "#1e1e1e", "#000000"]}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              />
              {/* Text should be above the gradient */}
              <View style={styles.textOverlay}>
                <Text style={styles.categoryText}>{ride.place}</Text>
                <Text style={styles.trafficText}>
                  Traffic Avoided: {ride.trafficAvoided}
                </Text>
                <View style={styles.flexRow}>
                  <Text style={{ color: "#e1e1e1" }}>
                    Time Saved: {ride.timeSaved}
                  </Text>
                  <Text style={{ color: "#e1e1e1" }}>
                    Time Taken: {ride.timeTaken}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 330,
    height: 200,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 8,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
    opacity: 0.5, // Adjust opacity for visibility
  },
  textOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // Ensure text is white for contrast
    paddingBottom: 5,
  },
  trafficText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    paddingBottom: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ScrollList;
