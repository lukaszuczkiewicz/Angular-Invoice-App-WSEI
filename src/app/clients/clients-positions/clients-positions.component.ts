import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsService, Client } from '../clients.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-clients-positions',
    templateUrl: './clients-positions.component.html',
    styleUrls: ['./clients-positions.component.scss']
})
export class ClientsPositionsComponent implements OnInit, OnDestroy {

    private clients: Client[];
    private subscription: Subscription;
    constructor(private clientService: ClientsService) { }

    ngOnInit() {
        this.subscription = this.clientService.clientsChanged.subscribe((data)=> {
            this.clients = data;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    handlePositionChanged($event) {

    }

    removePosition($event) {
    }
    
    addClient() {

    }
}