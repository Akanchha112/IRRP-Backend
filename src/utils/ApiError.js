//extending class Error of Nodejs to set a particular format of error response sended to frontend
class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode=statusCode
        this.data  = null
        this.message = message
        this.success = false
        this.errors = errors
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}