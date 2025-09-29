import readlineSync from 'readline-sync';

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword(length) {
    let characterPool = "";
    characterPool += lowercase;
    characterPool += uppercase;
    characterPool += numbers;
    characterPool += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    return password;
}

const passwordLength = readlineSync.questionInt("Taille du mot de passe: ");
if (passwordLength < 8) {
    console.log("Trop court");
} else {
    const newPassword = generatePassword(passwordLength);
    console.log("Mot de passe: ", newPassword);
}