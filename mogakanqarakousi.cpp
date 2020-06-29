#include <iostream>
#include <iomanip>
using namespace std;

int n, i,j, x, y,t;
//int coos;  <METHOD 1>
int ** s;


//     <METHOD 1 FUNCTIONS>   


/* int * getfreecells(int num, bool rowcol){
	// 0 horizontal, 1 vertical

	int i, fcn = 0, q;
	int * ret = new int [n/2 + num%2+(n/2)%2];
	if(rowcol){
		for(i = n/2; i < 2*n - 1 - n/2; i++){
			if(s[i][num] == 0){
				ret[fcn] = i;
				fcn++;
			}
		}
	}
	else{
		for(i = n/2; i < 2*n - 1 - n/2; i++){
			if(s[num][i] == 0){
				ret[fcn] = i;
				fcn++;
			}
		}
	}
	return ret;
}
void move(int num, bool rowcol){
	int * f = getfreecells(num, rowcol);
	int size = n/2 + num%2+(n/2)%2, i, j = size-1, foundnum;
	for(j=size-1; j>=0; j--){
		if(f[j]>0){
			break;
		}
	}
	if(rowcol){
		for(i=0;i<n/2;i++){
			foundnum = s[i][num];
			if(foundnum!=0){
				s[f[j]][num] = foundnum;
				j--;
			}
		}
		j=0;
		for(i = 2*n-1 - n/2; i<2*n-1;i++){
			foundnum = s[i][num];
			if(foundnum!=0){
				s[f[j]][num] = foundnum;
				j++;
			}
		}
	}
	else{
		for(i=0;i<n/2;i++){
			foundnum = s[num][i];
			if(foundnum!=0){
				s[num][f[j]] = foundnum;
				j--;
			}
		}
		j=0;
		for(i = 2*n-1 - n/2; i<2*n-1;i++){
			foundnum = s[num][i];
			if(foundnum!=0){
				s[num][f[j]] = foundnum;
				j++;
			}
		}
	}
} */

int main()
{

	//     <METHOD 1>


	/*cin >> n;
	s = new int* [2*n-1];
	for(i = 0; i < 2*n-1; i++){
		s[i] = new int[2*n-1];
		for(j = 0; j < 2*n-1; j++){
			s[i][j] = 0;
		}
	}
	for(i = 1; i <= n*n; i++)
	{
		coos = n - 1 + 2 * ((i - 1)/n);
		x = (i-1)%n + (i-1)/n;
		s[coos - x][x] = i;
	}
	for(i = n/2 + 1; i < 2*n-1-n/2;i++){
		move(i,true);
		move(i,false);
	}
	for(i = n/2; i < 2*n-1-n/2; i++){
		for(j = n/2; j < 2*n-1-n/2; j++)cout<<setw(4)<<s[i][j];
		cout << endl;
	}
	system("pause");*/


	//     <METHOD 2>


	cin>>n;
	s=new int*[n];
	for(i=0;i<n;i++){
		s[i]=new int[n];
		for(j=0;j<n;j++)s[i][j]=0;
	}
	for(t=1,x=n/2,y=0;t<=n*n;t++,x=(x+1)%n,y=(y+n-1)%n){
		if(!s[y][x]){
			s[y][x] = t;
		}
		else{
			y=(y+3)%n;
			x=(x+n-2)%n;
			t--;
		}
	}
	for(i=0;i<n;i++){
		for(j=0;j<n;j++)cout<<setw(5)<<s[i][j];
		cout<<endl;
	}
	// system("pause");
	return 0;
}