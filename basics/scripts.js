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
const gom = new Player("gomszab");

console.log(gom);
gom.play()
gom.play()
gom.play()
gom.play()

console.log(gom.getTier())