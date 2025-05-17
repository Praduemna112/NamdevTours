// src/components/ModelView/GalaxyModel/GalaxyData.js
import demoimage3 from "../../../assets/OrionModel.webp";
import Doorseel from "../../../assets/Doorseel.jpg";
import Double_layer from "../../../assets/Double_layer.png";
import Flexible_Slots from "../../../assets/Flexible_Slots.png";
import Thermal_Plastic_Inner from "../../../assets/Thermal_Plastic_Inner.png";

const OrionModel = {
  name: "Orion",
  image: demoimage3,
  description:
    "Budget-friendly vending machine with direct QR code web access, anti-theft delivery bin, 40mm foaming refrigeration, cashless payments (UPI, cards), direct fund transfer, and inventory management.",
  specs: [
    ["Dimensions", "H : 1940mm W : 880mm D : 760mm"],
    ["Touchscreen Interface", "Web-App"],
    ["SKUs", "60 varieties (max)"],
    ["No of Trays", "6"],
    ["Temperature Range", "4°C to 25°C"],
    ["Voltage", "110V-120W/220V~240V50/60Hz"],
    ["Power", "Refrigerated 422W Normal 24W"],
    ["Weight", "230 kgs"],
    ["Capacity", "420 pcs"],
  ],
  features: [
    {
      img: Doorseel,
      title: "Insulation door seal",
      desc: "Enhances cooling efficiency and prevents temperature leakage with a tight-sealing insulated door.",
    },
    {
      img: Double_layer,
      title: "Double layer toughened glass",
      desc: "Provides superior durability and insulation with a robust dual-glass layer design.",
    },
    {
      img: Flexible_Slots,
      title: "Flexible slots",
      desc: "Easily adjustable slots to accommodate a wide range of product sizes and shapes.",
    },
    {
      img: Thermal_Plastic_Inner,
      title: "Thermal plastic inner",
      desc: "Maintains internal temperature effectively with energy-efficient thermal plastic lining.",
    },
  ],
  
};

export default OrionModel;
