// Getting all articles from the database
export async function load({ platform }) {
  const { results }= await  platform.env.DB.prepare(`SELECT * FROM veille;`).all();

  try {
    // forming the period object in the result
    for (let article of results) {
      if (article.date) article.date = new Date(article.date)
      if (article.tags) article.tags = article.tags.split(';')
    }

    return {articles: results}
  } catch (err){
    console.log("Error fetching data from table \"veille\"")
    console.log(err)
  }
}
