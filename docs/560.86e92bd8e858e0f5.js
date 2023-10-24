"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[560],{6560:(J,m,a)=>{a.r(m),a.d(m,{RegisterComponent:()=>U});var c=a(6814),o=a(95),d=a(1120),e=a(4769),f=a(5881);function C(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Name is Required"),e.qZA())}function h(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Minimum length is 3"),e.qZA())}function P(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Maximum length is 20"),e.qZA())}function x(t,l){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,C,2,0,"p",15),e.YNc(2,h,2,0,"p",15),e.YNc(3,P,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let r,n,s;e.xp6(1),e.Q6J("ngIf",null==(r=i.registerForm.get("name"))?null:r.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=i.registerForm.get("name"))?null:n.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(s=i.registerForm.get("name"))?null:s.hasError("maxlength"))}}function Z(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"email is Required"),e.qZA())}function w(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Email is Invalid"),e.qZA())}function O(t,l){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,Z,2,0,"p",15),e.YNc(2,w,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let r,n;e.xp6(1),e.Q6J("ngIf",null==(r=i.registerForm.get("email"))?null:r.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=i.registerForm.get("email"))?null:n.hasError("email"))}}function v(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"password is Required"),e.qZA())}function M(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"Password must be at least 6 characters long"),e.qZA())}function T(t,l){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,v,2,0,"p",15),e.YNc(2,M,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let r,n;e.xp6(1),e.Q6J("ngIf",null==(r=i.registerForm.get("password"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=i.registerForm.get("password"))?null:n.getError("pattern"))}}function I(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"rePassword is Required"),e.qZA())}function b(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"rePassword doesn't match Password"),e.qZA())}function q(t,l){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,I,2,0,"p",15),e.YNc(2,b,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let r,n;e.xp6(1),e.Q6J("ngIf",null==(r=i.registerForm.get("rePassword"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=i.registerForm.get("rePassword"))?null:n.getError("notSame"))}}function A(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"phone is Required"),e.qZA())}function R(t,l){1&t&&(e.TgZ(0,"p",16),e._uU(1,"invalid Phone"),e.qZA())}function F(t,l){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,A,2,0,"p",15),e.YNc(2,R,2,0,"p",15),e.qZA()),2&t){const i=e.oxw();let r,n;e.xp6(1),e.Q6J("ngIf",null==(r=i.registerForm.get("phone"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=i.registerForm.get("phone"))?null:n.getError("pattern"))}}function N(t,l){1&t&&(e.TgZ(0,"span"),e._uU(1,"Submit"),e.qZA())}function E(t,l){1&t&&e._UZ(0,"i",17)}let U=(()=>{class t{constructor(i,r){this._router=i,this._AuthService=r,this.loading=!1,this.registerForm=new o.cw({name:new o.NI(null,[o.kI.required,o.kI.minLength(3),o.kI.maxLength(20)]),email:new o.NI(null,[o.kI.required,o.kI.email]),password:new o.NI(null,[o.kI.required,o.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),rePassword:new o.NI(null,[o.kI.required,o.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),phone:new o.NI(null,[o.kI.required,o.kI.pattern(/^01[0125][0-9]{8}$/)])},{validators:this.confirmPassword})}confirmPassword(i){const r=i.get("password"),n=i.get("rePassword");""==n?.value?n.setErrors({required:!0}):r?.value!=n?.value&&n?.setErrors({notSame:!0})}submitForm(){const i=this.registerForm.value;this.registerForm.valid&&(this.loading=!0,this._AuthService.register(i).subscribe({next:r=>{Swal.fire({toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0,timer:4e3,icon:"success",customClass:{timerProgressBar:"progress-bar"},showClass:{popup:"animate__animated animate__fadeInRightBig"},hideClass:{popup:"animate__animated animate__fadeOutRightBig"},title:"Your account was created successfully"}),this._router.navigate(["/login"])},error:r=>{console.log(r.error),console.log(r),Swal.fire({toast:!1,position:"center",showConfirmButton:!0,icon:"error",showClass:{popup:"animate__animated animate__bounceInDown"},hideClass:{popup:"animate__animated animate__bounceOutDown"},title:`${r.error.message}`}),this.loading=!1}}))}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(d.F0),e.Y36(f.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:27,vars:9,consts:[[1,"form",3,"formGroup","ngSubmit"],[1,"title"],[1,"message"],["type","text","placeholder","Name","formControlName","name",1,"input"],["class","alert alert-danger mt-2 w-50 p-1 mb-0",4,"ngIf"],["type","email","placeholder","Email","formControlName","email",1,"input"],["type","password","placeholder","Password","formControlName","password",1,"input"],["type","password","placeholder","Confirm Password","formControlName","rePassword",1,"input"],["type","tel","placeholder","Phone","formControlName","phone",1,"input"],[1,"btn","btn-success",3,"disabled"],[4,"ngIf"],["class","fas fa-spinner fa-spin",4,"ngIf"],[1,"signin"],["routerLink","/login"],[1,"alert","alert-danger","mt-2","w-50","p-1","mb-0"],["class","mb-0 small",4,"ngIf"],[1,"mb-0","small"],[1,"fas","fa-spinner","fa-spin"]],template:function(r,n){if(1&r&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.submitForm()}),e.TgZ(1,"p",1),e._uU(2,"Register "),e.qZA(),e.TgZ(3,"p",2),e._uU(4,"Signup now and get full access to our app. "),e.qZA(),e.TgZ(5,"label"),e._UZ(6,"input",3),e.YNc(7,x,4,3,"div",4),e.qZA(),e.TgZ(8,"label"),e._UZ(9,"input",5),e.YNc(10,O,3,2,"div",4),e.qZA(),e.TgZ(11,"label"),e._UZ(12,"input",6),e.YNc(13,T,3,2,"div",4),e.qZA(),e.TgZ(14,"label"),e._UZ(15,"input",7),e.YNc(16,q,3,2,"div",4),e.qZA(),e.TgZ(17,"label"),e._UZ(18,"input",8),e.YNc(19,F,3,2,"div",4),e.qZA(),e.TgZ(20,"button",9),e.YNc(21,N,2,0,"span",10),e.YNc(22,E,1,0,"i",11),e.qZA(),e.TgZ(23,"p",12),e._uU(24,"Already have an acount ? "),e.TgZ(25,"a",13),e._uU(26,"Signin"),e.qZA()()()),2&r){let s,p,g,_,u;e.Q6J("formGroup",n.registerForm),e.xp6(7),e.Q6J("ngIf",(null==(s=n.registerForm.get("name"))?null:s.errors)&&(null==(s=n.registerForm.get("name"))?null:s.touched)),e.xp6(3),e.Q6J("ngIf",(null==(p=n.registerForm.get("email"))?null:p.errors)&&(null==(p=n.registerForm.get("email"))?null:p.touched)),e.xp6(3),e.Q6J("ngIf",(null==(g=n.registerForm.get("password"))?null:g.errors)&&(null==(g=n.registerForm.get("password"))?null:g.touched)),e.xp6(3),e.Q6J("ngIf",(null==(_=n.registerForm.get("rePassword"))?null:_.errors)&&(null==(_=n.registerForm.get("rePassword"))?null:_.touched)),e.xp6(3),e.Q6J("ngIf",(null==(u=n.registerForm.get("phone"))?null:u.errors)&&(null==(u=n.registerForm.get("phone"))?null:u.touched)),e.xp6(1),e.Q6J("disabled",!n.registerForm.valid),e.xp6(1),e.Q6J("ngIf",!n.loading),e.xp6(1),e.Q6J("ngIf",n.loading)}},dependencies:[c.ez,c.O5,d.rH,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:['.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px;background-color:#fff;padding:20px;border-radius:20px;position:relative}.title[_ngcontent-%COMP%]{font-size:28px;color:#4169e1;font-weight:600;letter-spacing:-1px;position:relative;display:flex;align-items:center;padding-left:30px}.title[_ngcontent-%COMP%]:before, .title[_ngcontent-%COMP%]:after{position:absolute;content:"";height:16px;width:16px;border-radius:50%;left:0;background-color:#4169e1}.title[_ngcontent-%COMP%]:before{width:18px;height:18px;background-color:#4169e1}.title[_ngcontent-%COMP%]:after{width:18px;height:18px;animation:_ngcontent-%COMP%_pulse 1s linear infinite}.message[_ngcontent-%COMP%], .signin[_ngcontent-%COMP%]{color:#585757d2;font-size:14px}.signin[_ngcontent-%COMP%]{text-align:center}.signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4169e1}.signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{-webkit-text-decoration:underline royalblue;text-decoration:underline royalblue}.flex[_ngcontent-%COMP%]{display:flex;width:100%;gap:6px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:10px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:15px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:15px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:0;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.9);opacity:1}to{transform:scale(1.8);opacity:0}}']})}return t})()}}]);