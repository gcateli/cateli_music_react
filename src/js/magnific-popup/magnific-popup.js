// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery-item').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true
    }
  });