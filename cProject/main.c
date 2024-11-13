#include<stdio.h>
int main(){
    int var = 9;
    extern int var;
    printf("%d", var);
    return  0;
}