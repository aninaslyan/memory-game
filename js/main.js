// Click sound
let clickAudio = document.querySelector("#click");

function clickSound() {
   if ($('ul li a').hasClass('fa-volume-up')) {
      clickAudio.play();
   }
}

$('#loginBtn, #withoutAccount, #usernameInput, #btnFullscreen, #musicBtn, #soundBtn, #passwordInput, #recipient-name, #recipient-pass, #registrationBtn, #restartBtn, #infoBtn, #saveButton, #disabled-input, #disable-btn').on('click', function () {
   clickSound();
});

$('#restartBtn').on('click', function() {
   clickSound();
   setTimeout(() => {
      window.location.href = 'file:///home/reactive/Project/memory-game/pages/game.html'; //change after deployment
   }, 1000)
});

// FULL SCREEN BTN
function toggleFullscreen(elem) {
   elem = elem || document.documentElement;
   if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
         elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
         elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
         elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
         elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
   } else {
      if (document.exitFullscreen) {
         document.exitFullscreen();
      } else if (document.msExitFullscreen) {
         document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
         document.webkitExitFullscreen();
      }
   }
}

$('#btnFullscreen').on("click", function () {
   toggleFullscreen();

   if ($(this).hasClass('fas fa-expand-arrows-alt')) {
      $(this).removeClass('fas fa-expand-arrows-alt');
      $(this).addClass('fas fa-compress-arrows-alt');
   } else {
      $(this).removeClass('fas fa-compress-arrows-alt');
      $(this).addClass('fas fa-expand-arrows-alt');
   }
});

// AUDIO BUTTON

let track = document.querySelector("#track");

$('#musicBtn').on("click", function () {
   if (!track.paused && !track.ended) {
      track.pause();
   } else {
      track.play();
      track.currentTime = 0;
   }

   if ($(this).hasClass('fas fa-music')) {
      $(this).removeClass('fas fa-music');
      $(this).addClass('fa fa-pause');
   } else {
      $(this).removeClass('fa fa-pause');
      $(this).addClass('fas fa-music');
   }
});

// SOUND BUTTON

$('#soundBtn').on("click", function () {
   if ($(this).hasClass('fas fa-volume-up')) {
      $(this).removeClass('fas fa-volume-up');
      $(this).addClass('fas fa-volume-mute');
   } else {
      $(this).removeClass('fas fa-volume-mute');
      $(this).addClass('fas fa-volume-up');
   }
});
