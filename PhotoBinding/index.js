const imageHandler = require("../core/imageHandler")

module.exports = async function (context) {
    try {
        const { data } = await imageHandler(context)
        context.log("result", JSON.stringify(data))
    } catch ({ err: { response: { data, status } } }) {
        context.log("err", { data, status })
    }
};
