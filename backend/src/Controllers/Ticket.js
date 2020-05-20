import Ticket from '../Models/Ticket';

const TicketController = {
  find: async (req, res) => {
    const tickets = await Ticket.find({}).lean();
    res.send(tickets);
  },
  create: async (req, res) => {
    const ticket = new Ticket({
      title: req.body.title,
      date: req.body.date,
      price: req.body.price
    });
    await ticket.save();
    res.redirect('/tickets');
  },
  my_tickets: async (req, res) => {
    if (req.isAuthenticated()) {
      try {
        const records = await Ticket.find().where('_id').in(req.body.ids).exec();
        res.send(records)
      } catch (e) {
        res.status(500).json({
          title: 'Tickets fetch error',
          error: e,
        })
      }
    } else {
      res.status(302).json({
        title: 'Not authorized',
      })
    }
  },
}
export default TicketController;
