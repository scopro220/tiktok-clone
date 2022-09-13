import React from "react";

const List = ({ items, mt }: { items: string[]; mt: boolean }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
      {items.map((item: string) => (
        <p
          key={item}
          className="text-gray-400 text-sm hover:underline cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default List;
