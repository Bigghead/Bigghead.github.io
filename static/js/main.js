$( document ).ready( function () {


    loadMaterial();
    const observer = lozad( '.lozad', {
        load: ( el ) => {
            el.src = el.dataset.src;
        }
    } ); // lazy loads elements with default selector as ".lozad"
    lozad('.lozad-background').observe();
    observer.observe();
    $( ".button-collapse" ).sideNav();
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


const loadMaterial = () => {
    const links = [
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css', 
        'https://fonts.googleapis.com/icon?family=Material+Icons'
    ];

    links.forEach( ( link ) => {
        const linkEl      = document.createElement('link');
              linkEl.rel  = 'stylesheet';
              linkEl.href = link;

        document.head.appendChild(linkEl);
    } )
}
