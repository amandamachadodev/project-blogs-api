const isValidEmail = (req, res, next) => {
    const { email } = req.body;
  
    if (
      email === undefined 
      || email.length === 0
    ) return res.status(400).json({ message: 'Some required fields are missing' });

    next();
  };
  
  module.exports = { isValidEmail }; 