import { Component } from '@angular/core';

@Component({
  selector: 'jhi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public numberOfBanks = 800;
  public data = [
    {
      name: "Geschäftsstrategie",
      value: 2,
      ambition: 4,
      others: [ 1, 3, 3, 4, 2, 2.4, 4.2, 3, 3.2, 5, 2, 0, 0.4 ]
    },
    {
      name: "Kommunikation",
      value: 3,
      ambition: 4.5,
      others: [1,4,2,2.4,4.2,5,2,0,0.4, 1,4, 4.7, 4.7 ]
    },
    {
      name: "Ethik und Kultur",
      value: 5,
      ambition: 0,
      others: [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.5, 1.7, 1, 1.2, 1, 2.4, 1, 1, 3, 1, 5, 1, 1, 1, 1, 1, 1, 1 ] 
    },
    {
      name: "Mitarbeiterführung",
      value: 4,
      ambition: 0,
      others: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2.6, 2.5, 2, 2, 2, 2.5, 2, 2, 2, 2, 2, 2, 4, 5, 5 ]
    },
    {
      name: "Kerngeschäft",
      value: 2,
      ambition: 5,
      others: [1,3,3,4,2,2.4,4.2,3,3,5,2,0,0.4]
    },
    {
      name: "Umweltschutz",
      value: 3,
      ambition: 4.5,
      others: [1,4,2,2.4,4.2,5,2,0,0.4, 1,4, 4.7, 4.7 ]
    },
    {
      name: "sehr viele Banken 1",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 2",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 3",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 4",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 5",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 6",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 7",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 8",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 9",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 10",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 11",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    },
    {
      name: "sehr viele Banken 12",
      value: Math.random()*5,
      ambition: Math.random()*5,
      others: [...Array(this.numberOfBanks)].map(x=>Math.random()*5)
    }
  ]

  change(j:number,i:number,v:number){
    const t = [...this.data];
    const t2 = [...t[j].others]
    t2[i]=v;
    t[j].others = t2;
    this.data = t;
  }
  changeValue(j:number,v:number){
    const t = [...this.data];
    const t2 = {...t[j]}
    t2.value=v;
    t[j] = t2;
    this.data = t;
  }
}
