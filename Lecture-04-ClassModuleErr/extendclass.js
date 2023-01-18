class media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class song extends media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}

const mySong = new song({
    artist: "Three Man Down",
    name: "ข้างกัน",
    publishDate: 2020
});

console.log(mySong);