import { Component, OnInit, Input } from '@angular/core';
import { Shipment } from '../../mock-data';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  @Input() shipment!: Shipment;

  constructor() { }

  ngOnInit(): void {
  }

}
