const ridesData = [
  {
    id: "1",
    place: "Jaipur",
    placeImage: require("@/assets/images/jaipur.jpg"),
    timeTaken: "351 min",
    trafficAvoided: "150 min",
    timeSaved: "80 min",
    startLocation: {
      latitude: parseFloat("" + 30.7333),
      longitude: parseFloat("" + 76.7794),
    }, // Chandigarh
    endLocation: {
      latitude: parseFloat("" + 26.9124),
      longitude: parseFloat("" + 75.7873),
    }, // Jaipur
  },
  {
    id: "2",
    place: "Delhi",
    placeImage: require("@/assets/images/delhi.jpg"),
    timeTaken: "244 min",
    trafficAvoided: "50 min",
    timeSaved: "42 min",
    startLocation: {
      latitude: parseFloat("" + 28.7041),
      longitude: parseFloat("" + 77.1025),
    }, // Delhi
    endLocation: {
      latitude: parseFloat("" + 28.6341),
      longitude: parseFloat("" + 77.2125),
    }, // Sample place in Delhi
  },
  {
    id: "3",
    place: "Mumbai",
    placeImage: require("@/assets/images/mumbai.jpeg"),
    timeTaken: "240 min",
    trafficAvoided: "40 min",
    timeSaved: "12 min",
    startLocation: {
      latitude: parseFloat("" + 19.076),
      longitude: parseFloat("" + 72.8777),
    }, // Mumbai
    endLocation: {
      latitude: parseFloat("" + 19.0815),
      longitude: parseFloat("" + 72.8825),
    }, // Sample place in Mumbai
  },
];

export default ridesData;
