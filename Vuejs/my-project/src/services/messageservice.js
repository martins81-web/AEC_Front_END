import axios from 'axios';

import config from '../../../config';

export default {
  postMessage(message) {
    var messageURL = `${config.APIPath}/message`;
    axios
      .post(messageURL, {
        name: message.name,
        email: message.email,
        message: message.message,
      })
      .then(
        (result) => {
          this.message = result.data.origin;
          //TODO redirect to message logged screen
          console.log(message);
        },
        (error) => {
          this.errors.push(error);
        }
      )
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
