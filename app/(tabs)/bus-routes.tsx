import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header, { SearchBar } from "@/components/Header";
import { useLocalSearchParams } from "expo-router";

const BusRoutes = () => {
  const { driverId } = useLocalSearchParams();

  // Hardcoded bus routes from Chandigarh to other places
  const routes = [
    { id: "1", destination: "Delhi", time: "5:00 AM" },
    { id: "2", destination: "Shimla", time: "6:30 AM" },
    { id: "3", destination: "Amritsar", time: "7:45 AM" },
    { id: "4", destination: "Manali", time: "9:00 AM" },
    { id: "5", destination: "Dehradun", time: "11:15 AM" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-4">
        <SearchBar/>

        <Text className="text-lg font-bold mt-4">Routes from Chandigarh</Text>
        <FlatList
          data={routes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-4 mt-4 bg-white rounded-lg shadow">
              <Text className="text-lg font-semibold">{item.destination}</Text>
              <Text className="text-gray-600">Departure: {item.time}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default BusRoutes;
