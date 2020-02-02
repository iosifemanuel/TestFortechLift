import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LiftApp';

  etaj = [0, 1, 2, 3, 4, 5, 6];
  etajLiftInitial = 0;
  liftAPos = 0;
  liftBPos = 6;
  liftAName = 'A';
  liftBName = 'B';
  liftToComeName = 'A';
  liftAChosen = false;
  liftBChosen = false;

  callLift(etajLiftInitial, liftAPos, liftBPos) {
    etajLiftInitial = parseInt((<HTMLInputElement>document.getElementById("etajInput")).value);
    console.log("etajLiftCall " + etajLiftInitial);
    if (etajLiftInitial < 0 || etajLiftInitial > 6) {
      alert("Etajul cerut nu este disponibil.Alegeti de la 0-6!");
    } else {
      switch (etajLiftInitial) {
        case etajLiftInitial:
          return this.chooseLift(etajLiftInitial, liftAPos, liftBPos);
          break;
        default:
          return "please press a button";
      }

      console.log("called -----------------------");
      console.log("-----------------------");
    }

  }

  chooseLift(etajLiftInitial, liftAPos, liftBPos) {
    // this.etajLiftInitial = parseInt((<HTMLInputElement>document.getElementById("etajInput")).value);

    console.log("choose from lifts");
    console.log("etajLiftChoose " + etajLiftInitial);
    console.log("liftAPosChoose " + this.liftAPos);
    console.log("liftBPosChoose " + this.liftBPos);

    if (Math.abs(this.liftAPos - etajLiftInitial) <= Math.abs(this.liftBPos - etajLiftInitial) && this.liftAPos <= this.liftBPos) {
      console.log("lift a Chosen");
      this.liftAPos = etajLiftInitial;
      this.liftToComeName = this.liftAName;
      this.liftAChosen = true;
      this.liftBChosen = false;
      this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    } else {
      console.log("lift b Chosen");
      this.liftBPos = etajLiftInitial;
      this.liftToComeName = this.liftBName;
      this.liftBChosen = true;
      this.liftAChosen = false;
      this.updateLift(etajLiftInitial, liftAPos, liftBPos);

    }
    alert("Va multumim.Soseste liftul: " + this.liftToComeName + " !");
    switch (etajLiftInitial) {
      case 0:
        this.goToZero(etajLiftInitial, liftAPos, liftBPos);
        break;
      case 1:
        this.goToFirst(etajLiftInitial, liftAPos, liftBPos);
        break;
      case 2:
        this.goToSecond(etajLiftInitial, liftAPos, liftBPos)
        break;
      case 3:
        this.goToThird(etajLiftInitial, liftAPos, liftBPos)
        break;
      case 4:
        this.goToFourth(etajLiftInitial, liftAPos, liftBPos)
        break;
      case 5:
        this.goToFifth(etajLiftInitial, liftAPos, liftBPos)
        break;
      case 6:
        this.goToSixth(etajLiftInitial, liftAPos, liftBPos)
        break;

        
    }
    console.log("etajLiftChoose " + etajLiftInitial);
    console.log("liftAPosChoose " + this.liftAPos);
    console.log("liftBPosChoose " + this.liftBPos);
    console.log("chosen from lifts");
    console.log("---------------------------");
  }

  updateLift(etajLiftInitial, liftAPos, liftBPos) {
    //etajLiftInitial = parseInt((<HTMLInputElement>document.getElementById("etajInput")).value);
    console.log(etajLiftInitial);
    if (this.liftAChosen == true) {

      this.liftAPos = etajLiftInitial;
      console.log("etajLiftChoose " + etajLiftInitial);
      console.log("a is true " + this.liftAPos);
      //this.liftAChosen = false;
      console.log(this.liftAChosen);

    } else {

      this.liftBPos = etajLiftInitial;
      console.log("etajLiftChoose " + etajLiftInitial);
      console.log("b is True " + this.liftBPos);
      //this.liftBChosen = false;

    }
    console.log("------------------------------")
  }

  goToZero(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 0");
    etajLiftInitial = 0;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'yellow';
    document.getElementById("labelFirst").style.background = 'white';
    document.getElementById("labelSecond").style.background = 'white';
    document.getElementById("labelThird").style.background = 'white';
    document.getElementById("labelFourth").style.background = 'white';
    document.getElementById("labelFifth").style.background = 'white';
    document.getElementById("labelSixth").style.background = 'white';
  }

  goToFirst(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 1");
    etajLiftInitial = 1;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'white';
    document.getElementById("labelFirst").style.background = 'yellow';
    document.getElementById("labelSecond").style.background = 'white';
    document.getElementById("labelThird").style.background = 'white';
    document.getElementById("labelFourth").style.background = 'white';
    document.getElementById("labelFifth").style.background = 'white';
    document.getElementById("labelSixth").style.background = 'white';
  }

  goToSecond(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 2");
    etajLiftInitial = 2;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'white';
    document.getElementById("labelFirst").style.background = 'white';
    document.getElementById("labelSecond").style.background = 'yellow';
    document.getElementById("labelThird").style.background = 'white';
    document.getElementById("labelFourth").style.background = 'white';
    document.getElementById("labelFifth").style.background = 'white';
    document.getElementById("labelSixth").style.background = 'white';
  }

  goToThird(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 3");
    etajLiftInitial = 3;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'white';
    document.getElementById("labelFirst").style.background = 'white';
    document.getElementById("labelSecond").style.background = 'white';
    document.getElementById("labelThird").style.background = 'yellow';
    document.getElementById("labelFourth").style.background = 'white';
    document.getElementById("labelFifth").style.background = 'white';
    document.getElementById("labelSixth").style.background = 'white';
  }

  goToFourth(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 4");
    etajLiftInitial = 4;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'white';
    document.getElementById("labelFirst").style.background = 'white';
    document.getElementById("labelSecond").style.background = 'white';
    document.getElementById("labelThird").style.background = 'white';
    document.getElementById("labelFourth").style.background = 'yellow';
    document.getElementById("labelFifth").style.background = 'white';
    document.getElementById("labelSixth").style.background = 'white';
  }

  goToFifth(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 5");
    etajLiftInitial = 5;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'white';
    document.getElementById("labelFirst").style.background = 'white';
    document.getElementById("labelSecond").style.background = 'white';
    document.getElementById("labelThird").style.background = 'white';
    document.getElementById("labelFourth").style.background = 'white';
    document.getElementById("labelFifth").style.background = 'yellow';
    document.getElementById("labelSixth").style.background = 'white';
  }

  goToSixth(etajLiftInitial, liftAPos, liftBPos) {
    console.log("going to 6");
    etajLiftInitial = 6;
    this.updateLift(etajLiftInitial, liftAPos, liftBPos);
    document.getElementById("labelZero").style.background = 'white';
    document.getElementById("labelFirst").style.background = 'white';
    document.getElementById("labelSecond").style.background = 'white';
    document.getElementById("labelThird").style.background = 'white';
    document.getElementById("labelFourth").style.background = 'white';
    document.getElementById("labelFifth").style.background = 'white';
    document.getElementById("labelSixth").style.background = 'yellow';
  }
}