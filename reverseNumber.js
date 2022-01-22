function reversNumber(number)
{
  revNumber=0;
  while(number>0)
  {
    revNumber=(revNumber*10)+(number%10);
    numbrer=number/10;
  }
  return revNumber
  
}
console.log(reversNumber(25));
