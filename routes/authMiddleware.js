import Admin from '../models/Admin.Model';
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Accept both "Bearer <token>" and "<token>"
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find admin by decoded ID
    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return res.status(401).json({ message: 'Unauthorized: Admin not found' });
    }

    // Attach user to request
    req.user = admin;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error.message);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired. Please log in again.' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export default authMiddleware;

