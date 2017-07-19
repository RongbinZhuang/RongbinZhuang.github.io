// variable define
  // array define
  var headBtn=new Array([]);
  var headBtnText=new Array("Profile","Blog","Project","Connect");
  var headDiv=new Array([]);

  // element define
  var header=document.createElement("header");
  var Title=document.createTextNode("Homepage of Zhuang");
// header.appendChild()

headDiv[0]=document.createElement("headDiv");
headDiv[1]=document.createElement("headDiv");


headDiv[0].appendChild(Title);

for (var idx in headBtnText){
  headBtn[idx]=document.createElement("button");
  headBtn[idx].className="headButton";
  headBtn[idx].appendChild(document.createTextNode(headBtnText[idx]));
  headDiv[1].appendChild(headBtn[idx]);
}

headDiv[0].style="float:left;";
headDiv[1].style="float:right;";

// window.alert("check");
// link the elemen
header.appendChild(headDiv[0]);
header.appendChild(headDiv[1]);

document.body.appendChild(header);
