export interface IMusicFestival {
  name: string;
}
export interface IBand {
  name: string;
  recordLabel:string;
}

export interface IBandFestival{
  name:string;
  musicFestivalName : string;
  //musicFestival:IMusicFestival[];
}

export interface IMusicFestivalList{
  name: string;
  bands:IBand[];
}

export interface IRecordLabelList{
  name:string;
  bands:IBandFestival[];
}