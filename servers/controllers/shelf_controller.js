module.exports = {
  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_shelves()
      .then( Shelves => res.status(200).send( Shelves ) )
      .catch( () => res.status(500).send() );
  },
};
