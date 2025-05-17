// src/components/ModelView/GalaxyModel/GalaxyData.js
import demoimage4 from "../../../assets/TabletopModel.webp";
import Doorseel from "../../../assets/Doorseel.jpg";
import Easy_Maintenance from "../../../assets/Easy_Maintenance.png";
import Flexible_Slots from "../../../assets/Flexible_Slots.png";
import Thermal_Plastic_Inner from "../../../assets/Thermal_Plastic_Inner.png";

const TabletopData = {
  loading: "lazy",
  name: "Tabletop",
  image: demoimage4,

  description:
    "Featuring a seamless touchscreen, 40mm foaming refrigeration, adjustable shelving, easy spiral twist mechanism, anti-theft bin, cashless payments (UPI, cards), direct fund transfer, and inventory management.",
  specs: [
    ["Dimensions", "H: 1940mm × W: 1180mm × D: 890mm"],
    ["Touchscreen Interface", "10 Inch / 13 Inch"],
    ["SKUs", "Up to 60 varieties"],
    ["No of Trays", "6"],
    ["Temperature Range", "4°C to 25°C"],
    ["Voltage", "110V–120W / 220V–240V, 50/60Hz"],
    ["Power", "Refrigerated: 422W, Normal: 24W"],
    ["Weight", "350 kg"],
    ["Capacity", "510 items"],
  ],
  features: [
    {
      img: Doorseel,

      title: "Insulated Door Seal",
      desc: "Ensures effective cooling retention and energy efficiency by tightly sealing the door.",
    },
    {
      img: Easy_Maintenance,
      title: "Easy Maintenance Design",
      desc: "Built for quick access and simplified servicing to reduce downtime and maintenance effort.",
    },
    {
      img: Flexible_Slots,
      title: "Flexible Product Slots",
      desc: "Easily adjustable slots to accommodate a wide variety of product sizes and configurations.",
    },
    {
      img: Thermal_Plastic_Inner,
      title: "Thermal Plastic Inner Lining",
      desc: "Maintains consistent internal temperature while enhancing durability and insulation.",
    },
  ],
};

export default TabletopData;
