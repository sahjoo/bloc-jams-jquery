class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(player.prettyTime(totalTime));
  }
}

const helper = new Helper();
