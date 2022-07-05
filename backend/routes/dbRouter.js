var express = require('express');
var dbRouter = express.Router();
var db = require('./db');


//user 조회 관련
dbRouter.post('/users/inquire', function(req, res, next) {
    // console.log('서버 쿼리')

    var gb = req.body.gb;

    if(gb === 'signup') {

        var signupData  = [ 
            req.body.user_id,
            req.body.user_password,
            req.body.user_name,
            req.body.user_nickname,
        ];  

        db.query("INSERT INTO user_data (user_id, user_password, user_name, user_nickname) VALUES (?,?,?,?);", signupData, function(err, result) {
            if(err) {
                console.log(err);
                return;
                // throw err;
            } 

            res.status(200).send('success');


        });
    }


    if(gb === 'login') {

        var loginData  = {
            user_id : req.body.user_id,
            user_password : req.body.user_password,
        };  

        db.query("SELECT * FROM user_data where user_id = ?", [loginData.user_id], function(err, data) {

            if(err) {
                console.log(err);
                return;
                // throw err;
            } 

            //로그인 성공
            if(loginData.user_id === data[0].user_id && loginData.user_password === data[0].user_password) {
                
                res.status(200).json({
                    status: 'success',
                    user_data : {
                        user_id : data[0].user_id,
                        user_password : data[0].user_password,
                    },
                });
            } 
            //로그인 실패
            else {
                res.status(200).json({
                    status: 'fail',
                    msg : '로그인 실패. 아이디와 비밀번호를 확인해주세요',
                })
            }
        });
    }

    if(gb === 'inquire') {
        var userList = [];

        db.query("SELECT * FROM user_data", function(err, data) {
            if(err) {
                console.log(err);
                return;
                // throw err;
            }

            else {

                for (var element of data) {
                    userList.push(element)
                }
                // console.log(userList);

                res.status(200).json({
                    status: 'success',
                    userList : data,
                })
            }

        })
    }

})


dbRouter.post('/user/data', function(req, res){

    var userData  = {
        user_id : req.body.user_id,
    };  

    console.log('db'+userData.user_id);
    db.query("SELECT * FROM user_data where user_id = ?",[userData.user_id],  function(err, data){
        if(err) {
            console.log(err);
            return;
            // throw err;
        }

        if(res.statusCode === 200) {

            console.log('req data: ' + data);

            res.status(200).json({
                status: 'success',
                user_data : {
                    user_id : data[0].user_id,
                    user_password : data[0].user_password,
                    user_name : data[0].user_name,
                    user_nickname : data[0].user_nickname,
                },
            });
        }
    }) 
});



module.exports = dbRouter;