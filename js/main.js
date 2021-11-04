//  ========== script for contact form ========== 
function sendmail() {

    var name = $('#name').val();
    var email = $('#email').val();
    // var subject = $('#Subject').val();
    var message = $('#message').val();

    // var body = $('#body').val();

    var Body = 'name: ' + name + '<br>email: ' + email + '<br>message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'huzefaghurna@gmail.com',
        From: "noreply@Acelasses.com",
        Subject: "New Message  From " + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }
        }
    );
}

//   ====== portfolio filteration function ======

$(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.portfolio-filter button').on('click', function () {
        $('.portfolio-filter button').removeClass('active');
        $(this).addClass('active');
    });
});

