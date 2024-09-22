"use strict";!function(){window.Helpers.initCustomOptionCheck();var e=document.querySelector(".flatpickr"),t=document.querySelector(".contact-number-mask"),o=$("#plCountry"),i=document.querySelector("#plFurnishingDetails");if(null!==(t&&new Cleave(t,{phone:!0,phoneRegionCode:"US"}),o&&(o.wrap('<div class="position-relative"></div>'),o.select2({placeholder:"انتخاب کشور",dropdownParent:o.parent()})),e&&e.flatpickr({locale:"fa",altInput:!0,altFormat:"Y/m/d",disableMobile:!0}),i&&new Tagify(i,{whitelist:["فریزر","تلویزیون","کولر","وای فای","سیستم گرمایشی","ماشین شستشو","مبلمان","تخت خواب","میز ناهارخوری","مایکروویو","میز ورزشی"],maxTags:10,dropdown:{maxItems:20,classname:"tags-inline",enabled:0,closeOnSelect:!1}}),t=document.querySelector("#wizard-property-listing"))){e=(o=t.querySelector("#wizard-property-listing-form")).querySelector("#personal-details"),i=o.querySelector("#property-details");var a=o.querySelector("#property-features"),n=o.querySelector("#property-area"),l=o.querySelector("#price-details"),r=[].slice.call(o.querySelectorAll(".btn-next"));o=[].slice.call(o.querySelectorAll(".btn-prev"));const s=new Stepper(t,{linear:!0}),u=FormValidation.formValidation(e,{fields:{plFirstName:{validators:{notEmpty:{message:"لطفا نام خود را وارد کنید"}}},plLastName:{validators:{notEmpty:{message:"لطفا نام خانوادگی خود را وارد کنید"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton},init:e=>{e.on("plugins.message.placed",(function(e){e.element.parentElement.classList.contains("input-group")&&e.element.parentElement.insertAdjacentElement("afterend",e.messageElement)}))}}).on("core.form.valid",(function(){s.next()})),c=FormValidation.formValidation(i,{fields:{plPropertyType:{validators:{notEmpty:{message:"لطفا نوع ملک را انتخاب کنید"}}},plZipCode:{validators:{notEmpty:{message:"لطفا کد پستی را وارد کنید"},stringLength:{min:4,max:10,message:"کد پستی باید بیش از 4 و کمتر از 10 کاراکتر باشد"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:function(e,t){return"plAddress"!==e?".col-sm-6":".col-lg-12"}}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",(function(){s.next()}));(t=$("#plPropertyType")).length&&(t.wrap('<div class="position-relative"></div>'),t.select2({placeholder:"انتخاب نوع ملک",dropdownParent:t.parent()}).on("change.select2",(function(){c.revalidateField("plPropertyType")})));const d=FormValidation.formValidation(a,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",(function(){s.next()})),p=FormValidation.formValidation(n,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-md-12"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",(function(){s.next()})),m=FormValidation.formValidation(l,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-md-12"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",(function(){alert("ثبت شد...!")}));r.forEach((e=>{e.addEventListener("click",(e=>{switch(s._currentIndex){case 0:u.validate();break;case 1:c.validate();break;case 2:d.validate();break;case 3:p.validate();break;case 4:m.validate()}}))})),o.forEach((e=>{e.addEventListener("click",(e=>{switch(s._currentIndex){case 4:case 3:case 2:case 1:s.previous()}}))}))}}();