import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsService, Client } from 'src/app/clients/clients.service';
import { Subscription, Subject } from 'rxjs';

@Component({
    selector: 'app-invoice-client',
    templateUrl: './invoice-client.component.html',
    styleUrls: ['./invoice-client.component.scss']
})
export class InvoiceClientComponent implements OnInit, OnDestroy {
    
    private clients: Client[];
    private currentClient: Client = null;
    private subscription: Subscription;


    constructor(private clientsService: ClientsService) { }

    ngOnInit() {
        this.subscription = this.clientsService.clientsChanged.subscribe((data)=> {
            this.clients = data;
            this.currentClient = this.clients[0];
            this.clientsService.currentClientSubject.next(this.currentClient);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onClientChange(e) {
        console.log(e.target.selectedIndex);
        this.currentClient = this.clients[e.target.selectedIndex];
        this.clientsService.currentClientSubject.next(this.currentClient);
    }
}