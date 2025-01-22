# TypeScript Loan Calculator

The project specifics are in the asterisked section at the bottom of this page.
At this early stage, this project is basically a proof of concept, rather than
a market-ready tool to obtain sophisticated loan calculations.

## Modes
The user can run this app in three modes as follows:  
1) Generic online user.  
2) Frontend dev user.  
3) Backend dev user.
   
User instructions for all modes will be given below.

## Generic online user mode
1) Please go to https://simple-loan-calculation.netlify.app/  
2) Fill in the loan amount with a positive sum of money.  
3) Fill in the annual interest rate in % -- this can not be negative but 0 interest is permitted.  
4) Fill in the number of monthly payments (a positive whole number).  
5) Observe the result which is the fair monthly payment that results, assuming that interest is continuously compounded.  
6) If the user breaches any of the criteria given in 2) to 4), an error message is displayed.  

## Frontend dev user mode 
1) Check that git is installed.  
2) Check that python 3 is installed.  
3) Clone the Loan Calculator repo: `git clone` https://github.com/pauldepstein/Loan_Calculator.git  
4) At the root of the repo, run the bash command: `npm run build`  
5) At the root of the repo, run the bash command: `python3 -m http.server --directory dist`  
6) Your IDE (if any) or bash terminal should guide you to the correct URL.  
7) At that URL, fill in the boxes as a **Generic online user**.  

## Backend dev user mode
1) Check that git is installed.  
2) Clone the Loan Calculator repo: `git clone` https://github.com/pauldepstein/Loan_Calculator.git  
3) At the root of the repo, run the bash command: `tsc --project tsconfig.backend.json`    
4) At the root of the repo, run the bash command: `node dist/bundle.js`  
5) Observe the output of the testing files as below:  
   A) **src/tests/ad_hoc_testing/loanPaymentTests.ts**    
   B) **src/tests/ad_hoc_testing/parameterValidatorsTests.ts**  
   C) **src/tests/ad_hoc_testing/ratePerPeriodTests.ts**  
   D) **src/tests/ad_hoc_testing/simpleLoanTests.ts**  
6) Add to the above files to introduce further tests.
7) Email pauldepstein@yahoo.com if any of the testing results are not as expected.
   
## Limitations 
The limitations are as follows:
1) Only the following simple case is covered:    
   The user supplies the following inputs:  
   A)  The loan amount.  
   B)  The annual interest rate (assumed unchanged).  
   C)  The number of payments.
The calculation of the monthly payment amount is then made.

2) As in item 1), only the simplest case is covered in the web API, but the backend code has an
inheritance structure as a foundation for more complex cases. This inheritance structure has
not yet been integrated at the frontend.

3) In line with the simplicity, the concept of syndicated loans is not handled.

4) The concept of smart contracts is not handled.
*******************************************************************************************
Assignment: Code a basic loan calculator.
