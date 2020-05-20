import Route from '../Models/Route';

const RouteController = {
  find: async (req, res) => {
    const routes = await Route.find({}).lean();
    res.send(routes);
  },
  create: async (req, res) => {
    const route = new Route({
      area: req.body.area,
      start: req.body.start,
      end: req.body.end
    });
    await route.save();
    res.redirect('/routes');
  }   
}
export default RouteController;
