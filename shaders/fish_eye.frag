#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    // magnitude of vector length()
    vec2 new_texcoord = 2.0 * texcoord -1.0;
   
    // theta
    float theta = atan(new_texcoord.y, new_texcoord.x);
    
    // radius
    float radius = pow(length(new_texcoord), 1.5);
    //Fish eye tex coords
    vec2 FEtex = vec2(radius * cos(theta),  radius * sin(theta));
    //final tex coords
    vec2 final_texcoord = 0.5 * (FEtex + 1.0);
    FragColor = texture(image, final_texcoord);
}
