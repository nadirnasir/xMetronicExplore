import { Injectable } from '@angular/core';
import { RestApiService } from '../http.service';
// Injecting our http service
@Injectable()
export class OrdersService {

    constructor(private http: RestApiService) { }

    // this gets us all the leads
    getAllOrders() {
        return this.http.get('/Values/GetAllOrdersMock?status=U&dateFrom=02/01/2015&dateTo=02/12/2016');
    }

    getOrder(orderId) {
        return this.http.get(`/Values/GetAllOrdersMockByID?id=${orderId}`);
    }

    // the leadId prameter is coming from enquiry.component.ts initially then it gets map to an interface at leads-data-handle.service.ts and then on route change we are getting it back in lead.component.ts and as thisfunction detailEnquiryCall() fires we send the parameter in the api call
    getSpecificLead(leadId) {
        console.log(`I should not be empty: ${leadId}`);
        return this.http.fakeGet('https://jsonplaceholder.typicode.com/posts');
    }

}