#include<stdio.h>

void main(){
    unsigned i = 1;
    int j = -4;
    printf("%u",i+j);// 4294967293
}

// The answer is -3 but as we use unsigned format specifier the 
