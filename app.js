const warriorsGames = [{
    awayTeam: {
      team: 'Cleveland',
      points: 89,
      isWinner: false
    },
    homeTeam: {
      team: 'Golden State',
      points: 104,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Cleveland',
      points: 77,
      isWinner: false
    },
    homeTeam: {
      team: 'Golden State',
      points: 110,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Cleveland',
      points: 120,
      isWinner: true
    },
    awayTeam: {
      team: 'Golden State',
      points: 90,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Cleveland',
      points: 97,
      isWinner: false
    },
    awayTeam: {
      team: 'Golden State',
      points: 108,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Cleveland',
      points: 112,
      isWinner: true
    },
    homeTeam: {
      team: 'Golden State',
      points: 97,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Cleveland',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Cleveland',
      points: 93,
      isWinner: true
    },
    homeTeam: {
      team: 'Golden State',
      points: 89,
      isWinner: false
    }
  }
]
//************************************************* */
const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul')
  for(let game of games){
    const {homeTeam, awayTeam} = game; 
    const gameLi = document.createElement('li')
    gameLi.innerHTML = getScoreLine(game)
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss')
  
    ulParent.appendChild(gameLi)
  }
  return ulParent; 
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam; 
  return target.isWinner; 
}

const getScoreLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam, points: hPoints} = homeTeam;
    const {team: aTeam, points: aPoints} = awayTeam; 
    const teamNames = `${aTeam} @ ${hTeam}`
    let scoreLine; 
    if(aPoints > hPoints){
      scoreLine = `<b>${aPoints}</b>-${hPoints}`
    } else {
      scoreLine = `${aPoints}-<b>${hPoints}</b>`
    }
    return `${teamNames} ${scoreLine}`
}


const gsSection = document.querySelector('#gs');
const cavsSection = document.querySelector('#cc');

const gsChart = makeChart(warriorsGames, 'Golden State')
const cavsChart = makeChart(warriorsGames, 'Cleveland')
gsSection.appendChild(gsChart)
cavsSection.appendChild(cavsChart)



