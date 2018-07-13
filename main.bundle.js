webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Home/banner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var BannerService = /** @class */ (function () {
    function BannerService(http) {
        this.http = http;
        this.bannersUrl = "http://green-web-bookstore.herokuapp.com/api/banners";
    }
    BannerService.prototype.getBanners = function () {
        return this.http.get(this.bannersUrl);
    };
    BannerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BannerService);
    return BannerService;
}());



/***/ }),

/***/ "./src/app/Home/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = "http://green-web-bookshop.herokuapp.com/api/books";
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url);
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/Home/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/Home/carcarouslide/carcarouslide.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Home/carcarouslide/carcarouslide.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container\">\n    <app-loading-spi *ngIf = \"showSpinner\"></app-loading-spi>\n  <div class=\"my-slide\" >\n      <div id=\"demo\" class=\"carousel slide text-center\" data-ride=\"carousel\">\n          <ul class=\"carousel-indicators\">\n            <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n          </ul>\n          <div class=\"carousel-inner\" *ngIf=\"banners\">\n            <div class=\"carousel-item active\">\n              <img src=\"{{banners[0].imageUrl}}\" alt=\"fentybeauty\"  class=\"img-fluid\"> \n              <div class=\"carousel-caption\">\n                \n              </div>   \n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"{{banners[1].imageUrl}}\" alt=\"foundation\"  class=\"img-fluid\">\n              <div class=\"carousel-caption\">\n                  \n              </div>   \n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"{{banners[2].imageUrl}}\" alt=\"body-lava\"  class=\"img-fluid\">\n              <div class=\"carousel-caption\">\n                  \n              </div>   \n            </div>\n          </div>\n          <!-- button control -->\n          <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"fas fa-arrow-left  \"></span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"fas fa-arrow-right  \"></span>\n          </a>\n  </div>\n  </div>  \n  </div> \n\n\n"

/***/ }),

/***/ "./src/app/Home/carcarouslide/carcarouslide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarcarouslideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_service__ = __webpack_require__("./src/app/Home/banner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarcarouslideComponent = /** @class */ (function () {
    function CarcarouslideComponent(bannerService) {
        this.bannerService = bannerService;
        this.showSpinner = true;
    }
    CarcarouslideComponent.prototype.ngOnInit = function () {
        this.getBanners();
    };
    CarcarouslideComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannerService.getBanners()
            .subscribe(function (banners) { return _this.banners = banners; });
        this.bannerService.getBanners().subscribe(function () { return _this.showSpinner = false; });
    };
    CarcarouslideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carcarouslide',
            template: __webpack_require__("./src/app/Home/carcarouslide/carcarouslide.component.html"),
            styles: [__webpack_require__("./src/app/Home/carcarouslide/carcarouslide.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__banner_service__["a" /* BannerService */]])
    ], CarcarouslideComponent);
    return CarcarouslideComponent;
}());



/***/ }),

/***/ "./src/app/Home/carouslide-two/carouslide-two.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Home/carouslide-two/carouslide-two.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- slideshow new product  -->\n<div class =\"slideshownewproduct container-fluid  \">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n  <div  id =\"newproduct\" class=\"carousel slide \" data-ride=\"carousel\">\n\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#newproduct\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#newproduct\" data-slide-to=\"1\"></li>\n        <li data-target=\"#newproduct\" data-slide-to=\"2\"></li>\n      </ul>\n      \n      <!-- The slideshow -->\n      <div class=\"carousel-inner newproduct text-center \" *ngIf=\"banners\">\n        <div class=\"carousel-item active newproduct \" id =\"newproduct1\">\n            <img src=\"{{banners[3].imageUrl}}\" alt=\"fentybeauty\"  class=\"img-fluid\">\n          <div class=\"carousel-caption\">\n          <h1>{{banners[0].title}}</h1>\n          </div>\n        </div>\n        <div class=\"carousel-item newproduct  \" id =\"newproduct2\">\n            <img src=\"{{banners[2].imageUrl}}\" alt=\"fentybeauty\"  class=\"img-fluid\">\n            <div class=\"carousel-caption\">\n          <h1>{{banners[1].title}}</h1>\n            </div>\n        </div>\n        <div class=\"carousel-item newproduct  \" id =\"newproduct3\">\n            <img src=\"{{banners[1].imageUrl}}\" alt=\"fentybeauty\"  class=\"img-fluid\">\n            <div class=\"carousel-caption\">\n           <h1>{{banners[2].title}}</h1>\n            </div>\n        </div>\n      </div>\n      \n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#newproduct\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#newproduct\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n</div>\n    <hr>"

/***/ }),

/***/ "./src/app/Home/carouslide-two/carouslide-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouslideTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_service__ = __webpack_require__("./src/app/Home/banner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouslideTwoComponent = /** @class */ (function () {
    function CarouslideTwoComponent(bannerService) {
        this.bannerService = bannerService;
    }
    CarouslideTwoComponent.prototype.ngOnInit = function () {
        this.getBanners();
    };
    CarouslideTwoComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannerService.getBanners()
            .subscribe(function (banners) { return _this.banners = banners; });
    };
    CarouslideTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carouslide-two',
            template: __webpack_require__("./src/app/Home/carouslide-two/carouslide-two.component.html"),
            styles: [__webpack_require__("./src/app/Home/carouslide-two/carouslide-two.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__banner_service__["a" /* BannerService */]])
    ], CarouslideTwoComponent);
    return CarouslideTwoComponent;
}());



/***/ }),

/***/ "./src/app/Home/genre.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};
var GenreService = /** @class */ (function () {
    function GenreService(http) {
        this.http = http;
        this.genresUrl = "http://green-web-bookshop.herokuapp.com/api/genres";
    }
    GenreService.prototype.getGenres = function () {
        return this.http.get(this.genresUrl);
    };
    GenreService.prototype.addGenre = function (genre) {
        return this.http.post(this.genresUrl, "name=" + genre.name, httpOptions);
    };
    // deleteGenre(genre: Genre):Observable<Genre> {
    //   return this.http.delete<Genre>(this.genresUrl, httpOptions);
    // }
    GenreService.prototype.deleteGenre = function (genre) {
        var id = typeof genre === 'string' ? genre : genre._id;
        var url = this.genresUrl + "/" + genre._id;
        return this.http.delete(url, httpOptions);
    };
    GenreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "./src/app/Home/genre.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre(name) {
        this.name = name;
    }
    return Genre;
}());



/***/ }),

/***/ "./src/app/Home/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Home/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carcarouslide></app-carcarouslide>\n<app-owl-carouslide></app-owl-carouslide>\n\n<app-owl-2></app-owl-2>\n<app-tab></app-tab>\n<app-banner02></app-banner02>\n<app-owl-3></app-owl-3>\n<app-tab-02></app-tab-02>\n\n"

/***/ }),

/***/ "./src/app/Home/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/Home/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/Home/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/Home/hot-sale-product/hot-sale-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Home/hot-sale-product/hot-sale-product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- My-container -->\n<div class=\"My-container\" *ngIf=\"books\">\n  <div class=\"container \"  >\n    <div class=\"row flg-sale-product\">\n      <div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4 first-image frst \" *ngFor='let book of books'>\n          <div class=\"tag\">\n              <span class=\"hot-sale\"> Hot Sale</span>\n              <span class=\"Flagship-exclusive\">Flagship Exclusive</span>\n            </div>\n      <p class=\"text-center \"><a routerLink=\"/detail/{{book._id}}\" ><img src=\"{{book.images.main}}\" alt=\"\" class=\"img-fluid imgforfenty\"></a></p>\n      <div class=\"quickview-title\">Quick View</div>\n      <a ><p class = \"text-center\"> {{book.title}} </p></a> \n        <p class = \"text-center priceforsalebook\"> $19 <button class=\"btn btn-success buttonaddtocart\">Add To Cart</button></p> \n        \n        </div>\n\n         <!-- My-containerproduct-view -->\n  <!-- <div class=\"product-view\">\n      <div class=\"close-btn\">X</div>\n      <div class=\"product-big-img\">\n        <img src=\"{{book.images.main}}\" alt=\" \">\n      </div>\n      <div class=\"product-big-desc\">\n        <h2> FENTY BEAUTY </h2>\n        <H5> Product code : 3316889</H5>\n        <h5> Brand: Fenty Beauty </h5>\n        <h6><a href=\"#\">1 review</a>  <a href=\"#\">View all review</a></h6>\n      <div class=\"price\">\n        <h4 class=\"oldprice\"><del>$39</del><sup>25% OFF</sup></h4>\n        <h4 class=\"newprice\"> $29 <abbr title=\"\">Free Shipping All Order From $60</abbr></h4>\n      </div>\n      <button class=\"buybutton btn btn-success\">Add to cart</button>\n      </div>\n</div>-->\n\n       \n      \n        <div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4 first-image sale-now-on   \">\n            \n            <p class=\"alertFlag\" >LIMITED-TIME OFFER</p>\n            <h4 >THE NATURE IS ALWAYS THE BEST</h4>\n            <h3 class =\"quote-fenty\" >NOW</h3>\n            <p class=\"zeroPricing\"> $<span class=\"salePrice\">29.90</span> <span class=\"origPrice\">$39.90</span> <span class=\"timeFrame\">UNTIL 5/3</span></p>\n          </div>\n     \n  \n      </div>\n    </div> \n    </div>\n  \n    <hr>\n"

/***/ }),

/***/ "./src/app/Home/hot-sale-product/hot-sale-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotSaleProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotSaleProductComponent = /** @class */ (function () {
    function HotSaleProductComponent(bookService) {
        this.bookService = bookService;
    }
    HotSaleProductComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    HotSaleProductComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(1, 3); });
    };
    HotSaleProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hot-sale-product',
            template: __webpack_require__("./src/app/Home/hot-sale-product/hot-sale-product.component.html"),
            styles: [__webpack_require__("./src/app/Home/hot-sale-product/hot-sale-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]])
    ], HotSaleProductComponent);
    return HotSaleProductComponent;
}());



/***/ }),

/***/ "./src/app/Home/product-sale/product-sale.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Home/product-sale/product-sale.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- product sale -->\n<div class=\"container\">\n  <div class=\"row\">\n\n  \n<div class=\"body-product container\">\n <section class=\"product\" *ngIf=\"books\"> \n   <div class=\"product-cart\" *ngFor='let book of books'>\n     <div class=\"tag\">\n       <span>Sale</span>\n       <span class=\"online-exclusive\">Online Exclusive</span>\n     </div>\n    \n     <div class=\"product-image\">\n       <a routerLink=\"/detail/{{book._id}}\"><img src=\"{{book.images.main}}\" alt=\"\"></a>\n       <div class=\"overlay\"><a class=\"btn btn-success buttonaddtocart\">Add to card</a></div>\n     </div>\n     <div class=\"product-info text-center\">\n       <h5><a href=\"#\">{{book.title}} </a></h5>\n       <p class=\"old-prices\">\n         <span class=\"prices\">\n            {{book.previousPrice}}d\n         </span>\n       </p>\n       <p class=\"special-prices\">\n         <span class=\"prices\">\n            {{book.sellingPrice}}d\n         </span>\n       </p>\n       </div>\n   </div>\n   \n </section>\n\n\n\n \n</div>\n</div>\n</div>\n<hr>\n\n\n"

/***/ }),

/***/ "./src/app/Home/product-sale/product-sale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductSaleComponent = /** @class */ (function () {
    function ProductSaleComponent(bookService) {
        this.bookService = bookService;
    }
    ProductSaleComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    ProductSaleComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(0, 10); });
    };
    ProductSaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-sale',
            template: __webpack_require__("./src/app/Home/product-sale/product-sale.component.html"),
            styles: [__webpack_require__("./src/app/Home/product-sale/product-sale.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]])
    ], ProductSaleComponent);
    return ProductSaleComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__ = __webpack_require__("./src/app/_helpers/jwt.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__["a"]; });



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let sessionUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small  {\n    margin: 20px auto;\n}\ntable{\n    margin: auto auto;\n}\n.btn-add{\n    margin-top: 10px;\n    background-color: #f4511e;\n    color: azure;\n    float: right;\n}\n.btn-add a {\n    text-decoration: none;\n    color: azure;\n}\n.btn-add a:hover {\n    text-decoration: none;\n    color: azure;\n}\n.btn-add:hover{\n    background-color: OrangeRed;\n    \n}\n.name{\n    color: #f4511e;\n}\n.user-info{\n    color: DimGray;\n}\n.text-cente {\n    text-align: justify;\n}"

/***/ }),

/***/ "./src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"uk-container-small text-cente\">\n      \n        <div *ngIf=\"userNew\"></div>\n       \n            \n            <div>\n              <table>\n                <tr>\n                  <td><h4 class=\"user-info \">User Infomation</h4></td>\n                </tr>\n                <tr >\n                  <td class=\"user-info\">Name:</td>\n                  <td> {{userNew.first}} {{userNew.last}}</td>\n                </tr>\n                <tr>\n                  <td class=\"user-info\">Phone:</td>\n                  <td>{{userNew.phone}}</td>\n                </tr>\n                <tr>\n                  <td class=\"user-info\">Email:</td>\n                  <td>{{userNew.email}}</td>\n                </tr>\n                <tr>\n                  <td></td>\n                    <td><button class=\"btn btn-add \"> <a (click)=\"logout()\" routerLink=\"/Home\" >Logout</a></button></td>\n                  </tr>\n              </table>\n              \n            </div>\n           \n        </div>\n    "

/***/ }),

/***/ "./src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_models_user__ = __webpack_require__("./src/app/view-models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_status_service__ = __webpack_require__("./src/app/login-status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountComponent = /** @class */ (function () {
    function AccountComponent(userService, authenticationService, loginStatusService) {
        var _this = this;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loginStatusService = loginStatusService;
        this.userNew = new __WEBPACK_IMPORTED_MODULE_2__view_models_user__["a" /* User */]();
        this.status = false;
        loginStatusService.status$.subscribe(function (status) {
            _this.status = status;
            if (status) {
                _this.getUser();
            }
            _this.userNew = JSON.parse(localStorage.getItem('currentUser'));
            console.log(_this.status);
            // this.getUser();
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.loginStatusService.setStatus(false);
        console.log('logout');
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUsers().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* first */])()).subscribe(function (_) {
            return _this.userNew = _.user;
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/account/account.component.html"),
            styles: [__webpack_require__("./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__login_status_service__["a" /* LoginStatusService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_homepage_homepage_component__ = __webpack_require__("./src/app/Home/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_loginpage_loginpage_component__ = __webpack_require__("./src/app/login/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_page_product_page_component__ = __webpack_require__("./src/app/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '', redirectTo: '/Home', pathMatch: 'full',
    },
    {
        path: 'Home',
        component: __WEBPACK_IMPORTED_MODULE_2__Home_homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'detail/:_id',
        component: __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_loginpage_loginpage_component__["a" /* LoginpageComponent */],
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'product-page',
        component: __WEBPACK_IMPORTED_MODULE_6__product_page_product_page_component__["a" /* ProductPageComponent */]
    },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_genre_service__ = __webpack_require__("./src/app/Home/genre.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(genreService) {
        this.genreService = genreService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getGenres();
    };
    AppComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_genre_service__["a" /* GenreService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_carcarouslide_carcarouslide_component__ = __webpack_require__("./src/app/Home/carcarouslide/carcarouslide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_hot_sale_product_hot_sale_product_component__ = __webpack_require__("./src/app/Home/hot-sale-product/hot-sale-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_product_sale_product_sale_component__ = __webpack_require__("./src/app/Home/product-sale/product-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_carouslide_two_carouslide_two_component__ = __webpack_require__("./src/app/Home/carouslide-two/carouslide-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_genre_service__ = __webpack_require__("./src/app/Home/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Home_banner_service__ = __webpack_require__("./src/app/Home/banner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__owl_carouslide_owl_carouslide_component__ = __webpack_require__("./src/app/owl-carouslide/owl-carouslide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_book_component_list_book_component_component__ = __webpack_require__("./src/app/list-book-component/list-book-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Home_homepage_homepage_component__ = __webpack_require__("./src/app/Home/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_loginpage_loginpage_component__ = __webpack_require__("./src/app/login/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_detail_description_description_component__ = __webpack_require__("./src/app/product-detail/description/description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_owl_carousel__ = __webpack_require__("./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__owl_2_owl_2_component__ = __webpack_require__("./src/app/owl-2/owl-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tab_tab_component__ = __webpack_require__("./src/app/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__banner02_banner02_component__ = __webpack_require__("./src/app/banner02/banner02.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__owl_3_owl_3_component__ = __webpack_require__("./src/app/owl-3/owl-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tab_02_tab_02_component__ = __webpack_require__("./src/app/tab-02/tab-02.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__intro_intro_component__ = __webpack_require__("./src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__product_page_product_page_component__ = __webpack_require__("./src/app/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ui_loading_spi_loading_spi_component__ = __webpack_require__("./src/app/ui/loading-spi/loading-spi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__string_filter_pipe__ = __webpack_require__("./src/app/string-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__helpers__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__login_status_service__ = __webpack_require__("./src/app/login-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// Import your library







 // <-- import the module




// login






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Home_carcarouslide_carcarouslide_component__["a" /* CarcarouslideComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Home_hot_sale_product_hot_sale_product_component__["a" /* HotSaleProductComponent */],
                __WEBPACK_IMPORTED_MODULE_5__Home_product_sale_product_sale_component__["a" /* ProductSaleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Home_carouslide_two_carouslide_two_component__["a" /* CarouslideTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__owl_carouslide_owl_carouslide_component__["a" /* OwlCarouslideComponent */],
                __WEBPACK_IMPORTED_MODULE_14__list_book_component_list_book_component_component__["a" /* ListBookComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Home_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_loginpage_loginpage_component__["a" /* LoginpageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_detail_description_description_component__["a" /* DescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__owl_2_owl_2_component__["a" /* Owl2Component */],
                __WEBPACK_IMPORTED_MODULE_23__tab_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_24__banner02_banner02_component__["a" /* Banner02Component */],
                __WEBPACK_IMPORTED_MODULE_25__owl_3_owl_3_component__["a" /* Owl3Component */],
                __WEBPACK_IMPORTED_MODULE_26__tab_02_tab_02_component__["a" /* Tab02Component */],
                __WEBPACK_IMPORTED_MODULE_27__intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_29__product_page_product_page_component__["a" /* ProductPageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__ui_loading_spi_loading_spi_component__["a" /* LoadingSpiComponent */],
                __WEBPACK_IMPORTED_MODULE_31__string_filter_pipe__["a" /* StringFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_38__account_account_component__["a" /* AccountComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_28_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__Home_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_11__Home_genre_service__["a" /* GenreService */],
                __WEBPACK_IMPORTED_MODULE_12__Home_banner_service__["a" /* BannerService */],
                __WEBPACK_IMPORTED_MODULE_33__auth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_34__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_36__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_37__login_status_service__["a" /* LoginStatusService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_35__helpers__["a" /* JwtInterceptor */],
                    multi: true
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentuser = localStorage.getItem('currentUser');
        //   let sessionuser = sessionStorage.getItem('currentUser');
        if (currentuser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = 'http://green-web-ecommerce.herokuapp.com/v1/users/login';
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.loginUrl, { email: email, password: password })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) {
            // login successful if there's a jwt token in the response
            if (res && res.token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: res.token }));
            }
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // navigate to login component
        // this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/banner02/banner02.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n    margin: 20px auto 20px;\n}\n\n@media all and (max-width: 400px){\n    .uk-container-small[_ngcontent-c9] {\n        margin: 20px auto 20px;\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n   }"

/***/ }),

/***/ "./src/app/banner02/banner02.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container-small\">\n\n  <a href=\"#\"> <img src=\"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Help_1112x223.jpg&#10;\" alt=\"Positive Thinking\" class=\"img-fluid\"></a>\n\n</div>"

/***/ }),

/***/ "./src/app/banner02/banner02.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner02Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Banner02Component = /** @class */ (function () {
    function Banner02Component(bookService) {
        this.bookService = bookService;
    }
    Banner02Component.prototype.ngOnInit = function () {
        this.getBooks();
    };
    Banner02Component.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }); //.slice(1,3));
    };
    Banner02Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner02',
            template: __webpack_require__("./src/app/banner02/banner02.component.html"),
            styles: [__webpack_require__("./src/app/banner02/banner02.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_book_service__["a" /* BookService */]])
    ], Banner02Component);
    return Banner02Component;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-align-right{\n    margin-top: -40px;\n    margin-right: 20px;\n}\n\n@media all and (max-width: 400px){\n    .find-us{\n        display: none;\n\n    }\n    .col-md-4 {\n        margin-left: 35px;\n    }\n    .uk-align-right{\n        margin-top: -25px;\n        margin-right: 20px;\n    }\n    \n}\n\n.uk-align-right{\n    background-color: #f4511e;\n}\n\n.uk-align-right:hover{\n    background-color: orangered;\n}\n\n.uk-totop {\n    color: white;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-intro></app-intro>\n<!-- to top -->\n<div class=\"uk-align-right\">\n<a href=\"#\" uk-totop uk-scroll ></a>\n</div>\n\n\n\n\n<!-- FOOTER -->\n<footer> \n    <div class=\"container-fluid \">\n      <div class=\"row text-center\">\n        <div class=\"col-md-4 col-sm-12 col-12\">\n          <h3>Contact Us  </h3>\n          <br>\n          <h4 >Our address and contact info here.</h4>\n  \n        </div>\n        <div class=\"col-md-4 col-sm-12 col-12 find-us\">\n          <h3>Find us</h3>\n          <a href=\"#\" class=\" footericon\"><i class=\"fab fa-facebook\"></i></a>\n          <a href=\"#\" class=\" footericon\"><i class=\"fab fa-twitter\"></i></a>\n          <a href=\"#\" class=\" footericon\"><i class=\"fab fa-google\"></i></a>\n          <a href=\"#\" class=\" footericon\"><i class=\"fab fa-linkedin\"></i></a>\n          <a href=\"#\" class=\" footericon\"><i class=\"fab fa-youtube\"></i></a>\n        </div>\n        <div class=\"col-md-4 col-sm-12 col-12\">\n            <h3>How to buy  </h3>\n        </div>\n      </div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "@media all and (max-width: 400px){\n    .free-shipping{\n        font-size: 9px;\n    }\n}\n.progress-bar {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    background: #f4511e;\n    -webkit-transition: width .6s ease;\n    transition: width .6s ease;\n}\n.genre-name a{\n    color: black;\n}\n.genre-name a:hover{\n    color: #f4511e;\n    text-decoration: none;\n\n    \n}\n@media all and (max-width: 400px){\n    .genre-name a{\n        color: #ccc;\n    }\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>index</title>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\" integrity=\"sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg\" crossorigin=\"anonymous\">\n    \n    <!-- Latest compiled and minified CSS -->\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\">\n\n    <!-- jQuery library -->\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\n    <!-- Popper JS -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n\n    <!-- Latest compiled JavaScript -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\"></script>\n \n    <!-- My javascript file -->\n   \n    \n  </head>\n\n<body>\n        <div class=\"header\">\n               \n                <div class=\"progress-container\">\n                  <div class=\"progress-bar\" id=\"myBar\"></div>\n                </div>  \n              </div>\n    <nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top \">\n       \n        <!-- Brand -->\n        <a routerLink=\"/Home\" class=\"navbar-brand\" >Logo</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-center\" id=\"collapsibleNavbar\">\n        <!-- Links -->\n        <ul class=\"navbar-nav\">\n           <!-- Dropdown -->\n          <li class=\"nav-item dropdown\">\n            <a routerLink=\"/listbook\"  class=\"nav-link dropdown-toggle\"  id=\"navbardrop\" data-toggle=\"dropdown\">\n              Menu\n            </a>\n            <div class=\"dropdown-menu mega-menu\">\n                <div class=\"container\">\n              <div class=\"row\">\n                    <div class=\"col-md-3 \" *ngFor='let genre of genres'>\n                            \n                            <p class=\"genre-name\"><a routerLink=\"/product-page\">{{genre.name}}</a></p>\n                            \n                        </div>\n                   \n              </div>\n            </div>\n            </div>\n          </li>\n          \n              <li class=\"nav-item shopping-cart\">\n                <a class=\"nav-link\" href=\"#\">Shopping Cart</a>\n              </li>\n              <li class=\"nav-item\">\n                    <a routerLink=\"/account\" class=\"nav-link\" >Login\n                     \n                    </a>\n                  </li>\n        </ul>\n    </div>\n      </nav>\n\n      <!-- free-shipping-container-->\n    <div class=\"container free-shipping-container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <span class=\"free-shipping \"> FREE SHIPPING FOR ALL ORDER ABOVE $60</span>\n            </div>\n        </div>\n    </div> "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_genre_service__ = __webpack_require__("./src/app/Home/genre.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(genreService) {
        this.genreService = genreService;
        this.showSpinner = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.user_email = JSON.parse(localStorage.getItem('currentUser')).email;
    };
    HeaderComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; });
        this.genreService.getGenres().subscribe(function () { return _this.showSpinner = false; });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_genre_service__["a" /* GenreService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n    margin: 20px auto 20px;\n  \n}\np {\n    color: black;\n}\na {\n    color: #333;\n}\na:hover {\n    text-decoration: none;\n    color: MediumOrchid;\n    \n}\n@media all and (max-width: 400px) {\n   \n    .uk-container-small {\n        display: none;\n    }\n\n    \n}"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container-small intro\">\n    <div class=\"uk-card uk-card-default uk-card-body text-center\">\n  <p>Welcome to Book Depository! We have more than 18 million titles and free delivery worldwide to \n      <a href=\"#\">over 100 countries</a>\n  </p>\n  <p>Looking for your new favourite book? Browse some of our top categories such as <a href=\"/category/2455/Childrens-Books\">Children's Books</a>, <a href=\"/category/333/Fiction\">Fiction</a>, <a href=\"/category/2633/Graphic-Novels-Anime-and-Manga\">Graphic Novels, Anime &amp; Manga</a>, <a href=\"/category/2858/Food-and-Drink\">Food &amp; Drink books</a>, <a href=\"/category/2942/Crafts-and-Hobbies\">Crafts &amp; Hobbies</a>, <a href=\"/category/2/Art-and-Photography\">Art &amp; Photography</a>, <a href=\"/category/213/Biography\">Biography</a>, and <a href=\"/category/2616/Crime-and-Thriller\">Crime &amp; Thriller</a>. Our editors have created lovely features for you to explore: <a href=\"/adult-colouring-books\">Adult colouring books</a>, <a href=\"/harry-potter\">Harry Potter</a>, <a href=\"/roald-dahl\">Roald Dahl</a>, <a href=\"/books-and-movies\">Books on screen</a>, <a href=\"/Man-Booker-Prize\">Man Booker Prize winners</a>, <a href=\"/lego\">LEGO</a>, <a href=\"/minecraft\">Minecraft</a> and more. </p>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/list-book-component/list-book-component.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-book-component/list-book-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"color: red;\">ListByGenreComponent hoat dong</p>\n<div *ngIf=\"genres\">\n    <div class=\"mb-2\">\n            <input type=\"text\" [(ngModel)]=\"name\">\n            <button (click)=\"addGenre()\">Add</button>\n            <button (click)=\"getGenres()\">Get List of Genres</button>\n    </div>\n    <br>\n    <ul>\n        <li *ngFor=\"let genre of genres\" class=\"mb-2\">\n            <button class=\"btn btn-sm\" (click)=\"deleteGenre(genresUrl/genre._id)\">Delete</button>\n            {{genre.name}}</li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/list-book-component/list-book-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBookComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_genre_service__ = __webpack_require__("./src/app/Home/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_genre__ = __webpack_require__("./src/app/Home/genre.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListBookComponentComponent = /** @class */ (function () {
    function ListBookComponentComponent(genreService) {
        this.genreService = genreService;
    }
    ListBookComponentComponent.prototype.ngOnInit = function () {
        this.getGenres();
    };
    ListBookComponentComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (z) { return _this.genres = z; });
    };
    ;
    ListBookComponentComponent.prototype.addGenre = function () {
        var _this = this;
        if (this.name.length > 0) {
            var genre = new __WEBPACK_IMPORTED_MODULE_2__Home_genre__["a" /* Genre */](this.name);
            this.genreService.addGenre(genre).subscribe(function (_) {
                _this.name = "";
                _this.genres.push(_);
            });
        }
    };
    ListBookComponentComponent.prototype.deleteGenre = function (genre) {
        this.genres = this.genres.filter(function (h) { return h !== genre; });
        this.genreService.deleteGenre(genre).subscribe();
    };
    ListBookComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-book-component',
            template: __webpack_require__("./src/app/list-book-component/list-book-component.component.html"),
            styles: [__webpack_require__("./src/app/list-book-component/list-book-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_genre_service__["a" /* GenreService */]])
    ], ListBookComponentComponent);
    return ListBookComponentComponent;
}());



/***/ }),

/***/ "./src/app/login-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);

var LoginStatusService = /** @class */ (function () {
    function LoginStatusService() {
        this.statusSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.status$ = this.statusSource.asObservable();
    }
    LoginStatusService.prototype.setStatus = function (status) {
        this.statusSource.next(status);
        console.log('setStatus service');
    };
    return LoginStatusService;
}());



/***/ }),

/***/ "./src/app/login/loginpage/loginpage.component.css":
/***/ (function(module, exports) {

module.exports = "/* login */\n.text-truncate{\n    position: relative;\n}\n.fas .fa-user{\n    position: absolute;\n}\n.fas .fa-unlock{\n    position: absolute;\n}\n.btn-add{\n    background-color: #f4511e;\n    color: azure;\n}\n.btn-add:hover{\n    background-color: OrangeRed;\n    \n}\n.name{\n    color: #f4511e;\n}\n.far .fa-eye{\n    font-weight: 900;\n}\n.nam{\n    margin-top: 10px;\n\n}"

/***/ }),

/***/ "./src/app/login/loginpage/loginpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n        <div class=\"row justify-content-center mt-5\">\n          <div class=\"col-md-6 col-lg-5\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <h3> Sign In </h3>\n               \n                <br>\n                <form [formGroup]=\"loginAdminForm\" (ngSubmit)=\"onSubmit()\">\n      \n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Email is required</div>\n                  </div>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fas fa-user\"></i>\n                      </span>\n                    </div>\n                    <input formControlName=\"username\" required type=\"text\" class=\"form-control text-truncate\" placeholder=\"Email\" autofocus>\n                  </div>\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  </div>\n                  <div class=\"input-group position-relative mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fas fa-unlock\"></i>\n                      </span>\n                    </div>\n                    <input formControlName=\"password\" required [type]=\"show\" class=\"form-control text-truncate\" placeholder=\"Password\">\n                    <div class=\"input-group-prepend bg-none border-0\">\n                      <span class=\"input-group-text\">\n                        <button (click)=\"onToggle()\" type=\"button\"  class=\"myText-link myIcon-inside text-muted\"><i *ngIf=\"!value\" class=\"far fa-eye\"></i><i *ngIf=\"value\" class=\"far fa-eye-slash\"></i></button>\n                      </span>\n                    </div>\n                    \n                  </div>\n                 \n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-add px-4\">Login</button>\n                      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                      />\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn text-danger px-0\">Forgot password?</button>\n                    </div>\n                    <div class=\"col-12 mt-3\">\n                      <div *ngIf=\"error\" class=\"text-danger\"><i class=\"icon-close\"></i> Email or Password is incorrect</div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center nam\">\n          <div class=\"col-12\">\n            <p class=\"mb-0 name\">a.dtran28.08.96@gmail.com</p>\n            <p class=\"mb-0 name\">8980501</p>\n          </div>\n          \n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/login/loginpage/loginpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(fb, route, router, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // For toggle Show or Hide password input
        this.show = "password";
        this.value = 0;
        //For Remember password
        this.remember = false;
    }
    LoginpageComponent.prototype.ngOnInit = function () {
        this.loginAdminForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        // this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginpageComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginAdminForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginpageComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginAdminForm.invalid) {
            return;
        }
        this.isLoggedIn();
        // this.onCheckRemember();
    };
    LoginpageComponent.prototype.onToggle = function () {
        if (this.value % 2 == 1) {
            this.show = "password";
            this.value = 0;
        }
        else {
            this.show = "text";
            this.value = 1;
        }
    };
    LoginpageComponent.prototype.onCheckRemember = function () {
        // console.log(this.remember);
        var sessionuser = sessionStorage.getItem('currentUser').toString();
        if (this.remember == false) {
            // window.onunload = function() {localStorage.removeItem('currentUser')};
        }
        else {
            localStorage.setItem('currentUser2', "" + sessionuser);
        }
    };
    LoginpageComponent.prototype.isLoggedIn = function () {
        var currentuser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentuser && currentuser.token) {
            var confirmPopup = window.confirm("You must logout before logging in as an another User\nDo you want to logout now?");
            console.log("Already logged in, User: " + currentuser.email + " | Token: " + currentuser.token);
            if (confirmPopup == true) {
                this.authService.logout();
                alert('You are logged out');
            }
            else { }
        }
        else {
            console.log('No user logged in, ready to log in now');
            this.onLogin();
        }
    };
    LoginpageComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* first */])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
        // if (sessionStorage.getItem('currentUser')) { 
        //   this.onCheckRemember(); 
        // } else {
        //   console.log('chua co sessionStorage');
        // }
    };
    LoginpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__("./src/app/login/loginpage/loginpage.component.html"),
            styles: [__webpack_require__("./src/app/login/loginpage/loginpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/owl-2/owl-2.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n    margin: 10px auto 0px;\n    padding: 10px 25px ;\n  }\n  \n  .slide-product {\n    height: 500px;\n    max-width: 100%;\n  }\n  \n  .product-info p {\n    white-space: nowrap;\n    font-size: 10pt;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    \n  }\n  \n  @media all and (max-width: 600px){\n    .slide-product {\n      max-width: 50%;\n      max-height: 350px;\n    }\n    .product-image img {\n      height: 200px;\n    }\n    .uk-card{\n      height: 350px;\n    }\n    \n  }\n  \n  @media all and (min-width: 920px){ \n    .uk-card{\n      height: 500px;\n    }\n  }\n  \n  .button {\n    border-radius: 4px;\n    background-color: #f4511e;\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 12pt;\n    \n    \n    -webkit-transition: all 0.5s;\n    \n    \n    transition: all 0.5s;\n    cursor: pointer;\n    \n  }\n  \n  .button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  \n  .button span:after {\n    content: '\\2295';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  \n  .button:hover span {\n    padding-right: 25px;\n  }\n  \n  .button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n  \n  .uk-card-title  {\n    margin-bottom: 10px;\n  }\n  \n  .savings-splat {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8rem;\n    padding: 0.3rem;\n    z-index: 1;\n    color: white;\n    font-weight: bold;\n    pointer-events: none;\n    font-size: 1.2rem;\n    text-align: left;\n}\n  \n  .uk-card-media-top {\n    position: relative;\n}\n  \n  .nav-link{\n  color: black;\n}\n  \n  .nav-link:hover {\n    color: #f4511e;\n}"

/***/ }),

/***/ "./src/app/owl-2/owl-2.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  nav-tab -->\n\n\n<ul class=\"nav nav-tabs justify-content-center\" role=\"tablist\">\n    <li role=\"presentation\" class=\" nav-item\">\n      <a href=\"#Best04\"\n      aria-controls=\"table1\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link active\"\n      >Children's Bestselling Books</a>\n    </li>\n    <li role=\"presentation\" class=\"nav-item\">\n     <a href=\"#Best05\"\n      aria-controls=\"table2\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link \"\n      >Bestselling Food and Drink Books</a>\n    </li>\n    \n    <li role=\"presentation\" class=\"nav-item\">\n      <a href=\"#Best06\"\n       aria-controls=\"table3\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link \"\n      >Bestselling Crime and Thriller</a>\n    </li>\n  </ul>\n\n  <app-loading-spi *ngIf = \"showSpinner\"></app-loading-spi>\n\n\n\n  <div class=\"tab-content\">\n\n  <!-- slider 1 -->\n\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane active\" id=\"Best04\" role=\"tabpanel\"   >\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m \" uk-grid>\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                       <a routerLink=\"/detail/{{book._id}}\"><img src=\"{{book.images.main}}\" alt=\"\"> </a> \n                        <div class=\"savings-splat\">12%<br>off</div>\n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><marquee  behavior=\"scroll\" direction=\"left\" scrollamount=\"3\"><a routerLink=\"/detail/{{book._id}}\">{{book.title}}</a> </marquee></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n\n\n<!-- slider 2 -->\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane \" id=\"Best05\" role=\"tabpanel\">\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <img src=\"{{book.images.main}}\" alt=\"\">\n                        \n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><marquee  behavior=\"scroll\" direction=\"left\" scrollamount=\"3\"><a href=\"\">{{book.title}}</a> </marquee></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n\n\n\n<!-- slider 3 -->\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane \" id=\"Best06\" role=\"tabpanel\">\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <img src=\"{{book.images.main}}\" alt=\"\">\n                        \n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><marquee  behavior=\"scroll\" direction=\"left\" scrollamount=\"3\"><a href=\"\">{{book.title}}</a> </marquee></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/owl-2/owl-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Owl2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Owl2Component = /** @class */ (function () {
    function Owl2Component(bookService) {
        this.bookService = bookService;
        this.showSpinner = true;
    }
    Owl2Component.prototype.ngOnInit = function () {
        this.getBooks();
    };
    Owl2Component.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }); //.slice(1,3));
        this.bookService.getBooks().subscribe(function () { return _this.showSpinner = false; });
    };
    Owl2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owl-2',
            template: __webpack_require__("./src/app/owl-2/owl-2.component.html"),
            styles: [__webpack_require__("./src/app/owl-2/owl-2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_book_service__["a" /* BookService */]])
    ], Owl2Component);
    return Owl2Component;
}());



/***/ }),

/***/ "./src/app/owl-3/owl-3.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n    margin: 10px auto 0px;\n    padding: 10px 25px ;\n  }\n  \n  .slide-product {\n    height: 500px;\n    max-width: 100%;\n  }\n  \n  .product-info p {\n    white-space: nowrap;\n    font-size: 10pt;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    \n  }\n  \n  @media all and (max-width: 600px){\n    .slide-product {\n      max-width: 50%;\n      max-height: 350px;\n    }\n    .product-image img {\n      height: 200px;\n    }\n    .uk-card{\n      height: 350px;\n    }\n    \n  }\n  \n  @media all and (min-width: 920px){ \n    .uk-card{\n      height: 500px;\n    }\n  }\n  \n  .button {\n    border-radius: 4px;\n    background-color: #f4511e;\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 12pt;\n    \n    \n    -webkit-transition: all 0.5s;\n    \n    \n    transition: all 0.5s;\n    cursor: pointer;\n    \n  }\n  \n  .button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  \n  .button span:after {\n    content: '\\2295';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  \n  .button:hover span {\n    padding-right: 25px;\n  }\n  \n  .button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n  \n  .uk-card-title  {\n    margin-bottom: 10px;\n  }\n  \n  .savings-splat {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8rem;\n    padding: 0.3rem;\n    z-index: 1;\n    color: white;\n    font-weight: bold;\n    pointer-events: none;\n    font-size: 1.2rem;\n    text-align: left;\n}\n  \n  .uk-card-media-top {\n    position: relative;\n}\n  \n  .nav-link{\n  color: black;\n}\n  \n  .nav-link:hover {\n    color: #f4511e;\n}"

/***/ }),

/***/ "./src/app/owl-3/owl-3.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  nav-tab -->\n\n\n<ul class=\"nav nav-tabs justify-content-center\" role=\"tablist\">\n    <li role=\"presentation\" class=\" nav-item\">\n      <a href=\"#Best08\"\n      aria-controls=\"table1\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link active\"\n      >Bestselling Crime and Thriller</a>\n    </li>\n    <li role=\"presentation\" class=\"nav-item\">\n     <a href=\"#Best09\"\n      aria-controls=\"table2\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link \"\n      >Bestselling Art and Photography books</a>\n    </li>\n    \n    <li role=\"presentation\" class=\"nav-item\">\n      <a href=\"#Best10\"\n       aria-controls=\"table3\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link \"\n      >New Releases and in the news</a>\n    </li>\n  </ul>\n\n\n\n\n\n  <div class=\"tab-content\">\n\n  <!-- slider 1 -->\n\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane active\" id=\"Best08\" role=\"tabpanel\"  >\n        <app-loading-spi *ngIf = \"showSpinner\"></app-loading-spi>\n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <a routerLink=\"/detail/{{book._id}}\"><img src=\"{{book.images.main}}\" alt=\"\" ></a>\n                        <div class=\"savings-splat\">12%<br>off</div>\n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><marquee  behavior=\"scroll\" direction=\"left\" scrollamount=\"3\"><a routerLink=\"/detail/{{book._id}}\">{{book.title}}</a> </marquee></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n\n\n<!-- slider 2 -->\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane \" id=\"Best09\" role=\"tabpanel\">\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <img src=\"{{book.images.main}}\" alt=\"\">\n                        \n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><marquee  behavior=\"scroll\" direction=\"left\" scrollamount=\"3\"><a href=\"\">{{book.title}}</a> </marquee></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n\n\n\n<!-- slider 3 -->\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane \" id=\"Best10\" role=\"tabpanel\">\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <img src=\"{{book.images.main}}\" alt=\"\">\n                        \n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><marquee  behavior=\"scroll\" direction=\"left\" scrollamount=\"3\"><a href=\"\">{{book.title}}</a> </marquee></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/owl-3/owl-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Owl3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Owl3Component = /** @class */ (function () {
    function Owl3Component(bookService) {
        this.bookService = bookService;
        this.showSpinner = true;
    }
    Owl3Component.prototype.ngOnInit = function () {
        this.getBooks();
    };
    Owl3Component.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }); //.slice(1,3));
        this.bookService.getBooks().subscribe(function () { return _this.showSpinner = false; });
    };
    Owl3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owl-3',
            template: __webpack_require__("./src/app/owl-3/owl-3.component.html"),
            styles: [__webpack_require__("./src/app/owl-3/owl-3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_book_service__["a" /* BookService */]])
    ], Owl3Component);
    return Owl3Component;
}());



/***/ }),

/***/ "./src/app/owl-carouslide/owl-carouslide.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n  margin: 10px auto 0px;\n  padding: 10px 25px ;\n}\n\n.slide-product {\n  height: 500px;\n  max-width: 100%;\n}\n\n.product-info p {\n  white-space: nowrap;\n  font-size: 10pt;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  \n}\n\n@media all and (max-width: 600px){\n  .slide-product {\n    max-width: 50%;\n    max-height: 350px;\n  }\n  .product-image img {\n    height: 200px;\n  }\n  .uk-card{\n    height: 350px;\n  }\n  \n}\n\n@media all and (min-width: 920px){ \n  .uk-card{\n    height: 500px;\n  }\n}\n\n.button {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 12pt;\n  \n  \n  -webkit-transition: all 0.5s;\n  \n  \n  transition: all 0.5s;\n  cursor: pointer;\n  \n}\n\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.button span:after {\n  content: '\\2295';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.button:hover span {\n  padding-right: 25px;\n}\n\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n.uk-card-title  {\n  margin-bottom: 10px;\n}\n\n.savings-splat {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8rem;\n  padding: 0.3rem;\n  z-index: 1;\n  color: white;\n  font-weight: bold;\n  pointer-events: none;\n  font-size: 1.2rem;\n  text-align: left;\n}\n\n.uk-card-media-top {\n  position: relative;\n}\n\n"

/***/ }),

/***/ "./src/app/owl-carouslide/owl-carouslide.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  nav-tab -->\n\n\n<ul class=\"nav nav-tabs justify-content-center\" role=\"tablist\">\n    <li role=\"presentation\" class=\" nav-item\">\n      <a href=\"#table1\"\n      aria-controls=\"table1\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link active text-primary\"\n      >New</a>\n    </li>\n    <li role=\"presentation\" class=\"nav-item\">\n     <a href=\"#table2\"\n      aria-controls=\"table2\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link text-danger \"\n      >Sale</a>\n    </li>\n    \n    <li role=\"presentation\" class=\"nav-item\">\n      <a href=\"#table3\"\n       aria-controls=\"table3\"\n      role=\"tab\"\n      data-toggle=\"tab\"\n      class=\"nav-link text-success\"\n      >New Arrival</a>\n    </li>\n  </ul>\n\n\n\n\n\n  <div class=\"tab-content\">\n\n  <!-- slider 1 -->\n\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane active\" id=\"table1\" role=\"tabpanel\"  >\n  \n   \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n            <app-loading-spi *ngIf = \"showSpinner\"></app-loading-spi>\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n                \n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                        \n                    \n                    <div class=\"uk-card-media-top product-image text-center\">\n                       <a routerLink=\"/detail/{{book._id}}\"> <img src=\"{{book.images.main}}\" alt=\"\"> </a>\n                        <div class=\"savings-splat\">12%<br>off</div>\n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><a routerLink=\"/detail/{{book._id}}\">{{book.title}}</a></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n\n\n<!-- slider 2 -->\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane \" id=\"table2\" role=\"tabpanel\">\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <img src=\"{{book.images.main}}\" alt=\"\">\n                        \n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><a href=\"\">{{book.title}}</a></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n\n\n\n<!-- slider 3 -->\n<div uk-slider=\"center: true, \" class=\"uk-container-small tab-pane \" id=\"table3\" role=\"tabpanel\">\n    \n    <div class=\"uk-position-relative uk-visible-toggle uk-light\">\n\n        <ul class=\"uk-slider-items  uk-child-width-1-3@s uk-child-width-1-4@m uk-grid\" >\n            <li  class=\"slide-product uk-box-shadow-small\" *ngFor='let book of books'>\n                <div class=\"uk-card uk-card-default uk-card-hover\">\n                    <div class=\"uk-card-media-top product-image text-center\">\n                        <img src=\"{{book.images.main}}\" alt=\"\">\n                        \n                    </div>\n                    <div class=\"uk-card-body product-info text-center\">\n                        <p class=\"uk-card-title uk-align-center\"><a href=\"\">{{book.title}}</a></p>\n                        <p class=\"old-prices\">\n                            <span class=\"prices\">\n                               {{book.previousPrice}}d\n                            </span>\n                          </p>\n                          <p class=\"special-prices\">\n                            <span class=\"prices\">\n                               {{book.sellingPrice}}d\n                            </span>\n                          </p>\n                          <p>\n                            \n                                <button class=\"button\"><span>Add </span></button>\n                            \n                          </p>\n                          \n                    </div>\n                    \n                </div>\n            </li>\n            \n        </ul>\n\n        <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n        <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n    </div>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/owl-carouslide/owl-carouslide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwlCarouslideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwlCarouslideComponent = /** @class */ (function () {
    function OwlCarouslideComponent(bookService) {
        this.bookService = bookService;
        this.showSpinner = true;
    }
    OwlCarouslideComponent.prototype.ngOnInit = function () {
        this.getBooks();
        //this.bookService.getBooks().subscribe(() => this.showSpinner = false)
    };
    OwlCarouslideComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }); //.slice(1,3));
        this.bookService.getBooks().subscribe(function () { return _this.showSpinner = false; });
    };
    OwlCarouslideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owl-carouslide',
            template: __webpack_require__("./src/app/owl-carouslide/owl-carouslide.component.html"),
            styles: [__webpack_require__("./src/app/owl-carouslide/owl-carouslide.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_book_service__["a" /* BookService */]])
    ], OwlCarouslideComponent);
    return OwlCarouslideComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/description/description.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n    margin:  auto auto;\n}\n@media all and (max-width: 400px) {\n.tab-content {\n    max-height: 400px;\n    margin-bottom: 10px;\n}\n}\n.sidebar-box {\n    max-height: 500px;\n    position: relative;\n    padding: 20px;\n    overflow: hidden;\n    height: 400px;\n    margin-bottom: 20px;\n}\n.sidebar-box .read-more { \n    position: absolute; \n    bottom: 0; left: 0;\n    width: 100%; \n    text-align: center; \n    margin: 0; \n    padding: 20px 0 20px 0; \n    \n    /* \"transparent\" only works here because == rgba(0,0,0,0) */ \n    background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(Gainsboro)); \n    background-image: linear-gradient(to bottom, white, Gainsboro);\n        background-image: linear-gradient(to bottom, white, Gainsboro);\n}\n.read-more .button {\n    color: #f4511e;\n    text-decoration: none;\n}\n.btn-price{\n    background-color: #f4511e;\n    color: azure;\n    border: none;\n    border-radius: 4px;\n}\n.btn-price:hover {\n    background-color: #FF4500\n}\n.text-dan{\n    color: Red;\n}\n.text-des{\n    color: DimGray;\n}\n.badge-primary {\n    background-color: #f4511e;\n}"

/***/ }),

/***/ "./src/app/product-detail/description/description.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<!-- product-detail -->\n<div class=\"uk-container-small\">   \n<div class=\"container\" id =\"product-section\">\n        <div class=\"row\">\n          <div class=\"col-md-6 img-description  img-fluid\">\n            <img src=\"{{book.images.main}}\" alt=\"img\" class=\"img-fluid\">\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-12 text-des\">\n                <h1>{{book.title}}</h1>\n              </div>\n             </div>\n             <div class=\"row\">\n                <div class=\"col-md-12\">\n                 <span class=\"badge badge-primary\">Vintage</span>\n                 <span class=\"monospaced\">{{book.sku}}</span>\n                </div>\n              </div><!-- end row -->\n              <div class=\"row\">\n                  <div class=\"col-md-12 text-des\">\n                   <div class=\"description\" [innerHTML]=\"book.shortDescription\">\n                        \n                   </div>\n                  </div>\n              </div><!-- end row -->\n              <div class=\"row\">\n                  <div class=\"col-md-5\">\n                   <span class=\"sr-only\">Four out of Five Stars</span>\n                   <span class=\"fas fa-star\" aria-hidden=\"true\"></span>\n                   <span class=\"fas fa-star\" aria-hidden=\"true\"></span>\n                   <span class=\"fas fa-star\" aria-hidden=\"true\"></span>\n                   <span class=\"fas fa-star\" aria-hidden=\"true\"></span>\n                   <span class=\"far fa-star\" aria-hidden=\"true\"></span>\n                   <span class=\"badge badge-success\">61</span>\n                  </div>\n                  \n              </div><!-- end row -->\n              <div class=\"row\">\n                  <div class=\"col-md-12 bottom-rule\">\n                   <h2 class=\"product-price text-dan\">{{book.sellingPrice}}d</h2>\n                  </div>\n                 </div><!-- end row -->\n                 <hr>\n  \n                 <div class=\"row add-to-cart\">\n                 <!-- <div class=\"col-md-4 product-qty\">\n                   <span class=\"btn btn-default btn-lg btn-qty\">\n                    <span class=\"fas fa-plus\" aria-hidden=\"true\"></span>\n                   </span>\n                   <input class=\"btn btn-default btn-lg btn-qty\" value=\"1\" />\n                   <span class=\"btn btn-default btn-lg btn-qty\">\n                    <span class=\"fas fa-minus\" aria-hidden=\"true\"></span>\n                   </span>\n                  </div>-->\n                  <div class=\"col-md-4\">\n                   <button class=\"btn btn-lg  btn-full-width btn-price \">\n                    Add to Cart\n                   </button>\n                  </div>\n                 </div><!-- end row -->\n                 \n                 <div class=\"row\">\n                  <div class=\"col-md-4 \">\n                   <span class=\"monospaced text-des\">In Stock</span>\n                  </div>\n                  \n                 </div><!-- end row -->\n                 <div class=\"row\">\n                  <div class=\"col-md-12 bottom-rule top-10\"></div>\n                 </div><!-- end row -->\n                 \n                 <hr>\n                 <!-- Nav tabs -->\n              <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\" nav-item\">\n                  <a href=\"#description\"\n                  aria-controls=\"description\"\n                  role=\"tab\"\n                  data-toggle=\"tab\"\n                  class=\"nav-link active\"\n                  >Description</a>\n                </li>\n                <li role=\"presentation\" class=\"nav-item\">\n                 <a href=\"#info\"\n                  aria-controls=\"info\"\n                  role=\"tab\"\n                  data-toggle=\"tab\"\n                  class=\"nav-link \"\n                  >Info</a>\n                </li>\n                \n                <li role=\"presentation\" class=\"nav-item\">\n                  <a href=\"#reviews\"\n                   aria-controls=\"reviews\"\n                  role=\"tab\"\n                  data-toggle=\"tab\"\n                  class=\"nav-link \"\n                  >Reviews</a>\n                </li>\n              </ul>\n              <!-- Tab panes -->\n              <div class=\"tab-content sidebar-box \">\n                  \n                  <div role=\"tabpanel\" class=\"tab-pane active text-des\" id=\"description\">\n                      <div class=\"top-10\" [innerHTML]=\"book.fullDescription\">\n                            \n                      </div>\n                      \n                      \n                     </div>\n                     <p class=\"read-more\"><a href=\"#\" class=\"button\">Read More</a></p>\n                <div role=\"tabpanel\" class=\"tab-pane top-10\" id=\"info\">\n                    <div class=\"top-10\" >\n                      <p> Tac Gia:\n                        {{book.author}}\n                      </p>\n                      <p> Nha Xuat Ban:\n                          {{book.publisher}}\n                      </p>\n                      <p> The Loai:\n                          {{book.genre.name}}\n                      </p>\n                      <p> Page:\n                          {{book.genre.pages}}\n                      </p>\n                      <p> Weight:\n                          {{book.genre.weight}}\n                      </p>\n                      </div>\n                </div>\n               \n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"reviews\">\n                  ...\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div> \n  "

/***/ }),

/***/ "./src/app/product-detail/description/description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_book__ = __webpack_require__("./src/app/Home/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__Home_book__["a" /* Book */])
    ], DescriptionComponent.prototype, "book", void 0);
    DescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-description',
            template: __webpack_require__("./src/app/product-detail/description/description.component.html"),
            styles: [__webpack_require__("./src/app/product-detail/description/description.component.css")]
        })
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-loading-spi *ngIf = \"showSpinner\"></app-loading-spi>\n<div *ngIf=\"book\"  >\n<app-description [book]=\"book\"></app-description>\n<app-owl-2></app-owl-2>\n<app-banner02></app-banner02>\n\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(location, route, bookService) {
        this.location = location;
        this.route = route;
        this.bookService = bookService;
        this.showSpinner = true;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getBook();
    };
    ProductDetailComponent.prototype.getBook = function () {
        var _this = this;
        var id;
        id = this.route.snapshot.paramMap.get('_id');
        this.bookService.getBook(id)
            .subscribe(function (book) { return _this.book = book; });
        this.bookService.getBook(id)
            .subscribe(function () { return _this.showSpinner = false; });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__Home_book_service__["a" /* BookService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-page/product-page.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small {\n    margin: 10px auto 0px;\n    padding: 10px 25px ;\n  }\n  \n  .slide-product {\n    height: 500px;\n    max-width: 100%;\n  }\n  \n  .product-info p {\n    \n    font-size: 10pt;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    \n  }\n  \n  .product-info .title-book{\n    line-height: 2 rem;\n    height: 4rem;\n    max-width: 17rem;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n  }\n  \n  @media all and (max-width: 600px){\n    .slide-product {\n      max-width: 50%;\n      max-height: 350px;\n    }\n    .product-image img {\n      height: 200px;\n    }\n    .uk-card{\n      height: 400px;\n    }\n    \n  }\n  \n  @media all and (min-width: 920px){ \n    .uk-card{\n      height: 500px;\n    }\n  }\n  \n  .button {\n    border-radius: 4px;\n    background-color: #f4511e;\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 12pt;\n    \n    \n    -webkit-transition: all 0.5s;\n    \n    \n    transition: all 0.5s;\n    cursor: pointer;\n    \n  }\n  \n  .button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  \n  .button span:after {\n    content: '\\2295';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  \n  .button:hover span {\n    padding-right: 25px;\n  }\n  \n  .button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n  \n  .uk-card-title  {\n    margin-bottom: 10px;\n  }\n  \n  .savings-splat {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8rem;\n    padding: 0.3rem;\n    z-index: 1;\n    color: white;\n    font-weight: bold;\n    pointer-events: none;\n    font-size: 1.2rem;\n    text-align: left;\n}\n  \n  .uk-card-media-top {\n    position: relative;\n}\n  \n  .savings-splat:before {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 6rem 6rem 0 0;\n    border-color: #f4511e transparent transparent transparent;\n    z-index: -1;\n}\n  \n  .nav-link{\n  color: black;\n}\n  \n  .nav-link:hover {\n    color: DeepSkyBlue;\n}\n  \n  @media all and (max-width: 400px){\n  .product{\n    margin-bottom: 35px;\n  }\n  .product-info .title-book{\n    font-size: 9pt;\n  }\n  .pag .control{\n    display: none;\n  }\n  .control-page {\n    margin-bottom: -60px;\n  }\n}\n  \n  @media all and (min-width: 920px){\n  .product{\n    margin-bottom: 10px;\n  }\n}\n  \n  .search:before{\n  font-family: 'Font Awesome\\ 5 Free';\n    content: \"\\f002\";\n    position: absolute;\n    font-size: 22px;\n    color: #555e60;\n    left: 28px;\n    padding-top: 4px;\n    font-weight: 900;\n}\n  \n  .search input {\n  height: 42px;\n  border-radius: 5px;\n  padding-left: 54px;\n}\n  \n  .pag input{\n  height: 42px;\n  border-radius: 5px;\n  padding-left: 10px;\n}\n  \n  /* Flashing */\n  \n  .product-image:hover img {\n\topacity: 1;\n\t-webkit-animation: flash 1.5s;\n\tanimation: flash 1.5s;\n}\n  \n  @-webkit-keyframes flash {\n\t0% {\n\t\topacity: .4;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n  \n  @keyframes flash {\n\t0% {\n\t\topacity: .4;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}"

/***/ }),

/***/ "./src/app/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- product container -->\n\n<div class=\"uk-container uk-container-small uk-align-center  \" >\n  <div class=\"row control-page \">\n    <div class=\"col-md-6\">\n        \n  <!-- filter -->\n    \n        <label class=\"controluk-flex-left uk-margin-medium-top search\" uk-margin>\n            <input type=\"text\" class=\"input\" placeholder=\"Seach for Book \" [(ngModel)]=\"filter\">\n        </label>\n    </div>\n      <div class=\"col-md-6 \">\n    <!-- pagination -->\n    <ul class=\"uk-pagination uk-flex-right uk-margin-medium-top pagination\" uk-margin>\n        <div class=\"column pag\">\n            <label class=\"control\">  Item per page\n                <input type=\"number\" class=\"input\" min=\"0\" [(ngModel)]=\"config.itemsPerPage\">\n            </label>\n        </div>\n    </ul>\n  </div>\n</div>\n    \n          \n      \n\n\n    <!-- end/pagination -->\n      <hr>\n  <div class=\"row\"> \n    <div class=\"col-6 col-sm-6 col-md-3   uk-text-center product  \"*ngFor='let book of books | stringFilter: filter | paginate: config' >\n        <app-loading-spi *ngIf = \"showSpinner\"></app-loading-spi>\n        <div class=\"uk-card  uk-card-default uk-card-hover  \" >\n           \n            <div class=\"uk-card-media-top product-image text-center\">\n               <a routerLink=\"/detail/{{book._id}}\"><img src=\"{{book.images.main}}\" alt=\"\"> </a> \n                <div class=\"savings-splat\">12%<br>off</div>\n            </div>\n            <div class=\"uk-card-body product-info text-center\">\n                <p class=\"uk-card-title uk-align-center title-book\"><a routerLink=\"/detail/{{book._id}}\">{{book.title}}</a> </p>\n                <p class=\"old-prices\">\n                    <span class=\"prices\">\n                       {{book.previousPrice}}d\n                    </span>\n                  </p>\n                  <p class=\"special-prices\">\n                    <span class=\"prices\">\n                       {{book.sellingPrice}}d\n                    </span>\n                  </p>\n                  <span>\n                    \n                        <button class=\"button\"><span>Add </span></button>\n                    \n                  </span>\n                  \n            </div>\n            \n        </div>\n      \n    </div>\n    </div>\n    <hr>\n    <!-- pagination -->\n    <ul class=\"uk-pagination uk-flex-right uk-margin-medium-top\" uk-margin>\n        <pagination-controls [id]=\"config.id\"\n                         \n                         [directionLinks]=\"directionLinks\"\n                         [autoHide]=\"autoHide\"\n                         [previousLabel]=\"labels.previousLabel\"\n                         [nextLabel]=\"labels.nextLabel\"\n                         [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n                         [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n                         [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\"\n                         (pageChange)=\"onPageChange($event)\"></pagination-controls>\n    </ul>\n    <!-- end/pagination -->\n</div>\n"

/***/ }),

/***/ "./src/app/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home_book_service__ = __webpack_require__("./src/app/Home/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(bookService) {
        this.bookService = bookService;
        this.page = 1;
        this.filter = '';
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'advanced',
            itemsPerPage: 12,
            currentPage: 1
        };
        this.labels = {
            previousLabel: 'Previous',
            nextLabel: 'Next',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
        this.popped = [];
        this.showSpinner = true;
    }
    ProductPageComponent.prototype.onPageChange = function (number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    };
    ProductPageComponent.prototype.pushItem = function () {
        var item = this.popped.pop() || 'A newly-created meal!';
        this.books.push(item);
    };
    ProductPageComponent.prototype.popItem = function () {
        this.popped.push(this.books.pop());
    };
    ProductPageComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    ProductPageComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }); //.slice(1,3));
        this.bookService.getBooks().subscribe(function () { return _this.showSpinner = false; });
    };
    ProductPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-page',
            template: __webpack_require__("./src/app/product-page/product-page.component.html"),
            styles: [__webpack_require__("./src/app/product-page/product-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Home_book_service__["a" /* BookService */]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog text-center\">\n    <div class=\"col-sm-8 main-section\">\n        <div class=\"modal-content\">\n          <div class=\"col-12 user-img\">\n              <img src=\"../../../assets/images/avatar.png\" alt=\"\">\n          </div>\n          <form action=\"\" class=\"col-12\">\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\">\n              </div>\n              <div class=\"form-group\">\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Phone\">\n              </div>\n              <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\">\n              </div>\n              <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Address\">\n              </div>\n              <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Password\">\n              </div>\n\n              <button type=\"submit\" class=\"btn buttonlogin\">Sign Up</button>\n              \n          </form>\n\n          <div class=\"col-12\">\n          \n                  <a routerLink = \"/login\" class=\"nav-link\">  Login</a>\n              \n          </div>\n          \n        </div> <!-- End off Modal Content-->\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://green-web-ecommerce.herokuapp.com/v1/users/';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl);
    };
    UserService.prototype.addUser = function (users) {
        return this.http.post(this.userUrl, users, httpOptions);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/string-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
var StringFilterPipe = /** @class */ (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (book, title, author, publisher) {
        if (!title && !author && !publisher) {
            return book;
        }
        else {
            if (title) {
                book = book.filter(function (x) { return x.title.toLowerCase().indexOf(title.toLowerCase()) != -1; });
            }
            if (author) {
                book = book.filter(function (x) { return x.author.toLowerCase().indexOf(author.toLowerCase()) != -1; });
            }
            if (publisher) {
                book = book.filter(function (x) { return x.publisher.toLowerCase().indexOf(publisher.toLowerCase()) != -1; });
            }
            return book;
        }
    };
    StringFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
}());



/***/ }),

/***/ "./src/app/tab-02/tab-02.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small{\n    margin: auto auto;\n}\na {\n    color: black;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    cursor: pointer;\n    \n    \n}\na:hover {\n    text-decoration: none;\n}\n.button {\n    \n    \n    border: none;\n  \n    text-align: center;\n   \n    \n   \n    -webkit-transition: all 0.5s;\n   \n    \n   \n    transition: all 0.5s;\n    cursor: pointer;\n    \n  }\n.button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n.button span:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n.button:hover span {\n    padding-right: 25px;\n  }\n.button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n@media all and (max-width: 400px){\n    .uk-grid-match>*>:not([class*=uk-width]) {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 58%;\n      -webkit-box-flex: 50%;\n          -ms-flex: 50%;\n              flex: 50%;\n      margin-left: 20px;\n      margin-right: 20px;\n  }\n   }"

/***/ }),

/***/ "./src/app/tab-02/tab-02.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container-small\">\n    <div class=\"uk-grid-medium uk-child-width-expand@s uk-text-center uk-grid-match \" uk-grid>\n        <div>\n            <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Author1</span> </button></a></div>\n        </div>\n        <div>\n            <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Author2</span> </button></a></div>\n        </div>\n        <div>\n            <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Author3</span> </button></a></div>\n        </div>\n        <div>\n            <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Author4</span> </button></a></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tab-02/tab-02.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab02Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tab02Component = /** @class */ (function () {
    function Tab02Component() {
    }
    Tab02Component.prototype.ngOnInit = function () {
    };
    Tab02Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tab-02',
            template: __webpack_require__("./src/app/tab-02/tab-02.component.html"),
            styles: [__webpack_require__("./src/app/tab-02/tab-02.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Tab02Component);
    return Tab02Component;
}());



/***/ }),

/***/ "./src/app/tab/tab.component.css":
/***/ (function(module, exports) {

module.exports = ".uk-container-small{\n    margin: auto auto;\n}\na {\n    color: black;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    cursor: pointer;\n    \n    \n}\na:hover {\n    text-decoration: none;\n}\n.button {\n    \n    \n    border: none;\n  \n    text-align: center;\n   \n    \n   \n    -webkit-transition: all 0.5s;\n   \n    \n   \n    transition: all 0.5s;\n    cursor: pointer;\n    \n  }\n.button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n.button span:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n.button:hover span {\n    padding-right: 25px;\n  }\n.button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n@media all and (max-width: 400px){\n  .uk-grid-match>*>:not([class*=uk-width]) {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 58%;\n    -webkit-box-flex: 50%;\n        -ms-flex: 50%;\n            flex: 50%;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n }"

/***/ }),

/***/ "./src/app/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"uk-container-small\">\n      <div class=\"uk-grid-medium uk-child-width-expand@s uk-text-center uk-grid-match \" uk-grid>\n          <div>\n              <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Harry Potter</span> </button></a></div>\n          </div>\n          <div>\n              <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Lego</span> </button></a></div>\n          </div>\n          <div>\n              <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Fantasy Books</span> </button></a></div>\n          </div>\n          <div>\n              <div class=\"uk-card uk-card-default uk-card-body\"><a href=\"#\"><button class=\"button\"> <span> Classics Books</span> </button></a></div>\n          </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__("./src/app/tab/tab.component.html"),
            styles: [__webpack_require__("./src/app/tab/tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/ui/loading-spi/loading-spi.component.css":
/***/ (function(module, exports) {

module.exports = ".spinner {\n    width: 40px;\n    height: 40px;\n    background-color: #f4511e;\n  \n    margin: 100px auto;\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\n  }\n  \n  @-webkit-keyframes sk-rotateplane {\n    0% { -webkit-transform: perspective(120px) }\n    50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n  }\n  \n  @keyframes sk-rotateplane {\n    0% { \n      transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \n    } 50% { \n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \n    } 100% { \n      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n  }"

/***/ }),

/***/ "./src/app/ui/loading-spi/loading-spi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\"></div>\n"

/***/ }),

/***/ "./src/app/ui/loading-spi/loading-spi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpiComponent = /** @class */ (function () {
    function LoadingSpiComponent() {
    }
    LoadingSpiComponent.prototype.ngOnInit = function () {
    };
    LoadingSpiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading-spi',
            template: __webpack_require__("./src/app/ui/loading-spi/loading-spi.component.html"),
            styles: [__webpack_require__("./src/app/ui/loading-spi/loading-spi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpiComponent);
    return LoadingSpiComponent;
}());



/***/ }),

/***/ "./src/app/view-models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map