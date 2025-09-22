const getUser = (req,res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}!`);
};

const createUser = (req,res) => {
    const userData = req.body;
    res.json({
        message: "Data reveived succesfully!",
        data: userData
    });
};

const deleteUser = (req,res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId} deleted (Admin only).`);
};

module.exports = { getUser, createUser, deleteUser};