#version 300 es

precision mediump float;

in vec2 texcoord;
uniform float time;
uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

float modulo(float x, float y) {
    float modulo = x - y*floor(x/y);
    return modulo;
}

void main() {
    float red = texture(image,texcoord).r;
    float green = texture(image,texcoord).g;
    float blue = texture(image,texcoord).b;
    float new_time = (time/10.0);
    float final_time =  modulo(new_time, 10.0);
    red += final_time;
    blue += final_time;
    green += final_time;
    float new_red = modulo(red, 1.0);
    float new_blue = modulo(blue, 1.0);
    float new_green = modulo(green, 1.0);

    
    FragColor = vec4(new_red, new_green, new_blue, 1.0);
}


