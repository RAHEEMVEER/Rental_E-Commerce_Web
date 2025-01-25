import { NextRequest, NextResponse } from "next/server";

interface CarsData {
    fuelCapacity: string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    };
    name: string;
    pricePerDay: string;
    seatingCapacity: string;
    tags: string[];
    transmission: string;
    type: string;
};

let cars: CarsData[] = [];

export async function POST(req: NextRequest) {
    try {
        const res = await req.json();
        cars = res;
        return NextResponse.json({ message: "car data", cars });
    } catch (err) {
        return NextResponse.json({ err });
    }
};

export async function GET() {
    let data = cars.find((val) => val.name == val.name);
    return NextResponse.json({ data });
};