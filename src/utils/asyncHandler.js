const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err => 
            next(err)
        ))
    }
}

export {asyncHandler}

// const asyncHandler = (fn) => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {} 
// const asyncHandler = (fn) => async () => {
//     try {
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : true,
//             message : err.message
//         })
//     }
// }