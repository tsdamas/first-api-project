const express = require('express')
const app = express ()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const starWarsQuotes = {
  '01quote': {
    'author': 'Rose, The last Jedi',
    'quote': "That's how we're gonna win. Not fighting what we hate, saving what we love."
  }, 
  '02quote': {
    'author': 'Qui Gon Jinn',
    'quote': 'Your focus determines your reality'
  },
  '03quote': {
    'author': 'Darth Vader',
    'quote': 'I find your lack of faith disturbing'
  },
  '04quote': {
    'author': 'Yoda',
    'quote': 'Train yourself to let go everything you are afraid to lose'
  }
}

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html')
}
)

app.get('/src/main.js', (req, res) => {
  res.sendFile(__dirname + '/src/main.js')
})

app.get('/api/:quotes', (req, res) => {
  const quoteNumber = req.params.quotes.toLowerCase()
  if(starWarsQuotes[quoteNumber]) {
    res.json(starWarsQuotes[quoteNumber])
  } else {
    res.json(starWarsQuotes)
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}! Let's check it out!`)
})