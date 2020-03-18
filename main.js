let current_q = 0;
let your_score = 0;
let correct_ans = ["A","A","A","A","C","C"];
let q_num;
let q_set;
var count_setInterval;
var question = document.getElementById('question');
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');
var mchoiceA = document.getElementById('mchoiceA');
var mchoiceB = document.getElementById('mchoiceB');
var mchoiceC = document.getElementById('mchoiceC');
var mchoiceD = document.getElementById('mchoiceD');
var feedback = document.getElementById('feedback');
const discussion_time = 900;
const instr_time = 300;
const timeup_msg = "Time's up! It's time to move on to the next session";


let question_set1 = {
    id : 1,
    q_num : 2,
    q_list : [
        {
            question : "A magnetic field can be created by which of the following?",
            choice_num : 4,
            is_multi : true,
            A : "Magnet",
            B : "Electricity",
            C : "Thermostat",
            D : "Iron",
            correct : ["A","B"],
            feedback : {
                correct : "Congratulations!",
                wrong : "Unfortunately, you didn't pick the right answer. That would be the right answer: Magnet, Electricity."
            }
        },{
            question : "Why would an induction cooker generate a magnetic field?",
            choice_num : 3,
            is_multi : false,
            A : "When the induction cooker is plugged in, the electric current running through the coil will create a magnetic field.",
            B : "There is a magnet in the induction cooker that can generate a magnetic field.",
            C : "Because the induction cooker is made of iron.",
            correct : "A",
            feedback : {
                A : " Correct! Electricity can generate the magnetic field.",
                B : "Incorrect. Typically there is no magnet in the induction cooker.",
                C : "Incorrect. Induction cooker is typically not made of iron",
            }
        }
    ]
};

let question_set2 = {
    id : 2,
    q_num : 3,
    q_list : [
        {
            question : "What kinds of energy does eddy current generate?",
            choice_num : 4,
            is_multi : false,
            A : "Thermal energy and electrical energy",
            B : "Thermal energy and chemical energy",
            C : "Thermal energy and mechanical energy",
            D : "Mechanical energy and electrical energy",
            correct : "A",
            feedback : {
                A : "Exactly. Eddy current generates thermal energy and electrical energy.",
                B : "Not quite right. Eddy current can not generate chemical energy.",
                C : "Not quite right. Eddy current can not generate mechanical energy.",
                D : "Not quite right. Eddy current can not generate mechanical energy.",
            }
        },{
            question : "What creates an eddy current in the pot?",
            choice_num : 4,
            is_multi : false,
            A : "Magnetic field",
            B : "Electricity",
            C : "Fire",
            D : "Coil",
            correct : "A",
            feedback : {
                A : "Yes, The magnetic field generated by the induction cooker interacts with the pot and creates an eddy current in it.",
                B : "Try to think about what makes the induction cooker interact with the pot.",
                C : "Try to think about what makes the induction cooker interact with the pot.",
                D : "Not quite right, the coil is an essential part of the process, but it’s not interacting with the pot directly.",
            }
        },{
            question : "What kind of energy transfer happens when your cell phone gets warm as you constantly use it?",
            choice_num : 4,
            is_multi : false,
            A : "Thermal energy -> electrical energy",
            B : "Mechanical energy -> thermal energy",
            C : "Electrical energy -> Thermal energy",
            D : "Thermal energy -> chemical energy",
            correct : "C",
            feedback : {
                A : "Thermal energy is indeed involved because the cell phone becomes warm, but is it really at this end of the arrow?",
                B : "Thermal energy is exactly the one that gets transformed into, but is it mechanical energy that generates it?",
                C : "That’s right. The battery in the cell phone generates electrical energy, and it’s transformed into more and more thermal energy as you continue to use it.",
                D : "Thermal energy is indeed involved because the cell phone becomes warm, but is it really at this end of the arrow? What’s more, chemical energy is not involved in this process.",
            }
        }
    ]
};

let question_set3 = {
    id : 3,
    q_num : 3,
    q_list : [
        {
            question : "What kinds of energy does eddy current generate?",
            choice_num : 4,
            is_multi : false,
            A : "Thermal energy and electrical energy",
            B : "Thermal energy and chemical energy",
            C : "Thermal energy and mechanical energy",
            D : "Mechanical energy and electrical energy",
            correct : "A",
            feedback : {
                A : "Exactly. Eddy current generates thermal energy and electrical energy.",
                B : "Not quite right. Eddy current can not generate chemical energy.",
                C : "Not quite right. Eddy current can not generate mechanical energy.",
                D : "Not quite right. Eddy current can not generate mechanical energy.",
            }
        },{
            question : "What creates an eddy current in the pot?",
            choice_num : 4,
            is_multi : false,
            A : "Magnetic field",
            B : "Electricity",
            C : "Fire",
            D : "Coil",
            correct : "A",
            feedback : {
                A : "Yes, The magnetic field generated by the induction cooker interacts with the pot and creates an eddy current in it.",
                B : "Try to think about what makes the induction cooker interact with the pot.",
                C : "Try to think about what makes the induction cooker interact with the pot.",
                D : "Not quite right, the coil is an essential part of the process, but it’s not interacting with the pot directly.",
            }
        },{
            question : "What kind of energy transfer happens when your cell phone gets warm as you constantly use it?",
            choice_num : 4,
            is_multi : false,
            A : "Thermal energy -> electrical energy",
            B : "Mechanical energy -> thermal energy",
            C : "Electrical energy -> Thermal energy",
            D : "Thermal energy -> chemical energy",
            correct : "C",
            feedback : {
                A : "Thermal energy is indeed involved because the cell phone becomes warm, but is it really at this end of the arrow?",
                B : "Thermal energy is exactly the one that gets transformed into, but is it mechanical energy that generates it?",
                C : "That’s right. The battery in the cell phone generates electrical energy, and it’s transformed into more and more thermal energy as you continue to use it.",
                D : "Thermal energy is indeed involved because the cell phone becomes warm, but is it really at this end of the arrow? What’s more, chemical energy is not involved in this process.",
            }
        }
    ]
};



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
var player2;
var player3;
var player4;
var player5;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {
    height: '640',
    width: '900',
    videoId: 'vyiFCQ_dgFA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('player2', {
    height: '640',
    width: '900',
    videoId: 'WO24UVyO-tU',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player3 = new YT.Player('player3', {
    height: '640',
    width: '900',
    videoId: 'NJChRtWnV4g',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player4 = new YT.Player('player4', {
    height: '640',
    width: '900',
    videoId: 'CaDbU2UbD_s',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player5 = new YT.Player('player5', {
    height: '640',
    width: '900',
    videoId: 'RXwczfzxoGg',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
//
//function stopvideo(){
//    player.stopVideo();
//}

function onPlayerReady(event){
//    player.playVideo();
}

function onPlayerStateChange(event){
//    if (event.data == YT.PlayerState.ENDED) {
//      $('#player').fadeOut();
//    }
}

//function loadQuestions(q_set){
//    q_num = q_set.q_num;
//    
//}

function show_q(n){
    q_num = q_set.q_num;
//    console.log(n);
//    console.log(q_num);
//    console.log("loading")
    current_q = n;
    is_multi = q_set.q_list[n].is_multi;

    console.log(is_multi);
    if (is_multi) {
        $('#sing_container').fadeOut();
        $('#multi_container').fadeIn();
        question.innerHTML = q_set.q_list[n].question;
        mchoiceA.innerHTML = q_set.q_list[n].A;
        mchoiceB.innerHTML = q_set.q_list[n].B;
        mchoiceC.innerHTML = q_set.q_list[n].C;
        mchoiceD.innerHTML = q_set.q_list[n].D;
//        $('.option').addClass('multi_option');
//        console.log($('.option').hasClass('multi_option'));
//        $('.option').removeClass('sing_option');
//        console.log($('.option').hasClass('sing_option'));
    } else if (!is_multi) {
        $('#multi_container').fadeOut();
        $('#sing_container').fadeIn();
        question.innerHTML = q_set.q_list[n].question;
        choiceA.innerHTML = q_set.q_list[n].A;
        choiceB.innerHTML = q_set.q_list[n].B;
        choiceC.innerHTML = q_set.q_list[n].C;
        choiceD.innerHTML = q_set.q_list[n].D;
//        $('.option').removeClass('multi_option');
    }
    
    
    if (n >= q_num - 1) {
//        console.log("btn change")
        $('#next_q_btn').fadeOut();
        $('#discussion_btn').fadeIn();
    }
}

function next_q(){
    feedback.innerHTML = "";
    $('#feedback').removeClass('feedback_wrong');
    $('#feedback').removeClass('feedback_correct');
    show_q(current_q + 1);
    $(".option").removeClass('option_selected');
}

function checkAnswer(user_ans){
    console.log(user_ans);
    console.log(q_set.q_list[current_q].correct);
    if (user_ans == q_set.q_list[current_q].correct){
        $('#feedback').removeClass('feedback_wrong');
        $('#feedback').addClass('feedback_correct');
    }
    else {
        $('#feedback').removeClass('feedback_correct');
        $('#feedback').addClass('feedback_wrong');
    }
    switch(user_ans){
        case "A":
            feedback.innerHTML = q_set.q_list[current_q].feedback.A;
            break;
        case "B":
            feedback.innerHTML = q_set.q_list[current_q].feedback.B;
            break;
        case "C":
            feedback.innerHTML = q_set.q_list[current_q].feedback.C;
            break;
        case "D":
            feedback.innerHTML = q_set.q_list[current_q].feedback.D;
            break;
        default:
            feedback.innerHTML = "Ooops, can't find what to tell you."
    }
        
    
}

function timer(time, next){
    var x = setInterval(function(){
        time = time - 1;
        var min = Math.floor(time/60);
        var sec = time % 60;
        document.getElementById("timer").innerHTML = min + ':' + sec;
        $('#timer').fadeIn();
        
        if (time < 0){
            clearInterval(x);
            $('#timer').fadeOut();
            if (next.includes("video")){
                $('.instr').fadeOut();
                $('#discussion').fadeIn();
                alert(timeup_msg);
            }
            if (next.includes("review")){
                $('#discussion').fadeOut();
                $('#review').fadeIn();
                alert(timeup_msg);
            }
        }
        
    }, 1000)
    return x;
}

function final_submit(){
    your_score = score_count();
    document.getElementById('score').innerHTML = your_score;
    $('#final_test').fadeOut();
    $('#indiv_score').fadeIn();
//    give_feedback();
}




function score_count(){
    var score = 0;
    var questions = document.getElementsByClassName('question');
    for (var i=0; i<questions.length; i++){
        var objList = document.getElementsByName('final_'+(i+1));
        for(var j=0;j<objList.length;j++){
            if (objList[j].checked){
                ans = objList[j].value;
                console.log(ans);
                console.log("correct " + correct_ans[i])
                if (ans == correct_ans[i]){
                    score = score + 1;
                }
            }   
        }
    }
    return score;
}

function next(el){
    var next = $(el).data('next');
    $(el).parent('.page').fadeOut();
    $(next).fadeIn();
    if (next.includes('discussion')||next.includes('review')){
        clearInterval(count_setInterval);
        $('#timer').fadeOut();
    }
    if (next.includes('final_score')){
        var score_1 = parseInt(document.getElementById('teammate1').value);
        var score_2 = parseInt(document.getElementById('teammate2').value);
//        console.log(your_score);
//        console.log(score_1);
//        console.log(score_2);
//        console.log(((your_score + score_1 + score_2)/3).toFixed(1));
        document.getElementById('group_score').innerHTML = ((your_score + score_1 + score_2)/3).toFixed(1);
    }
}

$(document).ready(function(){
    $(".next_buttons").click(function(){
        next(this)
    });
    
    $(".next_buttons_link").click(function(){
        next(this)
    });
    
    $(".sing_option").click(function(){
        console.log("clicked");
        $(".sing_option").removeClass('option_selected');
        $(this).addClass('option_selected');
    })
    
    $(".multi_option").click(function(){
        is_selected = $(this).hasClass('option_selected');
        console.log("multi_clicked");
        if (is_selected) {
            $(this).removeClass('option_selected');
        } else {
            $(this).addClass('option_selected');
        }
    });
    
    $(".next_assess").click(function(){
        var next = $(this).data('next');
        $(this).parent().fadeOut(function(){
        $("#assessment").fadeIn(function(){
            console.log(next);
            if (next.includes('assessment1')){
                player1.stopVideo(); 
                q_set = question_set1;
                show_q(current_q);
            };
            if (next.includes('assessment2')){
                player2.stopVideo();  
                q_set = question_set2;
                show_q(current_q);
            };
            if (next.includes('assessment3')){
                player3.stopVideo(); 
                q_set = question_set3;
                show_q(current_q);
            }
        });        
    });
    })
    
    $("#start_dis_timer").click(function(){
        var next = $(this).data('next');
        $(this).fadeOut();
        count_setInterval = timer(10, next);
    });
    
    $(".start_instr_timer").click(function(){
        var next = $(this).data('next');
        count_setInterval = timer(10, next);
    });
});