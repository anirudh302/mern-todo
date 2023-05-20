const TODO = require("./../models/Todo")
exports.addTodo = async (req, res) => {
    try {
        const result = await TODO.create(req.body)

        res.json({
            message: "add todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "someting went wrong" + error,
        })

    }

}
exports.getTodos = async (req, res) => {
    try {
        const result = await TODO.find()
        // const result = await TODO.find() // get all reconds
        // const result = await TODO.findByIdAndUpdate() // update
        // const result = await TODO.findByIdAndDelete() // delete
        // const result = await TODO.create()  //add to db

        res.json({
            message: "get todos success",
            result
        })
    } catch (error) {
        res.json({
            message: "someting went wrong" + error,
        })

    }

}
exports.updateTodos = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true })

        res.json({
            message: "update todos success",
            result
        })
    } catch (error) {
        res.json({
            message: "someting went wrong" + error,
        })

    }

}
exports.deleteTodos = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndDelete(todoId)

        res.json({
            message: "delete todos success",
            result
        })
    } catch (error) {
        res.json({
            message: "someting went wrong" + error,
        })

    }

}