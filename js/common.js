//detect OS
var ua = navigator.userAgent;
var checker = {
iphone: ua.match(/(iPhone|iPod|iPad)/),
android: ua.match(/Android/)
};

function CheckCurrentDevice()
{
    var curLink = "";

    if (checker.android)
        curLink = "android" ; 
    else if (checker.iphone) 
        curLink = "iphone" ; 
    else 
        curLink = "bower" ; 

    return curLink;
}

//get querystring value by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//number padding zeros
function pad(number, length)
{
  var str = '' + number;
  while (str.length < length) {
      str = '0' + str;
  }
  return str;
}

//fb sharer
function fbSharer(fbAppId, picUrl, name, description, url)
{
  var shareUrl = 'http://www.facebook.com/sharer.php?m2w&s=100&p[title]='+encodeURIComponent(name)+'&p[url]='+encodeURIComponent(url)+'&p[summary]='+encodeURIComponent(description)+'&p[images][0]='+encodeURIComponent(picUrl);
  window.open(shareUrl,'','width=550,height=350,menubar=no,status=no');
}

//generate random number
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Pixi.js extension: draw simple shape
try
{
    PIXI.Texture.Draw = function (cb) {
      var canvas = document.createElement('canvas');
      if (typeof cb == 'function') cb(canvas);
      return PIXI.Texture.fromCanvas(canvas);
    }
}catch( e )
{
    
}

function addCommas(nStr)
{
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
}
