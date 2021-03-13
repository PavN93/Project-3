

const auth = (req, res, next) => {
  console.log('auth middleware hit');

  res.status(403).json({
    success: false,
    
  })
}