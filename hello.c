#include<stdio.h>

int main(){
    int var1 = 4/9;
    printf("%d\n", var1);

    float var2 = 4/9;
    printf("%0.2f\n", var2);
    
    float var3 = 4.0/9.0;
    printf("%0.2f\n", var3);
    // by placing 0 after decimal point makes the integers double value. by default they are 'double constant'. if you want to make them float, add the suffix 'f'

    return 0;
}