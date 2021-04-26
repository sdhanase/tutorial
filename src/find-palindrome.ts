export const findpalindrome = (num: number): boolean => {

    let reversenum = 0 ,reminder = 0;
  
    let numtotest = num;
  
   if (numtotest < 0 )
   {
     return false;  
   } 
   else  {
   while (numtotest != 0)
   {
     reminder = numtotest % 10;
     reversenum = reversenum * 10 + reminder;
     numtotest = Math.floor(numtotest/10);
   } }
   
   if (num == reversenum)
     {
         return true;
     }
     else {
        return false;
     }
  };