const imageHandler = require("../core/imageHandler")

module.exports = async function (context) {
    try {
        const { data } = await imageHandler(context)
        context.bindings.photoCognitiveResult = { data, path: context.bindingData.blobTrigger }
        context.log("result", JSON.stringify(context.bindings.photoCognitiveResult))
    } catch ({ err: { response: { data, status } } }) {
        context.log("err", { data, status })
    }
};
