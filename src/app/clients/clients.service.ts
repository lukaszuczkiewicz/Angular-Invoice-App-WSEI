import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Client {
    name: string;
    surname: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    private clients: Client[] = [];
    clientsChanged = new BehaviorSubject<Client[]>(null);
    currentClientSubject = new BehaviorSubject<Client>(null);

    constructor() {
        this.clients = [
            {
                name: 'Jan',
                surname: 'Kowalski',
                address: 'Long Street 4',
                city: 'New York',
                state: 'New York',
                zipCode: '121345',
                country: 'USA'
            },
            {
                name: 'Adam',
                surname: 'Nowak',
                address: 'Short Street 15',
                city: 'Chicago',
                state: 'Illinois',
                zipCode: '987654',
                country: 'USA'
            }
        ];
        console.log('service clients:');
        console.log(this.clients);
        this.clientsChanged.next(this.clients.slice());
    }

    emitChanges() {
        this.clientsChanged.next(this.clients.slice())
    }

    addClient() {
        this.clients.push(this.createEmptyClient());
        this.emitChanges();
    }

    setClients(clients: Client[]) {
        this.clients = clients;
        this.emitChanges();
    }

    getClients() {
        return this.clients.slice();
    }
    removeClient(index): void {
        this.clients.splice(index, 1);
        this.emitChanges();
      }

    createEmptyClient(): Client {
        return {
            name: "",
            surname: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            country: ""
        }
    }
}
