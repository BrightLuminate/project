var input = document.querySelector("input");
var preview = document.querySelector(".preview");

input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  // Clear existing preview content
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  // Get the selected files
  const curFiles = input.files;

  // If no files are selected, display a message
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    // If files are selected, create a list to display them
    const list = document.createElement("ol");
    preview.appendChild(list);

    // Iterate over the selected files
    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        // If the file type is valid, display its name and size
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);

        // Display the image and text in the list item
        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        // If the file type is not valid, display an error message
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      // Add the list item to the list
      list.appendChild(listItem);
    }
  }
}



const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}


function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}
