module.exports.homePage = function(req, res) {
    return res.render('homePage', {
        title: 'ToDo App'
    });
    // res.end('<h1 style = "color: green">Hey, I am a homePage controller</h1> ');
}

// module.exports.actionName = function(req, res){};