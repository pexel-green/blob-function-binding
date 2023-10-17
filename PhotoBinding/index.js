const imageHandler = require("../core/imageHandler")

module.exports = async function (context) {
    try {
        context.log("Receive request:", context.bindingData)
        const { data } = await imageHandler(context)
        context.bindings.photoCognitiveResult = { data, path: context.bindingData.blobTrigger }
        context.log("Result:", context.bindings.photoCognitiveResult)
    }
    catch ({ err: { response: { data, status } } }) {
        context.log.error("Error:", { data, status })
    }
};
