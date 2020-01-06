let Increment = document.getElementById("Increment");
let Decrement = document.getElementById("Decrement");
let Reset = document.getElementById("Reset");
let PlusFive = document.querySelector(".PlusFive");
let PlusEight = document.querySelector(".PlusEight");
let PlusTen = document.querySelector(".PlusTen");
let PlusTwelve = document.querySelector(".PlusTwelve");
let PlusFourteen = document.querySelector(".PlusFourteen");
let PlusSixteen = document.querySelector(".PlusSixteen");

let h2 = document.querySelector("h2");

let state = Redux.createStore(reducer);

function reducer(state = 0, action) {
  switch (action.type) {
    case "Increment":
      if (state >= 100) {
        alert("Not Allowed");
        return state;
      } else {
        return state + action.payload;
      }
    case "Decrement":
      if (state <= -1) {
        alert("NA");
        return state;
      } else {
        return state - action.payload;
      }
    case "Reset":
      return (state = 0);
    default:
      return state;
  }
}

var number = 1;

function Inc(number) {
  return state.dispatch({ type: "Increment", payload: number });
}

function Dec(number) {
  return state.dispatch({ type: "Decrement", payload: number });
}

Increment.addEventListener("click", () => Inc(number));

Decrement.addEventListener("click", () => Dec(number));

PlusFive.addEventListener("click", () => (number = 5));
PlusEight.addEventListener("click", () => (number = 8));
PlusTen.addEventListener("click", () => (number = 10));
PlusTwelve.addEventListener("click", () => (number = 12));
PlusFourteen.addEventListener("click", () => (number = 14));
PlusSixteen.addEventListener("click", () => (number = 16));

Reset.addEventListener("click", () => {
  state.dispatch({ type: "Reset" });
});

state.subscribe(() => {
  h2.innerText = state.getState();
});
