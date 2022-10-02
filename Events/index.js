const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on - listen events
// emit - emitting events

// customEmitter.emit("response"); Will not work as calls before listen

customEmitter.on("response", (name, id) => {
  console.log("Data received", name, id);
});

customEmitter.on("response", () => {
  console.log("Some Other logic");
});

// customEmitter.emit("response");

customEmitter.emit("response", "John", 34);
