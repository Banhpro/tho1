document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("audio");
    const audioIcon = document.getElementById("audioIcon");
    const player = document.getElementById("player");
    const playBtn = document.getElementById("playBtn");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progressContainer");
    const timeDisplay = document.getElementById("time");

    if(!audio) return; // nếu trang không có audio thì thoát

    /* ẨN ICON BAN ĐẦU */
    audioIcon.style.display = "none";
    player.style.display = "none";

    /* KIỂM TRA FILE AUDIO TỒN TẠI */
    audio.addEventListener("error", () => {
        audioIcon.style.display = "none";
    });

    audio.addEventListener("loadedmetadata", () => {
        audioIcon.style.display = "inline-block";
    });

    /* TOGGLE PLAYER */
    audioIcon.addEventListener("click", () => {
        player.style.display = player.style.display === "flex" ? "none" : "flex";
    });

    /* PLAY / PAUSE */
    playBtn.addEventListener("click", () => {
        if(audio.paused){
            audio.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }else{
            audio.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    /* PROGRESS */
    audio.addEventListener("timeupdate", () => {
        if(!audio.duration) return;

        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + "%";

        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);
        if(seconds < 10) seconds = "0" + seconds;
        timeDisplay.textContent = minutes + ":" + seconds;
    });

    /* SEEK */
    progressContainer.addEventListener("click", (e) => {
        if(!audio.duration) return;

        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        audio.currentTime = (clickX / width) * audio.duration;
    });

});