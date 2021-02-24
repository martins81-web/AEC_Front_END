class Message {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  getMessage() {
    return `Envoye par : {this.name} email: {this.email} message: {this.message}`;
  }
}

function create(message) {
  if (!message.name) message.name = "Anonymous";

  return new Promise(function(myResolve, myReject) {
    console.log(message);
    myResolve(message);
  });
}

function myResolve(message) {
  return new Message(message.name, message.email, message.message);
}

module.exports = {
  create,
};
