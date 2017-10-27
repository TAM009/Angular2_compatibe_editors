import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LMarkdownEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
