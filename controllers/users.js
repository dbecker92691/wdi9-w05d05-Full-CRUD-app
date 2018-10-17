const express = require('express');
const router = express.Router();

const User = require('../models/users');

// user index
router.get('/', (req, res) => {
    User.find({}, (err, foundUsers) => {
        if(err){
            console.log(err, "this is the error")
        } else {
            console.log(foundUsers, "these are our users")
            res.render('users/index.ejs', {
                users: foundUsers
            })  
        }
    });
});

// user new
router.get('/new', (req, res) => {
    res.render('users/new.ejs');
})


router.post('/', (req, res) => {
    User.create(req.body, (err, createUser) => {
        if(err){
            console.log(err)
        } else {
            res.redirect('/users')
        }
    })
})

// user show
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUsers) => {
        console.log(foundUsers, "Here is our user!!!!")
        res.render('users/show.ejs', {
            users: foundUsers

        });
    });
});


// user edit
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id, (err, editUser) => {
        res.render('users/edit.ejs', {
            users: editUser,
        });
    });
});

router.post('/:id', (req, res)=>{
    console.log(req.body)
    User.findByIdAndUpdate(req.params.id, req.body, (err, editUser)=>{
        res.redirect(`/users/`)
    })
})


// delete user

router.delete('/:id', (req, res) => {
    console.log(req.body, 'req dat body')
    User.findByIdAndDelete(req.body.id, (err, deleteUser) => {
      console.log(deleteUser, "get the fuck out bro")
      res.redirect('/users');
    });
  });







module.exports = router;