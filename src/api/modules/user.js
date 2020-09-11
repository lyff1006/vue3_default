import axios from "@/utils/http.js"

class User{
  test(){
    return axios.get("http://baidu.com").then(res=>{
      console.log(res)
      return res
    })
  }
}

const user = new User()
export default user