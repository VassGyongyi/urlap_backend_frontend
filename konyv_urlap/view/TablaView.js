import SorView from "./SorView.js";
import FejlecView from "./FejlecView.js";
import { adatLeiro } from "./adatLeiro.js";

export default class TablaView{
    #list=[];
    constructor(list, szuloElem){ 
        //this.#list = list || [];
        this.#list=list;
        //táblázat összeállítása
        szuloElem.html(`<table class='table table-striped'> 
        <thead></thead>
        <tbody></tbody>
        </table>`)
        this.tbodyElem = szuloElem.find("tbody") 
        this.theadElem = szuloElem.find("thead")
        //console.log(this.tbodyElem)
        new FejlecView(adatLeiro, this.theadElem)
        this.sorMegjelenit()
    }
    sorMegjelenit(){
        // itt példányosítjuk a sort, annyiszor, ahány sor van a listában
        this.#list.forEach((elem, index)=>{
            new SorView(index, elem, this.tbodyElem)
            //console.log(index, elem)
        })
    }
}