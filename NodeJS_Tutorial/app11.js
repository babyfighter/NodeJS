const Joi = require('joi');
const arrayString = ['banana','bacon','cheese'];
const arrayObject = [{example: 'example1'},{example: 'example2'},{example: 'example33'}];

const userInput = { 
    personalInfo: {
        streetAddress: '1233345',
        city: 'asdgds',
        state: 'f1'
    },
    preferences: arrayString};

const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2),required()
});

const preferencesSchema = Joi.array().items(Joi.string());
// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().required()
// }));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

Joi.validate(userInput,schema,(err,result)=>{
    if(err)
        console.log(err);
    else
        console.log(result);
});
