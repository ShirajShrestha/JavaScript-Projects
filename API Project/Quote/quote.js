const quoteLink = 'https://api.quotable.io/random'
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const newQuote = document.querySelector('.new-quote')
const tweet = document.querySelector('.tweet')

newQuote.addEventListener('click', async()=>{
    const response = await fetch(quoteLink)
    const data = await response.json()
    quote.textContent = data.content
    author.textContent = data.author
})

tweet.addEventListener('click', ()=>{
    open('https://twitter.com/intent/tweet?text='+quote.textContent + '  -----by ' + author.textContent, 'Tweet Window', 'width=600, height=400')
})