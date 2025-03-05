import { Car } from "@/app/lib/types/types";
import React from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  return (
    <div>
      <ul className="bg-gray-600 p-4 rounded-2xl m-2 w-fit">
        <li>Name: {car.name}</li>
        <li>Type: {car.color}</li>
        <li>Color: {car.color}</li>
        <li>HP: {car.motor.hp}</li>

      </ul>
    </div>
  );
}
