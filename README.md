#Description 
this is VR Game using gyroscope to move live object in the game the game is on the pc but it uses the mobile as camera the graphic is rendered on pc and sent to mobile and take mobile rotation and move the scene camera as as it rotates.<br>
#hardware you will need 
1- arduino uno <br>
2- Gyroscope mpu6050 you can find arduino and gyro at http://store.fut-electronics.com/ or  http://ram-e-shop.com/oscmax/catalog/ <br>
3-google cardboard you can find it at https://www.jumia.ma/ar/catalog/?q=virtual+Reality+ <br>




# preparing you mobile and Laptop/PC
you should install these software
<h3>PC</h3>
	1- unity 5.0 
	2- arduino 
	3- processing 
	4- TrinusVR 
<h3>Mobile</h3>
	1- TrinusVR 

	
	
	
#setting up the Game 
1-first you need to make the gyroscope work and take values for the rotation live 
-connect the gryo with arduino 
![Alt text](https://github.com/aa-ahmed-aa/Horizon/blob/master/Gyro.png "Optional title")
-open (Arduino Sketch) folder and upload the code in the file to arduino
-open (Processing Sketch) folder and run the script you chould see the values of the gyro start to change according to your gyro rotation

2-goto Unity\Unity Project\Assets and open scene4.unity
and press the play button 

#Fun Work (Optimal)
on how to make the camera hierarchy and get to unity Scripts check the <a href="https://github.com/aa-ahmed-aa/Horizon/blob/master/Depth/QuideME.txt">QuideMe</a> 
<img src="https://github.com/aa-ahmed-aa/Horizon/blob/master/hierarchy.png">
