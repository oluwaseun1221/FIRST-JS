var scores, roundScore, activePlayer, gamePlaying;

init();
  






document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

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
           nextPlayer();
        }
    }
   
    });


        document.querySelector('.btn-hold').addEventListener('click', function(){
            if (gamePlaying){
                 // Add CURRENT score to GLOBAL score
            scores[activePlayer] += roundScore;


            // update the UI

            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


            //check if player won the game
            if (scores[activePlayer] >=100) {
                document.querySelector('#name-' + activePlayer).textContent ='Winner'
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
                //Nextplayer
            nextPlayer();
            }
                 
            }
           
        });



        function nextPlayer(){

            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';


            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');


           // document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');


            document.querySelector('.dice').style.display ='none';

        }

        
        document.querySelector('.btn-new').addEventListener('click', init);


        function init() {

            scores =[0,0];
            roundScore = 0;
            activePlayer = 0;
            gamePlaying = true;


            //document.querySelector('#current-' + activePlayer).textContent = dice;

         document.querySelector('.dice').style.display ='none';

            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.getElementById('name-0').textContent = 'player 1';
            document.getElementById('name-1').textContent = 'player 2';
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            
        }


        
