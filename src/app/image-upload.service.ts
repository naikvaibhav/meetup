import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ImageUploadService {
  // private url = "http://localhost:3000/api/v1";
  private url = "http://apimeetup.angularweb.tech/api/v1";

  constructor(private _http: HttpClient) {}

  imageUpload(imageForm: FormData) {
    // console.log("image uploading", imageForm);
    return this._http.post(`${this.url}/users/upload`, imageForm);
  }
}
