import axios from 'axios'
const SetauthToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }else{
        delete axios.defaults.headers.common['x-auth-token']
    }
}
export default SetauthToken