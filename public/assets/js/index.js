$(function() {
  $('.devour').on('click', function(event) {
    var newBurger = {
      id: $(this).data('id'),
      burger_name: $(this).attr('burger_name'),
      devoured: 1
    };

    $.ajax('/', {
      type: 'PUT',
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

  $('.make-burger').on('submit', function(event) {
    console.log('submitted');
    $.ajax('/', {
      type: 'POST',
      data: { burger_name: $('#burger_name').val() }
    }).then(function() {
      location.reload();
    });
  });
});
