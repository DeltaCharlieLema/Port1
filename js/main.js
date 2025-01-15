class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title(){
        return this._title;
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
        this._runTime = runTine;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}
class Book extends Media {
    constructor(author,title,pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
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
