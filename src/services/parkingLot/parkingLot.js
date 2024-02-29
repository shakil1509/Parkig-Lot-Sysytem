// ParkingLot class
class ParkingLot {
    constructor() {
      this.parkingSpots = []; // Array to store available parking spots
    }
  
    allocateSpot(vehicleType) {
      const availableSpot = this.parkingSpots.find(spot => !spot.isOccupied && spot.type === vehicleType);
  
      if (availableSpot) {
        availableSpot.isOccupied = true;
        return availableSpot;
      } else {
        
        // Handle no available spot for the given vehicle type
        return null;
      }
    }
  
    releaseSpot(spot) {
      spot.isOccupied = false;
    }
  }
  
  class ParkingLot {
    static instance;
    parkingFloor;
    entryPanels;
    exitPanels;
  
    constructor() {
      this.parkingFloor = [];
      this.entryPanels = [];
      this.exitPanels = [];
    }
  
    static getInstance() {
      if (!ParkingLot.instance) {
        return (this.instance = new ParkingLot());
      }
      return this.instance;
    }
  
    vacateParkingSpot(parkingSpotID) {
      for (let floor of this.parkingFloor) {
        for (let spots of floor.getListOfParkingSpots().values()) {
          const vacatedSpot = spots.find((spot) => {
            if (spot.getParkingSpotID() === parkingSpotID) {
              spot.vacateVehicleFromSpot();
              return spot;
            }
          });
          return vacatedSpot;
        }
      }
    }
  
    getListOfParkingFloor() {
      return this.parkingFloor;
    }
  
    getListOfEntryPanel() {
      return this.entryPanels;
    }
  
    getListOfExitPanel() {
      return this.exitPanels;
    }
  }