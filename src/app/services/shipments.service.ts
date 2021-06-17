import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shipments } from '../shipments-data';
import { Shipment } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {

  constructor() { }

  getShipments(): Observable<Shipment[]> {
    return of(shipments);
  }

  getShipementsByType(type?: string): Shipment[] {
    if(!type) {
      return shipments
    }
    else {
      return shipments.filter((shipment) => shipment.type === type);
    }
  }

  getShipementsCountByType(type?: string) {
    if(!type) {
      return shipments.length;
    }
    else {
      return shipments.filter((shipment) => shipment.type === type).length;
    }
  }

  getShipmentsCount() {
    return shipments.length;
  }
  
}
