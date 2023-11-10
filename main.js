const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-author");
  const loadingText = document.querySelector(".meme-generator .loading-text");


  const showLoading = () => {
    loadingText.style.display = "block";
    memeImage.style.display = "none";
    memeTitle.textContent = "";
    memeAuthor.textContent = "";
  };
  
  const hideLoading = () => {
    loadingText.style.display = "none";
    memeImage.style.display = "block";
  };
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
    hideLoading();
  };
  
  const generateMeme = () => {
    showLoading();
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();

  