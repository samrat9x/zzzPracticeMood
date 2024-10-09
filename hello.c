#include<stdio.h>

void main(){
    unsigned i = 1;
    int j = -4;
    printf("%u",i+j);// 4294967293
}

/* When you add 1 (unsigned) and -4 (signed), the result is -3. Since the output is printed using the unsigned format specifier (%u), -3 is interpreted as its unsigned 32-bit equivalent, which is 4294967293 due to two's complement representation.
In two's complement, negative numbers are stored as large unsigned values. For a 32-bit system, -3 is represented as 11111111 11111111 11111111 11111101 in binary, which equals 4294967293 when treated as an unsigned integer. Hence, 4294967293 is printed.
*/