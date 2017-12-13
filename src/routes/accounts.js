const ObjectID = require('mongodb').ObjectID;

module.exports = {
  retrieveAccounts(req, res) {
    const collection = req.db.db('edx-course-db').collection('accounts');

    collection.find({}, { sort: { _id: 1 } })
      .toArray((error, results) => {
        if (error) console.log(error);

        res.status(200).send(results);
      })
  },

  insertAccount(req, res) {
    const newAccount = req.body;
    const collection = req.db.db('edx-course-db').collection('accounts');

    collection.insert(newAccount, (error, results) => {
      if (error) console.log(error);

      res.status(200).send(results);
    });
  },

  updateAccount(req, res) {
    const accountId = req.params.id;
    const updatedAccount = req.body;
    const collection = req.db.db('edx-course-db').collection('accounts');

    collection.update({ _id: ObjectID(accountId) }, { $set: updatedAccount }, (error, results) => {
      if (error) console.log(error);

      res.status(200).send(results);
    });
  },

  removeAccount(req, res) {
    const accountId = req.params.id;
    const collection = req.db.db('edx-course-db').collection('accounts');

    collection.remove({ _id: ObjectID(accountId) }, (error, results) => {
      if (error) console.log(error);

      res.status(200).send(results);
    });
  }
};
