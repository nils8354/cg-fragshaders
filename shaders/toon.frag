#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float new_red = round(texture(image, texcoord).r * 4.0)/4.0;
    float new_green = round(texture(image, texcoord).g * 4.0)/4.0;
    float new_blue = round(texture(image, texcoord).b * 4.0)/4.0;

    FragColor = vec4(new_red, new_green, new_blue, 1.0);
}
