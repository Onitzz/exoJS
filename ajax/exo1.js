jQuery.ajax({
    type: 'GET',
    url: 'http://tp-lens.pary.fr/api/users/',
    crossDomain: true,
    complete: function(rawResponse) {
        console.log("Raw response: ");
        console.log(rawResponse);
        users = rawResponse.responseJSON;
        console.log("Users: ");
        console.log(users);
        users.forEach(function(user) {
            console.log("User: " + user.id);
            console.log(user);
            document.getElementById('body').innerHTML +="<div class=\"user\" id=\"user" + user.id + "\"></div>";
            document.getElementById('user'+user.id).innerHTML +="<a href='#' id='nom"+user.id+"' onclick='afficheUser("+user.id+")'>Nom :"+user.lastname+"</a>";
            document.getElementById('user'+user.id).innerHTML +="<p class='"+user.id+"'><span>Prénom : </span>"+user.firstname+"</p>";
            document.getElementById('user'+user.id).innerHTML +="<p class='"+user.id+"'><span>Email : </span>"+user.email+"</p>";
            document.getElementById('user'+user.id).innerHTML +="<p class='"+user.id+"'><span>Birthday : </span>"+user.birthday+"</p>";
            document.getElementById('user'+user.id).innerHTML +="<p class='"+user.id+"'><span>Sex : </span>"+user.sex+"</p>";
            document.getElementById('user'+user.id).innerHTML +="<p class='"+user.id+"'><span>Github : </span>"+user.github+"</p>";
            document.getElementById('user'+user.id).innerHTML +="<p class='"+user.id+"'><span>Pet : </span>"+user.pet+"</p>";
        });
    },
});

jQuery(document).ready(function(){
  var afficheUser = function(id){
    console.log('hello');
    jQuery("."+id).css("visibility","hidden");
  };
});
