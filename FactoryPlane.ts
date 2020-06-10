enum PLANE_TYPE {
  BOEING = 'boeing',
  AIRBUS = 'airbus'
}

interface Plane {
  fly(): string;
  land(): string;
}

class AirbusPlane implements Plane {
  public _name: string;
  constructor() {
    this._name = 'Airbus';
  }
  getName() {
    return this._name;
  }
  land(): string {
    return `${this._name} is Landing`;
  }
  fly(): string {
    return `${this._name} is Flying`;
  }
}

class BoeingPlane implements Plane {
  public _name: string;
  constructor() {
    this._name = 'Boeing';
  }
  getName() {
    return this._name;
  }
  land(): string {
    return `${this._name} is Landing`;
  }
  fly(): string {
    return `${this._name} is Flying`;
  }
}

class PlaneFactory {
  public static createPlane(type: PLANE_TYPE.AIRBUS): AirbusPlane;
  public static createPlane(type: PLANE_TYPE.BOEING): BoeingPlane;
  public static createPlane(type: PLANE_TYPE): Plane {
    switch (type) {
      case 'boeing':
        return new BoeingPlane();
      case 'airbus':
        return new AirbusPlane();
      default:
        return null;
    }
  }
}

const plane = PlaneFactory.createPlane(PLANE_TYPE.BOEING);
