const axios = require("axios").default


module.exports = {
    login(req, res) {
        res.render("login")
    },
    signup(req, res) {
        res.render("signup")
    },
    postlogin(req, res) {
        let { login, password } = req.body
        
        login = login.replace(/\D/g, "")
        
        axios.post("http://linkteen.sanplus.com.br/api/login",
            {
                login: login,
                password: password
            })
        .then((response) => {
            if(response.data.success != true) {
                res.send(response.data.message)
            } else {
                res.redirect("/profile")}
            }
        ).catch((err) => {err})
    },
    createuser(req, res){
        let { login, password, confirmpass, type, nome, cep, estado, cidade, rua, bairro, numero } = req.body
        
        login = login.replace(/\D/g, "")
        
        axios.post("http://linkteen.sanplus.com.br/api/new-user",
            {
                login: login,
                password: password,
                confirmpass: confirmpass,
                type: type,
                nome:nome,
                cep: cep,
                estado: estado,
                cidade: cidade,
                rua: rua,
                bairro: bairro,
                numero: numero
            })
        .then((response) => {
            if(response.data.success != true) {
                res.send(response.data.message)
            } else {
                res.redirect("/profile")}
            }
        )
    },
    postsignup(req, res) {
        res.render("signup")
    }

}