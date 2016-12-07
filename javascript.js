    $(function () {

        $("#YXdialog").dialog({
            modal: true,
            autoOpen: false,
            title: "Advice from Yuexin",
            width: 540,
            height: 360
        });

        $("#YXwrap").click(function () {
            $("#YXdialog").dialog("open");
            $("#YXvideo").trigger("play");
        });

        $("button").click(function () {
            $("#YXvideo").trigger("pause");
        });

    });