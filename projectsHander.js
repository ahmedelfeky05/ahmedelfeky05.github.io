var projectsDiv=document.getElementById("Projects");
 for(let i=0;i<PROJECTS.length;i++){
    //  div
    var projectDiv =document.createElement("div");
    var divStyle=document.createAttribute("style");
    divStyle.value=" display:inline-block; width:300px;  margin:100px; ";
    projectDiv.setAttributeNode(divStyle);

//  h
    var title=document.createElement("h");
    var titleNode= document.createTextNode(PROJECTS[i].title);
    title.appendChild(titleNode);

    //img
    var photo =document.createElement("img");
    var source= document.createAttribute("src");
    source.value="./photo/"+ PROJECTS[i].img;
    photo.setAttributeNode(source);
    var imgStyle=document.createAttribute("style");
    imgStyle.value="width:250px; height:250px; ";
    photo.setAttributeNode(imgStyle);



    // p
    var description= document.createElement("p");
    var descriptionNode=document.createTextNode(PROJECTS[i].description);
    description.appendChild(descriptionNode);


 
   projectDiv.appendChild(title);
   projectDiv.appendChild(photo);
   projectDiv.appendChild(description);


projectsDiv.appendChild(projectDiv);


 }