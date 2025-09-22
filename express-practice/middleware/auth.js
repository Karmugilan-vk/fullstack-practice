const checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.headers["role"];
    if (!userRole) {
      return res.status(401).json({ message: "Role not provided" });
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

module.exports = checkRole;
