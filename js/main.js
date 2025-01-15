class Media {
    constructor(author,title,pages){
        this._author = author;
        this._title = title;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get author(){
        return this._author;
    }
    get title(){
        return this._title;
    }
    get pages(){
        return this._pages;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    getAverageRating(){
        let ratingSum = this._ratings.reduce((acc, currentValue) => acc + currentValue, 0);
        const lengthOfArr = this._ratings.length;
        return ratingSum / lengthOfArr;
    }
    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
        return this._isCheckedOut;
    }
    addRating(rating){
        this._ratings.push(rating);
    }
}
class Movie extends Media {
    constructor(director,title,runTine) {
        super(title);
        this._director = director;
        this._title = title;
        this._runTime = runTine;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}
class Cd extends Media {
    constructor(artist,title,song) {
        super(title);
        this._artist = artist;
        this._song = song;
    }
    get song(){
        return this._song;
    }
    get artist(){
        return this._artist;
    }

}
const robot = new Movie('John','The good robot',8);
robot.addRating(3);
robot.addRating(3);
robot.addRating(10);
console.log(robot.getAverageRating());
