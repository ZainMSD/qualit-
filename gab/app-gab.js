const crypto = require('crypto');
const readline = require('readline');

const MIN   = 'abcdefghijklmnopqrstuvwxyz';
const MAJ   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUM   = '0123456789';
const SYMBO = '!@#$%^&*()_+[]{}|;:,.<>?';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Longueur du mot de passe : ', lengthAnswer => {
  const length = parseInt(lengthAnswer.trim(), 10);

  rl.question('Inclure des majuscules ? (o/n) : ', majAnswer => {
    const useMaj = majAnswer.trim().toLowerCase() === 'o';

    rl.question('Inclure des caractères spéciaux ? (o/n) : ', symAnswer => {
      const useSym = symAnswer.trim().toLowerCase() === 'o';

      let charset = MIN + NUM;
      if (useMaj) charset += MAJ;
      if (useSym) charset += SYMBO;

      if (charset.length === 0) {
        console.error('Pas de caractères à utiliser !');
        rl.close();
        process.exit(1);
      }

      let pw = '';
      for (let i = 0; i < length; i++) {
        const byte = crypto.randomBytes(1)[0];
        pw += charset[byte % charset.length];
      }

      console.log('\nTon mot de passe :');
      console.log(pw);
      rl.close();
    });
  });
});
