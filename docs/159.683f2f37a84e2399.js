"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[159],{159:(A,p,r)=>{r.r(p),r.d(p,{HomeComponent:()=>H});var a=r(6814),c=r(95),l=r(1120),_=r(756),u=r(994),m=r(3519),f=r.n(m),e=r(4769),x=r(1132),C=r(6286);function h(n,s){if(1&n&&(e._UZ(0,"img",28),e.TgZ(1,"span",29),e._uU(2),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("src",t.image,e.LSH)("alt",t.name)("title",t.name),e.xp6(2),e.Oqu(t.name)}}function O(n,s){1&n&&(e.ynx(0),e.YNc(1,h,3,4,"ng-template",27),e.BQk())}function v(n,s){if(1&n&&e._UZ(0,"i",51),2&n){const t=s.$implicit,o=e.oxw().$implicit;e.ekj("review-star",o.ratingsAverage>=t)}}function M(n,s){1&n&&e._UZ(0,"i",52)}function P(n,s){1&n&&e._UZ(0,"i",53)}const b=function(n){return["/details",n]},Z=function(){return[1,2,3,4,5]};function w(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"div",32)(3,"div",33)(4,"div",34),e._UZ(5,"img",35),e.qZA()()(),e.TgZ(6,"div",36)(7,"h6",37)(8,"a",38),e._uU(9),e.qZA()(),e.TgZ(10,"h6",39)(11,"a",38),e._uU(12),e.qZA()(),e.TgZ(13,"div",40)(14,"div",41),e.YNc(15,v,1,2,"i",42),e.qZA(),e.TgZ(16,"span",43),e._uU(17),e.qZA()()()(),e.TgZ(18,"div",44)(19,"div",45),e._uU(20),e.qZA(),e.TgZ(21,"div",46)(22,"button",47,48),e.NdJ("click",function(){const g=e.CHM(t).$implicit,d=e.MAs(23),T=e.oxw();return e.KtG(T.callAddCart(g._id,d))}),e.YNc(24,M,1,0,"i",49),e.YNc(25,P,1,0,"i",50),e.qZA()()()()}if(2&n){const t=s.$implicit,o=e.oxw();e.xp6(1),e.Q6J("routerLink",e.VKq(11,b,t._id)),e.xp6(4),e.s9C("alt",t.title),e.Q6J("src",t.imageCover,e.LSH)("title",t.title),e.xp6(4),e.Oqu(t.category.name),e.xp6(3),e.Oqu(t.title),e.xp6(3),e.Q6J("ngForOf",e.DdM(13,Z)),e.xp6(2),e.hij("(",t.ratingsAverage,")"),e.xp6(3),e.hij("",t.price," EGP"),e.xp6(4),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("ngIf",o.loading)}}let H=(()=>{class n{constructor(t,o,i){this._productsService=t,this._CartService=o,this._renderer2=i,this.products=[],this.Category=[],this.loading=!1,this.message="",this.term="",this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:1e3,responsive:{0:{items:1}},nav:!1},this.pro={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1}},nav:!1},this.cateSlider={loop:!0,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:700,autoplay:!0,autoplayTimeout:2e3,autoplaySpeed:2e3,navText:["",""],responsive:{0:{items:1},400:{items:3},740:{items:4},940:{items:6}},nav:!1}}ngOnInit(){this._productsService.getAllProducts().subscribe({next:t=>{this.products=t.data}}),this._productsService.getCategory().subscribe({next:t=>{console.log(t.data),this.Category=t.data}})}callAddCart(t,o){this._renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(t).subscribe({next:i=>{console.log(i),this.message=i,this._renderer2.removeAttribute(o,"disabled"),this._CartService.cartCount.next(i.numOfCartItems),f().fire({toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0,timer:4e3,icon:"success",customClass:{timerProgressBar:"progress-bar"},showClass:{popup:"animate__animated animate__fadeInRightBig"},hideClass:{popup:"animate__animated animate__fadeOutRightBig"},title:i.message})},error:i=>{this._renderer2.removeAttribute(o,"disabled")}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(x.s),e.Y36(C.N),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],standalone:!0,features:[e.jDz],decls:57,vars:7,consts:[[1,"Home_banners__nd+0m","py-5"],[1,"container-fluid"],[1,"row"],[1,"col-lg-8"],[1,"Home_banner__gRoGW"],[1,"Home_img-section__e47CX","undefined"],["src","assets/Home-1.bf69c5faf745652d8009.png","alt","banner"],[1,"Home_text-banner1__sQiX2"],["href","/",1,"Link_button__O8sDQ"],[1,"col-lg-4"],[1,"Home_col-two__YnB8Z"],[1,"Home_Subbanner__La8Z3"],["src","assets/Home-2.5d00c06ebb057b287f6c.png","alt","banner",1,"imgSlide1"],[1,"Home_text-banner2__BO4V3"],[1,"Home_row-one__9oxv1"],[1,"Home_row-two__F6lqs"],["src","assets/Home-3.68dd75ee79704fce01ed.png","alt","banner"],[1,"Home_text-banner3__Dz326"],[1,"cateSlider","container-fluid"],[3,"options"],[4,"ngFor","ngForOf"],[1,"home","py-5","container-fluid"],["type","text","placeholder","Search",1,"form-control","mb-3","w-50","mx-auto",3,"ngModel","ngModelChange"],[1,"fw-bold","bg-success","p-3","w-25","m-auto","text-center","rounded-2","text-white","mb-3"],[1,"body"],[1,"row","g-3"],["class","col-sm-6 col-md-3",4,"ngFor","ngForOf"],["carouselSlide",""],["height","300px",3,"src","alt","title"],[1,"badge","rounded-pill","text-bg-success","fs-6","mt-2"],[1,"col-sm-6","col-md-3"],["role","button",1,"product-single-card",3,"routerLink"],[1,"product-top-area"],[1,"product-img"],[1,"first-view"],[1,"img-fluid",3,"src","title","alt"],[1,"product-info"],[1,"product-category"],["href","#"],[1,"product-title","text-truncate"],[1,"d-flex","align-items-center"],[1,"me-1"],["class","fa-solid fa-star ",3,"review-star",4,"ngFor","ngForOf"],[1,"review-count"],[1,"bg-white","shadow","rounded","d-flex","flex-wrap","align-items-center","py-2","justify-content-between"],[1,"new-price","ps-2","fw-bold"],[1,"sideicons","d-flex","justify-content-evenly"],[1,"sideicons-btn",3,"click"],["btnelement",""],["class","fa-solid fa-cart-plus",4,"ngIf"],["class","fa-solid fa-circle-notch fa-spin",4,"ngIf"],[1,"fa-solid","fa-star"],[1,"fa-solid","fa-cart-plus"],[1,"fa-solid","fa-circle-notch","fa-spin"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7)(8,"span"),e._uU(9,"Exclusive Offer - 30%"),e.qZA(),e.TgZ(10,"h1"),e._uU(11," Be Healthier "),e._UZ(12,"br"),e._uU(13," with Fresh Cart "),e.qZA(),e.TgZ(14,"a",8),e._uU(15,"Shop Now"),e.qZA()()()(),e.TgZ(16,"div",9)(17,"div",10)(18,"div",11)(19,"div",5),e._UZ(20,"img",12),e.qZA(),e.TgZ(21,"div",13)(22,"div",14)(23,"h2"),e._uU(24,"The best Organic "),e._UZ(25,"br"),e._uU(26,"Products Online"),e.qZA(),e.TgZ(27,"span"),e._uU(28,"Save to 50%"),e.qZA()(),e.TgZ(29,"div",15)(30,"p"),e._uU(31,"Save to 50%"),e.qZA()()()(),e.TgZ(32,"div",11)(33,"div",5),e._UZ(34,"img",16),e.qZA(),e.TgZ(35,"div",17)(36,"div",14)(37,"h2"),e._uU(38," Everyday Fresh & "),e._UZ(39,"br"),e._uU(40,"Clean with Our "),e._UZ(41,"br"),e._uU(42,"Products "),e.qZA()(),e.TgZ(43,"div",15)(44,"a",8),e._uU(45,"Shop Now"),e.qZA()()()()()()()()(),e.TgZ(46,"section",18)(47,"owl-carousel-o",19),e.YNc(48,O,2,0,"ng-container",20),e.qZA()(),e.TgZ(49,"div",21)(50,"input",22),e.NdJ("ngModelChange",function(d){return i.term=d}),e.qZA(),e.TgZ(51,"h3",23),e._uU(52,"Most Popular Products"),e.qZA(),e.TgZ(53,"div",24)(54,"div",25),e.YNc(55,w,26,14,"div",26),e.ALo(56,"search2"),e.qZA()()()),2&o&&(e.xp6(47),e.Q6J("options",i.cateSlider),e.xp6(1),e.Q6J("ngForOf",i.Category),e.xp6(2),e.Q6J("ngModel",i.term),e.xp6(5),e.Q6J("ngForOf",e.xi3(56,4,i.products,i.term)))},dependencies:[a.ez,a.sg,a.O5,_.bB,_.Fy,_.Mp,l.rH,u.M,c.u5,c.Fj,c.JJ,c.On],styles:[".user-select-none[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}a[_ngcontent-%COMP%]{text-decoration:none;color:unset}.review-star[_ngcontent-%COMP%]{color:#fdcc0d}.product-single-card[_ngcontent-%COMP%]{padding:20px;border-radius:5px;box-shadow:1px 1px 15px #cccccc40;cursor:pointer}.product-single-card[_ngcontent-%COMP%]:hover{box-shadow:1px 1px 28.5px -7px #d6d6d6}.product-single-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{padding:15px 0 0}.product-single-card[_ngcontent-%COMP%]   .product-top-area[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;overflow:hidden;border-radius:5px}.product-single-card[_ngcontent-%COMP%]   .product-top-area[_ngcontent-%COMP%]   .product-discount[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px;background:white;border-radius:3px;padding:5px 10px;box-shadow:1px 1px 28.5px -7px #ddd;-webkit-user-select:none;user-select:none;z-index:999}.sideicons[_ngcontent-%COMP%]   .sideicons-btn[_ngcontent-%COMP%]{background-color:#fff;color:#000;border-radius:50%;border:none;width:35px;height:35px;display:flex;justify-content:center;align-items:center;transition:.3s ease-in;box-shadow:1px 1px 28.5px -7px #ddd}.sideicons[_ngcontent-%COMP%]   .sideicons-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#0aad0a}.product-single-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{font-weight:600;opacity:60%}.product-single-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.product-single-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%], .product-single-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .new-price[_ngcontent-%COMP%]{padding-right:15px;font-size:18px;font-weight:600;letter-spacing:1px}.product-single-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%]{text-decoration:line-through;opacity:70%}.Home_banners__nd\\+0m[_ngcontent-%COMP%]   .Home_banner__gRoGW[_ngcontent-%COMP%]{position:relative}.Home_text-banner1__sQiX2[_ngcontent-%COMP%]{left:50px;padding:30px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.Home_text-banner1__sQiX2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#3cb47c;font-size:18px;font-weight:500}.Home_text-banner1__sQiX2[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#253d4e;font-size:60px;line-height:70px;padding:20px 0}.Link_button__O8sDQ[_ngcontent-%COMP%]{background-color:#3cb47c;border-radius:32px;color:#fff;font-size:14px;font-weight:500;padding:8px 20px}.Home_col-two__YnB8Z[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:23px}.Home_banners__nd\\+0m[_ngcontent-%COMP%]   .Home_img-section__e47CX[_ngcontent-%COMP%]{border:2px dashed var(--colorBorderLight);border-radius:10px}.Home_banners__nd\\+0m[_ngcontent-%COMP%]   .Home_img-section__e47CX[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:20px;object-fit:cover;padding:10px;width:100%}.Home_text-banner2__BO4V3[_ngcontent-%COMP%], .Home_text-banner3__Dz326[_ngcontent-%COMP%]{left:40px;position:absolute;top:50%;transform:translateY(-50%)}.Home_row-one__9oxv1[_ngcontent-%COMP%]{align-items:center;display:flex;gap:20px}.Home_row-one__9oxv1[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:20px}.Home_text-banner2__BO4V3[_ngcontent-%COMP%] > .Home_row-one__9oxv1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{align-items:center;background-color:var(--colorBackgroundYellow);border-radius:50%;display:flex;font-size:19px;font-weight:500;height:90px;justify-content:center;line-height:1.2;text-align:center;width:90px}.Home_text-banner2__BO4V3[_ngcontent-%COMP%] > .Home_row-two__F6lqs[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#3cb47c;font-size:20px;font-weight:500}.Home_Subbanner__La8Z3[_ngcontent-%COMP%]{position:relative}.Home_banners__nd\\+0m[_ngcontent-%COMP%]   .Home_img-section__e47CX[_ngcontent-%COMP%]{border:2px dashed #0000001f;border-radius:10px}.Home_text-banner2__BO4V3[_ngcontent-%COMP%] > .Home_row-one__9oxv1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{align-items:center;background-color:#ffd55a;border-radius:50%;display:flex;font-size:19px;font-weight:500;height:90px;justify-content:center;line-height:1.2;text-align:center;width:90px}@media (min-width: 1200px){.h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{font-size:2.5rem}}.imgSlide1[_ngcontent-%COMP%]{max-height:450px}"]})}return n})()}}]);