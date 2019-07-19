import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../clients.service';

@Component({
    selector: 'app-client-single-position',
    templateUrl: './client-single-position.component.html',
    styleUrls: ['./client-single-position.component.scss']
})
export class ClientSinglePositionComponent implements OnInit {

    @Input() client: Client;
    @Input() lp: number;
    constructor() { }

    ngOnInit() {
    }
    removePosition() {

    }
}
