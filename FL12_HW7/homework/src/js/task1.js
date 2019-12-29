let email;
let eLength = 5;
let eLength_2 = 6;
let email_1 = 'user@gmail.com';
let email_2 = 'admin@gmail.com';
let pswrd;
let pswrd_1 = 'UserPass';
let pswrd_2 = 'AdminPass';
let request;
let oldPswrd;
let newPswrd;
let newPswrd_2;

email = prompt('Please type your email here');
if (!email) {
    alert('canceled');
} else if (email.length < eLength) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if (email !== email_1 && email !== email_2) {
    alert('I don’t know you');
} else {
    pswrd = prompt('Please enter password');
    if (!pswrd) {
        alert('canceled');
    } else if (pswrd && email === email_1 && pswrd !== pswrd_1
        || pswrd && email === email_2 && pswrd !== pswrd_2) {
        alert('wrong password');
    } else {
        request = confirm('Do you want to change your password?');
        if (!request) {
            alert('You have failed the change.')
        } else {
            oldPswrd = prompt('Please write the old password');
            if (oldPswrd && email === email_1 && oldPswrd === pswrd_1
                || oldPswrd && email === email_2 && oldPswrd === pswrd_2) {
                newPswrd = prompt('Please enter a new password');
                if (!newPswrd) {
                    alert('Cancelled');
                } else if (newPswrd.length < eLength_2) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPswrd_2 = prompt('Please enter a new password again');
                    if (newPswrd === newPswrd_2) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            }
        }
    }
}





