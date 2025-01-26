import { NextRequest, NextResponse } from "next/server";
import { CarsData } from "@/app/[name]/page";

let selectedCar: CarsData | null = null;
let recentCars: CarsData[] = [];        

export async function POST(req: NextRequest) {
  try {
    const { car, resCar } = await req.json();
    if (car.length > 0) {
      selectedCar = car[0];
    }
    if (resCar.length > 0) {
      recentCars = resCar; 
    }
    return NextResponse.json({
      message: "Data saved successfully",
      selectedCar,
      recentCars,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save data", details: err });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (name) {
    if (selectedCar?.name === name) {
      return NextResponse.json({
        car: selectedCar,
      });
    }
    const matchedCar = recentCars.find((car) => car.name === name);
    if (matchedCar) {
      return NextResponse.json({
        car: matchedCar,
      });
    }
    return NextResponse.json({ message: "No car found with the given name" });
  }
  return NextResponse.json({ message: "No car name provided in query" });
}
