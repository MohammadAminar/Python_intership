(function($) {
    "use strict"

    //date picker classic default
    // $('.datepicker-default').pickadate();

    const datepickerInstance = new mds.MdsPersianDateTimePicker(document.getElementById('input-daterange-datepicker'), {
        targetTextSelector: '[data-name="input-daterange-datepicker-text"]',
        targetDateSelector: '[data-name="input-daterange-datepicker-date"]',
        targetTextSelector: "#input-daterange-datepicker",
        rangeSelector: true,
        monthsToShow: [1, 1],
    });

    const datepickerInstance2 = new mds.MdsPersianDateTimePicker(document.getElementById('input-daterange-timepicker'), {
        targetTextSelector: '[data-name="input-daterange-timepicker-text"]',
        targetDateSelector: '[data-name="input-daterange-timepicker-date"]',
        targetTextSelector: "#input-daterange-timepicker",
        rangeSelector: true,
        monthsToShow: [1, 1],
        enableTimePicker: true,
    });

    const datepickerInstance3 = new mds.MdsPersianDateTimePicker(document.getElementById('input-limit-datepicker'), {
        targetTextSelector: '[data-name="input-limit-datepicker-text"]',
        targetDateSelector: '[data-name="input-limit-datepicker-date"]',
        targetTextSelector: "#input-limit-datepicker",
        rangeSelector: true,
        monthsToShow: [1, 1],
    });
    
    const datepickerInstance4 = new mds.MdsPersianDateTimePicker(document.getElementById('datepicker-1'), {
        targetTextSelector: '[data-name="datepicker-1-text"]',
        targetDateSelector: '[data-name="datepicker-1-date"]',
        targetTextSelector: "#datepicker-1",
    });

    const datepickerInstance5 = new mds.MdsPersianDateTimePicker(document.getElementById('datepicker-2'), {
        targetTextSelector: '[data-name="datepicker-2-text"]',
        targetDateSelector: '[data-name="datepicker-2-date"]',
        targetTextSelector: "#datepicker-2",
    });

    const datepickerInstance6 = new mds.MdsPersianDateTimePicker(document.getElementById('datepicker-3'), {
        targetTextSelector: '[data-name="datepicker-3-text"]',
        targetDateSelector: '[data-name="datepicker-3-date"]',
        targetTextSelector: "#datepicker-3",
    });

    const datepickerInstance7 = new mds.MdsPersianDateTimePicker(document.getElementById('mdatem'), {
        targetTextSelector: '[data-name="mdate-textm"]',
        targetDateSelector: '[data-name="mdate-datem"]',
        targetTextSelector: "#mdatem",
    });

    const datepickerInstance8 = new mds.MdsPersianDateTimePicker(document.getElementById('format-date'), {
        targetTextSelector: '[data-name="format-date-text"]',
        targetDateSelector: '[data-name="format-date-date"]',
        targetTextSelector: "#format-date",
        enableTimePicker: true,
    });

    const datepickerInstance9 = new mds.MdsPersianDateTimePicker(document.getElementById('minimum-date'), {
        targetTextSelector: '[data-name="minimum-date-text"]',
        targetDateSelector: '[data-name="minimum-date-date"]',
        targetTextSelector: "#minimum-date",
        enableTimePicker: true,
    });

})(jQuery);