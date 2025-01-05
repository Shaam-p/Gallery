function onLoad(){
  
  //console.log(img.src)
}

function upDate(previewPic){
  document.getElementById('image').innerHTML=previewPic.alt;
  // console.log(previewPic.src);
  var img = document.createElement('image');
  img.src = previewPic.src;
  img.width = image.width;
  img.height = image.height;
  img.alt = previewPic.alt;
  document.getElementById('image').style.backgroundImage = 'url('+img.src+')';
  //console.log(img.src);
  // console.log(img.alt);

    // 1) change the url for the background image of the div with the id = "image"
    // to the source file of the preview image

    // 2) Change the text  of the div with he id = "image"
    // to the alt text of the preview image
    // */

	}

	function unDo(){
    document.getElementById('image').innerHTML="Hover over a picture"
    document.getElementById('image').style.backgroundImage = 'none';
     /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was
    */

	}
