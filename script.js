function toggleMode() {
  const html = document.documentElement
  if(html.classList.contains("light")) {
   html.classList.remove("light")
   }else {
    html.classList.add("light")}
  
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
      img.setAttribute("src" , "./assets/avatar-light.png")
    } else{
      img.setAttribute("src" , "./assets/avatar.png")
    }

     const alt = document.querySelector("#profile img")

     if (html.classList.contains("light")) {
       alt.setAttribute("foto de natan sorindo, com uma bebe nos ombros , fundo branco")
     } else {
       alt.setAttribute(
         "foto de natan sorindo,mostrando a tatuagem no braço,fundo branco"
       )
     }

}