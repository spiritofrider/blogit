import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  ref: any;

  constructor(private auth: AuthService,
              private postService: PostService,
              public snackBar: MatSnackBar,
              private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createPost(){
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      pubDate: new Date(),
      title: this.title
    }
    this.postService.create(data)
    this.title = "";
    this.content = "";
    this.image = null;
    this.snackBar.open('Your Post has been Published!','Close',{
      duration: 3000
    })
    
  }

  uploadImage(event){
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    if(file.type.split('/')[0] !== 'image'){
      this.snackBar.open('Please Upload an Image!','Close',{
        duration: 3000
      })
    }else{
      const task = this.storage.upload(path, file);
      const fileRef = this.storage.ref(path);
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url=>this.image = url);
        })
      )
      .subscribe();
      this.uploadPercent = task.percentageChanges();
      // console.log(this.downloadURL);
    }
  }

}
