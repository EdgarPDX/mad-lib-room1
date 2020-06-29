// import functions and grab DOM elements

// initialize state
const boogerButton = document.getElementById('button');
console.log(boogerButton);
// set event listeners to update state and DOM

boogerButton.addEventListener('click', () => {
    const noun1 = document.getElementById('noun1').value;
    //console.log(noun1);
    const noun1ans = document.getElementById('me')
    console.log(noun1ans);

    const verb1 = document.getElementById('verb1').value;
    //console.log(verb1);
    const verb1ans = document.getElementById('wondering')
    console.log(verb1ans)

    const pronouns = document.getElementById('pronouns').value; 
    //console.log(pronouns);
    const pronoun1ans = document.getElementById('everything');
    console.log(pronoun1ans)

    const location = document.getElementById('location').value;
    //console.log(location);
    const location1ans = document.getElementById('california')
    console.log(location1ans)

})