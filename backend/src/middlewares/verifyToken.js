const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // check if token is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized. No token Provided" });
  }

  const token = authHeader.split(" ")[1];

  console.log("Incoming token:", token);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request object
    next(); // Proceed to next middleware or route
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token!" });
  }
};

 const restrictTo = (...roles) => {
   return (req, res, next) => {
     if (!roles.includes(req.user.role)) {
       return res.status(403).json({ message: "Access denied!" });
     }
     next();
   };
 };

 module.exports = { verifyToken, restrictTo };
