// src/components/ModelView/GalaxyModel/GalaxyData.js
import Nova from "../../../assets/NovaModel.webp";
import Anti_theft_division_plate_opening from "../../../assets/Anti_theft_division_plate_opening.jpg";
import Conveyor_belt_delivery from "../../../assets/Conveyor_belt_delivery.png";
import Pull_out_hopper from "../../../assets/Pull_out_hopper.png";
import Elevator_system from "../../../assets/Elevator_system.png";

const NovaModel = {
  name: "Nova",
  image: Nova,
  description:
    "Featuring a seamless touchscreen, 40mm foaming refrigeration, adjustable shelving, easy spiral twist mechanism, anti-theft bin, cashless payments (UPI, cards), direct fund transfer, and inventory management.",
  specs: [
    ["Dimensions", "H : 1940mm W : 1275mm D : 790mm"],
    ["Touchscreen Interface", "22 Inch"],
    ["SKUs", "42 varieties (max)"],
    ["No of Trays", "6"],
    ["Temperature Range", "4°C to 25°C"],
    ["Voltage", "110V-120W/220V~240V50/60Hz"],
    ["Power", "Refrigerated 422W Normal 24W"],
    ["Weight", "370 kgs"],
    ["Capacity", "200-250 pcs"],
  ],
  features: [
    {
      img: Elevator_system,
      title: "Elevator System",
      desc: "Ensures smooth and gentle delivery of products to prevent damage, especially for fragile items.",
    },
    {
      img: Anti_theft_division_plate_opening,
      title: "Anti-Theft Division Plate",
      desc: "Prevents product theft by allowing access only after payment confirmation and secure product retrieval.",
    },
    {
      img: Conveyor_belt_delivery,
      title: "Conveyor Belt Delivery",
      desc: "Efficient delivery mechanism that transports products seamlessly to the collection bin.",
    },
    {
      img: Pull_out_hopper,
      title: "Pull-Out Hopper",
      desc: "Convenient design feature that allows easy refilling and maintenance with minimal effort.",
    },
  ],
  
};

export default NovaModel;
