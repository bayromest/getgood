import React from "react";

interface PropProps {
  name: string;
  value: string | number | boolean;
}

const Prop = ({ name, value }: PropProps) => {
  const readableName = camelToReadable(name);

  return (
    <div className="flex flex-col p-2 border rounded items-center justify-center">
      {value === true && <div className="p-1 bg-lime-400 rounded-full mb-2" />}
      {value === false && <div className="p-1 bg-red-400 rounded-full mb-2" />}
      {typeof value === "number" && (
        <span className="">{value.toString()}</span>
      )}
      {typeof value === "string" && <span className="">{value}</span>}
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
