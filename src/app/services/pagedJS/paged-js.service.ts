import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagedJSService {
  loaded = new EventEmitter();
  constructor() { }
}
