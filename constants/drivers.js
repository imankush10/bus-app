const drivers = [
  {
    driverId: "DR1234",
    name: "John Doe",
    phone: "9876543210",
    // Add other properties as needed
  },
  {
    driverId: "DR0002",
    name: "Jane Smith",
    phone: "9123456789",
    // Add other properties as needed
  },
  {
    driverId: "DR0003",
    name: "Alice Johnson",
    phone: "9234567890",
    // Add other properties as needed
  },
  {
    driverId: "DR0004",
    name: "Bob Brown",
    phone: "9345678901",
    // Add other properties as needed
  },
  {
    driverId: "DR0005",
    name: "Charlie Green",
    phone: "9456789012",
    // Add other properties as needed
  },
];

export const getDriverName = (driverId) => {
  const driver = drivers.find((driver) => driver.driverId === driverId);
  return driver ? driver.name : "Unknown Driver";
};

export default drivers;
