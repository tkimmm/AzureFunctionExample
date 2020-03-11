module.exports = async function (context, IoTHubMessages) {
    context.log(`iot hub event message triggered this request, let's go!: ${IoTHubMessages}`);

    IoTHubMessages.forEach(message => {
      context.bindings.signalRMessages = [{
          "target": "notify",
         "arguments": [ message ]
    }];

    });
  
};