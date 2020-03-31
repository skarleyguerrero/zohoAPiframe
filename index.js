zohoApp = "cfinancial";
zohoListView = "AP_Report";
zohoFormName = "AP";
var criteria = "accountNumber=123";


//var corsURL = "https://cors-anywhere.herokuapp.com/"
var zohoURL = "https://creator.zoho.com/api/json/"+zohoApp + "/view/"+zohoListView;
var authToken = "dfb0683acaad89a9c122273c175a6cee";


var myHeaders = new Headers();
myHeaders.append("Cookie", "a4c02fa025=eb0c86c949abb5888ae844667cf23763; zccpn=3094fcd4-873d-471f-87e0-2dbe49f0b3b1; JSESSIONID=49270504B001682A5B625D8539EF48C8; ZCNEWLIVEUI=false");

var requestOptions = {
  method: 'GET'
};

let dataObj;
fetch(zohoURL+"?authtoken="+ authToken + "&criteria=" + criteria + "&raw=true", requestOptions)

  .then(data => data.json())
  .then(data => {
      dataObj = data[zohoFormName][0];
      console.log(dataObj);    
      let columnTwo = document.getElementById("columnTwo");
      columnTwo.innerHTML = "<div><iframe id=\"workDriveFrame\" src=\"https://workdrive.zoho.com/folder/fklv0de2d0c8317d3441ba2ac34ad204e7ba2\" scrolling=\"yes\" frameborder=\"0\" allowfullscreen=true width=\"800\" height=\"950px\" ></iframe></div>"      
    })

    //
      //var docUrl = "http://docs.google.com/viewer?url=https://creatorexport.zoho.com/mycamservices/cfinancial/AP_Report/3943114000000108003/fileUpload/download?filepath=/1585623412393_zoho_invoice.pdf/JMSQnYZ9y6QZa1PQmmub6957hAKT1wB0Stpsk2nQQpHVEDv4EsTS0M5y0gtaVT8urqyvUU9EdSP0uDgC7BsxyU1KkuD0hrSAjhhN";
     // var docURL = "https://workdrive.zoho.com/home/teams/ixme94eb09549ebf741ef80d9b171511dbf6f/ws/ixme9e438fbcb9d154e91b5d3738629ee639f/folders/files";
    
  .catch(error => console.log('error Skarley', error));

  //var iframe = document.getElementsByID('workDriveFrame');
    
    var iframe = document.getElementsById('workDriveFrame');
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    innerDoc.getElementsByClassName("ui menu secondary fluid").style.display = "none";
