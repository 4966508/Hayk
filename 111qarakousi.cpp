#include <iostream>
#include <iomanip>
using namespace std;
int n, i, rem=0, ind, val;
int* a;
int main(){
    cin >> n;
    a = new int[2*n-1];
    for(i=1;i<=2*n-1; i++){
        val = min(i,2*n-i);
        ind = 2*n-1-i;
        a[ind]=(val%10)+rem;
        rem=val/10;
    }
    for(i=0;i<2*n-1;i++){
        cout << a[i];
    }
    return 0;
}