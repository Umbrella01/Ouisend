import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentsService } from 'src/app/services/shipments.service';
import { Shipment } from 'src/app/mock-data';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {
  shipment: any;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private shipmentsService: ShipmentsService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const shipmentId = Number(routeParams.get('shipmentId'));
    this.shipmentsService.getShipments().subscribe((shipments) => {
      this.shipment = shipments.find((shipment: Shipment) => shipment.id === shipmentId);
    });
  }

}
