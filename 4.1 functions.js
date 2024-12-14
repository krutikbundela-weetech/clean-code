/**
 * !3. Functions
 * 
 * Functions makes up with 2 things
 * 1. calling a function
 * 2. function body
 * 
 * * so for clean code
 * => calling the function should be readable=> the number and order of arguments matter 
 * => working with the function should be easy/readable => the length of the function body matters
 * 
 * 1. calling a funtion
 * => function na 0,1,2 or 3(in very rare case) parameters jj hovaa joiee 
 * => always findout k kevi rite parameters ghataadi sakiyee and more meaningful banavi sakiye
 * => ex. simple approach to class obj approach
 * 
 * 2. function body
 * => function should be small
 * => function should do "One thing"
 * 
 * *levels of abstraction:
 *  1. high level = save user(easy to read no room for interpretation)
 *  2. low level = validate userEmail
 * 
 * High level <=> low level
 * isEmail(email) <=> email.includes('@')
 * 
 * Rules:
 * 1. extract code that works on the same functionality
 *  ex: user.setAge(31) user.setName('Max') => user.update({age: 31, name:"Max"})
 * 
 * 2. extract code that requires more interpretation than the surrounding code
 *  ex: if(!email.includes('@')){...} saveNewUser(email) => if(!isValid(email)){..} saveNewUser(email)
 * 
 * 
 * *always follow(for reusability)
 * DRY = Don't Reapeat Yourself
 *  signs of code which "is not dry"
 * 1. you find yourself copy & pasting code
 * 2. you need to apply the same change to multiple places in your codebase
 * 
 * *unit test:
 * if we can test a function easily it's clean 
 * if we don't consider splitting it 
 */