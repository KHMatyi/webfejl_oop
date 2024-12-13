"use strict";

const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(object){
        this.firstname1 = object.firstname1;
        this.firstname2 = object.firstname2;
        this.lastname = object.lastname;
    }
    render(tb){
        let tr = document.createElement("tr");

        let tdLastName = document.createElement("td");
        tdLastName.innerHTML = this.lastname;
        tr.appendChild(tdLastName);

        let tdFirstName1 = document.createElement("td");
        tdFirstName1.innerHTML = this.firstname1;
        tr.appendChild(tdFirstName1);

        if(this.firstname2){
            let tdFirstName2 = document.createElement("td");
            tdFirstName2.innerHTML = this.firstname2;
            tr.appendChild(tdFirstName2);
        } else {
            tdFirstName1.colSpan = 2;
        }

        tb.appendChild(tr);
    }
}

class FormController{
    #form
    get firstname1(){
        const f = this.#getThing("firstname1").value;
        return f;
    }
    get firstname2(){
        const f = this.#getThing("firstname2").value;
        return f;
    }
    get lastname(){
        const f = this.#getThing("lastname").value;
        return f;
    }
    
    constructor(form){
        this.#form = form;
    }

    #getThing(id){
        return this.#form.querySelector("#"+id);
    }
}


function init(){
    const form = document.getElementById("form");
    const fc = new FormController(form);
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const obj = {
            firstname1:fc.firstname1,
            firstname2:fc.firstname2,
            lastname:fc.lastname
        }
        let tb = document.getElementById("tbodyId");
        let p = new Person(obj);
        p.render(tb)
    })
    let tb = document.getElementById("tbodyId");
    for (const i of array){
        let p = new Person(i);
        p.render(tb)
    }
}
init()