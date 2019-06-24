import { Component, OnInit, HostListener } from '@angular/core';

import { calZoom } from '@core/utils/chess.utils';

@Component({
  selector: 'app-most-successfull-games',
  templateUrl: './most-successfull-games.component.html',
  styleUrls: ['./most-successfull-games.component.scss']
})
export class MostSuccessfullGamesComponent implements OnInit {

  zoom: number = calZoom(112);
  games = [{
    fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3',
    orientation: 'white',
    title: '1)Spanish-game'
  }, {
    fen: 'r1b1kbnr/pppp1ppp/2n2q2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4',
    orientation: 'white',
    title: '2)Scotch-game'
  }, {
    fen: 'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4',
    orientation: 'black',
    title: '3)Grunfeld defence'
  }];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.zoom = calZoom(112);
  }
}
