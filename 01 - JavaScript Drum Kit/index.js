window.addEventListener('keydown', function (e) {
  console.log('keydown event.keyCode: ', e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function

  console.log('audio: ', audio);

  audio.play();

});
