console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn   = document.querySelector("#apollo-btn");
const nebulaBtn   = document.querySelector("#nebula-btn");
const cometBtn    = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket");

const winnerBox = document.querySelector("#winner");

// Click Handlers
const boostApollo = (e) => {
  console.log("clicked");
  apollo_spot += 1;
  changePosition(apolloRocket, apollo_spot);
  checkWinner(apollo_spot, "Apollo");
  apolloRocket.alt = `Apollo is at spot ${apolloRocket} out of 6`;
};

const boostNebula = (e) => {
    console.log("clicked");
    nebula_spot += 1;
    changePosition(nebulaRocket, nebula_spot);
    checkWinner(nebula_spot, "Nebula");
    nebulaRocket.alt = `Nebula is at spot ${nebula_spot} out of 6`;
};

const boostComet = (e) => {
    console.log("clicked");
    comet_spot += 1;
    changePosition(cometRocket, comet_spot);
    checkWinner(comet_spot, "Comet");
    cometRocket.alt = `Comet is at spot ${comet_spot} out of 6`;
};

// Winner Check
const checkWinner = (position, rocket) => {
    if(position === 6) {
        winnerText.innerHTML = rocket + " is the Winner";
    }
};

// Events

apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);