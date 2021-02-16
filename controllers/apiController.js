module.exports = {
  landingPage: (req, res) => {
    const message = 'Hello world!';
    res.status(200).json({ message });
  },
};
