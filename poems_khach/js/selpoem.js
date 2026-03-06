const config = {

    // ===== THỂ THƠ =====
    theTho: [
        "LỤC BÁT",
        "THẤT NGÔN",
        "TỰ DO",
        "NGŨ NGÔN",
        "SONG THẤT LỤC BÁT",
	"KHÁC", 
    ],

    // ===== THỂ LOẠI =====
    theLoai: [
        "QUÊ HƯƠNG",
        "TÌNH YÊU",
        "GIA ĐÌNH",
        "CUỘC SỐNG",
        "BUỒN",
        "KHÁC"
    ],

    // ===== ÂM THANH =====
    amThanh: [
        {
            name: "Không dùng",
            file: ""
        },
        {
            name: "Nhạc quê hương",
            file: "audio/quehuong.mp3"
        },
        {
            name: "Nhạc buồn",
            file: "audio/buon.mp3"
        }
    ]

};

window.addEventListener("DOMContentLoaded", function(){

    const theThoSelect = document.getElementById("theTho");
    const theLoaiSelect = document.getElementById("theLoai");
    const amThanhSelect = document.getElementById("amThanh");

    // ===== OPTION TẤT CẢ =====
    const optionAll1 = document.createElement("option");
    optionAll1.value = "";
    optionAll1.textContent = "TẤT CẢ";
    theThoSelect.appendChild(optionAll1);

    const optionAll2 = document.createElement("option");
    optionAll2.value = "";
    optionAll2.textContent = "TẤT CẢ";
    theLoaiSelect.appendChild(optionAll2);

    const optionAll3 = document.createElement("option");
    optionAll3.value = "";
    optionAll3.textContent = "TẤT CẢ";
    amThanhSelect.appendChild(optionAll3);


    // ===== THỂ THƠ =====
    config.theTho.forEach(item => {

        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;

        theThoSelect.appendChild(option);

    });


    // ===== THỂ LOẠI =====
    config.theLoai.forEach(item => {

        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;

        theLoaiSelect.appendChild(option);

    });


    // ===== ÂM THANH =====
    config.amThanh.forEach(item => {

        const option = document.createElement("option");
        option.value = item.file;
        option.textContent = item.name;

        amThanhSelect.appendChild(option);

    });

});