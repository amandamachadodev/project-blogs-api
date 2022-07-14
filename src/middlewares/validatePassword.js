const isValidPassword = (req, res, next) => {
    const { password } = req.body;
  
    if (
      password === undefined 
      || password.length === 0
    ) return res.status(400).json({ message: 'Some required fields are missing' });
    
    next();
  };
  
  module.exports = { isValidPassword }; 