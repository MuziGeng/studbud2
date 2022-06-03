// add the obj into js
let playPause=document.querySelector('.play-pause');
let playerTrack=document.querySelector('.playerTrack');
let albumCover=document.querySelector('.albumCover');
let musicName=document.querySelector('.musicName');
let otherName=document.querySelector('.otherName');
let currentTime=document.querySelector('.current-time');
let allTime=document.querySelector('.total-time');
let progressBox=document.querySelector('.progressBox');
let hoverTime=document.querySelector('.hoverTime');
let hoverBar=document.querySelector('.hoverBar');
let progressedBar=document.querySelector('.progressedBar');
let playPrev=document.querySelector('.play-prev');
let playNext=document.querySelector('.play-next');

// name of music
let musicArray=['红模仿','感官先生','夜曲','我的名字','本草纲目'];
// name of singer and album
let otherArray=['周杰伦 - 红模仿','刘凤瑶 - 感官先生','周杰伦 - 夜曲','焦迈奇 - 我的名字','周杰伦 - 本草纲目'];

// Initial value
function initPlayer(){
  // add the audio
    audio=new Audio();     
    selectTrack(0);
    // selcet the event if click the pause
    playPause.addEventListener('click',clickPause);
    // selcet the event if mouse move on the progress bar of music
    progressBox.addEventListener('mousemove',function(e){
        showHover(e);
    });
    // selcet the event if mouse move out of the progress bar of music
    progressBox.addEventListener('mouseout',hideHover);

    // selcet the event the time of progress bar
    audio.addEventListener('timeupdate',updateCurTime);
    // selcet the event if click Previous song
    playPrev.addEventListener('click',function(){
        selectTrack(-1);
    });
    // selcet the event if click Next song
    playNext.addEventListener('click',function(){
        selectTrack(1);
    });
}

// play and pause
function clickPause(){
    setTimeout(function(){
      //if click one time will do classList fa fa-pause'
        if(audio.paused){
            playerTrack.classList.add('active');
            playPause.querySelector('.fa').classList='fa fa-pause';
            albumCover.classList.add('active');
            audio.play();
        }
          //if click next time will do classList fa fa-play'
        else{
            playerTrack.classList.remove('active');
            playPause.querySelector('.fa').classList='fa fa-play';
            albumCover.classList.remove('active');
            audio.pause();       }
    },300);
}
//the variable of mouse on the progress
var mouseOnProgress; 
//the variable of mouse stop on the progress
var mouseStopProgress; 
//the variable of the song minute of mouse on progress
var onMinute; 
//the variable of the song minute of the stop time on the progress
var ctMinute; 
//the variable of the song second of the stop time on the progress
var ctSecond; 
//the variable of the song minute of the playing now on the progress
var nowMinute; 
//the variable of the song second of the playing now on the progress
var nowSecond;
//the variable of total time of the song (minute)
var allMinute;
//the variable of total time of the song (second)
var allSecond; 
//the variable of Playback progress
var playProgress; 
// rank of the song
// the first one is -1, write 0 that can click prev
var nowIndex=0;
// display hover playback position pop-up layer
function showHover(e){
  //from left of progress bar to the position of mouse
  // it will show on the progress bar
  mouseOnProgress=e.clientX - progressBox.getBoundingClientRect().left;
  // Total audio duration
  mouseStopProgress=audio.duration * (mouseOnProgress / progressBox.getBoundingClientRect().width);
  //make the color darker
  hoverBar.style.width=mouseOnProgress+'px';
  // make the position to minute and second
  onMinute=mouseStopProgress / 60;
  ctMinute=Math.floor(onMinute);
  ctSecond=Math.floor(mouseStopProgress - ctMinute * 60);
    if(ctMinute<10){
        ctMinute='0'+ctMinute;
    }
    if(ctSecond<10){
        ctSecond='0'+ctSecond;
    }
    if(isNaN(ctMinute) || isNaN(ctSecond)){
        hoverTime.innerText='--:--';
    }else{
        hoverTime.innerText=ctMinute+':'+ctSecond;
    }
    // show the pop-up layer
    hoverTime.style.left=mouseOnProgress+'px';
    hoverTime.style.marginLeft='-20px';
    hoverTime.style.display='block';
}
// hide the pop-up layer
function hideHover(){
    hoverBar.style.width='0px';
    hoverTime.innerText='00:00';
    hoverTime.style.left='0px';
    hoverTime.style.marginLeft='0px';
    hoverTime.style.display='none';
}

// changing the time when playing song
function updateCurTime(){
    // now time(minute and second)
    nowMinute=Math.floor(audio.currentTime / 60);
    cur_seconds=Math.floor(audio.currentTime - nowMinute * 60);
    // all time of the song (minute and second)
    allMinute=Math.floor(audio.duration / 60);
    allSecond=Math.floor(audio.duration - allMinute * 60);
    // the progress
    playProgress=audio.currentTime / audio.duration * 100;
    //time the decimal system
    if(nowMinute<10){
        nowMinute='0'+nowMinute;
    }
    if(cur_seconds<10){
        cur_seconds='0'+cur_seconds;
    }
    if(allMinute<10){
        allMinute='0'+allMinute;
    }
    if(allSecond<10){
        allSecond='0'+allSecond;
    }

    // setup the Playback time
    if(isNaN(nowMinute) || isNaN(cur_seconds)){
        currentTime.innerText='00:00';
    }else{
        currentTime.innerText=nowMinute+':'+cur_seconds;
    }
    // setup the total time
    if(isNaN(allMinute) || isNaN(allSecond)){
        allTime.innerText='00:00';
    }else{
        allTime.innerText=allMinute+':'+allSecond;
    }
    // setup progress bar
    progressedBar.style.width=playProgress+'%';

    //return if finished the song
    if(playProgress==100){
        playPause.querySelector('.fa').classList='fa fa-play';
        progressedBar.style.width='0px';
        currentTime.innerText='00:00';
        playerTrack.classList.remove('active');
        albumCover.classList.remove('active');
    }
}

// switch the song used 'flag'
// 0 is the initial, 1 is next, -1 is previous 
function selectTrack(flag){
    if(flag==0 || flag==1){
        ++nowIndex;
    }else{
        --nowIndex;
    }

    if(nowIndex>-1 && nowIndex<musicArray.length){
        if(flag==0){
            playPause.querySelector('.fa').classList='fa fa-play';
        }else{
            playPause.querySelector('.fa').classList='fa fa-pause';
        }
        progressedBar.style.width='0px';
        currentTime.innerText='00:00';
        allTime.innerText='00:00';
        // the music name of the song playing
        let playingMusic=musicArray[nowIndex];
        // other detail of the song playing
        let playingOther=otherArray[nowIndex];
        // Setup the audio path
        audio.src='/music/'+playingMusic+'.mp3';
        if(flag!=0){
            // auto play when click next/prev song
            audio.play();
            playerTrack.classList.add('active');
            albumCover.classList.add('active');
        }
        // setup song name
        musicName.innerText=playingMusic;
        // setuo other info
        otherName.innerText=playingOther;
        // setup cover
      albumCover.querySelector('.active').classList.remove('active');
        albumCover.getElementsByTagName('img')[nowIndex].classList.add('active');
        
    }
}

// init
initPlayer();