const emojiData = [
  { emoji: "😀", name: "grinning face" },
  { emoji: "😂", name: "face with tears of joy" },
  { emoji: "😍", name: "smiling face with heart-eyes" },
  { emoji: "🔥", name: "fire" },
  { emoji: "👍", name: "thumbs up" },
  { emoji: "❤", name: "white heart" },
  { emoji: "⚽", name: "ball" },
  { emoji: "🤔", name: "thinking face" },
  { emoji: "🥺", name: "pleading face" },
  { emoji: "😭", name: "loudly crying face" },
  { emoji: "🤝", name: "friendship"},
  { emoji: "👏", name:"clap"},
  { emoji: "😘", name:"kiss"},
  { emoji: "🥳", name:"party"},
  { emoji: "☺️", name:"smile"},
  {emoji:  "😢", name:"sad"},
  { emoji: "👻", name: "ghost" },
  { emoji: "🍕", name: "pizza" },
  { emoji: "🤗", name: "hugging face" },
  { emoji: "🤩", name: "star-struck" },
  { emoji: "😴", name: "sleeping face" },
  { emoji: "☁️", name: "cloud" },
  { emoji: "🤯", name: "exploding head" },
  { emoji: "🎀", name: "ribbon" },
  { emoji: "🥶", name: "cold face" }
];

const search = document.getElementById("search");
const emojiContainer = document.getElementById("emoji-container");
const copied = document.getElementById("copied");

search.addEventListener('input', () => {
  const inputValue = search.value.toLowerCase();
  const filtered = emojiData.filter(item => item.name.includes(inputValue));
  showEmojis(filtered);
})

showEmojis();

function showEmojis(filtered = emojiData){
  emojiContainer.innerHTML = "";
  filtered.forEach((emoji) => {
    const div = document.createElement('div');
    div.className = "emoji";
    div.innerHTML = `
        <span>${emoji.emoji}</span>
        <span class="name">${emoji.name}</span>
      `;
    div.addEventListener('click', () => copyToClipboard(emoji.emoji));
    emojiContainer.appendChild(div);

  })
}

function copyToClipboard(emoji){
  navigator.clipboard.writeText(emoji).then(() => {
    copied.style.display = "block";
    copied.textContent = `${emoji} copied to clipboard`;
    setTimeout(() => (copied.style.display = "none"), 1500)
  })
}
