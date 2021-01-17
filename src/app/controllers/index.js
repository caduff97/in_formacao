const axios = require("axios").default


module.exports = {
    login(req, res) {
        res.render("login")
    },
    signup(req, res) {
        res.render("signup")
    },
    postlogin(req, res) {
        const { ...fields } = req.body
        
        fields.login = fields.login.replace(/\D/g, "")
        
        axios.post("http://linkteen.sanplus.com.br/api/login", fields)
        .then((response) => {
            const {success, type, id, message} = response.data
            if(success != true) {
                res.send(message)
            } else {
                if(type == "cpf") {
                    res.render("user", {id, type})
                } else {
                    res.render("partner", {id, type})
                }
            }
            }
        ).catch((err) => {err})
    },
    createuser(req, res){
        const { ...fields } = req.body
        
        fields.login = fields.login.replace(/\D/g, "")
        
        axios.post("http://linkteen.sanplus.com.br/api/new-user", fields)
        .then((response) => {
            const {success, message} = response.data
            if(success != true) {
                res.send(message)
            } else {
                res.redirect("/user")}
            }
        )
    },
    postsignup(req, res) {
        res.render("signup")
    },
    user(req, res) {
        res.render("user")
    },
    newopportunity(req, res) {
        const {id, type} = req.query
        
        res.render("createopportunity", {id, type})
    },
    user_partner (req, res) {
        const {id, type} = req.query
            if(type == "cpf") {
                res.render("user", {id, type})
            } else {
                res.render("partner", {id, type})
            }
    },
    createopportunity(req, res) {
        const { ...fields } = req.body
        
        fields.valor = fields.valor.replace(/\D/g, "")
        
        axios.post("http://linkteen.sanplus.com.br/api/opportunity", fields)
        .then((response) => {
            const {success, message, _id} = response.data
            if(success != true) {
                res.send(message)
            } else {
                res.render("partner", {id:fields.usuario, type: "cnpj"})
            }
        })
    },
    opportunities (req, res) {
        const {id, type} = req.query

        axios.get("http://linkteen.sanplus.com.br/api/opportunity")
        .then((response) => {
            const opportunities = response.data.data
            res.render("opportunities", {id, type, opportunities})
        })

        
    }
}