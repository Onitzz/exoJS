jQuery.ajax({
    type: 'GET',
    url: 'http://tp-lens.pary.fr/api/users/',
    crossDomain: true,
    complete: function(rawResponse) {
        console.log(rawResponse);
        users = rawResponse.responseJSON;
        users.forEach(function(user) {
            document.getElementById('body').innerHTML +="<div id='user" + user.id + "'><a href=\"\" onclick='afficheUser("+user.id+")'>" + user.firstname + "</a><div>";
        });
    },
});


var afficheUser = function(id){
  jQuery.ajax({
      type: 'GET',
      url: 'http://tp-lens.pary.fr/api/users/'+id,
      crossDomain: true,
      complete: function(rawResponse) {
          console.log(id);
          console.log("Raw response: ");
          console.log(rawResponse);
          user = rawResponse.responseJSON;
          console.log("User: ");
          console.log(user);
      },
  });
};
