import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IMusicFestivalList, IRecordLabelList, IMusicFestival } from './musicFestival.model';

@Injectable()

export class MusicFestivalService {

    constructor(private _http: Http,
                private __http: HttpClient) {}

    private _musicFestivalUrl= 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals';

    getMusicFestivals(): Observable<IMusicFestivalList[]> {
        return this.__http.get<IMusicFestivalList[]>(this._musicFestivalUrl);
    }

}

