"use client";
import { Car } from "@/app/lib/types/types";
import React, { useState } from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex justify-center" onClick={() => {setIsActive(!isActive)}}>
      <div className={`${!isActive?"bg-gray-800 shadow-gray-700":"bg-green-900 shadow-green-800"} hover:cursor-pointer text-white p-6 rounded-2xl shadow-lg  w-64`}>
        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
        <ul className="space-y-1">
          <li>
            <span className="font-semibold">Type:</span> {car.type}
          </li>
          <li>
            <span className="font-semibold">Color:</span> {car.color}
          </li>
          <li>
            <span className="font-semibold">HP:</span> {car.motor.hp}
          </li>
          <li>
            <span className="font-semibold">State:</span>{" "}
            {isActive ? "Active" : "Inactive"}
          </li>
        </ul>
      </div>
    </div>
  );
}
