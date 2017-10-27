import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    QuillEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
