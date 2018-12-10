var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ResultsPage } from '../../pages/results/results';
import { NgForm } from '@angular/forms';
import { UserResultsProvider } from '../../providers/user-results/user-results';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams, UserResult) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserResult = UserResult;
        this.userResults = new Array();
        this.userResult = {
            location: '',
            ageRange: '',
            priceRange: '',
            timeRange: '',
            people: '',
            mood: '',
        };
        this.submitted = false;
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionsPage');
    };
    //Method that takes you to the slide after the current slide
    QuestionsPage.prototype.goToSlide = function (i) {
        this.slides.slideTo(i + 1, 500);
    };
    QuestionsPage.prototype.goToResults = function () {
        this.navCtrl.push(ResultsPage);
    };
    QuestionsPage.prototype.onSubmit = function () {
        this.submitted = true;
        this.UserResult.addtoUserResults(this.questionsForm);
        this.UserResult.matchResults();
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], QuestionsPage.prototype, "slides", void 0);
    __decorate([
        ViewChild('f'),
        __metadata("design:type", NgForm)
    ], QuestionsPage.prototype, "questionsForm", void 0);
    QuestionsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-questions',
            templateUrl: 'questions.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, UserResultsProvider])
    ], QuestionsPage);
    return QuestionsPage;
}());
export { QuestionsPage };
//# sourceMappingURL=questions.js.map