const poems = [
  {
    title: "Về quê",
    category: "quê hương",
    form: "lục bát",
    file: "poems/ve-que.html"
  },
  {
    title: "Bữa cơm chiều",
    category: "gia đình",
    form: "lục bát",
    file: "poems/bua-com-chieu.html"
  },
  {
    title: "Đời người",
    category: "trải đời",
    form: "tự do",
    file: "poems/doi-nguoi.html"
  },
{
  title: "Mẹ già",
  category: "gia đình",
  form: "lục bát",
  file: "poems/me-gia.html"
}
];

const list = document.getElementById("poemList");
const search = document.getElementById("search");
const category = document.getElementById("category");
const form = document.getElementById("form");

function render() {
  const s = search.value.toLowerCase();
  const c = category.value;
  const f = form.value;

  list.innerHTML = "";

  poems.filter(p =>
    (!c || p.category === c) &&
    (!f || p.form === f) &&
    p.title.toLowerCase().includes(s)
  ).forEach(p => {
    list.innerHTML += `
      <div class="poem-card">
        <h2><a href="${p.file}">${p.title}</a></h2>
        <div class="meta">
          Chủ đề: ${p.category} • Thể thơ: ${p.form}
        </div>
      </div>
    `;
  });
}

search.oninput = render;
category.onchange = render;
form.onchange = render;

render();