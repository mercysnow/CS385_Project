import { Component, ViewChild, OnInit, Renderer, Input, ElementRef } from '@angular/core';
import { UserResultsProvider } from '../../providers/user-results/user-results';
import { Result } from '../../app/Result';



@Component({
  selector: 'accordian',
  templateUrl: 'accordian.html'
})
export class AccordianComponent implements OnInit {
 @Input() result:Result;

  @Input() title:string;
  @Input() content: string;
  @Input() image: string;
   @Input() location: string;
  @ViewChild("cc") cardContent: ElementRef; //This fetches the content of the card 
  accordianExpanded = false; //Initially set card to be not expanded
  //This is the input given from the results page
 


  constructor(public renderer: Renderer, public userResultsProvider:UserResultsProvider) {
  
  }
   ngOnInit(){
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

   toggleAccordian(){
      if(this.accordianExpanded){
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
      }else{
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "2000px");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

      }
      this.accordianExpanded = !this.accordianExpanded;
    }
  	
 addToSaved(resultObj:Result){
  	this.userResultsProvider.addUserSavedResult(resultObj);
  }

}
