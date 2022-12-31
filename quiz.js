let incorrect_button = document.querySelectorAll('.incorrect');
let correct_button = document.querySelectorAll('.correct');
let mcqr = document.querySelectorAll('.mcqr');
let input = document.querySelectorAll('.answer');
let submit = document.querySelectorAll('.submit');
let sr = document.querySelectorAll('.sr');

for (let i = 0; i < incorrect_button.length; i++)
{
    incorrect_button[i].addEventListener('click', function()
    {
        incorrect_button[i].style.backgroundColor = 'red';
        if (i <= 7)
        {
            mcqr[0].innerHTML = "Incorrect";
        }
        else if (i > 7 && i <= 11)
        {
            mcqr[1].innerHTML = "Incorrect";
        }
        else if (i > 11 && i <= 14)
        {
            mcqr[2].innerHTML = "Incorrect";
        }
        else if (i > 14 && i <= 18)
        {
            mcqr[3].innerHTML = "Incorrect";
        }
        else if (i > 18 && i <= 22)
        {
            mcqr[4].innerHTML = "Incorrect";
        }
        else if (i > 22 && i <= 26)
        {
            mcqr[5].innerHTML = "Incorrect";
        }
        else if (i > 26 && i <= 32)
        {
            mcqr[6].innerHTML = "Incorrect";
        }
        else if (i > 32 && i <= 35)
        {
            mcqr[7].innerHTML = "Incorrect";
        }
        else
        {
            mcqr[8].innerHTML = "Incorrect";
        }
    });
}

for (let i = 0; i < correct_button.length; i++)
{
    correct_button[i].addEventListener('click', function()
    {
        correct_button[i].style.backgroundColor = 'green';
        mcqr[i].innerHTML = "Correct!";
    });
}

for (let i = 0; i < submit.length; i++)
{
    submit[i].addEventListener('click', function()
    {
        let answers = [["stars", "star"], ["orion nebula", "orion", "the orion nebula"],
        ["dark nebula", "dark nebulae"], ["planetary nebula", "planetary nebulae", "planetary"],
        ["dark matter"], ["accretion disk", "the accretion disk", "an accretion disk"], ["pulsar", "a pulsar"],
        ["a coronal mass ejection", "coronal mass ejection"], ["88", "eighty eight", "eighty-eight"],
        ["neutron star", "neutron stars", "a neutron star", "magnetar", "magnetars", "a magnetar"]]
        let response = input[i].value.toLowerCase();
        if (answers[i].includes(response))
        {
            sr[i].innerHTML = "Correct!";
            input[i].style.backgroundColor = "rgba(0, 255, 0, 0.4)";
        }
        else
        {
            sr[i].innerHTML = "Incorrect";
            input[i].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        }
    });
}