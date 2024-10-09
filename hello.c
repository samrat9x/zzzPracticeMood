#include<stdio.h>

void main(){
    char c = 255;
    printf("%d\n",c);
    c = c + 10;
    printf("%d",c);
}

// Here c is signed character and a character typically can consume 8bits. So it overflows the range and 255 is equivalent to -1 (using 2's complement). So c is -1.
