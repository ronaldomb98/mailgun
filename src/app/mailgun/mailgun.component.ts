import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";
@Component({
  selector: 'app-mailgun',
  templateUrl: './mailgun.component.html',
  styleUrls: ['./mailgun.component.css']
})
export class MailgunComponent implements OnInit {
  recipient: string = 'brmojicab@ut.edu.co';
  subject: string = 'Asunto';
  mailgunUrl: string = 'sandboxd6560779f64a4a86b1d678a4a0fc5f2a.mailgun.org';
  apiKey: string = 'key-9b2cbbc43add19e20efe938bf80d50ed';
  message: string = 'este es el mensaje';
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  public send() {
        if(this.recipient && this.subject && this.message) {
            let headers = new Headers(
                {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + this.apiKey
                }
            );
            let options = new RequestOptions({ headers: headers });
            let body = "from=test@example.com&to=" + this.recipient + "&subject=" + this.subject + "&text=" + this.message;
            this.http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", body, options)
                .map(result => result.json())
                .do(result => console.log("RESULT: ", JSON.stringify(result)))
                .subscribe(result => {
                    console.log("SENT!");
                    this.recipient = "";
                    this.subject = "";
                    this.message = "";
                }, error => {
                    console.log(error);
                });
        }
    }
}
