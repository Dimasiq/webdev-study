import bcrypt from 'bcrypt';

import User from './Models/User';

const auth = {
  strategy: (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          return done(null, false, { message: 'Password check error.' });
        }
        if (!result) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });            
    });
  },

  serialize: (user, done) => {
    done(null, user._id);
  },

  deserialize: (id, done) => {
    User.findById(id, function(err, user) {
      done(err, user);
    })
  }
}
export default auth;
