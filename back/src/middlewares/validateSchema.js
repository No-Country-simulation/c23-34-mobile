export const validateSchema = (schema) => (req,res,next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message : 'Error to Validation',
            error : error.errors
        })
    }
} 