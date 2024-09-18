import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import drivers from "@/constants/drivers";

const SignIn = () => {
  const [form, setForm] = useState({
    driverId: "DR", // Default prefix for driver ID
  });

  // Ensure only numbers are added after 'DR' and limit to 4 numeric values
  const handleDriverIdChange = (value) => {
    const numericPart = value.replace(/[^0-9]/g, "").slice(0, 4);
    setForm({ ...form, driverId: `DR${numericPart}` });
  };

  const handleSignIn = () => {
    const driverExists = drivers.some(
      (driver) => driver.driverId === form.driverId
    );

    if (driverExists) {
      router.push({
        pathname: "/(tabs)/home",
        params: { driverId: form.driverId },
      });
    } else {
      Alert.alert("Invalid Driver ID", "The entered Driver ID does not exist.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[200px]" />
          <Text className="text-3xl text-black font-JakartaBold absolute bottom-0 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          {/* Driver ID Input */}
          <InputField
            label="Driver ID"
            placeholder="DRIVER ID"
            icon={icons.person}
            value={form.driverId}
            onChangeText={handleDriverIdChange}
          />

          {/* Dummy Phone Number Input (No impact on form logic) */}
          <InputField
            label="Phone Number"
            placeholder="Enter any phone number"
            icon={icons.phone}
            keyboardType="numeric"
            maxLength={10} // Limit input to 10 digits
            onChangeText={() => {}} // No logic, keeps it a dummy input
          />

          {/* Sign In Button */}
          <CustomButton
            title="Sign In"
            className="mt-6"
            onPress={handleSignIn}
          />

          {/* Sign Up Link */}
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
