/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async(req,res) => {
        let response  = {}
        try {
            let {email,password} = req.body;
            const user = await User.findOne({email});
        
            if (!user) {
                response.error = true;
                response.message = 'Email not valid';
                response.data = [];
                return res.notFound(response);
            }
            const comparePass = await UTILServices.comparePassword(password,user.password);
        
            if (!comparePass) {

                response.error = true;
                response.message = 'Password not valid';
                response.data = [];

                return res.badRequest(response);
            }
        
            const token = JWTServices.issuer({user:user.id},60*60);
            
            response.error = false;
            response.message = 'Loged in!';
            response.data = [];
            response.token = token;
            return res.json(response);
        } catch(err) {
            return res.serverError(err);
        }
    },

    signup: async(req,res) => {
        let response = {};
        try {
            let {name, email, password} = req.body;
            const encPassword = await UTILServices.hashPassword(password);
            const user = await User.create({name:name,email:email,password:encPassword}).fetch();
            
            response.error = false;
            response.message = 'Success';
            response.data = user;

            return res.json(response);
            
        }catch(error) {
            return res.serverError(error);
        }
    },

    logout: async (req,res) => {
        // not implemented
    }

};

