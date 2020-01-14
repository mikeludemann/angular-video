import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'video-block',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() class: string;
  @Input() id: string;
  @Input() autoplay: boolean;
  @Input() controls: boolean;
  @Input() preload: boolean;
  @Input() poster: boolean;
  @Input() muted: boolean;
  @Input() loop: boolean;
  @Input() crossorigin: boolean;
  @Input() notsupportedtext: string;
  @Input() mpeg: string;
  @Input() mp4: string;
  @Input() webm: string;
  @Input() ogg: string;
  @Input() wav: string;
  @Input() quicktime: string;
  @Input() x_msvideo: string;
  @Input() m4v: string;
  @Input() rtf: string;
  @Input() track: boolean;
  @Input() tracksrc: string;
  @Input() trackkind: string;
  @Input() tracksrclang : string;
  @Input() tracklabel: string;

  @ViewChild('video') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var video = document.createElement("video");

    video.setAttribute("id", this.id);

    if (this.autoplay == true) {

      video.setAttribute("autoplay", "");

    } else {

      video.removeAttribute("autoplay");

    }

    if (this.controls == true) {

      video.setAttribute("controls", "");

    } else {

      video.removeAttribute("controls");

    }

    if (this.preload == false || this.preload == true) {

      video.setAttribute("preload", String(this.preload));

    } else {

      video.removeAttribute("preload");

    }

    if (this.poster == true || this.poster == false) {

      video.setAttribute("poster", String(this.poster));

    } else {

      video.removeAttribute("poster");

    }

    if (this.muted == true) {

      video.setAttribute("muted", "");

    } else {

      video.removeAttribute("muted");

    }

    if (this.loop == true) {

      video.setAttribute("loop", "");

    } else {

      video.removeAttribute("loop");

    }

    if (this.crossorigin == true || this.crossorigin == false) {

      video.setAttribute("crossOrigin", String(this.crossorigin));

    } else {

      video.removeAttribute("crossOrigin");

    }

    if (this.notsupportedtext != null || this.notsupportedtext != "") {

      var text = document.createTextNode(this.notsupportedtext); 
      video.appendChild(text);

    } 
    
    if (this.mpeg != "" || this.mpeg != null) {

      var text = document.createTextNode("<source src=" + this.mpeg + " type='video/mpeg'>");
      video.appendChild(text);

    } 

    if (this.mp4 != "" || this.mp4 != null) {

      var text = document.createTextNode("<source src=" + this.mp4 + " type='video/mp4'>");
      video.appendChild(text);

    } 

    if (this.webm != "" || this.webm != null) {

      var text = document.createTextNode("<source src=" + this.webm + " type='video/webm'>");
      video.appendChild(text);

    } 

    if (this.ogg != "" || this.ogg != null) {

      var text = document.createTextNode("<source src=" + this.ogg + " type='video/ogg'>");
      video.appendChild(text);

    } 

    if (this.wav != "" || this.wav != null) {

      var text = document.createTextNode("<source src=" + this.wav + " type='video/wav'>");
      video.appendChild(text);

    }

    if (this.quicktime != "" || this.quicktime != null) {

      var text = document.createTextNode("<source src=" + this.quicktime + " type='video/quicktime'>");
      video.appendChild(text);

    } 

    if (this.x_msvideo != "" || this.x_msvideo != null) {

      var text = document.createTextNode("<source src=" + this.x_msvideo + " type='video/x_msvideo'>");
      video.appendChild(text);

    } 

    if (this.m4v != "" || this.m4v != null) {

      var text = document.createTextNode("<source src=" + this.m4v + " type='application/octet-stream'>");
      video.appendChild(text);

    } 

    if (this.rtf != "" || this.rtf != null) {

      var text = document.createTextNode("<source src=" + this.rtf + " type='application/rtf'>");
      video.appendChild(text);

    } 

    if (this.track == true) {

      var text = document.createTextNode("<track src=" + this.tracksrc + " kind=" + this.trackkind + " srclang=" + this.tracksrclang + " label=" + this.tracklabel + ">");
      video.appendChild(text);

    } 

    this.el.nativeElement.appendChild(video);

  }

}
