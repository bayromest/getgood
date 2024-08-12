import Image from "next/image";
import React from "react";

interface PropProps {
  name: string;
  value: string | number | boolean;
  profileIcon?: boolean;
  item?: boolean;
  version?: string;
}
const roundToTwoDecimalPlaces = (num: number) => {
  return Math.round(num * 100) / 100;
};
const Prop = ({ name, value, profileIcon, item, version }: PropProps) => {
  const readableName = camelToReadable(name);
  if (value === undefined) {
    return;
  }
  return (
    <div className="flex flex-col p-2 border rounded items-center justify-center">
      {value === true && <div className="p-1 bg-lime-400 rounded-full mb-2" />}
      {value === false && <div className="p-1 bg-red-400 rounded-full mb-2" />}
      {typeof value === "number" && !profileIcon && !item && (
        <span className="">{roundToTwoDecimalPlaces(value).toString()}</span>
      )}
      {typeof value === "number" && profileIcon && (
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${value}.png`}
          alt="Profile Pic"
          width={50}
          height={50}
        />
      )}
      {typeof value === "number" && item && (
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${value}.png`}
          alt="Profile Pic"
          width={50}
          height={50}
        />
      )}
      {typeof value === "string" && !profileIcon && (
        <span className="">{value}</span>
      )}
      <span className="font-bold text-center text-xs">{readableName}</span>
    </div>
  );
};

const camelToReadable = (text: string): string => {
  // Convert camelCase to space-separated words
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase words
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle cases like 'HTTPResponse'
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};

export default Prop;
