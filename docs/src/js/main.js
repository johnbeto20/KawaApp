

$(document).ready(function(){
    $('.slide-home').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $("#playPAuse").toggle(
        function(){
            $('.slide-home').slick('slickPause'),
            $(this).removeClass("pause").addClass("play")
        },
        function(){
            $('.slide-home').slick('slickPlay'),
            $(this).removeClass("play").addClass("pause")
        }
    )
    $('.slick-dots').append($("#playPAuse"))
    
    $(".header__megaMenu li").mouseenter(function(){
        $("#effect").addClass("blur");
      });
    $(".header__megaMenu li").mouseleave(function(){
        $("#effect").removeClass("blur");
    });
});



$(function () {

$("#menuAction").on("click", function () {
    $("#menuGeneral").toggleClass("show");
})



var dataBase = [ 
    {"datajson": "data-moto.json"}, 
    {"datajson": "data-side-x-side.json"}, 
    {"datajson": "data-jet-ski.json"}
    ];

    $.each(dataBase, function(i, item) {
        var html = '';
        $.getJSON( dataBase[i].datajson, function( data ) {
            $.each(data.category, function (idx, obj) {
                var textIndex = obj.title
                if (this.headingArray) {
                    html+=`<ul class="cont-heading"><div class="container d-flex">`;
                    $.each(this.headingArray, function () {
                        if(this.heading[0].titleText == "Adventure / touring"){
                            html+=`<li class="heading text-center only-one">`;
                        } else if(this.heading[0].titleText == "TERYX DEPORTIVO 2 PASAJEROS"){
                            html+=`<li class="heading text-center only-one">`;
                        } else if(this.heading[0].titleText == "DE 2 A 4 PASAJEROS"){
                            html+=`<li class="heading text-center only-one">`;
                        } else if(this.heading[0].titleText == "MOTOS ACUÁTICAS RECREATIVAS"){
                            html+=`<li class="heading text-center only-one">`;
                        }else {
                            html+=`<li class="heading text-center">`;
                        }
                        $.each(this.heading, function () {
                            var textHeading = this.title;
                            html+=`<span class="category-heading f-oswald text-decoration-none title-gray show_elements">${this.titleText}</span>`;
                            $.each(this.subheading, function () {
                                html+=`<div class="subheading show_elements" style="animation-delay: 0.15s"><a href="${this.link}" class="text-decoration-none">
                                    <img src="src/img/motos/${textIndex}/${textHeading}/${this.imagen}" alt="${this.title}" class="w-100"/>
                                    <div class="subheading__text">   
                                    <h4 class="f-oswald text-dark fs-3 mb-0">${this.title}</h4>
                                    <p class="text-secondary">${this.price}</p>
                                    </div>
                                    </a>
                                </div>`;
                            });
                        });
                        html+='</li>';
                    });
                } else {
                    html += `<li class="top-level"><a href="${obj.link}">${obj.title}<span class="brand">${obj.mark}</span></a>`;
                }
            html+='</div></ul>';
            });
            html+='</li>';
            $(`#nav-${i}`).html(html);
        })
    });
    
    function GetData(pos) {
        var htmlGeneral = ''; 
        var count = 0;
        $.each(dataBase, function(i, item) {
            $.getJSON( dataBase[i].datajson, function( data ) {
                $.each(data.category, function (idx, obj) {
                    var textIndex = obj.title
                    if (this.headingArray && obj.title == pos) {
                        $.each(this.headingArray, function () {
                            $.each(this.heading, function () {
                                var textHeading = this.title
                                $.each(this.subheading, function () {
                                    htmlGeneral+=`<div class="col-md-4">
                                                <div class="element-obj show_elements" id="elementsDom" style="animation-delay: ${count*0.25}s"><a href="${this.link}" class="text-decoration-none text-black">
                                            <img src="src/img/motos/${textIndex}/${textHeading}/${this.imagen}" alt="${this.title}" class="w-100"/>
                                            <div class="element-obj__text">
                                                <span class="fw-bold f-oswald text-uppercase">modelo ${this.model}</span>
                                                <p class="element-obj__name fw-bold f-oswald text-uppercase fs-2 m-0 pb-2">${this.title}</p>
                                                <p class="element-obj__price mt-2 fs-6 text-secondary">${this.price}</p>
                                            </div>
                                        </a>
                                    </div></div>`;
                                    count++;
                                });
                            });
                        });
                    } else if(this.headingArray && 0 == pos) {
                        $.each(this.headingArray, function () {
                            $.each(this.heading, function () {
                                var textHeading = this.title
                                $.each(this.subheading, function () {
                                    htmlGeneral+=`<div class="col-md-4">
                                                <div class="element-obj show_elements" id="elementsDom" style="animation-delay: ${count*0.25}s"><a href="${this.link}" class="text-decoration-none text-black">
                                            <img src="src/img/motos/${textIndex}/${textHeading}/${this.imagen}" alt="${this.title}" class="w-100"/>
                                            <div class="element-obj__text">
                                                <span class="fw-bold f-oswald text-uppercase">modelo ${this.model}</span>
                                                <p class="element-obj__name fw-bold f-oswald text-uppercase fs-2 m-0 pb-2">${this.title}</p>
                                                <p class="element-obj__price mt-2 fs-6 text-secondary">${this.price}</p>
                                            </div>
                                        </a>
                                    </div></div>`;
                                    count++;
                                });
                            });
                        });
                    }
                });
                $("#elementsDom").html(htmlGeneral);
            })
        });
    }

    GetData(0);

    $('.element-obj__tab').find('li').click(function(){
        var index = $('.element-obj__tab li');

        GetData($(this).data("name"));

        $('.element-obj__tab li').removeClass("active")
        $(this).addClass("active")
    })

});



