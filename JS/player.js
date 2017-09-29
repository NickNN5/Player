/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Player{

    constructor(album, currentSong){
        this.album=album;
        this.currentSong=currentSong;
        this.queue=this.loadSongs(album.songList);
    }

    loadSongs(songList){
        var playList=[];;
        for(var i=0;i<songList.length;i++){
            playList[i]=songList[i];
        }
        return playList;
    };

    getFirstSong(){
        return this.album.getFirstSong();
    };

    isLastSong(){
        return (this.currentSong === this.albumgetLastSong());
    };

    getSongByTitle(title){
        
        for(var i=0;i<this.queue.length;i++){
            if(title===this.queue[i].name){
                return this.queue[i];
            }
        }
    return null;
    };

    setCurrentSong(currentSong){

        this.currentSong=currentSong;

        //ponemos el titulo en la barra de reproducción. ( si no lo está) ??
    }

    play(){
        if(this.currentSong!==null){

            //ponemos el titulo en la barra de reproducción. ( si no lo está) ??

            //activamos el script para el tiempo. ( resteamos el actual)
        }
    }

    pause(){

        if(this.currentSong!==null){
            //cambiamos el icono.

            //paramos el tiempo
        }
    }




}

class Song{
    constructor(name, interpreter, duration){
        this.name=name;
        this.interpreter=interpreter;
        this.duration=duration;
    }
}


class Album{
    contructor(name, artist, cover, songList){
        this.name=name;
        this.artist=artist;
        this.cover =cover;
        this.songList=songList;
    }

    getLastSong(){
        return this.songList[this.songList.lenth-1];
    }

    getFirstSong(){
        return this.songList[0];
    }


    getAlbumSongIndex(song){
        for(var i=0;i<this.songList.length;i++){
            if(song.title===this.songList[i].title){
                return i;
            }
        }
    }

}

function  showQueue(songQueue){
  //  Element songQueueElement=document.getElementById("song-queue");
    for(var i=0; i<songQueue.length;i++){

        var songItem=document.createElement("div");
      //  songItem.innerHTML="<div class='song-item'" + " id='"+songQueue[i].name+"'>"
        songItem.innerHTML="<div id='"+ songQueue[i].name+"' class='song-item' onclick='changeSong(this.id)'>" +
                "<a> " + songQueue[i].name+ "</a>" +
                "<a id='totalTime' class='aling-rigth'>"+ songQueue[i].duration + "</a>"+
                "<br>"+
                "<small>"+ songQueue[i].interpreter+ "</small> </div>";
        var e=document.getElementById("song-queue");
        document.querySelector('#song-queue').appendChild(songItem);

    }

}




function changeSong(title){
    
    var song=mPlayer.getSongByTitle(title);
    putHtmlPlayerBarSong(song);
    
    
    
   
    
}

function putHtmlPlayerBarSong(song){
    var currentHtmlSong=document.getElementById("player-bar");
    
    var htmlNewSong= "<div id='player-bar' >" +
            "<a class='fontLarge'>"+song.name + "</a>" +
            "<a class='aling-right'>" +song.duration + "</a>"+
            "<button> PAUSE </button>" +
            "<br>" +
            "<small>" + song.interpreter +"<small></div>";
    
     currentHtmlSong.innerHTML=htmlNewSong;
    
}
   



//ejecución principal.
var albumT=album;
var mPlayer=new Player(albumT, albumT.getFirstSong);
//window.onload= showQueue(mPlayer.queue);

window.onload = function() {
  showQueue(mPlayer.queue);
};

