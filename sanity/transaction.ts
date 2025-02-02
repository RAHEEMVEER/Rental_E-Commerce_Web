export default {
    name: 'transactions',
    type: 'document',
    title: 'Transaction Cars',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Car Name',
        },
        {
            name: 'brand',
            type: 'string',
            title: 'Brand',
            description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
        },
        {
            name: 'type',
            type: 'string',
            title: 'Car Type',
            description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
        },
        {
            name: 'fuelCapacity',
            type: 'string',
            title: 'Fuel Capacity',
            description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
        },
        {
            name: 'transmission',
            type: 'string',
            title: 'Transmission',
            description: 'Type of transmission (e.g., Manual, Automatic)',
        },
        {
            name: 'seatingCapacity',
            type: 'string',
            title: 'Seating Capacity',
            description: 'Number of seats (e.g., 2 People, 4 seats)',
        },
        {
            name: 'pricePerDay',
            type: 'string',
            title: 'Price Per Day',
            description: 'Rental price per day',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Car Image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            type: 'string',
            title: 'User ID',
            description: 'ID of the user who is authenticated in website',
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date',
            description: 'Date Of Transactions Cars',
        }
    ],
};
