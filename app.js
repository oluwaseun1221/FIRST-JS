var scores, roundScore, activePlayer;

scores =[0,0];
roundScore = 0;
activePlayer = 0;
  




//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display ='none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){


    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display ='block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. update round score IF the rolled number was not a 1 
        if (dice !== 1) {
            //Add score

            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //Next player
            activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';


            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('player-1-panel').classList.toggle('active');


           // document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('player-1-panel').classList.add('active');
        }
    });