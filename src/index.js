const messages = [
    "Jaime",
    "Uriel",
    "Mario",
    "Noé",
    "Alma",
    "Adai",
    "Aldo",
    "Ivan",
    "Joanna"
];

const randomMsg = () => {
    const message = messages[ Math.floor( Math.random() * messages.length) ];
    console.log( message );
}

module.exports = {
    randomMsg
};

