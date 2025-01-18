export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Server error'
    console.log(`error: ${message} y ${statusCode}`);

    res.status(statusCode).json({
        success : false,
        message : message
    })
}