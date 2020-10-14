const fs = require('fs')
const pdf = require('pdf-parse')
const gTTS = require('gtts.js').gTTS

let pdfText = fs.readFileSync('hunter.pdf')


console.log(pdfText)

pdf(pdfText).then((data) => {
   
    console.log(data.numRender)
    console.log(data.text[1])

    let text = data.text.split(' ')
    let working = ('How to get started in Bug Bounties? is a common question nowadays, and we keep on getting messages about it every day. To meet expectations we decided to prepare a whole edition dedicated to the Bug Bounty Hunting topic. It is said that anyone with computer skills and a high degree of curiosity can become a successful finder of vulnerabilities. You can be young or old when you start. We hope that this edition will help you get started')
    
    
    // let working = []

    // for(let i = 100; i < 301; i++) {
    //     working.push(text[i])
    // }


    // let file = fs.createWriteStream('text.txt')
    // file.on('error', (err) => console.log(err))
    // working.forEach(word => file.write(`${word} `))
    // file.end()



    let string = JSON.stringify(working)

    const tts = new gTTS(string)
    tts.save('string.mp3')
    .then(() => console.log('success'))
    .catch(err => console.log(err))

    console.log('done')


})

