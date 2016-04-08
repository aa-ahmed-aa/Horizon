using UnityEngine;
using System.Collections;

public class Rotate : MonoBehaviour {
	public float yRotation = 0.0F;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		transform.eulerAngles = new Vector3(90, yRotation, 0);
		yRotation++;
	}
}
