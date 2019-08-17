class CalcController {
 
    constructor() {
        
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.iniButtonsEvents();
 
    }
 
    initialize() {

        this.setDisplayDateTime();
        
        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
    }

    addEventListenerAll(element, events, fn){

            events.split(' ').forEach(event => {

                element.addEventsListener(event, fn, false);

            });
    }

    iniButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

            buttons.forEach((btn, index)=>{
                
                this.addEventListenerAll("click drag mouseover", e => {

                console.log(btn.className.baseVal.replace("btn.",""));
           
            });

                this.addEventlistenerAll(btn, "mouseover mouseup mousedown", e =>
                
                    btn.style.cursor = "pointer";
                
                )};
        })
    }

    setDisplayDateTime(){

            this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
                day: "2-digit",
                month: "long",
                year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }
 
    get displayCalc() {
        return this._displayCalcEL.innerHTML;
    }
 
    set displayCalc(value) {
        this._dispalyCalcEL.innerHTML = value;
    }
 
    get currentDate() {
        return new Date();
    }
 
    set currentDate(value) {
 
        this._currentDate = value;
    }
 
}