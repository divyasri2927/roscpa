function roscpa(ch1,ch2){
if(ch1==ch2){
  return "its a tie"
}else if(ch1=="rock" && ch2=="scissors"){
  return "rock is win"
}else if(ch1=="scissors" && ch2=="paper" ){
  return "scissors is win"
}else if(ch1=="paper" && ch2=="rock"){
  return "paper is win"
}else if(ch1!=ch2){
  return "input is wrong"
}
}
module.exports={roscpa}