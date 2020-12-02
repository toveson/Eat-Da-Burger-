// devour button

$('.eat_me').each(function() {
    $(this).on('click', (event) => {
        event.preventDefault();
        const id = $(this).data();
        console.log(id.id);
        $.ajax('burgers/' + id.id, {
            type: 'PUT'
        }).then(() => {
            console.log('eaten')
            location.reload();
        });
    });
});