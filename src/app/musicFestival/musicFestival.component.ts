import { Component, OnInit } from '@angular/core';
import { MusicFestivalService } from './musicFestival.service';
import { IMusicFestivalList, IRecordLabelList } from './musicFestival.model';

@Component({
    selector: 'app-prod',
    templateUrl: './musicFestival.component.html',
})

export class MusicFestivalComponent implements OnInit {
    musicFestivalList: IMusicFestivalList[];
    recordLabelList: object[];

    
    constructor(private _musicFestivalService: MusicFestivalService) {}

    ngOnInit(){
        const filteredArray:object[] = [];
        this._musicFestivalService.getMusicFestivals()
            .subscribe((data : any) => {
                this.musicFestivalList =  data;
                this.musicFestivalList.forEach((fest:any) => {
                    fest.bands.forEach( band => {
                        const filterIndex : number = filteredArray.length ?
                            filteredArray.findIndex((record) => record['name'] === band['recordLabel']) : -1;
                        filterIndex >-1? filteredArray[filterIndex]['bands']
                            .push({ name : band['name'],musicFestivalName: fest['name']}) : filteredArray.push({name : band['recordLabel'],
                        bands:[{name : band['name'],musicFestivalName: fest['name']}]});
                      
                    });
                  });
                this.recordLabelList = filteredArray; 
                this.sortBy('name');
            } );  
    }
    sortBy(field: string) {

        this.recordLabelList.sort((a: any, b: any) => {
            if (a[field] < b[field]) {
                return -1;
            } else if (a[field] > b[field]) {
                return 1;
            } else {
                return 0;
            }
        });

}
   
   
 
}

