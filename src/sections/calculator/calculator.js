// Подсвечиваем форму результата и лейбл при клике на нее
$( '.calculator__result-field--small', '.calculator__result' ).on( 'click', function () {

  let $that = $( this ),
    $toggleClass = 'calculator__result-field--check';

  $that.addClass( $toggleClass ).siblings( '.calculator__result-field--small' ).removeClass( $toggleClass );

} );