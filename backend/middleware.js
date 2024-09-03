import jwt from "jsonwebtoken"
/*
Common Uses of authMiddleware.js
1. Verify JWT Tokens: Ensure that the incoming request has a valid JWT token.
2. Protect Routes: Allow access to certain routes only if the user is authenticated.
3. Role-Based Access Control: Ensure that the user has the necessary permissions to access a route.

next (a function to pass control to the next middleware).

example input for authMiddleware = thsi is an http request object
 {
  headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  },
  method: 'GET',
  url: '/some-protected-route',
  // ... other properties like body, query parameters, etc.
}
*/
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(402).json({});
    }
    const token = authHeader.split(' ')[1];
    console.log();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;
        next();//to the next middleware

    }
    catch (err) {
        return res.status(403).json({ message: err.name });
    }
}
