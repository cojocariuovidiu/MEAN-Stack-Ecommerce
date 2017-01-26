


const User = require('../models/user.model');

exports.api = function (req, res, next) {
    const user = new User(req.body);
    user.save(function (err) {
        if (err) {
            User.find({ "email": req.body.email, "id": req.body.id }, function (err, users) {

                if (err) {
                    return err;
                } else {
                    User.findOneAndUpdate({ "id": req.body.id }, { "token": req.body.token }, function (err, users) {
                        if (err) {
                            return err;
                        } else {
                            User.find({ "email": req.body.email, "id": req.body.id }, function (err, users) {
                                if (err) {
                                    return err;
                                } else {
                                    res.json(users);
                                    console.log("POST api/user Content = Login " + users);
                                }
                            });
                        }
                    });
                }
            });

        } else {

            User.find({ "email": req.body.email, "id": req.body.id }, function (err, users) {
                if (err) {
                    return err;
                } else {
                    res.json(users);
                    console.log("POST api/user Content = Register " + users);
                }
            });

        }
    });

};
