var player1_name=localStorage.getItem("player1_name")
var player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
document.getElementById ("player1_name").innerHTML=player1_name+"="
document.getElementById ("player2_name").innerHTML=player2_name+"="
document.getElementById ("player1_score").innerHTML=player1_score
document.getElementById ("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="Question Turn="+player1_name
document.getElementById("player_answer").innerHTML="Answer Turn="+player2_name
function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase()
console.log(word)
charat1=word.charAt(1)
console.log(charat1) 
length_divid_2=Math.floor(word.length/2);
charat2=word.charAt(length_divid_2)
length_minus_1=word.length-1
charat3=word.charAt(length_minus_1)
removecharat1=word.replace(charat1,"_")
removecharat2=removecharat1.replace(charat2,"_")
removecharat3=removecharat2.replace(charat3,"_")
console.log (removecharat3)
}