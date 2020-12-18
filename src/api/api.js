import myaxios from "../myaxios/myaxios"

// 导出接口
//登录接口
export const login =(params)=>{
    return myaxios.post("admin/login",params).catch(((err)=>console.log(err)))
}

// 退出接口
export const logout=()=>{
    return myaxios.get("admin/signout").catch(ree=>{
        console.log(err);
    })

}