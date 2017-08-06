const emails = ['frodo@gmail.com', 'sam@gmail.com', 'mary@gmail.com']
emails.push('pippin@gmail.com');
console.log(emails);

// block scoping
let limit = 200;

{
    let limit = 10;
    console.log(limit);
}

console.log(limit); 
