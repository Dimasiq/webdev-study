import { Router } from 'express';
import passport from 'passport';

import TicketController from './Controllers/Ticket';
import RouteController from './Controllers/Route';
import UserController from './Controllers/User';

const router = Router();

router.get('/', (req, res) => {
  if(req.isAuthenticated()){
    res.send(req.user)
  } else {
    res.send('index')
  }
});

router.get('/tickets', TicketController.find);
router.post('/ticket', TicketController.create);
router.post('/my_tickets', TicketController.my_tickets);

router.get('/routes', RouteController.find);
router.post('/route', RouteController.create);

router.get('/users', UserController.find);
router.post('/user', UserController.create);
router.put('/user', UserController.update);

router.get('/login', (req, res) => {
  res.send('Login page!')
});
router.post('/login', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login', failureFlash: false }), (req, res) => {console.log(req)});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) res.send('Error!')
    req.logout()
    res.send('Logged out');
  });
});

router.get('/dashboard', (req, res) => {
  if(req.isAuthenticated()){
    res.send(req.user)
  } else {
    res.send('Not authenticated');
  }
})

export default router;
