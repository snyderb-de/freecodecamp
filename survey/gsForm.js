var $form = $('form#survey-form'),
    url = 'https://script.google.com/macros/s/AKfycbxMLV_RJApseRcXpTgpFl8xoJaJ44dE8HUEQkUTlTVfQofTzw7i/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
  
  );
})