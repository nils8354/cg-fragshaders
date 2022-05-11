#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 new_texcoord = 2.0 * texcoord -1.0;

    // theta
    float theta = atan(new_texcoord.y, new_texcoord.x);
    
    float radius = length(new_texcoord);
    // offset
    vec2 offset  = texcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    //final tex coords
    vec2 final_texcoord = texcoord + offset;
    FragColor = texture(image, final_texcoord);

    
    
}
