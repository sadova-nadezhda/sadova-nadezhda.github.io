function add() {
  let str1 = '<div class="form-group"> <label for="inputTitle">Название</label> <input type="text" name="title" id="inputTitle" class="form-control" required="required"></div>';
  let str2 ='<div class="form-group"> <label for="reviewimg">Картинка</label> <div class="input-group"> <div class="custom-file"> <input type="file" name="img" class="custom-file-input" id="reviewimg" accept="image/jpeg, image/png, image/jpg, image/gif" required="required"> <label class="custom-file-label" for="reviewimg"></label> </div> </div> </div>'
  document.querySelector('.form__input-box').innerHTML = str;
}