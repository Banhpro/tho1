const basePath = "list_poem/";
const poems = [
{
    title: "Mẹ Già",
    name: "me_gia",
    date: "12/05/2023",
    author: "Bành",
    category: ["GIA ĐÌNH","QUÊ HƯƠNG"],
    type: "LỤC BÁT",
    audio: true
},
{
    title: "Quê Hương",
    name: "ve_que",
    date: "01/08/2023",
    author: "Bành",
    category: "QUÊ HƯƠNG",
    type: "TỰ DO",
    audio: false
}
];
poems.forEach(p => {
    p.file  = `${basePath}${p.name}/index.html`;
    p.image = `${basePath}${p.name}/image.jpg`;
    p.audioFile = `${basePath}${p.name}/audio.mp3`;
});