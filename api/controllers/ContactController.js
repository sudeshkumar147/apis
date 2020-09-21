/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: async (req, res) => {
        let response = {}

        try {
            const data = await Contact.find();
            response.error = false;
            response.message = 'Success';
            response.data = data;

            return res.json(response);

        } catch(err) {
            return res.serverError(err)
        }
    },

    store: async (req, res) => {
        let response = {};

        try {
            let {name, mobile, email, message} = req.body;

            const data = await Contact.create({name,mobile,email,message}).fetch();

            response.error = false;
            response.message = 'Success';
            response.data = data;

            return res.json(response);

        }catch(err) {
            return res.serverError(err);
        }
    }

};

