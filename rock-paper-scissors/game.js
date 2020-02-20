const match = () => {

        var player_score ;
        var computer_score ;
        const start_button = document.querySelector(".first_page button");
        const rock_buttons = document.querySelector(".rock");
        const paper_buttons = document.querySelector(".paper");
        const scissors_buttons = document.querySelector(".scissors");
        const victor = document.querySelector(".victor");

    const select_buton = () => {
        player_score = 0;
        computer_score = 0;
        rock_buttons.style.display = "none";
        paper_buttons.style.display = "none";
        scissors_buttons.style.display = "none";
        
        start_button.onclick=function(){
            start_button.style.display = "none";
            rock_buttons.style.display = "block";
            paper_buttons.style.display = "block";
            scissors_buttons.style.display = "block";
        }
    };

    const play_game = () => 
    {
        const hands = document.querySelector(".view img");
        const player_hand = document.querySelector(".player");
        const computer_hand = document.querySelector(".computer");
        const array = ["rock", "paper", "scissors"];
        var computerNumber; 
        var computerChoice; 
        rock_buttons.onclick = function()
        {
            computerNumber = Math.floor(Math.random() * 3);
            computerChoice = array[computerNumber];
            player_hand.src = `./assets/${this.textContent}.png`;
            computer_hand.src = `./assets/${computerChoice}.png`;
            calculate_score("rock",computerChoice);
        }
        paper_buttons.onclick = function()
        {
            computerNumber = Math.floor(Math.random() * 3);
            computerChoice = array[computerNumber];
            player_hand.src = `./assets/${this.textContent}.png`;
            computer_hand.src = `./assets/${computerChoice}.png`;
            calculate_score("paper",computerChoice);
        }
        scissors_buttons.onclick = function()
        {
            computerNumber = Math.floor(Math.random() * 3);
            computerChoice = array[computerNumber];
            player_hand.src = `./assets/${this.textContent}.png`;
            computer_hand.src = `./assets/${computerChoice}.png`;
            calculate_score("scissors",computerChoice);
        }

    };

    const calculate_score = (slct_player, slct_computer) => {

        victor.style.display = "block";
        if(slct_player === "rock")
        {
            if(slct_computer === "scissors")
            {
                player_score++;
                victor.textContent = " SAYI SENİN!";
                write_score(player_score, computer_score);
            }
            if(slct_computer === "paper")
            {
                computer_score++;
                victor.textContent = "SAYI BİLGİSAYARIN :(";
                write_score(player_score, computer_score);
            }
        }

        if(slct_player === "paper")
        {
            if(slct_computer === "rock")
            {
                player_score++;
                victor.textContent = " SAYI SENİN!";
                write_score(player_score, computer_score);
            }
            else if(slct_computer === "scissors")
            {
                computer_score++;
                victor.textContent = "SAYI BİLGİSAYARIN :(";
                write_score(player_score, computer_score);
            }
        }

        if(slct_player === "scissors")
        {
            if(slct_computer === "paper")
            {
                player_score++;
                victor.textContent = " SAYI SENİN!";
                write_score(player_score, computer_score);
            }
            else if(slct_computer === "rock")
            {
                computer_score++;
                victor.textContent = "SAYI BİLGİSAYARIN :(";
                write_score(player_score, computer_score);
            }
        }
        if(slct_player === slct_computer)
        {
          victor.textContent = "SEÇİMLER AYNI"
        }
    };


    const write_score = (player_score, computer_score) => {
        const plyr_score = document.querySelector(".player_score p");
        const comp_score = document.querySelector(".computer_score p");
        plyr_score.textContent = player_score;
        comp_score.textContent = computer_score;
        if(player_score>4 || computer_score>4)
        {
            if(player_score>computer_score)
            {
                window.alert("Oyun Bitti.Tebrikler Kazandın !!");
            }
            else
            {   
                window.alert("Oyun Bitti.Kaybettin :(");
            }
            start_button.style.display = "block";
            plyr_score.textContent = 0;
            comp_score.textContent = 0;
            victor.style.display = "none";
            select_buton();
            play_game();
        }
    };

select_buton();
play_game();

};

match();
