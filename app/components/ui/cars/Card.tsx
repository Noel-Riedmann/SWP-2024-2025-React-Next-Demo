import { Car } from "@/app/lib/types/types";
import React from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-64">
        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
        <ul className="space-y-1">
          <li><span className="font-semibold">Type:</span> {car.type}</li>
          <li><span className="font-semibold">Color:</span> {car.color}</li>
          <li><span className="font-semibold">HP:</span> {car.motor.hp}</li>
        </ul>
      </div>
    </div>
  );
}
