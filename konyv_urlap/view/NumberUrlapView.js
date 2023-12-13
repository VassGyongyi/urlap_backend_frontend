export default class NumberUrlapView {
    #value = ""
    #valid = false
    constructor(szuloElem, obj, key) {
        this.szuloElem = szuloElem;
        this.obj = obj;
        this.key = key;
        this.numberUrlapElem();
        //megfogjuk az text input mezőnket
        this.inputElem = $(`#${this.key}`)
        this.#value = this.inputElem.val()
        //a beviteli mező billentyű felengedés eseményének kezelése
        this.inputElem.on("keyup", () => {
           console.log(this.inputElem.val())
            //eltároljuk az elem értékét a #value privát adattagban.
            this.#value = Number(this.inputElem.val())
            //valid-e? 
           //let patternString = this.obj.pattern;//reguláris kifejezés
           //let pattern = new RegExp(patternString);//reguláris kifejezés átalakítása reguláris objektummá
            //a reguláris OBJEKTUM test metódusa ellenőrzi a megfelelőséget, visszatérési értéke true, vagy false
            if (this.#value>=Number(this.obj.pattern.min ) && this.#value<=Number(this.obj.pattern.max )) {
                this.#valid = true;
                console.log(true)
            } else {
                this.#valid = false;
                console.log(false)
            }
            console.log(this.#valid)
        });
    }
    getValue() {
        return  this.#value
    }

    getValid()
    {
        
        return this.#valid
    }
    numberUrlapElem() {
        let txt = `<div class="mb-3 mt-3">
        <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
        <input type="${this.obj.tipus}" class="form-control" 
                id="${this.key}" 
                placeholder="${this.obj.placeholder}"
                min="${this.obj.pattern.min}"
                max="${this.obj.pattern.max}"
                value="${this.obj.value}"
                name="${this.key}">
         </div>`;
       
        this.szuloElem.append(txt)
    }
}