import Card from "../components/ui/cars/Card";
import { Car } from "../lib/types/types";

const cars: Car[] = [
  { name: "Audi", type: "A6", color: "Black", motor: { serialNumber: 1000001, hp: 231 } },
  { name: "BMW", type: "M3", color: "Blue", motor: { serialNumber: 1000002, hp: 450 } },
  { name: "Mercedes", type: "C-Class", color: "Silver", motor: { serialNumber: 1000003, hp: 300 } },
  { name: "Volkswagen", type: "Golf GTI", color: "Red", motor: { serialNumber: 1000004, hp: 245 } },
  { name: "Porsche", type: "911", color: "Yellow", motor: { serialNumber: 1000005, hp: 500 } },
  { name: "Ford", type: "Mustang", color: "Orange", motor: { serialNumber: 1000006, hp: 480 } },
  { name: "Tesla", type: "Model S", color: "White", motor: { serialNumber: 1000007, hp: 1020 } },
  { name: "Chevrolet", type: "Camaro", color: "Green", motor: { serialNumber: 1000008, hp: 455 } },
  { name: "Nissan", type: "GT-R", color: "Gray", motor: { serialNumber: 1000009, hp: 565 } },
  { name: "Ferrari", type: "F8", color: "Red", motor: { serialNumber: 1000010, hp: 710 } },
  { name: "Lamborghini", type: "Huracan", color: "Black", motor: { serialNumber: 1000011, hp: 640 } },
  { name: "Jaguar", type: "F-Type", color: "Blue", motor: { serialNumber: 1000012, hp: 575 } },
  { name: "Aston Martin", type: "DB11", color: "Silver", motor: { serialNumber: 1000013, hp: 528 } },
  { name: "Maserati", type: "Ghibli", color: "Gray", motor: { serialNumber: 1000014, hp: 424 } },
  { name: "Subaru", type: "WRX STI", color: "Blue", motor: { serialNumber: 1000015, hp: 310 } }
];

export default function Page() {
    return (
        <div>
          <h1 className="text-2xl font-bold text-center my-4">Cars</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {cars.map((car, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
        </div>
      );
    }
    