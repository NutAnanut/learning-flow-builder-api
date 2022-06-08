exports.checkIden = async (req, res, next) => {
    try {
      return res.status(200).json({
        user: {
          id: '3001',
          iden: true
        },
      });
    } catch (error) {
      next(error);
    }
  };