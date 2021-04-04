/* database = [
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/okNzOq0R8yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Invasion Planet Earth', genre: 'sci-fi'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/TH3vfu5K48E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Wrong House', genre: 'horror'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/EGiokiFKuRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Click', genre: 'comedy'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/P3cSFLT4cLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Battle of the Bulge', genre: 'action & war'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/BzdUTrnsHis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Dirty Politics', genre: 'politics'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/vZrjcQp9Syo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Metro', genre: 'thriller'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/s7cAXdEYM7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Treasure', genre: 'drama'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/MFaDHgXPbUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Nefarious', genre: 'documentary'},
    {url: '<iframe width="283" height="315" src="https://www.youtube.com/embed/w3Wluvzoggg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', title: 'Tom & Jerry', genre: 'cartoon'},
] */

// window.localStorage.setItem('database', JSON.stringify(database))

let database = window.localStorage.getItem('database')
if (!database) database = []
else database = JSON.parse(database)
