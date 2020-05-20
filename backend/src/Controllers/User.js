import User from '../Models/User';
import bcrypt from 'bcrypt';

const UserController = {
  find: async (req, res) => {
    const users = await User.find({}).lean();
    res.send(users);
  },
  create: async (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
      });
    await user.save(err => {
      if (err) {
        return res.status(400).json({
          title: 'Registration error',
          error: err,
        })
      }
      return res.status(200).json({
        title: 'Registration success',
      })
    });
    res.status(200);
  },
  update: async (req, res) => {
    if(req.isAuthenticated()){
      await User.findOne({ _id: req.user._id}, async (err, user) => {
        if (err) {
          return res.status(500).json({
            title: 'Update error',
            error: err,
          })
        }
        if (req.body.tickets) {
          user.tickets = req.body.tickets;
        }
        await user.save(err => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              title: 'Update error',
              error: err,
            })
          }
          return res.status(200).json({
            title: 'Update Success!',
          })
        })
      })
    } else {
      res.status(302).json({
        title: 'Not authorized!',
      });
    }
  },
}
export default UserController;
