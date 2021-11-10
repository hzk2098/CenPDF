function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "https://github.com/hzk2098/CenPDF/blob/main/click.mp3?raw=true";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}