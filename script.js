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
document.writeln('href: ' + window.location.href + '<br>');
document.writeln('hostname: ' + window.location.hostname + '<br>');
document.writeln('origin: ' + window.location.origin + '<br>');
document.writeln('pathname: ' + window.location.pathname + '<br>');
document.writeln('port: ' + window.location.port + '<br>');
document.writeln('protocol: ' + window.location.protocol + '<br>');
document.writeln('search: ' + window.location.search + '<br>');
