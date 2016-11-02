var newFriends = require('../data/friend.js');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(newFriends);
  });

  app.post('/api/friends', function(req, res) {
    var friendScores = req.body.scores;
    var scoresList = [];
    var friendCounter = 0;
    var friendMacth = 0;

    for (var i = 0; i < newFriends.length; i++) {
     var scoresDiff = 0;

     for(var a = 0; a <newFriendScores.length; j++){
     scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
     }

    scoresList.push(scoresDiff);
  }
   for (var i = 0; i < scoresList.length; i++) {
     if(scoresArray[i] <= scoresArray[friendCounter]){
       friendCounter = i;
     }
   }
    res.json(newFriends[friendMacth]);
    newFriends.push(req.body);
  });
};
