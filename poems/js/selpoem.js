const config = {

    theTho: [
        "LỤC BÁT",
        "THẤT NGÔN",
        "TỰ DO",
        "NGŨ NGÔN",
        "SONG THẤT LỤC BÁT",
        "BÁT NGÔN",
        "KHÁC"
    ],

    theLoai: [
        "QUÊ HƯƠNG",
        "TÌNH YÊU",
        "GIA ĐÌNH",
        "CUỘC SỐNG",
        "ĐỜI NGƯỜI",
        "BUỒN",
        "CỔ TÍCH",
        "KHÁC"
    ]

};

document.addEventListener("DOMContentLoaded", async () => {

    const theThoSelect = document.getElementById("theTho");
    const theLoaiSelect = document.getElementById("theLoai");
    const amThanhSelect = document.getElementById("amThanh");

    /* ===== function tạo option ===== */

    function addOption(select,value,text){

        if(!select) return;

        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;

        select.appendChild(option);

    }

    /* ===== THỂ THƠ ===== */

    if(theThoSelect){

        addOption(theThoSelect,"","TẤT CẢ");

        config.theTho.forEach(item=>{
            addOption(theThoSelect,item,item);
        });

    }

    /* ===== THỂ LOẠI ===== */

    if(theLoaiSelect){

        addOption(theLoaiSelect,"","TẤT CẢ");

        config.theLoai.forEach(item=>{
            addOption(theLoaiSelect,item,item);
        });

    }

    /* ===== ÂM THANH ===== */

    if(amThanhSelect){

        const audioOptions = [

            {value:"",text:"TẤT CẢ"},
            {value:"co",text:"CÓ ÂM THANH"},
            {value:"khong",text:"KHÔNG CÓ ÂM THANH"}

        ];

        audioOptions.forEach(item=>{
            addOption(amThanhSelect,item.value,item.text);
        });

    }

    /* ===== KIỂM TRA AUDIO ===== */

    async function checkAudio(poem){

        if(!poem.audioFile){

            poem.audio = "khong";
            return;

        }

        try{

            const res = await fetch(poem.audioFile,{method:"HEAD"});

            poem.audio = res.ok ? "co" : "khong";

        }
        catch{

            poem.audio = "khong";

        }

    }

    /* ===== LOAD AUDIO ===== */

    async function loadAudioStatus(){

        if(typeof poems === "undefined") return;

        const tasks = poems.map(p=>checkAudio(p));

        await Promise.all(tasks);

    }

    await loadAudioStatus();

});