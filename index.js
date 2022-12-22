"use strict";

// Dependencies
const request = require("request-async")

// Main
function generate(tm){
    return new Promise(async(resolve)=>{
        const response = await request.post("https://freeimagegenerator.com/api/generate-image", {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ prompt: tm })
        })

        resolve(JSON.parse(response.body))
    })
}

module.exports = generate