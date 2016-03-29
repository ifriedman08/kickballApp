almostClassy = {
  roster: [
    "Aaron M.",
    "Ivan F.",
    "Nathalie L.S.",
    "Tyler J.",
    "Dave H.",
    "Anne B.",
    "Sophie N.",
    "Annie O.",
    "Natalie G.",
    "Joe G.",
    "Natalie K.",
    "Jacob B.",
    "Naomi B.",
    "Stephanie A.",
    "Jon A.",
    "Felix D.",
    "Sam W.",
  ]
};

var list = $('<ul class="playerSelectorList">');
$('#main').append(list);

almostClassy.roster.forEach(function (player) {
  var listItem = $("<li class='playerItem absent'>");
  listItem.text(player);
  $('.playerSelectorList').append(listItem);
})

$('.playerSelectorList').prepend($("<button class='submitPlayers'>DONE</button>"));
$('.playerSelectorList').append($("<button class='submitPlayers'>DONE</button>"));

$('li.playerItem').click(function () {
  $(this).toggleClass('present');
  $(this).toggleClass('absent');
})

$('.submitPlayers').click(function () {
  var presentArray = [];
  var absentArray = [];
  $('.playerItem.present').each(function(){
    presentArray.push(this.innerText);
  })
  $('.playerItem.absent').each(function(){
    absentArray.push(this.innerText);
  })
  almostClassy.presentPlayers = (shuffle(presentArray));
  almostClassy.absentPlayers = (shuffle(absentArray));
  localStorage.setItem('absent' , almostClassy.absentPlayers)
  localStorage.setItem('present' , almostClassy.presentPlayers)
  localStorage.setItem('fullRoster' , almostClassy.roster)
  window.open('confirmation.html',"_self")
  localStorage.setItem('currentGame', true);
})
