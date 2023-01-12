const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/User')


// saving user object in the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


// sign up user:
passport.use('local.signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    if (req.body.password != req.body.confirm_password) {
        return done(null, false, req.flash('error', 'Passwords do not match'))
    } else {
        User.findOne({ email: username }, (err, user) => {
            if (err) {
                return done(err)
            }
            if (user) {
                return done(null, false, req.flash('error', 'Email already used'))
            }

            if (!user) {
                //create user
                let newUser = new User()
                newUser.email = req.body.email
                newUser.password = newUser.hashPassword(req.body.password)
                newUser.avatar = "profile.png"
                newUser.save((err, user) => {
                    if (!err) {
                        return done(null, user, req.flash('success', 'User Added'))
                    } else {
                        console.log(err)
                    }
                })
            }
        })
    }
}))



// login user:
passport.use('local.login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {

    // find user:
    User.findOne({ email: username }, (err, user) => {
        if (err) {
            return done(null, false, req.flash('error', 'Something wrong happened'))
        }
        if (!user) {
            return done(null, false, req.flash('error', 'User was not found'))
        }
        if (user) {
            if (user.comparePasswords(password, user.password)) {
                return done(null, user, req.flash('success', 'Welcome Back'))
            } else {
                return done(null, false, req.flash('error', 'Password is wrong'))
            }
        }
    })
}))