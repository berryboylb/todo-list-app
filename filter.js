list.addEventListener("mouseover", function(){
  var items = list.children,
      dragged = null;

  for (let i of items) {
    // DRAG START - YELLOW HIGHLIGHT DROPZONE
    // Highlight all except the one being dragged
    i.addEventListener("dragstart", function (ev) {
      dragged = this;
      for (let it of items) {
        if (it != dragged) { it.classList.add("hint"); }
      }
    });
    
    // DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.addEventListener("dragenter", function (ev) {
      if (this != dragged) { this.classList.add("active"); }
    });

    // DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.addEventListener("dragleave", function () {
      this.classList.remove("active");
    });

    // DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.addEventListener("dragover", function (evt) {
      evt.preventDefault();
    });

    // ON DROP - DO SOMETHING
    i.addEventListener("drop", function (evt) {
      evt.preventDefault();
      if (this != dragged) {
        let all = list.children,
            draggedpos = 0, droppedpos = 0;
        for (let it=0; it<all.length; it++) {
          if (dragged == all[it]) { draggedpos = it; }
          if (this == all[it]) { droppedpos = it; }
        }
        if (draggedpos < droppedpos) {
          this.parentNode.insertBefore(dragged, this.nextSibling);
        } else {
          this.parentNode.insertBefore(dragged, this);
        }
      }
    });

    // DRAG END - REMOVE ALL HIGHLIGHT
    i.addEventListener("dragend", function () {
      for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
      }
    });
  }
});