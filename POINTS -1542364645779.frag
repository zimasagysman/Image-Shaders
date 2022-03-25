// Author:	ZiM	
// Title:	POINTS 

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;	
    
    //Define a variable for my value of red
    float red = 0.;
    
    //Create a array containing the coordinates of four diferent points + the mouse
    vec2 points[5];		//5 memory spaces
    points[0] = sin(vec2 (0.6, 0.1)*6.28 + u_time);
    points[1] = sin(vec2 (0.9, 0.4)*6.28 + u_time);
    points[2] = sin(vec2 (0.3, 0.8)*6.28 + u_time);
    points[3] = sin(vec2 (0.2, 0.7)*6.28 + u_time);
    points[4] = u_mouse/u_resolution;
    
    //Create a variable to hold the minimum distance between actual fragment and the closest
    //point from the array called points
    float minimal_distance = 1.;
    
    //A loop calculating the distance between the current fragment and every point from the array
    //Keep only the smallest distance - can detect the closest point to the fragment
    for (int i = 0; i < 5; i++)	{
        //1. What is the distance between the current fragment and the points recorded in the array
        float dist = distance (st, points[i]);
        //2. Using Min function to always keep the smallest value in memory
        minimal_distance = min(minimal_distance, dist);
    }
    //Use the minimal distance value to decided the amount of red for the current fragment
    red = (minimal_distance * 0.4);
    
    //OUtput
    gl_FragColor = vec4 (red, 0., 0.25, 1.);
}