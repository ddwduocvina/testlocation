let ventanaEmergente;
function abreVentana(){
    ventanaEmergente = window.open("https://www.duoc.cl","Nombre", "status=yes,resizable=yes,left=0,top=0,fullscreen=yes");
}
function cierraVentana(){
    ventanaEmergente.close();
}
document.write('<hr>');
// atributo location
document.writeln('url: ' + window.location + '<br>');
document.writeln('punto de anclaje: ' + window.location.hash + '<br>');
document.writeln('host: ' + window.location.host + '<br>');
document.writeln('hostname: ' + window.location.hostname + '<br>');