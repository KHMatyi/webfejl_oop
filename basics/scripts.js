class Player{
    playedMatch = 0;
    constructor(nickname){
        this.nickname = nickname;
    }

    play(){
        this.playedMatch += 1;
        console.log(this.nickname + " " + this.playedMatch);
    }

    getTier(){
        if (this.playedMatch < 4){
            return 'A';
        } else if (this.playedMatch < 7){
            return 'B';
        } else {
            return 'C';
        }
    }
}

function Person(name,){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

function Student(name, school){
    
}
Object.setPrototypeOf(Student.prototype,Person.prototype)




/*
function Player(nickname, ){
    this.nickname = nickname;   
    this.playedMatch = 0;
}
Player.prototype.play = function(){
    this.playedMatch += 1;
    console.log(this.nickname + " " + this.playedMatch);
}
Player.prototype.getTier = function(){
    if (this.playedMatch < 4){
        return 'A';
    } else if (this.playedMatch < 7){
        return 'B';
    } else {
        return 'C';
    }
}
*/
const gom = new Player("gomszab");

console.log(gom);
gom.play()
gom.play()
gom.play()
gom.play()

console.log(gom.getTier())