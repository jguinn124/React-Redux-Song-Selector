
//action cre
export const selectSong = song => {
	// return in action
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

