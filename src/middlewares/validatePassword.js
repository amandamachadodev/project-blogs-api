const isValidPassword = (req, res) => {
    const { password } = req.body;
  
    if (
      password === undefined 
      || password.length === 0
    ) return res.status(400).json({ message: 'Some required fields are missing' });
    if (
      password.length < 6
    ) return res.status(400).json({ message: 'Some required fields are missing' });
  };
  
  module.exports = { isValidPassword }; 