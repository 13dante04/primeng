import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'sticky-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>A toast disappears after the time defined by the <i>life</i> option, set <i>sticky</i> option <i>true</i> on the message to override this and not hide the toast automatically.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast></p-toast>
            <div class="flex flex-wrap gap-2">
                <button type="button" pButton pRipple (click)="show()" class="p-button-success" label="Show Sticky"></button>
                <button type="button" pButton pRipple (click)="clear()" label="Clear"></button>
            </div>
        </div>
        <app-code [code]="code" selector="toast-sticky-demo"></app-code>
    </section>`,
    providers: [MessageService]
})
export class StickyDoc {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    }

    clear() {
        this.messageService.clear();
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<div class="flex flex-wrap gap-2">
    <button type="button" pButton pRipple (click)="show()" class="p-button-success" label="Show Sticky"></button>
    <button type="button" pButton pRipple (click)="clear()" label="Clear"></button>
</div>`,
        html: `
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <div class="flex flex-wrap gap-2">
        <button type="button" pButton pRipple (click)="show()" class="p-button-success" label="Show Sticky"></button>
        <button type="button" pButton pRipple (click)="clear()" label="Clear"></button>
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-sticky-demo',
    templateUrl: './toast-sticky-demo.html',
    providers: [MessageService]
})
export class ToastStickyDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    }

    clear() {
        this.messageService.clear();
    }
}`
    };
}