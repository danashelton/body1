$(document).ready(function() {


    // <!-- display alert when coords of head are clicked -->


    var i = 0;
    var marks = [];


    // <!-- append the marker to the canvas where clicked -->
    clear(); // remove all existing markers

    $("img").on("click", function(ev) {
        var location = " top: " + ev.pageY + " left: " + ev.pageX;



        $("body").append(
            $('<div class="marker", data-toggle="popover"></div>').css({ // include a class
                position: 'absolute',
                top: ev.pageY + 'px',
                left: ev.pageX + 'px',
                width: '20px',
                height: '20px',
                backgroundColor: '#FF2D55',
                border: (1, '#FF2D55', 'solid'),
                borderRadius: '50%',
            }),
            //     marker: x + y,
            // }),

            marks.push($(".marker")),
            $("div.marker").popover({ title: "TYPE", content: (location), trigger: "hover" }),
            $(".popover").attr('class="close"', 'data-dismiss="alert"'),
            console.log(ev.pageX, ev.pageY, [marks])




        )

    });



    function edit() {
        $('.popover').attr(contentEditable = 'true');
    }

    var canvas = document.querySelector('man');
    var c = canvas.getContext(document);


    var marker = function(e) {
        var bounds = e.target.getBoundingClientRect();
        var x = e.clientX - bounds.left;
        var y = e.clientY - bounds.top;

        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.fillStyle = "#FF2D55"
        c.fill
    }

    $(document).on("hover", ".popover", function() {
            thing();

        // edit($(this))
    });



});

function clear() {
    $(".marker").remove();
}

function thing() {
    $(document).addEventListener("hover", ".marker", function () {
        popover();
    });

    popover();
}
