import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RequestOptions, Headers, Response, URLSearchParams, Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiService {

  constructor(public http: Http) { }

  get(table: string, input?: any): Observable<any> {
    let option: URLSearchParams = new URLSearchParams();
    let params: URLSearchParams = new URLSearchParams();

    // option.set('SHAIR_SESSION', this.token.getToken());

    for (let key in input) {
      params.append(key, input[key]);
    }


    let header = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'};

    let headers: Headers = new Headers(header);
    let options: RequestOptions = new RequestOptions({ headers: headers, params: option});

    return this.http.get(`${environment.api_url}/${table}`, options)
      .map((res: Response) => this.extractData(res))
      .catch(error => this.handleErrorObservable(error));
  }

  post(table: string, input?: any, jsonData?: boolean): Observable<any> {
    let option: URLSearchParams = new URLSearchParams();
    let params: URLSearchParams = new URLSearchParams();

    // option.set('SHAIR_SESSION', this.token.getToken());

    if (!jsonData) {
      for (let key in input) {
        params.append(key, input[key]);
      }
    }

    let header = {
      'Content-Type': (jsonData) ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    let headers: Headers = new Headers(header);
    let options: RequestOptions = new RequestOptions({ headers: headers, params: option});

    return this.http.post(`${environment.api_url}/${table}`, jsonData ? input : params, options)
      .map((res: Response) => this.extractData(res))
      .catch(error => this.handleErrorObservable(error));
  }

  put(table: string, input?: any, jsonData?: boolean): Observable<any> {
    let option: URLSearchParams = new URLSearchParams();
    let params: URLSearchParams = new URLSearchParams();

    // option.set('SHAIR_SESSION', this.token.getToken());

    if (!jsonData) {
      for (let key in input) {
        params.append(key, input[key]);
      }
    }

    let header = {
      'Content-Type': (jsonData) ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    let headers: Headers = new Headers(header);
    let options: RequestOptions = new RequestOptions({ headers: headers, params: option});

    return this.http.put(`${environment.api_url}/${table}`, jsonData ? input : params, options)
      .map((res: Response) => this.extractData(res))
      .catch(error => this.handleErrorObservable(error));
  }

  private extractData(res: Response): any {
    return res.text() ? res.json() : {};
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
