import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/util';


interface Client {
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
    private clients: Client[];

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
        ]
    }


}
