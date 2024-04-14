
// Hello Admin:
// Make a array of five or more usernames, including the the name 'Admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, amd print a greeting to each user.
// If the user name is 'Admin', print a special greeting, such as Hello Admin, would you like to see a status report?
// Otherwise print a generic greeting, such as Hello Eric, Thankyou for logging in again.

//                                      BY FOR LOOP METHOD:  

console.log('\n','BY FOR LOOP METHOD');

const userNames: string[] = ['admin' , 'bugs bunny' , 'daffy duck' , 'sylvester' , 'tweety'];

for(let i=0; i<userNames.length; i++){  
         if(userNames[i] === 'admin')
    {   
        console.log('Hello Admin, would you like to see a status report?');  
    }   
        else{  
        console.log(`Hello ${userNames[i]}, Thankyou for logging in again.`)    
    }
    }

//                                      BY FOR EACH METHOD:

console.log('\n','BY FOR EACH LOOP METHOD');

const userNamess: string[] = ['Admin' , 'Bugs Bunny' , 'Daffy Duck' , 'Sylvester' , 'Tweety' ];

userNamess.forEach(usernamee => {

    if(usernamee === 'Admin')    
    {
        console.log('Hello Admin, would you like to see a status report?');
    }

    else 
    {
        console.log('\n', `Hello ${usernamee}, Thankyou, for logging in again.`);

    }
    }
    )