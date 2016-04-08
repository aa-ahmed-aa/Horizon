import processing.serial.*;
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;


Serial myPort;

float rx, ry, rz, resetx, resety, resetz;
void setup() {

  size(200, 200);

  printArray( Serial.list() ); 
  myPort = new Serial( this, Serial.list()[3], 115200 );
  myPort.clear();

  oscP5 = new OscP5(this, 9000);

  myRemoteLocation = new NetAddress("127.0.0.1", 8000);
}

void draw() {
  background(0);
  while ( myPort.available () > 0 ) {
    String data = myPort.readStringUntil( '\n' );
    if ( data != null ) {
      println( data );
      //ypr  -78.76  60.49  -1.87
      String[] tmp = splitTokens(data, "\t");
      // splitTokens separate data for analyse uses, as in original data "\t" was used for separation as here.
      if (tmp.length == 4) {
        rx = parseFloat(tmp[1]);
        ry = parseFloat(tmp[2]);
        rz = parseFloat(tmp[3]);
        // println("rw : " + rw); //debug
        //pour debugger les valeurs instables envoyées par le mpu6050 pendant les 20
        //premières secondes
        if (millis() > 20000 && millis() <30000) {
          text("Initialisation : ok", 10, height-10);
          resetx= rx;
          resety=ry;
          resetz=rz;
        }
      }
    }
  }

  //pour lire les valeurs
  text("rotation selon axe x : " + rx, 10, 10);
  text("rotation selon axe y : " + ry, 10, 60);
  text("rotation selon axe z : " + rz, 10, 110);
  //valeur d'initialisation 
  text("valeur reset axe x : " + (rx-resetx), 10, 30);
  text("valeur reset  axe y : " + (ry-resety), 10, 80);
  text("valeur reset  axe z : " + (rz-resetz), 10, 130);


  //on créee un message osc avec l'adress pattern '/positionsCurseur'
  OscMessage myMessage = new OscMessage("/mpu6050");
  //et on ajoute la valeur de la poisition X et position Y du curseur de la souris sur la scene du sketch au message
  myMessage.add(rx-resetx); 
  myMessage.add(ry-resety); 
  myMessage.add(rz-resetz); 

  //on envoie le message
  oscP5.send(myMessage, myRemoteLocation);
}