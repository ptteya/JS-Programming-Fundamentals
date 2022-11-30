function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songsNum = arr.shift();
    let type = arr.pop();
    for (let i = 0; i < songsNum; i++) {
        let [typeList, name, time] = arr[i].split("_");
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (type === "all") {
        songs.forEach((s) => console.log(s.name));
    } else {
        let filtered = songs.filter((s) => s.typeList === type);
        filtered.forEach((s) => console.log(s.name));
    }
}
songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);