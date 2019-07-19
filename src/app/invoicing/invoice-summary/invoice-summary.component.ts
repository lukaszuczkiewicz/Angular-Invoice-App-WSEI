import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Invoice, InvoiceSummary } from '../model/item';
import { Client, ClientsService } from 'src/app/clients/clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit, OnDestroy {

  @Input()
  summary: InvoiceSummary;
    private clientFullname = ""
    private sub: Subscription;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.sub = this.clientsService.currentClientSubject.subscribe((client)=> {
        this.clientFullname = `${client.name} ${client.surname}`;
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
