class Song {
    constructor (typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}

function buildPlaylist(input) {
    // container for all songs
    let songs = [];

    let numberOfSongs = input.shift();
    let typeSong = input.pop();
    //FIXME:
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song)
    }
    console.log(songs);
}

buildPlaylist([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])