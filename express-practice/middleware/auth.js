const checkRole = (roles) => {
    return (req,res,next) => {
        const userRole = req.headers["role"];

        if(!userRole){
            return res.send(401).json({message : "Role not provided"});
        }

        if(userRole === "Guest" && req.method !== "GET") {
            return res.status(403).json({message: "Guests can only access GET requests"});
        }

        if(!roles.includes(userRole)){
            return res.status(403).json({message: "Access denied"});
        }

        next();
    };

};

module.exports = checkRole;