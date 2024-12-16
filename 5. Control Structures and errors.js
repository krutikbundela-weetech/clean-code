/**
 * !5. Control Structures
 * 
 * *1. Control Structures(if...else if ...else)
 *  => keep your control structures clean 
 * 1. avoid  deep nesting => using factory functions & polymorphism, Utilize Errors
 * 2. prefer positve checks(isEmpty vs isNotEmpty)
 * 
 * *make guard
 * if(!email){
 *  return;===> this will fail fast & aagad no code execute nai krse
 * }
 * *MultiGuards:
 * if(!email){
 *  return;===> this will fail fast & aagad no code execute nai krse
 * }
 * if(!email){
 *  return;===> this will fail fast & aagad no code execute nai krse
 * }
 * 
 * *1. avoid  deep nesting => using factory functions & polymorphism, Utilize Errors
 *  if agar bov badhu nesting hoi in if conditions then first step is to make factory funtions
 *  jem bnne tem function banavi ne code ne chuttooo paadvaa no
 *  starting ma Guards banava na then category of if's hoi tenaa alag functions banavana
 * 
 * *=> factory functions and polymorphism
 * 
 * polymorphism: an object or method which always has the same structure and the same name,
 *  but which then does different things based on how it was created and how you use it therefore.
 * 
 * we created polymorphic objects to hold different functions for handling payments and refunds
 * 
 * 
 * function processWithProcessor(transaction) {
        const processors = getTransactionProcessor(transaction);

        if (isPayment(transaction) ) {
        processors.processPayment (transaction);
        }else{
        processors. processRefund(transaction);
        }
    }
 * 
 * 
 * function getTransactionProcessor(transaction) {
    let processors = {
        processPayment: null,
        processRefund: null,
    }
    if (usesTransactionMethod(transaction, 'CREDIT_CARD' ) ) {
        processors.processPayment = processCreditCardPayment; // ahiyaa function khaali variable ne assign kriyu che () nai lagaaviya
        processors. processRefund = processCreditCardRefund;
    } else if (usesTransactionMethod(transaction, 'PAYPAL' ) ) {
        processors. processPayment = processPayPalPayment;
        processors. processRefund = processPayPalRefund;
    } else if (usesTransactionMethod(transaction, 'PLAN' ) ) {
        processors. processPayment = processPlanPayment;
        processors. processRefund = processPlanRefund;
    }
    return processors;
   }

 * !Old Function:
   function processByMethod(transaction) {
        if (usesTransactionMethod(transaction, 'CREDIT_CARD' ) ) {
        processCreditCardTransaction(transaction);
        } else if (usesTransactionMethod(transaction, 'PAYPAL' ) ) {
        processPayPalTransaction(transaction);
        } else if (usesTransactionMethod(transaction, 'PLAN' ) ) {
        processPlanTransaction(transaction);
    }
 * 
 * 
 * 
 * *=> embrace errors & error handling
 * 
 * Throwing + handling errors can replace if statements and lead to more focused functions
 *  simple rule : if something is an error => make it an error
 * 
 * => Error handling is one thing.(ek try catch ma ek jj type ni vastu nu validate and check  thse)
 * 
 * basically if conditions lagaaavi ne j error messege return karaaviye enii jaga prr
 * try catch block ma lakhi ne underr j b error aave tene throw karaava ni
 * 
 * {
 * try {
        processTransactions(transactions);
    } catch (error)
        showErrorMessage(error.message);
 * }
 * 
 * function processTransactions(transactions) {
        if (isEmpty(transactions) ) {
        const error = new Error('No transactions provided!');
        error.code = 1;
        throw error;
 * }
 * 
 * 
 * 
 * Avoid "Magic Numbers & Strings"
There's one additional tweak you might want to make to the code.

At the moment, we always check for hard-coded string identifiers like "PAYPAL" or "CREDIT_CARD".

You typically want to avoid this - not primarily for readability reasons but to avoid errors (e.g. due to typos).

Hence it is a better practice to use globally defined enums - if your programming language supports that - or globally defined constants.

const TYPE_CREDIT_CARD = 'CREDIT_CARD';
// ...
if (transaction.type === TYPE_CREDIT_CARD) { ... }
By doing that, you define a value once (in a place which is easily found and editable) and you then reuse the constant / variable.
 Hence you can't introduce accidental typos in parts of your code and you also avoid repeating the hard-coded value over and over again.
  That in turn is helpful if you ever want to change the identifier => You then only need to change it once.
 * 
 */