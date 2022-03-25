// Author:	ZiM
// Title:	Plasma FINAL

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265359

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    //A value calculated for each pixel
    float v = 10.;
    float sc = 5.;
    
    //v += sin (st.x * sc + u_time);
    //v += sin (st.y * sc + u_time) / 0.5;
    
    v += sin(sc * (st.x + st.y + u_time)) / 2.;
    
    st += vec2(sin(u_time) / 2., cos(u_time) / 2.);
    
    v += sin(sqrt(100. * (st.x*st.x + st.y*st.y) + 1.) + u_time);
    
    v = u_time/(v / 1.5);		//soften the color
    
    //outpu of the color of each pixel
    vec3 color = vec3(cos (PI*v), sin (PI*v), 0.75);
    gl_FragColor = vec4 (color, 0.75);
}