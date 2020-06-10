enum TRANSPORT_TYPE {
  SHIP = 'ship',
  TRUCK = 'truck'
}
interface TransportCompany {
  deliver(): void;
}
interface ILogistic {
  name: string;
  distination: string;
}

class Truck implements TransportCompany {
  public name: string;
  public distination: string;
  constructor(properties: ILogistic) {
    this.name = properties.name;
    this.distination = properties.distination;
  }
  deliver(): void {
    console.log(`Deliver to conty by land, my name is ${this.name}`);
  }
}

class Ship implements TransportCompany {
  public name: string;
  public distination: string;
  constructor(properties: ILogistic) {
    this.name = name;
    this.distination = properties.distination;
  }
  deliver(): void {
    console.log(`Deliver to conty by see, my name is ${this.name}`);
  }
}

class TransportFactory {
  public static creatTransport(type: TRANSPORT_TYPE, properties: ILogistic) {
    switch (type) {
      case TRANSPORT_TYPE.SHIP:
        return new Ship(properties);
      case TRANSPORT_TYPE.TRUCK:
        return new Truck(properties);
      default:
        throw new Error('Wrong  type chosen');
    }
  }
}

const truck = TransportFactory.creatTransport(TRANSPORT_TYPE.TRUCK, {
  name: 'Gosha',
  distination: 'Israel'
});

console.log(truck);
truck.deliver();
