const axios = require("axios")

module.exports = async (context) => {
    const { VISION_KEY, VISION_ENDPOINT, STORAGE_URI } = process.env
    const blobPath = STORAGE_URI + "/" + context.bindingData.blobTrigger
    return await axios.post(VISION_ENDPOINT, {
        url: blobPath
    }, {
        headers: {
            "Ocp-Apim-Subscription-Key": VISION_KEY
        }
    })
}