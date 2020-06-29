#include <iostream>
#include <cstring>
#include <sstream>
using namespace std;
int k;

string read(string n){
    int q=1; char digit; string reastr;
    stringstream rea;
    while(n.size() > 0){
        digit = n.back();
        n.resize (n.size () - 1);
        
        if(n.back() == digit) q++;
        else{
            reastr = rea.str();
            
            rea.str("");
            rea << q << digit << reastr;
            q=1;
        } 
    }
    return rea.str();
}
string seq(int s) {
    if(s == 1) return "1";
    else return read(seq(s-1));
}
int main(){
    cin >> k;
    cout << seq(k);
    return 0;
}