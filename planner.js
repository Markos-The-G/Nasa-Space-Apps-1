function arrayRemove(arr, value) {

  return arr.filter(function (ele) {
    return ele != value;
  });

}






var classtags = ['plutino', 'cubewano', 'Centaur', 'Damocloid', 'res1:2', 'otherTNO', 'unusual', 'SDO', 'res3:5', 'res4:7', 'res3:4', 'Apollo', 'res5:9', 'res2:5', 'res4:9', 'NepTrjL4', 'res3:7', 'ESDO', 'res4:5', 'res1:4', 'Haumea', 'res2:9', 'res1:3', 'res2:7', 'res2:11', 'res3:10', 'res1:5', 'res1:9', 'NepTrjL5', 'res4:13', 'EDDO', 'res6:11', 'res5:12', 'Amor', 'UraTrjL4', 'res1:6', 'Sednoid', 'res3:8', 'res3:11', 'res7:12', 'NepL4', 'res4:11'];

var classtagbool = [];
var checkedclasses = [];

for (i = 0; i < (classtags.length); i++) {
  tag = document.createElement("li");
  tag.className = "classtagbutton";
  tag.textContent = classtags[i];
  tag.onclick = function () { filterboolcheck(this); };

  document.getElementById("classtagsul").append(tag);
  tempdict = [];
  tempdict[tag] = false;
  classtagbool.push(tempdict);
  /*
  x = classtags[i];
  tempdict = []
  tempdict[x] = false;
  classtagbool.push(tempdict);
  */
}
//console.log(classtagbool)

function filterboolcheck(hi) {

  //console.log(classtags.indexOf(hi.textContent));
  //console.log(classtagbool[classtags.indexOf(hi.textContent)]);
  if (classtagbool[classtags.indexOf(hi.textContent)][hi] == false) {
    //console.log(classtagbool[classtags.indexOf(hi.textContent)][hi]);
    classtagbool[classtags.indexOf(hi.textContent)][hi] = true;
    hi.className = "classtagbuttonop";
    checkedclasses.push(hi.textContent);
  } else {
    classtagbool[classtags.indexOf(hi.textContent)][hi] = false;
    hi.className = "classtagbutton";
    //checkedclasses.remove(hi.textContent);
    checkedclasses = arrayRemove(checkedclasses, hi.textContent);
  }

  //console.log(classtagbool[0]);
  /*
      if (classtag.style.background != "rgb(17, 32, 194)"){
          classtag.style.background = "rgb(17, 32, 194)";
          classtag.style.color = "black";
          classtag:hover.style.color = "rgb(115, 126, 250)";
      }else{
          classtag.style.background = "rgb(115, 126, 250)";
          classtag.style.color = "white";
      }
  
  */




  /*
  for (i = 0; i < (classtagbool.length); i++){
      console.log(classtagbool[i]);
      if (classtagbool[i] == classtag.textContent){
          x = i;
          console.log(x)
          break;
      };
  };
  console.log(x)
  console.log(classtagbool[x]);
  */
}

function appendToDash(text) {
  console.log("Append to dash", text);
  var para = document.createElement("P");
  para.innerHTML = text;
  console.log("para", para);
  console.log("DGEBI", document.getElementById("purchases"));
  document.getElementById("purchases").appendChild(para);
}

function search() {
  var ul = document.getElementById("objecttagsul");
  while ((lis = ul.getElementsByTagName("li")).length > 0) {
    ul.removeChild(lis[0]);
  }

  alertList = [];

  s = document.getElementById('sorting');
  sortingopt = (s[s.selectedIndex].text);


  if (sortingopt == "Date of Discovery (Low to High)" || sortingopt == "Size (Low to High)" || sortingopt == "Distance (Low to High)") {

    if (sortingopt == "Date of Discovery (Low to High)") {
      sort = "byDate";
    }
    if (sortingopt == "Size (Low to High)") {
      sort = "byDiameter";
    }
    if (sortingopt == "Distance (Low to High)") {
      sort = "byDistance";
    }

    firebase.database().ref('Data/' + sort).once('value').then(function (snapshot) {
      //console.log(snapshot.val())
      //console.log("hi");

      obsMax = 35;
      obs = 0;
      window.tempArr = [];
      while (obs < obsMax) {
        for (i = 0; i < snapshot.val().length && obs < obsMax; i++) {
          // console.log(i);
          const keys = Object.keys(snapshot.val()[i]);
          if (sort == "byDistance") {
            const templinkkey = Object.keys(snapshot.val()[i][keys]);
            linkkey = templinkkey[7];
            console.log(linkkey);
          }
          for (w = 0; w < (checkedclasses.length) && obs < obsMax; w++) {
            //console.log(checkedclasses[w]);
            if (snapshot.val()[i][keys][2] == checkedclasses[w]) {
              obs++;

              obj = document.createElement("li");
              obj.className = "object-li";
              obj.textContent = snapshot.val()[i][keys][0] + " " + snapshot.val()[i][keys][1];
              obj.entireThing = snapshot.val()[i][keys];
              alertList.push(snapshot.val()[i][keys]);
              //console.log(snapshot.val()[i][keys]);

              window.temptempArr = [];

              temptempArr.push(snapshot.val()[i][keys]);
              console.log(tempArr[0]);
              window.contentText;
              tempArr.push(temptempArr[0]);
              obj.onclick = function () {

                contentText = this.textContent;
                console.log(contentText);
                for (t = 0; t < 35; t++) {
                  console.log(tempArr[t]);
                  yeet = tempArr[t][0] + " " + tempArr[t][1];
                  console.log(t);
                  if (contentText == yeet) {
                    console.log(t);
                    var myURL = 'http://www.strudel.org.uk/lookUP/?name=s1+s2';
                    var tempURL = myURL.replace('s1', tempArr[t][0]);
                    var validURL = tempURL.replace('s2', tempArr[t][1]);

                    var displayText = tempArr[t][0] + ' ' + tempArr[t][1] + ' ' + tempArr[t][2] + '\n' + 'Distance from Earth (AU): ' + tempArr[t][3] + '\n' + 'Diameter (KM): ' + tempArr[t][4] + '\n' + 'Year and month discovered: ' + tempArr[t][5] + ' ' + tempArr[t][6] + '\n' + 'link to information\n' + validURL;

                    alert(displayText);
                    appendToDash(displayText);
                  }
                }

              };



              //console.log(snapshot.val()[i][obs]);
              //obj.onclick = function(){ alert(alertList[9])};
              //obj.onclick = function(){alert(alertfind(this))};

              document.getElementById("objecttagsul").append(obj);



              // obj.onClick = "alert(snapshot.val()[i][keys])";
              // console.log(obj);

              // console.log(snapshot.val()[i][keys][0], snapshot.val()[i][keys][1]);
              // console.log(snapshot.val()[i][keys]);
              //console.log("hi");
              //createobject(snapshot.val()[i][keys][0], snapshot.val()[i][keys][1]);
            }

          }
          //console.log(snapshot.val()[i][keys][3]);
        }
      }
    });
  }
}

/*
function alertfind(this){
    return this.getAttribute("src");
}
*/









/*
function search(){
    firebase.database().ref('Data/byDate').once('value').then(function(snapshot){
        //console.log(snapshot.val())
        for (i = 0; i < snapshot.val().length; i++){
            const keys = Object.keys(snapshot.val()[i]);
            for (w = 0; w < (checkedclasses.length); w++){
                //console.log(checkedclasses[w]);
                if(snapshot.val()[i][keys][2] == checkedclasses[w]){

                    obj = document.createElement("li");
                    obj.className = "object-li";
                    obj.textContent = snapshot.val()[i][keys][0];
                    document.getElementById("objecttagsul").append(obj); 




                    console.log(snapshot.val()[i][keys][0], snapshot.val()[i][keys][1]);
                    //console.log("hi");
                    //createobject(snapshot.val()[i][keys][0], snapshot.val()[i][keys][1]);
                };
            };
          //console.log(snapshot.val()[i][keys][3]);
        };
      });
};
*/
/*
function createobject(x,y){
    console.log("hi");
    obj = document.createElement("li");
    obj.className = "object-li";
    obj.textContent = x;
    document.getElementById("objecttagsul").append(obj); 

};*/