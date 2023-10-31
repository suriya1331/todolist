 const ApiReq = async (url = '',optionsObj= null,errMsg=null )=>{

    try{
        const response = await fetch(url,optionsObj)
        if(!response)throw Error("please re-load page")

    }catch(err){
        errMsg = err.Message
    }finally{
        return errMsg
    }

 }

 export default ApiReq