import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ShipmentsService } from 'src/app/services/shipments.service';
import { Shipment } from '../../mock-data';

declare const underlineBtn: any;
declare const activate: any;

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit, AfterViewChecked {

  currentShipments: Shipment[] = [];
  sort?: string = '';
  shipmentsCount: number = 0;
  underlineLink: boolean = false;


  constructor(
    private shipmentsService: ShipmentsService,
  ) { }

  ngOnInit(): void { 
    this.shipmentsService.getShipments().subscribe((shipments) => {
      this.currentShipments = shipments;
    });
    this.shipmentsCount = this.shipmentsService.getShipmentsCount();
    this.underlineLink = true;
  }

  ngAfterViewChecked() {
    this.setUnderline();
    activate();
  }

  onSortByType(e: Event, type?: string) {
    this.currentShipments = this.shipmentsService.getShipementsByType(type);
    this.shipmentsCount = this.shipmentsService.getShipementsCountByType(type);
    this.sort = type;
    
  }

  countByType(type?: string) {
    return this.shipmentsService.getShipementsCountByType(type);
  }

  showShipments(type?: string) {
    let count = this.shipmentsService.getShipementsCountByType(type);
    return count > 0
  }

  onSortByBestCarriers() {
    this.currentShipments = (this.shipmentsService.getShipementsByType(this.sort))
                            .filter((shipment) => shipment.carrier.ratings.rate > 3.5);
    this.shipmentsCount = this.currentShipments.length;
  }

  onSortByMoreLimit() {
    this.currentShipments = (this.shipmentsService.getShipementsByType(this.sort))
                            .filter((shipment) => shipment.weightLimit >= 40);
    this.shipmentsCount = this.currentShipments.length;
  }

  onSortVerifyCarrier() {
    this.currentShipments = (this.shipmentsService.getShipementsByType(this.sort))
                            .filter((shipment) => shipment.carrier.idCard === true);
    this.shipmentsCount = this.currentShipments.length;
  }

  setUnderline() {
    underlineBtn();
  }


}
