export const errorMiddleware = (error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const message = error.message || 'Server error'
    console.log(`error: ${message} y ${statusCode}`);

    res.status(statusCode).json({
        success : false,
        message : message
    })
}