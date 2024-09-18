import { icons } from "@/constants";
import Colors from "@/constants/Colors";
import { getDriverName } from "@/constants/drivers";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterSheet from "./FilterSheet";
import { Link, router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const Header = ({ driverId }) => {
  const driverName = getDriverName(driverId);
  return (
    <View className="bg-black/80 z-10 absolute h-24 w-screen">
      <View className="flex px-4 flex-row justify-between items-center">
        <View className="px-4 flex-row gap-2 items-center mt-10">
          <TouchableOpacity className="items-center bg-lightGrey p-2 rounded-full">
            <Ionicons name="person-outline" color={Colors.primary} size={24} />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">
            {driverName.split(" ")[0]}
          </Text>
        </View>
        <View className="mt-12">
          <Pressable onPress={()=>router.push('/')}>
            <Ionicons name="log-out" color="white" size={28} />
          </Pressable>
        </View>
      </View>
      <SearchBar />
    </View>
  );
};

export const SearchBar = () => {
  const filterSheetRef = useRef<BottomSheetModal>(null);
  return (
    <View className=" bg-black/80 h-16 flex-row p-2 mt-[8px]">
      <FilterSheet ref={filterSheetRef} />
      <Link href="/" asChild>
        <View className="bg-lightGrey px-3 items-center justify-center rounded-l-md">
          <Ionicons name="search" color="white" size={22} />
        </View>
      </Link>
      <TextInput placeholderTextColor="white"
        className="px-1 flex-1 font-semibold text-base rounded-r-md text-white placeholder:text-white"
        placeholder="Station, Driver, Vehicle..."
      />
      <TouchableOpacity
        className="px-3 items-center justify-center"
        onPress={() => filterSheetRef.current?.present()}
      >
        <Ionicons name="options-outline" color="white" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
