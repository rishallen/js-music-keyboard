  // your code here
$(document).ready( function() {
  // console.log("this is a test");

  var container = $('.instrument');
  // console.log(container);
  var buttons = container.children('button.note');

    buttons.on('click', function(event) {
    event.preventDefault();

    function playNote(id) {
      document.getElementById(id).load();
      document.getElementById(id).play();
    }

    var button = $(this);
    if (button.hasClass('c')) {
      playNote("cAudio");
      // console.log('c');
    } else if (button.hasClass('d')){
        playNote("dAudio");
    } else if (button.hasClass('e')){
        playNote("eAudio");
    } else if (button.hasClass('f')){
        playNote("fAudio");
    } else if (button.hasClass('g')){
        playNote("gAudio");
    } else if (button.hasClass('a')){
        playNote("aAudio");
    } else if (button.hasClass('b')){
        playNote("bAudio");
    }
  });
});
