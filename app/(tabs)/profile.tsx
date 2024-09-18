import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '@/components/Header';

const Profile = () => {
  // Hardcoded data for the driver profile
  const driverData = {
    name: 'John Doe',
    driverId: 'DR12345',
    routes: [
      { id: '1', from: 'Chandigarh', to: 'Delhi', time: '5:00 AM' },
      { id: '2', from: 'Chandigarh', to: 'Shimla', time: '6:30 AM' }
    ],
    buses: [
      { id: 'B001', type: 'Volvo', capacity: 50 },
      { id: 'B002', type: 'Mini Bus', capacity: 30 }
    ]
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <SearchBar/>
      {/* Profile Section */}
      <View className="bg-white p-6 rounded-lg shadow mb-6 flex-row items-center">
        <Ionicons name="person-circle-outline" size={40} color="black" className="mr-4 justify-center" />
        <View>
          <Text className="text-xl font-bold text-gray-900">{driverData.name}</Text>
          <Text className="text-lg text-gray-700">ID: {driverData.driverId}</Text>
        </View>
      </View>

      {/* Allocated Routes Section */}
      <View className="bg-white p-6 rounded-lg shadow mb-6">
        <Text className="text-xl font-bold mb-4 flex-row items-center">
          <Ionicons name="map-outline" size={20} color="black" className="mr-2 justify-center" />
          Allocated Routes
        </Text>
        {driverData.routes.map(route => (
          <View key={route.id} className="flex-row items-center mt-4">
            <Ionicons name="bus-outline" size={24} color="black" className="mr-3 justify-center" />
            <View>
              <Text className="text-lg text-gray-800">{route.from} to {route.to}</Text>
              <Text className="text-gray-600">Time: {route.time}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Buses Assigned Section */}
      <View className="bg-white p-6 rounded-lg shadow">
        <Text className="text-xl font-bold mb-4 flex-row items-center">
          <Ionicons name="bus" size={24} color="black" className="mr-2 justify-center" />
          Buses Assigned
        </Text>
        {driverData.buses.map(bus => (
          <View key={bus.id} className="flex-row items-center mt-4">
            <Ionicons name="car-outline" size={24} color="black" className="mr-3 justify-center" />
            <View>
              <Text className="text-lg text-gray-800">Bus ID: {bus.id}</Text>
              <Text className="text-gray-600">Type: {bus.type}</Text>
              <Text className="text-gray-600">Capacity: {bus.capacity}</Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
