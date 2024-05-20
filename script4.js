let like = document.getElementById("like");
let counterElement = document.getElementById("realcounter");
let post = document.getElementById("firstpost");
let section = document.getElementById("section");
let imgurls = [
  "https://avatars.mds.yandex.net/i?id=69308c01414d7216c48f843c371c3ec41aff9b8a-12387244-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=abca114da530cc82a88b6a7336063f92e9a64167-10703010-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=653d3b5134a43a3d03d48cb2c12ee6ab4e20acaa-10160381-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=d28593f466fede9f037ca5274673581700b7875d-12607459-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=5a4942a5e6aaf59f24da8cbb0331fdd4dcc51eb2-12901607-images-thumbs&n=13"
];
let avaurls = [
    "https://avatars.mds.yandex.net/i?id=9b41ff01844ca6b55ca2b4312f1dae93-5269572-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=7e0352d7172da987873e9584f8fb6bfce7c25f85-12475369-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=8db07dbe16157dea65fe13cc3301efcb413ec40d-12325301-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=2ae1b65a7eb0a5d7671c38a5faab2d3d8c13db30-12542244-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=87011105ca0e81c651d14fbad5729dba71d4e168-10701700-images-thumbs&n=13"
];
let nicks = ["mifionn","willsmith","art_viral","_ifuu_","memes"]
let descriptions = ["Do you know that lioness are better hunters than males?","I so like fruits. What about you?", "This my morning started with oatmeal porridge", "Horse is a symbol of Kazakhstan", "Do you want to study with me near nature?"]

like.addEventListener("click", () => {
  like.src = "https://cdn-icons-png.flaticon.com/128/865/865917.png";
  let counter = parseInt(counterElement.innerText);
  counter++;
  counterElement.innerText = counter;
});

comment.addEventListener("click", () => {
    let input = document.createElement('input');
    input.type = 'text';
    input.style.position = 'absolute';
    input.style.top = '3%'
    input.style.border = '0px'
    input.style.width = '100%'
    input.style.height = '5%'
    input.placeholder = 'comment here'
    newpost.appendChild(input);
});

for (let i = 0; i < 100; i++) {
  newpost = post.cloneNode(true);
  imgpost = newpost.getElementsByClassName("post")[0];
  likebox = newpost.getElementsByClassName("likebox")[0];
  imgpost.setAttribute("src", imgurls[i % 5]);
  avapost = newpost.getElementsByClassName("ava")[0];
  avapost.setAttribute("src", avaurls[i % 5]);
  nickpost = newpost.getElementsByClassName("nick")[0];
  nickpost.innerHTML = nicks[i % 5];
  descriptionpost = newpost.getElementsByClassName("description")[0];
  descriptionpost.innerHTML = descriptions[i%5];

  section.appendChild(newpost);

  let like = newpost.querySelector("#like");
  let counterElement = newpost.querySelector("#realcounter");
  let comment = newpost.querySelector("#comment");

  like.addEventListener("click", () => {
    like.src = "https://cdn-icons-png.flaticon.com/128/865/865917.png";
    let counter = parseInt(counterElement.innerText);
    counter++;
    counterElement.innerText = counter;
  });

  comment.addEventListener("click", () => {
    let input = document.createElement('input');
    input.type = 'text';
    input.value = 'Comment here';
    input.style.position = 'absolute';
    input.style.top = '3%'
    input.style.border = '0px'
    input.style.width = '90%'
    input.style.height = '5%'
    input.style.placeholder = 'comment here'
    newpost.appendChild(input);
  });
} 