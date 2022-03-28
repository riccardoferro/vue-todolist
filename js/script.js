/*
Descrizione:

Rifare l'esercizio della to do list.

Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo,
 che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
 (se done era uguale a false, impostare true e viceversa)

*/

/*
STEP-BY-STEP 

- Created an object with property text and done. (DID)

Milestone 1
  -Print inside of a list the item/object for each to do. (DID)
  -If the property done is true, visualize the text with a line-through. (DID)

Milestone 2
  -Visualize beside each item an "x" : by clicking on it the to do will be remove from the list


*/

/******* CODE MAIN ********/

//make a list of things to do

const listToDo = [
  {
    text: "grocery shopping",
    done: false,
  },
  {
    text: "study",
    done: false,
  },
  {
    text: "water the plants",
    done: true,
  },
];
/******* CODE MAIN ********/

/****** VUE JS ********/

const list = new Vue({
  el: "#list",

  data: {
    //insert in data the list of things to do
    listToDo,
  },

  methods: {
    //If the property done is true, visualize the text with a line-through.
    workDone(i) {
      if (this.listToDo[i].done === true) {
        return "done-rf";
      }
    },
  },
});
/****** VUE JS ********/
