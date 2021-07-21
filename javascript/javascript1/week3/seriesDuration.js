const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 20,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 10,
    },
    {
        title: "Teen Wolf",
        days: 3,
        hours: 12,
        minutes: 40,
    }
  ];

  function logOutSeriesText() {
    const life = 80*365*24*60
    let seriesSpan = 0
    seriesDurations.forEach(series=>{
        const seriesTime = (((series.days*24*60)+(series.hours*60)+series.minutes)/life)*100
        console.log(`${series.title} took ${seriesTime.toFixed(4)}% of my life`)
        seriesSpan += seriesTime
    })
    console.log(`In total that is ${seriesSpan.toFixed(4)}% of my life`)
  }
  
  logOutSeriesText();