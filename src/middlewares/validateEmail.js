const isValidEmail = (req, res) => {
    const { email } = req.body;
  
    if (
      email === undefined 
      || email.length === 0
    ) return res.status(400).json({ message: 'Some required fields are missing' });
    if (
      !email.includes('@')
      || !email.includes('.com')
    ) return res.status(400).json({ message: 'Some required fields are missing' });
  };
  
  module.exports = { isValidEmail }; 