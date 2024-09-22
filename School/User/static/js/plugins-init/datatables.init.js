let dataSet = [
    [ "ببر نیکسون", "معمار سیستم", "ادینبورگ", "۵۴۲۱", "۲۰۱۱/۰۴/۲۵", "۳۲۰,۸۰۰ تومان" ],
    [ "گرت وینترز", "حسابدار", "توکیو", "۸۴۲۲", "۲۰۱۱/۰۷/۲۵", "۱۷۰,۷۵۰ تومان" ],
    [ "اشتون کاکس", "نویسنده فنی جوان", "سان فانسیسکو", "۱۵۶۲", "۲۰۰۹/۰۱/۱۲", "۸۶,۰۰۰ تومان" ],
    [ "سدریک کلی", "برنامه نویس ارشد جاوا اسکریپت", "ادینبورگ", "۶۲۲۴", "۲۰۱۲/۰۳/۲۹", "۴۳۳,۰۶۰ تومان" ],
    [ "شکر آیری", "حسابدار", "توکیو", "۵۴۰۷", "۲۰۰۸/۱۱/۲۸", "۱۶۲,۷۰۰ تومان" ],
    [ "بریل ویلیامسون", "کارشناس ادغام", "نیویورک", "۴۸۰۴", "۲۰۱۲/۱۲/۰۲", "۳۷۲,۰۰۰ تومان" ],
    [ "هرود چندلر", "دستیار فروش", "سان فرانسیکو", "۹۶۰۸", "۲۰۱۲/۰۸/۰۶", "۱۳۷,۵۰۰ تومان" ],
    [ "رونا دیویدسون", "کارشناس ادغام", "توکیو", "۶۲۰۰", "۲۰۱۰/۱۰/۱۴", "۳۲۷,۹۰۰ تومان" ],
    [ "کالین هرست", "برنامه نویس جاوا اسکریپت", "سان فرانسیکو", "۲۳۶۰", "۲۰۰۹/۰۹/۱۵", "۲۰۵,۵۰۰ تومان" ],
    [ "سونیا فراست", "مهندس نرم افزار", "ادینبورگ", "۱۶۶۷", "۲۰۰۸/۱۲/۱۳", "۱۰۳,۶۰۰ تومان" ],
    [ "جنا گینز", "مدیر دفتر", "لندن", "۳۸۱۴", "۲۰۰۸/۱۲/۱۹", "۹۰,۵۶۰ تومان" ],
    [ "کوین فلین", "رهبر پشتیبانی", "ادینبورگ", "۹۴۹۷", "۲۰۱۳/۰۳/۰۳", "۳۴۲,000 تومان" ],
    [ "شارد مارشال", "مدیر منطقه", "سان فرانسیکو", "۶۷۴۱", "۲۰۰۸/۱۰/۱۶", "۴۷۰,۶۰۰ تومان" ],
    [ "هیلی کندی", "طراح ارشد بازاریابی", "لندن", "۳۵۹۷", "۲۰۱۲/۱۲/۱۸", "۳۱۳,۵۰۰ تومان" ],
    [ "تاتیانا فیتزپاتریک", "مدیر منطقه", "لندن", "۱۹۶۵", "۲۰۱۰/۰۳/۱۷", "۳۸۵,۷۵۰ تومان" ],
    [ "مایکل سیلوا", "طراح بازاریابی", "لندن", "۱۵۸۱", "۲۰۱۲/۱۱/۲۷", "۱۹۸,۵۰۰ تومان" ],
    [ "پل برد", "مدیر ارشد مالی (CFO)", "نیویورک", "۳۰۵۹", "۲۰۱۰/۰۶/۰۹", "۷۲۵,۰۰۰ تومان" ],
    [ "گلوریا لیتل", "مدیر سیستم ها", "نیویورک", "۱۷۲۱", "۲۰۰۹/۰۴/۱۰", "۲۳۷,۵۰۰ تومان" ],
    [ "بردلی گریر", "مهندس نرم افزار", "لندن", "۲۵۵۸", "۲۰۱۲/۱۰/۱۳", "۱۳۲,۰۰۰ تومان" ],
    [ "دای ریوس", "رهبری پرسنل", "ادینبورگ", "۲۲۹۰", "۲۰۱۲/۰۹/۲۶", "۲۱۷,۵۰۰ تومان" ],
    [ "جنت کالدول", "رهبر توسعه", "نیویورک", "1937", "۲۰۱۱/۰۹/۰۳", "۳۴۵,۰۰۰ تومان" ],
    [ "یوری بری", "مدیر ارشد بازاریابی (CMO)", "نیویورک", "۶۱۵۴", "۲۰۰۹/۰۶/۲۵", "۶۷۵,۰۰۰ تومان" ],
    [ "سزار ونس", "پشتیبانی قبل از فروش", "نیویورک", "۸۳۳۰", "۲۰۱۱/۱۲/۱۲", "۱۰۶,۴۵۰ تومان" ],
    [ "دوریس وایلدر", "دستیار فروش", "سیدنی", "۳۰۲۳", "۲۰۱۰/۰۹/۲۰", "۸۵,۶۰۰ تومان" ],
    [ "آنجلیکا راموس", "مدیر عامل (مدیر عامل)", "لندن", "۵۷۹۷", "۲۰۰۹/۱۰/۰۹", "۱,۲۰۰,۰۰۰ تومان" ],
    [ "گاوین جویس", "توسعه دهنده", "ادینبورگ", "۸۸۲۲", "۲۰۱۰/۱۲/۲۲", "۹۲,۵۷۵ تومان" ],
    [ "جنیفر چانگ", "مدیر منطقه", "سنگاپور", "۹۲۳۹", "۲۰۱۰/۱۱/۱۴", "۱۷۵,۶۵۰ تومان" ],
    [ "برندن واگنر", "مهندس نرم افزار", "سان فرانسیکو", "۱۳۱۴", "۲۰۱۱/۰۶/۰۷", "206,850 تومان" ],
    [ "فیونا گرین", "مدیر ارشد عملیات (COO)", "سان فرانسیکو", "۲۹۴۷", "۲۰۱۰/۰۳/۱۱", "۸۵۰,۰۰۰ تومان" ],
    [ "شو ایتو", "بازاریابی منطقه ای", "توکیو", "۸۸۹۹", "۲۰۱۱/۰۸/۱۴", "۱۶۳,۰۰۰ تومان" ],
    [ "میشل هاوس", "کارشناس ادغام", "سیدنی", "۲۷۶۹", "۲۰۱۱/۰۶/۰۲", "۹۵,۴۰۰ تومان" ],
    [ "سوکی بورکز", "توسعه دهنده", "لندن", "۶۸۳۲", "۲۰۰۹/۱۰/۲۲", "۱۱۴,۵۰۰ تومان" ],
    [ "پرسکات بارتلت", "نویسنده فنی", "لندن", "۳۶۰۶", "۲۰۱۱/۰۵/۰۷", "۱۴۵,۰۰۰ تومان" ],
    [ "گاوین کورتز", "رهبر تیم", "سان فرانسیکو", "۲۸۶۰", "۲۰۰۸/۱۰/۲۶", "۲۳۵,۵۰۰ تومان" ],
    [ "مارتین مک کری", "پشتیبانی پس از فروش", "ادینبورگ", "۸۲۴۰", "۲۰۱۱/۰۳/۰۹", "۳۲۴,۰۵۰ تومان" ],
    [ "باتلر یونیتی", "طراح بازاریابی", "سان فرانسیکو", "۵۳۸۴", "۲۰۰۹/۱۲/۰۹", "85,675 تومان" ]
];




(function($) {
     "use strict"
	 
	 
    //example 1
    var table = $('#example').DataTable({
        createdRow: function ( row, data, index ) {
           $(row).addClass('selected')
        } ,
		language: {
			info: 'نمایش صفحه _PAGE_ از _PAGES_',
			infoEmpty: 'هیچ رکوردی در دسترس نیست',
			infoFiltered: '(فیلتر از _MAX_ کل رکوردها)',
			lengthMenu: 'نمایش  _MENU_ رکورد در هر صفحه',
			zeroRecords: 'چیزی پیدا نشد - متاسفم',
			paginate: {
			   next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>'
			}
		},
    });
	var table = $('#projects-tbl').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		pageLength:5,
		select: false,            
        lengthChange:false ,
		language: {
			info: 'نمایش صفحه _PAGE_ از _PAGES_',
			infoEmpty: 'هیچ رکوردی در دسترس نیست',
			infoFiltered: '(فیلتر از _MAX_ کل رکوردها)',
			lengthMenu: 'نمایش  _MENU_ رکورد در هر صفحه',
			zeroRecords: 'چیزی پیدا نشد - متاسفم',
			paginate: {
			   next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		},
		
    });
	 var table = $('#responsiveTable').DataTable( {
        responsive: true,
		language: {
			paginate: {
				next: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
			  previous: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>' 
			}
		}
    });
	var table = $('#projects-tbl1').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		pageLength:5,
		select: false,            
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#projects-tb22').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		pageLength:5,
		select: false,            
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#user-tbl').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		
		searching: true,
		pageLength:12,
		select: false,            
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			},
			'search' : ' <i class="fa-solid fa-magnifying-glass"></i>',
			searchPlaceholder: "جستجو کردن..."
			
		},
		
    });
	
	
	var table = $('#attendance-tbl').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,            
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#empoloyees-tbl').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        pageLength:5,			
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#empoloyees-tblwrapper').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        //pageLength:5,			
        lengthChange:false ,
		language: {
			info: 'نمایش صفحه _PAGE_ از _PAGES_',
			infoEmpty: 'هیچ رکوردی در دسترس نیست',
			infoFiltered: '(فیلتر از _MAX_ کل رکوردها)',
			lengthMenu: 'نمایش  _MENU_ رکورد در هر صفحه',
			zeroRecords: 'چیزی پیدا نشد - متاسفم',
			paginate: {
			   next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		},
		
    });
	var table = $('#empoloyees-tbl2').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        pageLength:5,			
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#empoloyees-tbl3').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        pageLength:5,			
        lengthChange:false ,
		language: {
			info: 'نمایش صفحه _PAGE_ از _PAGES_',
			infoEmpty: 'هیچ رکوردی در دسترس نیست',
			infoFiltered: '(فیلتر از _MAX_ کل رکوردها)',
			lengthMenu: 'نمایش  _MENU_ رکورد در هر صفحه',
			zeroRecords: 'چیزی پیدا نشد - متاسفم',
			paginate: {
			   next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		},
		
    });
	var table = $('#reports-tbl').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        //pageLength:5,			
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#empoloyeestbl2').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        /* pageLength:5, */			
        lengthChange:false ,

		"drawCallback": function( settings ) {
			jQuery('.status-select').selectpicker();
		},
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#empoloyees-tbl1').DataTable({
		//dom: 'Bfrtip',
		'dom': 'ZBfrltip',
		buttons: [
            
			{ extend: 'excel', text: '<i class="fa-solid fa-file-excel"></i> گزارش صادرات',
              className: 'btn btn-sm border-0'
			}
        ],
		searching: false,
		select: false,   
        pageLength:8,			
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
	var table = $('#product-tbl').DataTable({
		//dom: 'Bfrtip',
		searching: false,
		select: false,
		pageLength:7,		
        lengthChange:false ,
		language: {
			paginate: {
				next: '<i class="fa-solid fa-angle-left"></i>',
				previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
			
		},
		
    });
      
    table.on('click', 'tbody tr', function() {
    var $row = table.row(this).nodes().to$();
    var hasClass = $row.hasClass('selected');
    if (hasClass) {
        $row.removeClass('selected')
    } else {
        $row.addClass('selected')
    }
    })
    
    table.rows().every(function() {
    this.nodes().to$().removeClass('selected')
    });
	

    //example 2
    var table2 = $('#example2').DataTable( {
        createdRow: function ( row, data, index ) {
            $(row).addClass('selected')
        },

        "scrollY":        "42vh",
        "scrollCollapse": true,
        "paging":         false
    });

    table2.on('click', 'tbody tr', function() {
        var $row = table2.row(this).nodes().to$();
        var hasClass = $row.hasClass('selected');
        if (hasClass) {
            $row.removeClass('selected')
        } else {
            $row.addClass('selected')
        }
    })
        
    table2.rows().every(function() {
        this.nodes().to$().removeClass('selected')
    });
	
	// dataTable1
	var table = $('#dataTable1').DataTable({
		searching: false,
		paging:true,
		select: false,         
		lengthChange:false ,
		
	});
	// dataTable2
	var table = $('#dataTable2').DataTable({
		searching: false,
		paging:true,
		select: false,         
		lengthChange:false ,
		
	});
	// dataTable3
	var table = $('#dataTable3').DataTable({
		searching: false,
		paging:true,
		select: false,         
		lengthChange:false ,
		
	});
	// dataTable4
	var table = $('#dataTable4').DataTable({
		searching: false,
		paging:true,
		select: false,         
		lengthChange:false,
		
	});
   
	// dataTable5
	var table = $('#example5').DataTable({
		searching: false,
		paging:false,
		select: false,
		info: false,         
		lengthChange:false ,
		language: {
			paginate: {
			  next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		  }
		
	}); 
	
	// dataTable6
		var table = $('#example6').DataTable({
			searching: false,
			paging:true,
			select: false,
			info: false,         
			lengthChange:false ,
			language: {
			paginate: {
			  next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		  }
			
		});
		
		
	// dataTable7
	var table = $('#example7').DataTable({
		searching: false,
		paging:true,
		select: false,
		info: true,         
		lengthChange:false ,
		language: {
			paginate: {
			   next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		  }
		
	}); 	
	// dataTable9
		
	// table row
	var table = $('#dataTable1, #dataTable2, #dataTable3, #dataTable4,  #example3, #example4').DataTable({
		language: {
			paginate: {
			  next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		  }
	});
	$('#example tbody').on('click', 'tr', function () {
		var data = table.row( this ).data();
	});
   
	// application table
	var table = $('#application-tbl1,#application-tbl2,#application-tbl3,#application-tbl4 ').DataTable({
		searching: false,
		lengthChange:false ,
		language: {
			paginate: {
			  next: '<i class="fa-solid fa-angle-left"></i>',
			  previous: '<i class="fa-solid fa-angle-right"></i>' 
			}
		  }
	});
	
})(jQuery);
