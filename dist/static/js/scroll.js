$( document ).ready( function () {

    const observer = lozad( '.lozad', {
        load: ( el ) => {
            el.src = el.dataset.src;
            el.onload = () => {
                el.classList.add( 'fadeIn' );
            }
        }
    } ); // lazy loads elements with default selector as ".lozad"
    lozad('.lozad-background').observe();
    observer.observe();
    $( ".button-collapse" ).sideNav();
    $( '.wrapper' ).addClass( 'show bounce-in-top' );
    $( '.top-nav' ).addClass( 'show bounce-in-top' );
    $( '.parallax' ).parallax();
    $( 'ul.tabs' ).tabs( 'select_tab', 'tab_id',
        {
            onShow: function ( tab ) {
                $( '.carousel' ).carousel();
            }
        } );
    $( '.about-mes' ).flowtype( {
        minimum: 500,
        maximum: 1200,
        minFont: 16,
        maxFont: 24
    } );

    $( 'a[href*=#]' ).click( function ( event ) {
        $( 'html, body' ).animate( {
            scrollTop: $( $.attr( this, 'href' ) ).offset().top
        }, 1000 );
        event.preventDefault();
    } );

} );