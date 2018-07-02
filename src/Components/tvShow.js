import React from 'react';

const tvShow = (props) => {
  let { show } = props

  return (
    <div onClick={()=> props.selectShow(show)}>
      <h4>{show.name}</h4>
      <img src={show.image.medium} />
    </div>
  );

}

export default tvShow;





// {tvrage: 25988, thetvdb: 264492, imdb: "tt1553656"}
// genres
// :
// (3) ["Drama", "Science-Fiction", "Thriller"]
// id
// :
// 1
// image
// :
// {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"}
// language
// :
// "English"
// name
// :
// "Under the Dome"
// network
// :
// {id: 2, name: "CBS", country: {…}}
// officialSite
// :
// "http://www.cbs.com/shows/under-the-dome/"
// premiered
// :
// "2013-06-24"
// rating
// :
// {average: 6.4}
// runtime
// :
// 60
// schedule
// :
// {time: "22:00", days: Array(1)}
// status
// :
// "Ended"
// summary
// :
// "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>"
// type
// :
// "Scripted"
// updated
// :
// 1529612668
// url
// :
// "http://www.tvmaze.com/shows/1/under-the-dome"
// webChannel
// :
// null
// weight
// :
// 91
// _links
// :
// {self: {…}, previousepisode: {…}}
// __proto__
// :
// Object
// 1
// :
// externals
// :
// {tvrage: 28376, thetvdb: 248742, imdb: "tt1839578"}
// genres
// :
// (3) ["Drama", "Action", "Crime"]
// id
// :
// 2
// image
// :
// {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/55/137682.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/55/137682.jpg"}
// language
// :
// "English"
// name
// :
// "Person of Interest"
// network
// :
// {id: 2, name: "CBS", country: {…}}
// officialSite
// :
// "http://www.cbs.com/shows/person_of_interest/"
// premiered
// :
// "2011-09-22"
// rating
// :
// {average: 9.1}
// runtime
// :
// 60
// schedule
// :
// {time: "22:00", days: Array(1)}
// status
// :
// "Ended"
// summary
// :
// "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered "irrelevant". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>"
// type
// :
// "Scripted"
// updated
// :
// 1529283091
// url
// :
// "http://www.tvmaze.com/shows/2/person-of-interest"
// webChannel
// :
// null
// weight
// :
// 93
// _links
// :
// {self: {…}, previousepisode: {…}}
// __proto__
// :
// Object
// 2
// :
// externals
// :
// {tvrage: 34965, thetvdb: 269550, imdb: "tt2365946"}
// genres
// :
// (3) ["Drama", "Horror", "Romance"]
// id
// :
// 3
// image
// :
// {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"}
// language
// :
// "English"
// name
// :
// "Bitten"
// network
// :
// {id: 7, name: "Space", country: {…}}
// officialSite
// :
// "http://bitten.space.ca/"
// premiered
// :
// "2014-01-11"
// rating
// :
// {average: 7.7}
// runtime
// :
// 60
// schedule
// :
// {time: "22:00", days: Array(1)}
// status
// :
// "Ended"
// summary
// :
// "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>"
// type
// :
// "Scripted"
// updated
// :
// 1515870544
// url
// :
// "http://www.tvmaze.com/shows/3/bitten"
// webChannel
// :
// null
// weight
// :
// 87
// _links
// :
// {self: {…}, previousepisode: {…}}
// __proto__
// :
// Object
