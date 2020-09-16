const CaptchaModel = require("../models/captcha");
const assert = require('assert');

//Get all Catpcha
exports.AllCaptcha = async function (req, res) {

    let obj = new CaptchaModel ({
        "id_puerta" : 1,
        "codigo" : "1,2,3,4"
    });

    obj.save(function (err) {
        if (err) return handleError(err);
        // saved!
      });  

    let response = { status: "200", message: "Data Home", result: "dataApiFinal"};
    res.status(200).send(response);
}

//generator Catpcha
exports.GeneratorCaptcha = async function (req, res) {

    try {

        let id_puerta = req.params.id;

        let code = {
            "p1" : await numRamdom(0,3),
            "p2" : await numRamdom(0,3),
            "p3" : await numRamdom(0,3),
            "p4" : await numRamdom(0,3),
        }

        let codeString = JSON.stringify(code);

        let captcha = new CaptchaModel ({
            "id_puerta" : id_puerta,
            "codigo" : codeString
        });

        await captcha.save();  

        let data = {
            "id" : captcha._id,
            "code" : captcha.codigo
        }

        let response = { status: "200", message: "generator Catpcha", result: data};
        res.status(200).send(response);

    } catch (error) {
        console.log("error => ", error);
        let response = { status: "502", message: "Error generator Catpcha"};
        res.status(502).send(response);
    }
}


const numRamdom = (a,b) =>  Math.round(Math.random()*(b-a)+parseInt(a));

//Valid Catpcha
exports.ValidCaptcha = async function (req, res) {
    try {
        console.log(req.body);
        let id = req.body.id;
        let code = req.body.code;

        let captcha = await CaptchaModel.findById(id);

        let codeJsonBd = JSON.parse(captcha.codigo); 
        let codeJson = JSON.parse(code); 
        let id_puerta = captcha.id_puerta;
        
        let valid = await jsonCompare(codeJsonBd, codeJson);
        if(!valid){
            id_puerta = 0;
        }

        let response = { status: "200", message: "Valid Catpcha", result: id_puerta};
        res.status(200).send(response);
        
    } catch (error) {
        console.log("error => ", error);
        let response = { status: "502", message: "Error Valid Catpcha"};
        res.status(502).send(response);     
    }
}

function jsonCompare(obj1, obj2){
    try {
        assert.deepStrictEqual(obj1, obj2);
        return true;
    } catch (error) {
        //console.log(error);
        return false;
    }
} 