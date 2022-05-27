import Api from './Api'
export default{
    async login(form){
        await Csrf.getCookie()
        return Api.post("/login", form)        
    },

    async logout(){
        return Api.post("/logout")
    },

    auth(){
        return Api.get("/user")
    },
    
    resetpassword(email){
        return Api.post('/reset-password', email)
    }
}