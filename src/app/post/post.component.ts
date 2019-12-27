import {
    Component,
    ElementRef,
    Input,
    ContentChild,
    OnInit,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter
} from '@angular/core'
import {Post} from "../app.component";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy{

    @Input() post: Post
    @Output() onRemove = new EventEmitter<number>()
    @ContentChild('info') infoRef:ElementRef

    constructor() {
        console.log('constructor')
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes)
    }

    ngOnInit() {
        console.log('ngOnInit')
        // console.log(this.infoRef.nativeElement)
    }

    ngDoCheck(): void {
        console.log('ngDoCheck')
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit')
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked')
    }
    ngAfterViewInit(): void {
        console.log('ngAfterViewInit')
    }
    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked')
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy')
    }

    removePost(){
        this.onRemove.emit(this.post.id)
    }

}
