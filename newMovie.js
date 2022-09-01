

function showJSON(){
  
  
let name = document.getElementById("mname").value ;
let ids = document.getElementById("ids").value  ;
let description = document.getElementById("des").value ;
let trailer = document.getElementById("trailer").value ;
let thumbnail = document.getElementById("thumbnail").value ;


let not = "/not.html";


let container1 = document.getElementById('main_container1');
let container = document.getElementById('main_container');




container.style.display="none";




let AmPm = "";


let time = new Date();
h = time.getHours();
m = time.getMinutes();




if (h < 10) {
  h = "0" + h;
} else {
  h = h;
};






if (h >= 12) {
  AmPm = "PM";

  if (h > 12) {
    h = h - 12;
  } else {
    h = h;

  }

} else {
  AmPm = "AM";
};








if (m < 10) {
  m = "0" + m;
} else {

  m = time.getMinutes();

};

time = h + ":" + m;

//alert(h + ':' + m)




/*

let name = prompt("Movies Name......", "");
let ids = prompt("Movies Ids......", "");
//let time = prompt("Uploading Time......" , "");
//let AmPm = prompt("Time AM / PM......" , "");
let description = prompt("Movies Description......", "");
let high_q = prompt("Movies High Quality Link......", "");
let medium_q = prompt("Movies Medium Quality Link......", "");
let low_q = prompt("Movies Low Quality Link......", "");
let trailer = prompt("Movies Trailer Link......", "");
let thumbnail = prompt("Movies Thumbnail Link......", "");

*/





if (trailer == "") {
  trailer = not;

}
else {
  trailer = trailer;

}







if (name<=9) {
  name = "0" + name;
} else {
  name = name
}








container1.innerHTML = `
     
             <pre>
             
    {"ChapterNumber": "` + name + `","Ids": "` + ids + `","Time": "` + time + `","Am_Pm": "` + AmPm + `","ChapterName": "` + description + `","Download": "` + trailer + `","Thumbnail": "` + thumbnail + `"},

    </pre> `;
  
  
  
}





