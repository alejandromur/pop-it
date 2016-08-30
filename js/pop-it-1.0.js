/*
 * pop-it v1.0
 * https://github.com/alejandromur/pop-it
 *
 * Copyright 2016, alejandro@mamutlove.es
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 */

;(function( window, document, undefined ){

    // Constructor ------------------------------

    this.Popit = function(){

        // DOM ---------------------
        this.modal     = document.querySelector(".u-modal");
        this.modal_box = document.querySelector(".u-modal-box");


        // Properties ---------------------
        this.attr_open  = "[data-js='open-u-modal']";
        this.attr_close = "[data-js='close-u-modal']";


        // Options (defaults) ---------------------
        var defaults = {
            auto : false,
            veil : "active"
        };


        if( arguments[0] && typeof arguments[0] === "object" ) {
            this.options = extendDefaults( defaults, arguments[0] );
        }

        if( this.options.veil === "active" ) {
            this.able( this.modal, "data-js", "close-u-modal" );
        }else{
            this.setTriggers();
        }

        if( this.options.auto === true ) this.open( event, this.modal );

    };


    // Public Methods ----------------------------

    Popit.prototype = {

        setTriggers: function(){

            this.modal_open  = document.querySelectorAll( this.attr_open );
            this.modal_close = document.querySelectorAll( this.attr_close );

            this.attachEvents( this.modal_open, this.modal_close );
        },

        attachEvents: function(element_open, element_close){

            var self = this;

            for (var i = element_open.length - 1; i >= 0; i--) {
                element_open[i].addEventListener( "click", function(event){
                    event.preventDefault();
                    self.open( event, self.modal );
                }, false);
            }

            for (var i = element_close.length - 1; i >= 0; i--) {
                element_close[i].addEventListener( "click", function(event){
                    event.preventDefault();
                    self.close( event, self.modal );
                }, false);
            }

        },

        able: function(element, attr, value){
            element.setAttribute( attr, value );
            this.setTriggers();
        },

        open: function(event, element){
            element.classList.add("is-visible");
        },

        close: function(event, element){
            if( event.target.hasAttribute("data-js") ) element.classList.remove("is-visible");
        }

    };


    // Private Methods ---------------------------


    // Utilities ---------------------------------

    function extendDefaults( source, properties ){
        var property;
        for ( property in properties ) {
            if ( properties.hasOwnProperty( property ) ) {
                source[property] = properties[property];
            }
        }
        return source;
    }



}( window, document ));