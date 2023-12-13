import { adatLeiro } from "./adatLeiro.js"

export default class SorView{
    #obj={}
    
    constructor(index, obj, szuloElem){
        this.index=index
        this.#obj=obj
        this.szuloElem=szuloElem
        //this.id=obj[adatLeiro.id]
        $(".torol:last").click(()=>{
            this.#esemenyTrigger("sorTorles")
        })
        this.htmlOsszerak()
    }
    htmlOsszerak(){
        let txt="<tr>"
       
        for ( const key in this.#obj) {
            //console.log(adatLeiro.id)
            if (key in adatLeiro || key === adatLeiro.id){
            txt+=`<td>${this.#obj[key]}</td>`}
        }   
    
        txt+=`<td class="torol">❌</td></tr>`
        this.szuloElem.append(txt)
        //console.log(txt)
    }

 getId(){
    return this.id
 }
 #esemenyTrigger(esemenyNev){
            const e= new CustomEvent(esemenyNev,{detail:{id:this.getId()}})
            window.dispatchEvent(e)
           }  }
           
