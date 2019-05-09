{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; } // terminates if song isn't playing
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex]; // defines nextSong
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex =  currentSongIndex - 1;
    if (prevSongIndex < 0) { return; }
    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });
}
