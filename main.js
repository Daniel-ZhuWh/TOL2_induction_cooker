let current_q = 0;
let your_score = 0;
let alert_time = 60;
let correct_ans = [["A","B"],["A"],["A"],["A"],["C"],["C"]];
let q_num;
let q_set;
let part;
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
var other_prompt = document.getElementById('other_prompt_content');
var your_prompt = document.getElementById('your_prompt_content');
const discussion_time = 900;
const instr_time = 300;
const timeup_msg = "Time's up! It's time to move on to the next session";

let prompts = [
    [
        'How does an induction cooker create a magnetic field?',
        'What can generate magnetic field?'
    ],
    [
        'What is eddy current? How is it generated?',
        'What kinds of energy are involved in the process?'
    ],
    [
        'What kind of material is optimal for pot used on the induction cooker?',
        'What are the two features of this kind of material?'
    ],
    'You can try to explain your part to other students by answering the above questions. Don’t forget to piece them together and try to explain the whole working mechanism of induction cookers.'
]

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
            question : "Ferromagnetic material is most efficient in turning ______ into  ________.",
            choice_num : 2,
            is_multi : false,
            A : "heat; electrcity",
            B : "electrcity; heat",
            correct : "B",
            feedback : {
                A : "Try to think about what kind of energy it takes to cook your food with pot",
                B : "Exactly",
            }
        },{
            question : "Ferromagnetic material is both ______ and  ______.",
            choice_num : 4,
            is_multi : false,
            A : "nonconductive; magenetic",
            B : "conductive; magnetic",
            C : "conductive; nonmagnetic",
            D : "nonconductive; nonmagnetic",
            correct : "B",
            feedback : {
                A : "Not quite right",
                B : "Yes that's the case!",
                C : "Not quite right",
                D : "Not quite right",
            }
        },{
            question : "Which one of the following is most efficient in heating food when we put it on an induction cooker?",
            choice_num : 3,
            is_multi : false,
            A : "Copper pot",
            B : "Stainless steel pot",
            C : "Glass pot",
            correct : "B",
            feedback : {
                A : "Incorrect! Copper is conductive but not magnetic, it has a lower conversion rate than ferromagnetic material. ",
                B : "Correct! Stainless is both conductive and magnetic, it is ferromagnetic and it is the most efficient material in turning electricity into heat.",
                C : "Incorrect! Glass is neither conductive nor magnetic, which makes it inefficient in converting electricity into heat.",
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
      'onStateChange': onPlayerStateChange1
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
    if (event.data == YT.PlayerState.ENDED) {
//      $('#player').fadeOut();
        console.log('ended')
        $(".next_assess").removeClass('hidden');
    }
}

function onPlayerStateChange1(event){
    if (event.data == YT.PlayerState.ENDED) {
//      $('#player').fadeOut();
        console.log('intro_ended')
        $(".next_buttons").removeClass('hidden');
    }
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
    choice_num = q_set.q_list[n].choice_num;

    console.log(is_multi);
    if (is_multi) {
        $('#sing_container').fadeOut();
        $('.sing_option').removeClass('active');
        $('#multi_container').fadeIn();
        $('.multi_option').addClass('active');
        $('#check_multi').fadeIn();
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
        $('.multi_option').removeClass('active');
        $('#sing_container').fadeIn();
        $('.sing_option').addClass('active');
        $('#check_multi').fadeOut();
        question.innerHTML = q_set.q_list[n].question;
        choiceA.innerHTML = q_set.q_list[n].A;
        choiceB.innerHTML = q_set.q_list[n].B;
        choiceC.innerHTML = q_set.q_list[n].C;
        choiceD.innerHTML = q_set.q_list[n].D;
//        $('.option').removeClass('multi_option');
    }
    
    options = document.getElementsByClassName('active');
    for (var i=0; i<options.length; i++){
        if (i<choice_num){
            options[i].style.display = "block";
        } else {
            options[i].style.display = "none";
        }
    }
    
    if (n >= q_num - 1) {
//        console.log("btn change")
        $('#next_q_btn').fadeOut();
        $('#discussion_btn').fadeIn();
    }
}

function areEqual(a, b){
    let x = 0;
    for (n in a){
        if (a[n] == b[n]){x = 1;}
        else {x = 0};
    }
    return x;
}

function check_multi(){
    selected = document.getElementsByClassName('option_selected');
    var ans_list = [];
    var fdbk = '';
    for (var i=0; i<selected.length; i++){
        ans = selected[i].id.slice(-1);
        ans_list.push(ans);
    }
    console.log(ans_list);
    if (areEqual(ans_list, ["A","B"])){
        fdbk = "Correct!";
        $('#feedback').addClass('feedback_correct');
        $('#feedback').removeClass('feedback_wrong');
    } else {
        fdbk = "Incorrect.";
    }
    if (ans_list.includes("C")){
        fdbk += "A magnetic field can not be generated by thermostat. ";
        $('#feedback').addClass('feedback_wrong');
    } 
    if (ans_list.includes("D")){
        fdbk += "A magnetic field can not be generated by iron. ";
        $('#feedback').addClass('feedback_wrong');
    }
    feedback.innerHTML = fdbk;
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
        $(".sub_intro").fadeOut();
        $('#timerbox').fadeIn();
        document.getElementById("timer").innerHTML = '  ' + min + ' Minutes, ' + sec + ' Seconds';
        
        if(time <= alert_time){
            document.getElementById("timer").style.color = "#AC4141";
        }
        
        if (time < 0){
            clearInterval(x);
            $('#timerbox').fadeOut();
            $(".sub_intro").fadeIn();
            if (next.includes("video")){
                $('.instr').fadeOut();
                $('#discussion').fadeIn();
                alert(timeup_msg);
            }
            if (next.includes("discussion_prompt")){
                $('#discussion').fadeOut();
                $('#discussion_prompt').fadeIn();
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
        var ans_list = [];
        for(var j=0;j<objList.length;j++){
            if (objList[j].checked){
                ans_list.push(objList[j].value);
//                console.log(ans);
//                console.log("correct " + correct_ans[i])
                } 
        }
        if (areEqual(ans_list, correct_ans[i])){
                    score = score + 1;
            } 
    }
    return score;
}

function printPrompt(prompt_list, id){
    for (var i=0; i < prompt_list.length; i++){
        document.getElementById(id).innerHTML += prompt_list[i] + "<br><br>";
    }
}

function next(el){
    var next = $(el).data('next');
    $(el).parent().fadeOut();
    $(next).fadeIn();
    if (next.includes('discussion')||next.includes('quiz_intro')){
        clearInterval(count_setInterval);
        $('#timerbox').fadeOut();
        $(".sub_intro").fadeIn();
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
    if (next.includes('choose_branch')){
        $('.welcome_pic').fadeOut();
        player5.stopVideo();
    }
    if (next.includes('discussion_prompt')){
        var next = $(this).data('next');
//        $(this).fadeOut();
//        $('#next_in_dis').fadeIn();
        count_setInterval = timer(discussion_time, next);
        switch (part){
            case 1:
                printPrompt(prompts[0],'your_prompt_content');
                your_prompt.innerHTML += prompts[3];
                other_prompt.innerHTML += "Part 2: <br>";
                printPrompt(prompts[1],'other_prompt_content');
                other_prompt.innerHTML += "Part 3: <br>";
                printPrompt(prompts[2],'other_prompt_content');
                break;
            case 2:
                printPrompt(prompts[1],'your_prompt_content');
                your_prompt.innerHTML += prompts[3];
                other_prompt.innerHTML += "Part 1: <br>";
                printPrompt(prompts[0],'other_prompt_content');
                other_prompt.innerHTML += "Part 3: <br>";
                printPrompt(prompts[2],'other_prompt_content');
                break;
            case 3:
                printPrompt(prompts[2],'your_prompt_content');
                your_prompt.innerHTML += prompts[3];
                other_prompt.innerHTML += "Part 1: <br>";
                printPrompt(prompts[0],'other_prompt_content');
                other_prompt.innerHTML += "Part 2: <br>";
                printPrompt(prompts[1],'other_prompt_content');
                break;
        }
    }
}

$(document).ready(function(){
    $(".next_buttons").click(function(){
        next(this)
    });
    
    $(".next_buttons_link").click(function(){
        next(this);
        var branch = $(this).data('next');
        if (branch.includes('1')){
            part = 1;
        }
        if (branch.includes('2')){
            part = 2;
        }
        if (branch.includes('3')){
            part = 3;
        }
        console.log(part);
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
    
//    $("#start_dis_timer").click(function(){
//        var next = $(this).data('next');
//        $(this).fadeOut();
//        $('#next_in_dis').fadeIn();
//        count_setInterval = timer(discussion_time, next);
//    });
    
    $(".start_instr_timer").click(function(){
        var next = $(this).data('next');
        count_setInterval = timer(instr_time, next);
    });
});