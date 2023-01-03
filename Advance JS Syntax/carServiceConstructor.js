class CarServiceStation {
  constructor() {
    this.services = {
      BS01: {
        name: "Basic Servicing",
        prices: {
          Hatchback: 2000,
          Sedan: 4000,
          SUV: 5000,
        },
      },
      EF01: {
        name: "Engine Fixing",
        prices: {
          Hatchback: 5000,
          Sedan: 8000,
          SUV: 10000,
        },
      },
      CF01: {
        name: "Clutch Fixing",
        prices: {
          Hatchback: 2000,
          Sedan: 4000,
          SUV: 6000,
        },
      },
      BF01: {
        name: "Brake Fixing",
        prices: {
          Hatchback: 1000,
          Sedan: 1500,
          SUV: 2500,
        },
      },
      GF01: {
        name: "Gear Fixing",
        prices: {
          Hatchback: 3000,
          Sedan: 6000,
          SUV: 8000,
        },
      },
    };
  }

  generateBill(type, serviceCodes) {
    let total = 0;
    let services = [];

    for (const code of serviceCodes) {
      const service = this.services[code];
      const price = service.prices[type];
      services.push({ name: service.name, price });
      total += price;
    }

    if (total > 10000) {
      services.push({ name: "Complimentary Cleaning", price: 0 });
    }
    console.log(`Type Of Car - ${type}`);
    console.log(`Service Codes: ${serviceCodes.join(",")}`);
    return { services, total };
  }
}

const station = new CarServiceStation();
const bill = station.generateBill("SUV", ["BS01", "EF01"]);

//output
for (let i = 0; i < bill.services.length; i++) {
  console.log(
    `Charges for ${bill.services[i].name} - ₹${bill.services[i].price}`
  );
}
console.log(`Total Bill - ₹${bill.total}`);
