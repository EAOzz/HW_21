const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7kp5kk",
  video: false,
  e2e: {
    baseUrl: 'https://santa-secret.ru',
    env:{
     username: 'katrinkaya86+test@gmail.com',
     password: '1qaz2wsx',
     watchForFileChanges: false
    },
    setupNodeEvents(on, config) {
       // implement node event listeners here
     },
  },
});
