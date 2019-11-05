$( '.accordion-link' ).on( 'click', function ( event ) {

  event.preventDefault();

  let $that = $( this );

  $that.toggleClass( 'accordion-link--transform' ).siblings( '.accordion-content' ).toggleClass( 'accordion-content--show' );

} );