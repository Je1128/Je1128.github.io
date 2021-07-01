/* .js files add interaction to your website */

var factList = [
  "10% percent of Asian Americans and Pacific Islander adults have experienced hate crimes and hate incidents in 2021, which is higher than the national average of 6 percent.",/*0*/
  "AAPI people of East Asian national origin, like Chinese, Japanese and Korean Americans reported the highest levels of abuse or property damage (43%).",/*1*/
  "The majority of APPI hate incidents -- about 65.2% -- were cases of verbal harassment, while shunning or avoidance made up about 18.1%. About 12.6% of the incidents involved physical assaults.",/*2*/
  "The majority of APPI hate incidents --64.8% were reported by women.",/*3*/
  "There were at least 2,410 anti-Asian hate incidents in the first three months of 2021.",/*4*/
  "Anti-Asian hate crimes increased by nearly 150% in 2020, mostly in N.Y. and L.A.."];/*5*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
