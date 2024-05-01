Part 2: 
1. 3 will be printed because i is declared as a var and exists outside the for loop. i will then be incremented 3 times because the size of list discounted is 3.
2. Once the for loop is done, the final value of prices is 300 and the discount is 50%, so 150 is printed
3. similar to discountPrice 150 will be printed. Because the final value of discountedPrice is a whole number Math.round does not change the value
4. the function will return a list containing [50,100,150] because it pushes the final discounted prices into the list discounted in the for loop.
5. Line 12 will cause an erro because the scope of i is only within the for loop. This means when console.log(i) happens i doesn't exist within the scop of the function.
6. similar reasoning to number 5, discountedPrice is only in the scope of for loop due to declaration using let.
7. finalPrice will be printed as 150 to the console. This works becase the logic is the same as number 3, and final price has been declared using let in the same function it is being called in.
8. will do the same as 4 because the logic remains the same even with all declarations becoming let.
9. Same scenario as number 12 , the i doesn't exist outside the for loop
10. Line 12 will output 3 to the console because the size of the prices list is 3.
11. a list of size 3 ([50,100,150]) will be returned because even the push method does not reasign the variable and instead mutates it
12. a.  student.name
b. student["Grad Year"]
c. student.greeting()
d. student["Favorite Teacher"].name
e. student.courseLoad[0]
13.  a. 32 : for + numbers will map to their  string representation
    b. 1 numbers are turned
    c. 0
    d.3null
    e. 4 true is one
    f. 0 false is 0 and null is 0
    g. '3undefined' will just conncaetnate because undefined is turned into its string representation
    h. NaN undefined is not a number and it is subtracting the numerized '3' with something not a number
14.  
a. true string becomes a number
b. false: the longer string is has less value 
c. true: '2' becomes number representation
d. false because there is no auto type conversation '2' is not the same
e. false: true == 1 
f. true: Boolean 2 is greater than 0 so it is true
15. == and === both do strict equality but === has no type conversion as opposed to ==
16. java script file
17. The result will be a an array of [2,4,6] being returned. This is due to the fact that the callback function is doSomething so each element will be multiplied by 2.
19. 1 4 3 2