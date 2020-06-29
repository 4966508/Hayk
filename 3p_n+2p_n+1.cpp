#include <iostream>
#include <iomanip>
using namespace std;

int r, n, i, primeplace = -1, consch, nowp, check, v, pi = 2, pr;
int* real, *prim, *firstnums;

int numindex(int q){return (q-1)/3;}
void eratosthenes(int k){
    while(1){
        do{
            primeplace++;
        }while(firstnums[primeplace]==0);
        nowp = firstnums[primeplace];
        if(nowp > k)break;
        for(check = nowp*nowp, consch = -((nowp%6)-5)/4; check <= k*k; check += (consch+1)*2*nowp, consch = !consch){
            real = &firstnums[numindex(check)-1];
            if(check == *real) *real = 0;
        }
    }
}
void filter(){
    for(i = 0; i < 2*(n/6); i++){
        if(firstnums[i]!=0){
        prim[pi] = firstnums[i];
        pi++;
        }
    }
}
bool search(int p){
    int j;
    for(j = 0; j < pi; j++)if(prim[j]==p)return true;
    return false;
}
int main(){
    cin>>r>>pr;
    n = r*r;
    prim = new int[n];
    firstnums = new int[2*(n/6)];
    //Էրատոսթէնեսի մաղ
    prim[0]=2;
    prim[1]=3;
    for(i=1;i<=2*(n/6);i+=2){
        firstnums[i-1] = 3*i+2;
        firstnums[i] = 3*i+4;
    }
    eratosthenes(r);
    filter();
    delete [] ::firstnums;
    //բուն խնդիրը
    for(i=1; i<pi; i++){
        if(pr==1){
        check = 3*prim[i]+2*prim[i+1];
        
        if(!search(check)){if(check > n) break; cout << "Երբ i = " << i << ", 3*" << prim[i] << " + " << "2*" << prim[i+1] << " = " << check << endl;}
        }
        else if(pr == 2){
        if(i%10==0){
            cout<<endl;
        }
        cout << setw(10) << prim[i];}
        else if(pr == 3){cout<<pi; break;}
    }
    return 0;
}