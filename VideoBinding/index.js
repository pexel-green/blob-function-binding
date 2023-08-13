module.exports = async function (context) {
    context.log("Full blob path:", context.bindingData.blobTrigger);
    context.log('Node.js Blob trigger function processed', context.bindings.myVideo);
};
