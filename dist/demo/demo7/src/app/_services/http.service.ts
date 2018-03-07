import { Injectable } from '@angular/core';
// I have added the HttpHeader but currently it's not being used, but we would be needing it after applying the authentication
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConstant } from '../core/api.constant';

@Injectable()
export class RestApiService {

    constructor(private http: HttpClient, private url: ApiConstant) { }

    //   get header
    //   getHeaders() {
    //     const token = localStorage.getItem('token');
    //     return token ? new HttpHeaders().set('Authorization', token) : null;
    //   }

    // get method
    get(link: string) {
        // return this.http.get(link, { headers: this.getHeaders() }).toPromise();
        return this.http.get(`${this.url.apiConstant}${link}`);
    }

    // post method
    post(link: string, body: any) {
        // return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
        return this.http.post(link, body);
    }

    // update method
    update(link: string, body: any) {
        return this.http.put(link, body);
    }

    // delete method
    delete(link: string, body: any) {
        return this.http.delete(link, body);
    }

    // this is being used so that we can test get requests from any 3rd party source
    fakeGet(link: string) {
        return this.http.get(link);
    }

}