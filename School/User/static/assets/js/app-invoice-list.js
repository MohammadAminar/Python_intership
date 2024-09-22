"use strict";$((function(){var a,t=$(".invoice-list-table");t.length&&(a=t.DataTable({ajax:assetsPath+"json/invoice-list.json",columns:[{data:""},{data:"invoice_id"},{data:"invoice_id"},{data:"invoice_status"},{data:"issued_date"},{data:"client_name"},{data:"total"},{data:"balance"},{data:"invoice_status"},{data:"action"}],columnDefs:[{className:"control",responsivePriority:2,searchable:!1,targets:0,render:function(a,t,e,s){return""}},{targets:1,orderable:!1,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,render:function(a,t,e,s){return'<a href="app-invoice-preview.html"><span>#'+e.invoice_id+"</span></a>"}},{targets:3,render:function(a,t,e,s){var n=e.invoice_status,i=e.due_date;return"<div class='d-inline-flex' data-bs-toggle='tooltip' data-bs-html='true' title='<span>"+n+"<br> <strong>Balance:</strong> "+e.balance+"<br> <strong>Due Date:</strong> "+i+"</span>'>"+{Sent:'<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-secondary"><i class="mdi mdi-email-outline"></i></span></span>',Draft:'<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-primary"><i class="mdi mdi-folder-outline"></i></span></span>',"Past Due":'<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-danger"><i class="mdi mdi-alert-circle-outline"></i></span></span>',"Partial Payment":'<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-success"><i class="mdi mdi-check"></i></span></span>',Paid:'<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-warning"><i class="mdi mdi-chart-pie-outline"></i></span></span>',Downloaded:'<span class="avatar avatar-sm"> <span class="avatar-initial rounded-circle bg-label-info"><i class="mdi mdi-arrow-down"></i></span></span>'}[n]+"</div>"}},{targets:4,responsivePriority:4,render:function(a,t,e,s){var n=e.client_name,i=e.service,r=e.avatar_image,l=Math.floor(11*Math.random())+1;return'<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-2">'+(!0===r?'<img src="'+assetsPath+"img/avatars/"+l+'.png" alt="Avatar" class="rounded-circle">':'<span class="avatar-initial rounded-circle bg-label-'+["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())]+'">'+(r=(((r=(n=e.client_name).match(/\b\w/g)||[]).shift()||"")+(r.pop()||"")).toUpperCase())+"</span>")+'</div></div><div class="d-flex flex-column gap-1"><a href="pages-profile-user.html" class="text-truncate"><h6 class="mb-0">'+n+'</h6></a><small class="text-truncate text-muted">'+i+"</small></div></div>"}},{targets:5,render:function(a,t,e,s){return'<span class="d-none">'+(e=e.total)+"</span>$"+e}},{targets:6,render:function(a,t,e,s){return e=new Date(e.due_date),'<span class="d-none">'+moment(e).format("YYYYMMDD")+"</span>"+moment(e).format("DD MMM YYYY")}},{targets:7,orderable:!1,render:function(a,t,e,s){return 0===(e=e.balance)?'<span class="badge rounded-pill bg-label-success" text-capitalized> Paid </span>':'<span class="d-none">'+e+"</span>"+e}},{targets:8,visible:!1},{targets:-1,title:"عملیات ها",searchable:!1,orderable:!1,render:function(a,t,e,s){return'<div class="d-flex align-items-center"><a href="javascript:;" data-bs-toggle="tooltip" class="text-body delete-record" data-bs-placement="top" title="حذف صورتحساب"><i class="mdi mdi-delete-outline mdi-20px mx-1"></i></a><a href="app-invoice-preview.html" data-bs-toggle="tooltip" class="text-body" data-bs-placement="top" title="نمایش صورتحساب"><i class="mdi mdi-eye-outline mdi-20px mx-1"></i></a><div class="dropdown"><a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical mdi-20px"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">دانلود</a><a href="app-invoice-edit.html" class="dropdown-item">ویرایش</a><a href="javascript:;" class="dropdown-item">کپی</a></div></div></div>'}}],order:[[2,"desc"]],dom:'<"row ms-2 me-3"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-3"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-3"f<"invoice_status mb-3 mb-md-0">>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',language:{sLengthMenu:" _MENU_",info:"نمایش _START_ از _END_ از _TOTAL_ رکورد",paginate:{last:"اخرین",first:"اولین",next:"بعدی",previous:"قبلی"},search:"",searchPlaceholder:"جستجوی صورتحساب"},buttons:[{text:'<i class="mdi mdi-plus me-md-1"></i><span class="d-md-inline-block d-none">ایجاد صورتحساب</span>',className:"btn btn-primary",action:function(a,t,e,s){window.location="app-invoice-add.html"}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(a){return"Details of "+a.data().full_name}}),type:"column",renderer:function(a,t,e){return e=$.map(e,(function(a,t){return""!==a.title?'<tr data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><td>'+a.title+":</td> <td>"+a.data+"</td></tr>":""})).join(""),!!e&&$('<table class="table"/><tbody />').append(e)}}},initComplete:function(){this.api().columns(8).every((function(){var a=this,t=$('<select id="UserRole" class="form-select"><option value=""> انتخاب وضعیت </option></select>').appendTo(".invoice_status").on("change",(function(){var t=$.fn.dataTable.util.escapeRegex($(this).val());a.search(t?"^"+t+"$":"",!0,!1).draw()}));a.data().unique().sort().each((function(a,e){t.append('<option value="'+a+'" class="text-capitalize">'+a+"</option>")}))}))}})),t.on("draw.dt",(function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(a){return new bootstrap.Tooltip(a,{boundary:document.body})}))})),$(".invoice-list-table tbody").on("click",".delete-record",(function(){$(this).closest($('[data-bs-toggle="tooltip"]').tooltip("hide")),a.row($(this).parents("tr")).remove().draw()}))}));