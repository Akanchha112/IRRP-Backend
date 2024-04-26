// const asyncHandler= (fn) => {async()=>{}} //one way of doing it
const asyncHandler = (requestHandler)=> async (req , res , next) => {
    try{
        await requestHandler(req , res , next)
    }
    catch(err){
        res.status(err.code || 500).json({
            success:false,
            message: err.message || "Something went wrong"
        })
    }
}
export {asyncHandler}