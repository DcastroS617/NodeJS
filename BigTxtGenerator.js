const {writeFileSync} = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync(
        './content/bigtext.txt',
        `hello govna ${i}`,
        {flag: 'a'}
    );
}
