const basePath = "list_poem/";
const poems = [
    {
        title: "Dám Nghĩ, Dám Bước, Dám Đi",
        name: "dam_nghi_dam_buoc_dam_di",
        date: "23/03/2026",
        author: "Bành",
        category: ["ĐỜI NGƯỜI"],
        type: "BÁT NGÔN",
        fontTitle: "Bahnschrift",
        fontContent: "Viner Hand ITC",
        content: ""  // Nội dung sẽ được lấy từ HTML
    },
    {
        title: "Nơi ấy trò có thầy",
        name: "nguyen_van_cu",
        date: "01/08/2023",
        author: "Bành",
        category: ["QUÊ HƯƠNG", "HỌC TRÒ", "ĐỜI NGƯỜI"],
        type: "LỤC BÁT",
        fontTitle: "Bahnschrift",
        fontContent: "Viner Hand ITC",
        content: ""  // Nội dung sẽ được lấy từ HTML
    }
];

// Đảm bảo đường dẫn chính xác
poems.forEach(p => {
    p.file = `${basePath}${p.name}/index.html`; // Đảm bảo đường dẫn file HTML
    p.image = `${basePath}${p.name}/image.jpg`; // Đảm bảo đường dẫn file hình ảnh
    p.audioFile = `${basePath}${p.name}/audio.mp3`; // Đảm bảo đường dẫn file âm thanh
});
window.poems = poems;