// import functions and grab DOM elements

// initialize state
const boogerButton = document.getElementById('button');
console.log(boogerButton);
// set event listeners to update state and DOM

boogerButton.addEventListener('click', () => {
    //noun
    const noun1 = document.getElementById('noun1').value;
    const noun1ans = document.getElementById('me');
    console.log(noun1ans);
    noun1ans.textContent = noun1;

    //verb
    const verb1 = document.getElementById('verb1').value;
    const verb1ans = document.getElementById('wondering');
    console.log(verb1ans);
    verb1ans.textContent = verb1;

    //pronoun
    const pronouns = document.getElementById('pronouns').value; 
    const pronoun1ans = document.getElementById('everything');
    console.log(pronoun1ans);
    pronoun1ans.textContent = pronouns;

    //location
    const location = document.getElementById('location').value;
    const location1ans = document.getElementById('california');
    console.log(location1ans);
    location1ans.textContent = location;
    
    const hideInputs = document.getElementById('inputs');
    hideInputs.classList.add('hidden');
    
    const madLib = document.getElementById('madlib');
    madLib.classList.remove('hidden');

})