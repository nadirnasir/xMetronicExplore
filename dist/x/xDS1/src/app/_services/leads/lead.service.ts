import { Injectable } from '@angular/core';
import { RestApiService } from '../http.service';
// Injecting our http service

@Injectable()
export class LeadsService {

    constructor(private http: RestApiService) { }

    // this gets us all the leads
    getAllLeads() {
        return this.http.get('/values/getAllLeadsMock');
    }

    // the leadId prameter is coming from enquiry.component.ts initially then it gets map to an interface at leads-data-handle.service.ts and then on route change we are getting it back in detail-enquiry.component.ts and as thisfunction detailEnquiryCall() fires we send the parameter in the api call
    getSpecificLead(leadId) {
        console.log(`I should not be empty: ${leadId}`);
        return this.http.fakeGet('https://jsonplaceholder.typicode.com/posts');
    }

}