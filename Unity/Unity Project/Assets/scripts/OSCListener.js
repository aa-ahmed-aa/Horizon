#pragma strict
//Creative Commons
//Licence Creative Commons Attribution - Pas d’Utilisation Commerciale 4.0 International.
//http://lessons.julien-drochon.net
//2014 - Julien Drochon - ESA Pyrenees - Pau
//Atelier Nouveaux Media

//Script permettant de recevoir les messages OSC envoyés par la Kinect via SimpleKinect :
//http://deecerecords.com/kinect/

//Pour que ce script fonctionne, il faut lier les fichiers :
//OSCListenr.js (script), OSC (plugin), et UDPPacket IO (PLugin)
//à la camera principale
	
	
	//déclaration des variables
	//private signifie qu'elles n'apparaissent pas dans les composants de
	//l'interface Unity
	private var UDPHost : String = "127.0.0.1"; //Adresse IP de destination des messages OSC sortants
	private var listenerPort : int = 8000; // Port d'entrée des messages OSC
	private var broadcastPort : int = 57131; // Port des messages OSC sortants
	private var oscHandler : Osc;
	
	//variables mpu 6050
	private var mpu6050_x;
	private var mpu6050_y;
	private var mpu6050_z;
	
	//déclarattion variables GameObject
	var Bird:GameObject;
	
	public function Start () {	//correspond au setup() de Processing
		//initalisation OSC
		var udp : UDPPacketIO = GetComponent("UDPPacketIO");
		udp.init(UDPHost, broadcastPort, listenerPort);
		oscHandler = GetComponent("Osc");
		oscHandler .init(udp);
		//Détermine quelle adresse OSC récupérer, et envoi à la fonction de ce script nommée mpu6050data
		oscHandler.SetAddressHandler("/mpu6050", mpu6050data); 
		//assigner à la variable Bird le game object s'appelant birdbodyDin
		Bird = GameObject.Find("birdbodyDin");
	}
	
	public function mpu6050data(oscMessage : OscMessage) : void	{	//Fonction permettant de récupérer les messages OSC provenant de "/counterTest"
		//obtenir le nom du messag OSC
		//Osc.OscMessageToString(oscMessage);
		//Debug.Log(Osc.OscMessageToString(oscMessage));
		// assignation à la variable mpu6050_x de la 1ere valeur
		//du message /mpu6050
		mpu6050_x = oscMessage.Values[0];
		// assignation à la variable mpu6050_y de la 2e valeur
		//du message /mpu6050
		mpu6050_y = oscMessage.Values[1];
		// assignation à la variable mpu6050_z de la 1ere valeur
		//du message /mpu6050
		mpu6050_z = oscMessage.Values[2];
		//Debug.Log("X : " + oscMessage.Values[0] + " Y : "+ oscMessage.Values[1] + " Z : " + oscMessage.Values[2]);
			} 
	
	
	function Update () {// correspond au draw() de Processing	
		//map valeurs positionZ : 1000 correspond à 220 et 5000 correspond à 974
		//var positionZmap = (positionZuser1 - 1000) / (5000 - 1000) * (974 - 220) + 220;
		//Debug.Log("positionXmap : " + positionXmap);
		Debug.Log(mpu6050_x + " "  + mpu6050_y + " " + mpu6050_z);
		//Bird.transform.position = Vector3(positionXuser1 / 10,0, positionZmap );
		Bird.transform.rotation = Quaternion.Euler(Vector3(mpu6050_y,mpu6050_z,mpu6050_x));
	
	}	
	