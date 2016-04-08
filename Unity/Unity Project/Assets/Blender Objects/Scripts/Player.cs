using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour {
	public GameObject target ; 

	// Use this for initialization
	void Start () {
		target = GameObject.FindWithTag("Player");
	}
	
	// Update is called once per frame
	void Update () {
		transform.localEulerAngles = new Vector3(target.transform.localEulerAngles.x,target.transform.localEulerAngles.y,target.transform.localEulerAngles.z);
	}
}
