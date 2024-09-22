(function ($) {
    "use strict"

/*******************
Sweet-alert JS
*******************/

    document.querySelector(".sweet-wrong").onclick = function () {
        sweetAlert("اوه...", "مشکلی پیش آمد !!", "error")
    }, document.querySelector(".sweet-message").onclick = function () {
        swal("سلام، این یک پیام است !!")
    }, document.querySelector(".sweet-text").onclick = function () {
        swal("سلام، این یک پیام است !!", "زیباست، نه؟")
    }, document.querySelector(".sweet-success").onclick = function () {
        swal("هی، کار خوب !!", "روی دکمه کلیک کردی !!", "success")
    }, document.querySelector(".sweet-confirm").onclick = function () {
        swal({
            title: "مطمئنی حذف میکنی؟",
            text: "شما نمی توانید این فایل خیالی را بازیابی کنید !!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "بله حذفش کن !!",
            closeOnConfirm: !1
        }, function () {
            swal("حذف شده !!", "سلام فایل خیالی شما حذف شده است !!", "success")
        })
    }, document.querySelector(".sweet-success-cancel").onclick = function () {
        swal({
            title: "مطمئنی حذف میکنی؟",
            text: "شما نمی توانید این فایل خیالی را بازیابی کنید !!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "بله حذفش کن !!",
            cancelButtonText: "نه، لغوش کن !!",
            closeOnConfirm: !1,
            closeOnCancel: !1
        }, function (e) {
            e ? swal("Deleted !!", "Hey, your imaginary file has been deleted !!", "success") : swal("Cancelled !!", "Hey, your imaginary file is safe !!", "error")
        })
    }, document.querySelector(".sweet-image-message").onclick = function () {
        swal({
            title: "شیرین !!",
            text: "سلام، اینجا یک تصویر سفارشی است !!",
            imageUrl: "../assets/images/hand.jpg"
        })
    }, document.querySelector(".sweet-html").onclick = function () {
        swal({
            title: "شیرین !!",
            text: "<span style='color:#ff0000'>سلام، شما از HTML استفاده می کنید !!<span>",
            html: !0
        })
    }, document.querySelector(".sweet-auto").onclick = function () {
        swal({
            title: "هشدار بسته خودکار شیرین !!",
            text: "سلام من 2 ثانیه دیگه میبندم !!",
            timer: 2e3,
            showConfirmButton: !1
        })
    }, document.querySelector(".sweet-prompt").onclick = function () {
        swal({
            title: "یک ورودی وارد کنید !!",
            text: "یه چیز جالب بنویس !!",
            type: "input",
            showCancelButton: !0,
            closeOnConfirm: !1,
            animation: "slide-from-top",
            inputPlaceholder: "چیزی بنویسید"
        }, function (e) {
            return !1 !== e && ("" === e ? (swal.showInputError("باید چیزی بنویسی!"), !1) : void swal("سلام !!", "شما نوشتی: " + e, "success"))
        })
    }, document.querySelector(".sweet-ajax").onclick = function () {
        swal({
            title: "درخواست شیرین آژاکس !!",
            text: "برای اجرای درخواست ajax ارسال کنید !!",
            type: "info",
            showCancelButton: !0,
            closeOnConfirm: !1,
            showLoaderOnConfirm: !0
        }, function () {
            setTimeout(function () {
                swal("سلام، درخواست ajax شما تمام شد !!")
            }, 2e3)
        })
    };

})(jQuery);